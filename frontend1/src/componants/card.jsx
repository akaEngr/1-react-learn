const Card = (users) => {

  return (
    <div className="card">
      <div className="name">{users.name}</div>
      <div className="age">{users.age}</div>
      <div className="city">{users.city}</div>
      <div className="address">{users.address}</div>
    </div>
  );
};

export default Card;