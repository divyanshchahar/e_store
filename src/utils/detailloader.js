const DetailLoader = ({ productdetails }) => {
  const details = Object.entries(productdetails);
  return (
    <div className={"productdetails"}>
      {details.map((item) => {
        if (item[0] === "name") {
          return <h1>{item[1]}</h1>;
        }
        if (item[0] === "price") {
          return <p>{item[0].concat(" : $ ", item[1])}</p>;
        }
        if (item[0] !== "id") {
          return <p>{item[0].concat(" : ", item[1])}</p>;
        }
      })}
    </div>
  );
};

export default DetailLoader;
