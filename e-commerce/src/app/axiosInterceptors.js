import axios from 'axios';
import {baseUrl} from "./api/baseUrl";

const axiosInterceptorInstance = axios.create({
    timeout:Number(process.env.NEXT_PUBLIC_API_DEFAULT_TIMEOUT),
    baseURL:baseUrl,
});


// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
    (config) => {
        console.debug(`API call: ${config.baseURL}${config.url}`);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// End of Request interceptor



// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
    (response) => {
        // Modify the response data here

        return response;
    },
    (error) => {
        // Handle response errors here

        return Promise.reject(error);
    }
);
// End of Response interceptor

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



const bearerToken = async ({ req }) => {
    const { token, ...Headers } = req;
    return token
        ? {
            ...Headers,
            'Authorization': `Bearer ${token}`,
        }
        : { ...Headers };
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

export const getServerApi = async ({ req,url, params = {} }) => {
    let res;
    try {
        res = await axiosInterceptorInstance({
            method: "GET",
            url,
            params,
            headers: await bearerToken({req})
        });
    } catch (e) {
        let error = {
            title: e.type || "Sorry!",
            code: e.code || e.response?.data?.status || e.response?.status || 0,
            message: getErrorMessage(e),
            api: `${baseUrl}${e?.request?.path}`,
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
    return { data: res.data };
};

export default axiosInterceptorInstance;