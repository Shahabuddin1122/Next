const Button = ({ data }: { data: string }) => {
  return (
    <>
      <button className=" ml-3 mt-3 p-2 bg-slate-100 text-slate-400 flex justify-between">
        <h1 className=" text-sm mr-3">✕</h1>
        <h1 className=" text-sm">{data}</h1>
      </button>
    </>
  );
};
export default Button;
