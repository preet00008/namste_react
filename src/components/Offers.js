import { OFFERS_IMAGE_URL } from "../utils/constant";

const Offers = (props) => {
  const { resData } = props;
  return (
    <div className=" w-96 m-2">
      <img
        className=""
        src={OFFERS_IMAGE_URL + resData?.imageId}
        alt="image not found"
      />
    </div>
  );
};

export default Offers;
