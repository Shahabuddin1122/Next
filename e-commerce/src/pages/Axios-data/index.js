import React from 'react';
import axiosInterceptorInstance from "../../app/axiosInterceptors";
import Card from "../../components/card";
import {getServerApi} from "../../app/axiosInterceptors";
import '../../globals.css'

const Page = ({ data }) => {
    console.log(data)
    const token = localStorage.getItem("token");
    console.log(token)
     return (
        <div>
            <h1>hello</h1>
        </div>
    );
};
// '/users/'
Page.getInitialProps = async (ctx) => {
    try {
        let url='/users/';
        let params = {
            id:1
        }
        const res = await getServerApi({url,params});
        return { data: res.data };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { data: "error" };
    }

};

export default Page;