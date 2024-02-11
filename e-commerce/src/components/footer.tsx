import Image from "next/image";
const footer = () => {
  return (
    <>
      <div className=" w-screen h-[800px] my-5">
        <div className=" w-full h-1/5 bg-blue-400 flex mb-2">
          <div className=" w-1/3 text-center flex flex-col items-center justify-center border-l-2 ">
            <h2 className=" text-2xl font-serif font-bold">Free Shipping</h2>
            <p>On All Order</p>
          </div>
          <div className=" w-1/3 text-center flex flex-col items-center justify-center border-l-2">
            <h2 className=" text-2xl font-serif font-bold">
              FreshNess Guarantees
            </h2>
            <p>Get it fresh or we'll make it right</p>
          </div>
          <div className=" w-1/3 text-center flex flex-col items-center justify-center border-l-2">
            <h2 className=" text-2xl font-serif font-bold">
              Best Customer Service
            </h2>
            <p>We are here for you 24/7</p>
          </div>
        </div>
        <div className=" w-full h-2/5 mx-auto bg-yellow-200 flex">
          <div className=" w-1/3 h-full mx-5">
            <h1 className=" text-2xl font-semibold my-5">(+880)1982711168</h1>
            <p className=" italic text-xl my-5">
              If you have any question than call us or chat with us. we will
              sort it out for you
            </p>
            <p className=" underline text-xl mt-4">You can e-mail us at:</p>
            <p className=" text-xl font-bold">shavoddin54@gmail.com</p>
            <p>sonir akhra,Dhaka,Bangladesh</p>
          </div>
          <div className=" w-1/3 h-full mx-5">
            <h1 className=" text-3xl font-semibold my-5">About Bazar Fruits</h1>
            <p className=" text-cyan-500 text-xl my-2">Our Story 🎁</p>
            <p className=" text-cyan-500 text-xl my-2">💌 Bazar Box Reviews</p>
            <p className=" text-cyan-500 text-xl my-2">😇 FAQs</p>
            <p className=" text-cyan-500 text-xl my-2">🪄 Our Return Policy</p>
            <p className=" text-cyan-500 text-xl my-2">Corporate Orders</p>
            <p className=" text-cyan-500 text-xl my-2">Terms of Services</p>
          </div>
          <div className=" w-1/3 h-full mx-5">
            <h1 className=" text-3xl font-semibold my-5">Bazar's Corner</h1>
            <p className=" text-xl my-2 text-gray-500 ">Access your account</p>
            <p className=" text-xl my-2 text-gray-500 ">🤝 Subscribe & Save</p>
            <p className=" text-xl my-2 text-gray-500 ">
              ✨ Influences(Ambassador Program)
            </p>
            <p className=" text-xl my-2 text-gray-500 ">❤️ Bazar Rewards</p>
            <p className=" text-xl my-2 text-gray-500 ">
              Don't Share or sell personal Information ✖️
            </p>
          </div>
        </div>
        <div className=" w-full h-1/5 mx-auto bg-yellow-200 flex ">
          <div className=" w-1/2">
            <h2 className=" text-2xl font-semibold mx-3">We love to be join</h2>
            <div className=" flex mx-3 my-3">
              <Image
                src="/facebook.svg"
                alt="taka"
                width={30}
                height={30}
                className=" mx-3"
              />
              <Image
                src="/insagram.svg"
                alt="taka"
                width={30}
                height={30}
                className=" mx-3"
              />
              <Image
                src="/twitter.svg"
                alt="taka"
                width={30}
                height={30}
                className=" mx-3"
              />
            </div>
          </div>
          <div className=" w-1/2 relative mb-8 mr-20">
            <Image
              src="/payment.png"
              alt="taka"
              objectFit="cover"
              layout="fill"
              className=" my-3 w-11/12"
            />
          </div>
        </div>
        <div className=" w-full h-1/5 bg-black text-white text-center">
          <p className="text-sm">&copy; 2024 Bazar. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
export default footer;
