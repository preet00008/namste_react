const ShimmerUi = () => {
  return (
    <>
      <div data-testid="shimmer" className="flex flex-wrap p-2 bg-slate-100">
        {Array(16).fill("").map((e, index)=>(
        <div key={index} className=" bg-slate-300 m-8 w-60 h-40"></div>
        ))}
      </div>
    </>
  );
};


export default ShimmerUi;