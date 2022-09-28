//IMPORTING ASSETS
import image_index from "../assets/data/image_index";

const SingleImageLoader = (productId) => {
  const selectedItem = image_index.filter(
    (item) => item.id === productId.productId
  );
  return <img src={selectedItem[0].images[0]} alt="not found" />;
};

export default SingleImageLoader;
