const UserCard = ({ firstName, secondName, country, city, age }) => {
  return (
    <div className="form__user-card">
      <h2>
        {firstName} {secondName}
      </h2>
      <h3>
        {country} {city}
      </h3>
      <p>{age} years old</p>
    </div>
  );
};

export default UserCard;
