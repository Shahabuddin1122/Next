import { PAGES_DIR_ALIAS } from "next/dist/lib/constants";

const docs = ({params}:{
    params: {
        slug: string[];
    }
})=>{
    if(params.slug?.length === 2){
        return (
            <>
                <h1>Hello world from doc page for fature {params.slug[0]} and {params.slug[1]}</h1>
            </>
        )
    }
    else if(params.slug?.length === 1) {
        return (
            <>
                <h1>Hello from fature {params.slug[0]}</h1>
            </>
        )
    }
    else {
        return (
            <>
                <h1>Hello from doc</h1>
            </>
        )
    }
}
export default docs