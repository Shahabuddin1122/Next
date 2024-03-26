import {Audio, DNA} from "react-loader-spinner";
import '../globals.css'
const loading = ()=>{
    return <>
        <div className={"flex justify-center items-center w-full h-screen"}>
            <DNA
                visible={true}
                height="100"
                width="100"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    </>
}
export default loading;