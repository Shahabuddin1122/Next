import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <div className=" w-full h-32 bg-red-400">
        <div className=" w-full h-8 bg-green-500">
          <div className=" w-11/12 mx-auto flex justify-between">
            <div className=" my-1">
              <ul className="flex justify-center text-center align-top space-x-3 items-center">
                <Image
                  src="/twitter.svg"
                  alt="Example SVG"
                  width={25}
                  height={25}
                />
                <Image
                  src="/facebook.svg"
                  alt="Example SVG"
                  width={25}
                  height={25}
                />
                <Image
                  src="/instagram.svg"
                  alt="Example SVG"
                  width={25}
                  height={25}
                />
              </ul>
            </div>
            <div className=" flex items-center justify-center text-center space-x-4">
              <p>
                United State(US) <span className=" text-red-950 px-1">v</span>
              </p>
              <p>
                English <span className=" text-red-950 px-1">v</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full h-16 bg-lime-600">
          <div className=" w-11/12 h-full mx-auto flex justify-between text-center">
            <div className=" my-auto">
              <Image
                src="/amazon.svg"
                alt="Example SVG"
                width={50}
                height={50}
              />
            </div>
            <div className=" my-auto flex justify-center ">
              <select name="country" className=" w-28 bg-slate-200">
                <option value="us">Select</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
              </select>
              <input type="search" className=" w-80 p-1" />
              <button className=" p-1 border-lime-400 border-2 my-auto bg-lime-400">
                <Image src="/search.svg" alt="search" width={30} height={30} />
              </button>
            </div>
            <div className=" flex justify-center space-x-4">
              <button className=" p-2 rounded-lg border-lime-400 border-2 my-auto bg-lime-400">
                Login
              </button>
              <Image src="/cart.svg" alt="Example SVG" width={30} height={30} />
            </div>
          </div>
        </div>
        <div className=" w-full h-8 bg-lime-900 ">
          <div className=" flex items-center w-11/12 h-full mx-auto justify-center space-x-6 text-white">
            <p>Home</p>
            <p className="">
              Groceries <span className=" ml-1 font-bold ">v</span>
            </p>
            <p>Our Story</p>
            <p>Feed Notes</p>
            <p>Contract</p>
            <p>Demos</p>
          </div>
        </div>
      </div>
    </>
  );
}
