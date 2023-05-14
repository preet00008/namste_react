const ShimmerUi = () => {
  return (
    <>
      <div className="shimmer">
        {Array(15).fill("").map((e, index)=>(
        <div key={index} className="shimmer_ui"></div>
        ))}
      </div>
    </>
  );
};

export default ShimmerUi;
