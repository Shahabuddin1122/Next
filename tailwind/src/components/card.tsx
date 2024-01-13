export default function Card() {
  return (
    <>
      <div className=" sm:flex max-w-sm mx-auto p-8 bg-white rounded-xl shadow-xl space-y-3 sm:space-y-0 sm:space-x-4 sm:items-center sm:p-4">
        <div className=" h-3/5">
          <img
            src="/me-removebg-preview.jpg"
            alt="not shown"
            className=" h-24 mx-auto rounded-full ring-4 ring-lime-400 sm:mx-0 sm:flex-shrink-0"
          />
        </div>
        <div className=" text-center sm:text-left ">
          <h1 className=" text-lg font-semibold text-black">
            Heritage Craft Connect
          </h1>
          <p className=" text-gray-400 font-medium">Shahabuddin Akhon</p>
          <button className=" my-4 px-4 py-1 border rounded-full border-purple-500 text-sm text-purple-700 space-y-2">
            Watch Now
          </button>
        </div>
      </div>
    </>
  );
}
