"use client";

export default function ErrorBoundary({error,reset}:{error:Error;reset:()=> void}){
    return (
        <>
            <div>Custom error found</div>
            <div>{error.message}</div>
            <button onClick={reset}>reset now</button>
        </>
    )
}