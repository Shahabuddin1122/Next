export default function Nav() {
  return (
    <>
      <nav className=" w-screen h-100 border-blue-600 md:w-11/12 md:mx-auto">
        <div className=" h-1/2 bg-violet-500 ">
          <ul className=" flex justify-between px-2 text-white">
            <li>Become a seller</li>
            <li>Shahabuddin akhon</li>
          </ul>
        </div>
        <div className="h-1/2 bg-violet-700 flex justify-between items-center px-3">
          <div className=" h-12 w-12">
            <img
              src="/me-removebg-preview.jpg"
              alt=""
              className=" w-full h-full rounded-full"
            />
          </div>
          <div className="list">
            <ul className=" flex justify-between space-x-5 text-white md:space-x-14">
              <li>Home</li>
              <li>Product</li>
              <li>Community</li>
              <li>Bill</li>
            </ul>
          </div>
          <div className=" h-6 w-6">
            <img src="/notification.png" alt="" className=" w-full h-full" />
          </div>
        </div>
      </nav>
    </>
  );
}
