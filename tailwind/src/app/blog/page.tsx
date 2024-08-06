const Page = () => {
    return (
        <>
            <div className={"w-full"}>

                <div className="grid grid-cols-5 grid-rows-5 gap-2 text-center">
                    <div className="col-span-2 bg-black">1</div>
                    <div className="col-span-3 row-span-2 col-start-3 bg-red-400">2</div>
                    <div className="row-span-3 col-start-1 row-start-3 bg-amber-500">3</div>
                    <div className="col-span-3 row-span-3 col-start-2 row-start-3 bg-sky-400">4</div>
                    <div className="col-start-5 row-start-3 bg-green-700">5</div>
                    <div className="col-start-5 row-start-5 bg-slate-500">6</div>
                    <div className="col-span-2 col-start-1 row-start-2 bg-green-700">7</div>
                    <div className="col-start-5 row-start-4 bg-yellow-500">8</div>
                </div>


            </div>
        </>
    )
}
export default Page;