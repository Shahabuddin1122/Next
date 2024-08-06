const Page = () => {
    return (
        <>
            <div className={"w-full"}>
                <div className={"h-[100px] grid lg:grid-cols-6 bg-red-400"}>
                    <div className={"bg-yellow-700"}></div>
                    <div className={"bg-slate-200 lg:col-span-4"}></div>
                    <div className={"bg-violet-500"}></div>
                </div>
                <div className={"w-full h-[500px] grid grid-cols-2"}>
                    <div className={"bg-sky-400"}></div>
                    <div className={"bg-slate-400"}></div>
                </div>
                <div className={"w-full h-[100px] bg-amber-100"}></div>
                <div className={"w-full h-[300px] grid grid-cols-3"}>
                    <div className={"bg-black"}></div>
                    <div className={"bg-yellow-400 col-span-2"}>
                        <div className={"w-full h-1/3 bg-red-400"}></div>
                        <div className={"w-full h-1/3 bg-orange-400"}></div>
                        <div className={"w-full h-1/3 bg-pink-400"}></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Page;