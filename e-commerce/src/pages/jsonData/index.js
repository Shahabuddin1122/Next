import React from 'react';
import axiosInterceptorInstance from "../../app/axiosInterceptors";
import Card from "../../components/card";
import '../../globals.css'

const Page = ({ data }) => {
    return (
        <div>
            {data.map((value,index)=>(
                 <Card key={index} img={'/bag.jpg'} head={value.name} des={value.email} />
            ))}
        </div>
    );
};

Page.getInitialProps = async (ctx) => {
    try {
        const res = await axiosInterceptorInstance.get('/users/');
        return { data: res.data };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { data: "error" };
    }
};

export default Page;
