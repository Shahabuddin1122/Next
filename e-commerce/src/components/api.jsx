
import axiosInterceptorInstance from "../app/axiosInterceptors";
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await axiosInterceptorInstance.get('/posts')
    const repo = await res.data;
    console.log("A: "+repo)
    return { props: { repo } }
}

export default function Page({ props }) {
    console.log("B: "+props)
    return (
        <main>
            <p>product</p>
        </main>
    )
}