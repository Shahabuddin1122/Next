export default function Card({ name }: { name: string }) {
  return (
    <>
      <div className=" group sm:flex max-w-sm mx-auto p-8 bg-white rounded-xl shadow-xl space-y-3 sm:space-y-0 sm:space-x-4 sm:items-center sm:p-4 hover:bg-blue-400">
        <div className=" h-3/5">
          <img
            src="/me-removebg-preview.jpg"
            alt="not shown"
            className=" h-24 mx-auto rounded-full ring-4 ring-lime-400 sm:mx-0 sm:flex-shrink-0 hover:scale-110 duration-500"
          />
        </div>
        <div className=" text-center sm:text-left ">
          <h1 className=" text-lg font-semibold text-black">{name}</h1>
          <p className=" text-gray-400 font-medium group-hover:text-white">
            Shahabuddin Akhon
          </p>
          <button className=" btn-purple">Watch Now</button>
          <button className=" mx-2 btn-green">apply</button>
        </div>
      </div>
    </>
  );
}
