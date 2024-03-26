import _axios from "axios";
import {
    throwApiError,
    throwNetworkError,
    throwServerError,
} from "../../shared/errors";
import {baseUrl} from "./baseUrl";


const axios = _axios.create({
    timeout: Number(process.env.NEXT_PUBLIC_API_DEFAULT_TIMEOUT),
    baseURL:baseUrl
});

axios.interceptors.request.use(
    (config) => {
        console.debug(`API call: ${config.url}`);
        return config;
    },
    (error) => {
        console.error("Error in API call", error);
        return Promise.reject(error);
    }
);

export default axios;


export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    SERVER_ERROR: 500,
    NOT_ACCEPTABLE: 406,
    UNSUPPORTED_MEDIA_TYPE: 415,
    PRECONDITION_FAILED: 412,
    REQUEST_TIMEOUT: 408,
};

const REQUEST_STATUS = {
    GET: HTTP_STATUS.OK,
    PUT: HTTP_STATUS.OK,
    PATCH: HTTP_STATUS.OK,
    POST: HTTP_STATUS.CREATED,
    DELETE: HTTP_STATUS.NO_CONTENT,
};


const getErrorMessage = (e) => {
    const code = e.code || e.request?.status || e.response?.status;
    if (code === "ECONNREFUSED" || code === "ECONNABORTED")
        return "Failed to advance to the next step due to network error";

    const data = e.response?.data;
    if (data) {
        if (typeof data === "string") return data;
        if (typeof data.message === "string") return data.message;
    }
    return e.toString();
};

const bearerToken = async ({ req }) => {
    const {token} = req;

    return token
        ? {
            Authorization: `Bearer ${token}`,
        }
        : {};
};


/**
 *
 * @param req
 * @param baseURL
 * @param url
 * @param params
 * @returns {Promise<{data: any, revision: string}|{error: {code: number, title: string, message: string}}>}
 */
export const getServerApi = async ({ req, url, params = {} }) => {
    let res;

    try {
        res = await axios({
            method: "GET",
            url,
            params,
            headers: { ...(await bearerToken({ req })) },
        });
    } catch (e) {
        let error = {
            title: e.type || "Sorry!",
            code: e.code || e.response?.data?.status || e.response?.status || 0,
            message: getErrorMessage(e),
            api: `${baseUrl}  ${e?.request?.path}`,
        };
        console.error(e);

        return { error };
    }

    if (res.status !== REQUEST_STATUS.GET) {
        let error = {
            title: "Sorry!",
            code: res.status,
            message: `Error in calling server API, HTTP status: ${res.statusText}`,
            api: `${baseUrl}/${url}`,
    };
        return { error };
    }

    // NOTE: axios provides all header names in lower case
    return { data: res.data, revision: res.headers["etag"] };
};

/**
 *
 * @param req
 * @param url
 * @param method
 * @param params
 * @param data
 * @param headers
 * @param isTimeoutExtended
 * @param noHeader
 * @param ignoreStatusCheck
 * @param unmodifiedErrorResponse
 * @returns {Promise<{data: any, revision: string}|{error: ({code: number, title: string, message: string}|{code: *, title: (string), message: (string|string)})}|{error: {code: number, title: string, message: string}}>}
 */
export const requestApi = async ({
                                     req,
                                     url,
                                     method = "GET",
                                     data = {},
                                     headers = {},
                                     params = {},
                                     isTimeoutExtended = false,
                                     noHeader,
                                     ignoreStatusCheck,
                                     unmodifiedErrorResponse,
                                 }) => {
    let res;
    try {
        const requestObj = {
            method,
            url,
            data,
            params,
            headers: noHeader
                ? null
                : {
                    ...headers,
                    ...(await bearerToken({ req })),
                },
        };
        if (isTimeoutExtended) requestObj.timeout = 60 * 60 * 1000;
        res = await axios(requestObj);
    } catch (e) {
        console.log("Got Error in API call");
        console.dir(e);

        if (unmodifiedErrorResponse) return { error: e.response };

        let error;
        if (e.response) {
            let { status } = e.response;
            error = {
                title: "Sorry!",
                code: status,
                message:
                    status === HTTP_STATUS.PRECONDITION_FAILED
                        ? "Data was updated by another user"
                        : getErrorMessage(e),
            };
        } else {
            error = {
                title: "Sorry!",
                code: e.code || 0,
                message: getErrorMessage(e),
            };
        }

        return { error };
    }

    if (!ignoreStatusCheck && res.status !== REQUEST_STATUS[method]) {
        let error = {
            title: "Sorry!",
            code: res.data.status || 0,
            message:
                res.data.message ||
                `Error in calling server API, HTTP status: ${res.statusText}`,
    };

        return { error };
    }

    return { data: res.data, revision: res.headers["etag"] };
};

/**
 * Specifically made for use in Redux Toolkit payload creators.
 * @param req
 * @param url
 * @param method
 * @param params
 * @param data
 * @param headers
 * @returns {Promise<{data: any, revision: string}>}
 */
export const callApi = async ({
                                  req,
                                  url,
                                  method = "GET",
                                  data = {},
                                  headers = {},
                                  params = {},
                              }) => {
    let res;
    try {
        res = await axios({
            method,
            url,
            params,
            data,
            headers: {
                ...headers,
                ...(await bearerToken({ req })),
            },
        });
    } catch (e) {
        console.log(`Got error in callApi to: ${url}, ${method}`);
        console.dir(e);

        if (e.response) {
            let { status } = e.response;
            let message = getErrorMessage(e);

            if (
                status >= HTTP_STATUS.BAD_REQUEST &&
                status < HTTP_STATUS.SERVER_ERROR
            ) {
                if (status === HTTP_STATUS.PRECONDITION_FAILED) {
                    message = "Data was updated by another user";
                }
                throwApiError(message, status);
            } else {
                throwServerError(message, status);
            }
        } else {
            throwNetworkError(e.toString());
        }
    }

    if (res.status !== REQUEST_STATUS[method.toUpperCase()]) {
        throwApiError(
            `Error in calling server API, HTTP status: ${res.statusText}`,
        res.status
    );
    }

    return { data: res.data, revision: res.headers["etag"] };
};

