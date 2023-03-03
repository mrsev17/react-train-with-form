import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Users from "./components/Users";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    country: "",
    city: "",
    age: "",
  });
  const [formList, setFormList] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormList([...formList, formData]);

    setFormData({
      firstName: "",
      secondName: "",
      country: "",
      city: "",
      age: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
              name="firstName"
              value={formData.firstName}
              type="text"
              placeholder="Enter First Name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-between align-items-baseline"
            controlId="formBasicPassword"
          >
            <Form.Label className="form__label">Second Name</Form.Label>
            <Form.Control
              name="secondName"
              value={formData.secondName}
              type="text"
              placeholder="Enter Second Name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-between align-items-baseline"
            controlId="formBasicPassword"
          >
            <Form.Label className="form__label">Country</Form.Label>
            <Form.Control
              name="country"
              value={formData.country}
              type="text"
              placeholder="Enter Country"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-between align-items-baseline"
            controlId="formBasicPassword"
          >
            <Form.Label className="form__label">City</Form.Label>
            <Form.Control
              name="city"
              value={formData.city}
              type="text"
              placeholder="Enter City"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-between align-items-baseline"
            controlId="formBasicPassword"
          >
            <Form.Label className="form__label">Age</Form.Label>
            <Form.Control
              name="age"
              value={formData.age}
              type="number"
              placeholder="Enter Age"
              onChange={handleChange}
            />
          </Form.Group>

          <Button className="form__submit" variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Users data={formList} />
        
      </div>
    </div>
  );
}

export default App;

/*
{formList.map((user) => {
  const { firstName, secondName, country, city, age } = user;
  return (
    <div key={`${firstName} ${secondName} ${country} ${city} ${age}`}>
      <h2>
        {firstName} {secondName}
      </h2>
      <h3>
        {country} {city}
      </h3>
      <p>{age} years old</p>
    </div>
  );
})}
*/
