import { Suspense } from 'react';


export default function ArtistPage() {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    return (
        <>
            <h1>abc</h1>
            <Suspense fallback={<Loading />}>
                <h1>hello</h1>
            </Suspense>
        </>
    );
}

function Loading() {
    console.debug("a")
    return <h2>🌀 Loading...</h2>;
}
