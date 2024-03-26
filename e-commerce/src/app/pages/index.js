import React from 'react';

const Page = ({ repoName, stars }) => {
    return (
        <div>
            <h1>Repository: {repoName}</h1>
            <p>Stars: {stars}</p>
        </div>
    );
};

Page.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const json = await res.json();
    return { repoName: json.name, stars: json.subscribers_count };
};

export default Page;
