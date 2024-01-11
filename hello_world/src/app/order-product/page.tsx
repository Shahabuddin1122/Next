"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
const order =  ()=>{
    const router = useRouter()
    const handleclick = ()=>{
        console.log("Placing your order");
        router.replace('/about')
    }
    return (
        <>
            <h1>For order placing click the button</h1>
            <button onClick={handleclick}>Place Order</button>
        </>
    )
}
export default order;