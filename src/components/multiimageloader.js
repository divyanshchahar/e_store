import { useState } from "react";

import image_index from "../assets/data/image_index.js";

const MultiImageLoader = ({ productId }) => {
  const selectedItem = image_index.filter((item) => item.id === productId);
  const [imageIndex, setImageIndex] = useState(0);

  const changeImage = (imgchange) => {
    const firstImage = 0;
    const lastImage = selectedItem[0].images.length - 1;

    if (imgchange === "next") {
      if (imageIndex === lastImage) {
        setImageIndex(firstImage);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }

    if (imgchange === "previous") {
      if (imageIndex === firstImage) {
        setImageIndex(lastImage);
      } else {
        setImageIndex(imageIndex - 1);
      }
    }
  };

  return (
    <>
      {selectedItem[0].images.length === 1 && (
        <img src={selectedItem[0].images[0]} alt="not found" />
      )}
      {selectedItem[0].images.length > 1 && (
        <>
          <img src={selectedItem[0].images[imageIndex]} alt="" />
          <button onClick={() => changeImage("previous")}>
            previous image
          </button>
          <button onClick={() => changeImage("next")}>next image</button>
        </>
      )}
    </>
  );
};

export default MultiImageLoader;
