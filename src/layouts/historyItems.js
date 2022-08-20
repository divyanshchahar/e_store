//IMPORTING FUNCTIONALITY
import SingleImageLoader from "../services/utils/singleimageloader";
import { Link } from "react-router-dom";

// IMPORTING COMPONENETS
import useAPIData from "../services/utils/useAPIData";
import CreateHistoryData from "../services/utils/createHistoryData";

function HistoryItems(historyData) {
  const products = useAPIData("http://localhost:3001/product_data");

  const historyDisplay = CreateHistoryData(historyData, products);
  return (
    <>
      {historyDisplay.length === 0 ? (
        <h1>Failed</h1>
      ) : (
        <div>
          {historyDisplay.map((itemA) => {
            return (
              <>
                <p>{itemA.oid}</p>
                {itemA.cartItems.map((itemB) => {
                  return (
                    <div>
                      <SingleImageLoader productId={itemB.pid} />
                      <p>{itemB.name}</p>
                      <p>{itemB.qty}</p>
                      <p>{`$ ${itemB.price}`}</p>
                      <p>{`Item total : $ ${itemB.qty * itemB.price}`}</p>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
      )}
    </>
  );
}

export default HistoryItems;
