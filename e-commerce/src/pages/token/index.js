import React from 'react';

import {getServerApi} from "../../app/axiosInterceptors";
import '../../globals.css'
import {redirect} from "next/navigation";


export async function getServerSideProps(context) {
    try {
        const {token} = context.query;

        return { props: {token} };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { data: "error" };
    }
}

export default function Page({ repo }) {

    return redirect(`${repo}`)
}