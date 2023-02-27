import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import UserCard from "./components/UserCard";

function App() {
  const dataUsers = [];
  const [data, setData] = useState({
    firstName: "",
    secondName: "",
    country: "",
    city: "",
    age: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dataUsers.push(data);
    //setData({ firstName: "", secondName: "", country: "", city: "", age: "" });
    console.log(dataUsers);
  };

  return (
    <div className="App">
      <div className="container-form">
        <Form onSubmit={handleFormSubmit} className="form__wrapper">
          <Form.Group
            className="mb-3 d-flex justify-content-between align-items-baseline"
            controlId="formBasicEmail"
          >
            <Form.Label className="form__label">First Name</Form.Label>
            <Form.Control
              name="firstname"
              value={data.firstName}
              type="text"
              placeholder="Enter First Name"
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-between align-items-baseline"
            controlId="formBasicPassword"
          >
            <Form.Label className="form__label">Second Name</Form.Label>
            <Form.Control
              name="secondname"
              value={data.secondName}
              type="text"
              placeholder="Enter Second Name"
              onChange={(e) => setData({ ...data, secondName: e.target.value })}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-between align-items-baseline"
            controlId="formBasicPassword"
          >
            <Form.Label className="form__label">Country</Form.Label>
            <Form.Control
              name="country"
              value={data.country}
              type="text"
              placeholder="Enter Country"
              onChange={(e) => setData({ ...data, country: e.target.value })}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-between align-items-baseline"
            controlId="formBasicPassword"
          >
            <Form.Label className="form__label">City</Form.Label>
            <Form.Control
              name="city"
              value={data.city}
              type="text"
              placeholder="Enter City"
              onChange={(e) => setData({ ...data, city: e.target.value })}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-between align-items-baseline"
            controlId="formBasicPassword"
          >
            <Form.Label className="form__label">Age</Form.Label>
            <Form.Control
              name="age"
              value={data.age}
              type="number"
              placeholder="Enter Age"
              onChange={(e) => setData({ ...data, age: e.target.value })}
            />
          </Form.Group>

          <Button className="form__submit" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <UserCard />
      </div>
    </div>
  );
}

export default App;
