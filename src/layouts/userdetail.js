function UserDetail(userData) {
  const { personelinfo, address, pay } = userData.userData;
  const data = Object.entries(personelinfo);
  const addressDetails = Object.entries(address);
  const payDetails = Object.entries(pay);
  return (
    <div>
      <div>
        {data.map((item) => {
          return <p>{item[1]}</p>;
        })}
      </div>
      <div>
        {addressDetails.map((item) => {
          return <p>{item[1]}</p>;
        })}
      </div>
      <div>
        {payDetails.map((item) => {
          return <p>{item[1]}</p>;
        })}
      </div>
    </div>
  );
}

export default UserDetail;
