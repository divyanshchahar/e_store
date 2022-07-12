const DetailLoader = ({ productdetails }) => {
  const details = Object.entries(productdetails);
  return (
    <div className={"productdetails"}>
      {details.map((item) => {
        return item[0] !== "id" && <p>{item[0].concat(" : ", item[1])}</p>;
      })}
    </div>
  );
};

export default DetailLoader;
