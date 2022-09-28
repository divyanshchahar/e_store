import { lazy } from "react";

function CreateHistoryData(historyData, products) {
  var historyDisplay = [];

  historyData.historyData.orders.map((itemA) => {
    let temp = { oid: itemA.oid, cartItems: [] };
    itemA.cartItems.map((itemB) => {
      products.map((itemC) => {
        if (itemC.id === itemB.pid) {
          temp.cartItems.push({
            name: itemC.name,
            pid: itemC.id,
            qty: itemB.qty,
            price: itemC.price,
          });
        }
      });
    });
    historyDisplay.push(temp);
  });
  return historyDisplay;
}
export default CreateHistoryData;
