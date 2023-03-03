import UserCard from "./UserCard";

const Users = ({ data }) => {
  return (
    <div className="card-wrapper">
      {data.map((user) => {
        const { firstName, secondName, country, city, age } = user;
        return (
          <UserCard
            key={`${firstName}-${secondName}-${country}-${city}-${age}`}
            {...user}
          />
        );
      })}
    </div>
  );
};

export default Users;
