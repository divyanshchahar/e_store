import image_index from "../assets/data/image_index.js";

const MultiImageLoader = ({ productId }) => {
  const selectedItem = image_index.filter((item) => item.id === productId);

  // return <img src={selectedItem[0].images[0]} alt="not found" />;
  return selectedItem[0].images.map((imgaeItem) => {
    return <img src={imgaeItem} alt="not found" />;
  });

  // console.log(productId);
};

export default MultiImageLoader;
