import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const dataUsers = [];

function App() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const collectUser = {
      firstname: e.target.firstname.value,
      secondname: e.target.secondname.value,
      country: e.target.country.value,
      city: e.target.city.value,
      age: e.target.age.value,
    };
    dataUsers.push(collectUser);

    // Clean inputs

    e.target.firstname.value = "";
    e.target.secondname.value = "";
    e.target.country.value = "";
    e.target.city.value = "";
    e.target.age.value = "";

    console.log(dataUsers);
    /*
    console.log({
      firstname: e.target.firstname.value,
      secondname: e.target.secondname.value,
      country: e.target.country.value,
      city: e.target.city.value,
      age: e.target.age.value,
    });
    */
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
              type="text"
              placeholder="Enter First Name"
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-between align-items-baseline"
            controlId="formBasicPassword"
          >
            <Form.Label className="form__label">Second Name</Form.Label>
            <Form.Control
              name="secondname"
              type="text"
              placeholder="Enter Second Name"
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-between align-items-baseline"
            controlId="formBasicPassword"
          >
            <Form.Label className="form__label">Country</Form.Label>
            <Form.Control
              name="country"
              type="text"
              placeholder="Enter Country"
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-between align-items-baseline"
            controlId="formBasicPassword"
          >
            <Form.Label className="form__label">City</Form.Label>
            <Form.Control name="city" type="text" placeholder="Enter City" />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-between align-items-baseline"
            controlId="formBasicPassword"
          >
            <Form.Label className="form__label">Age</Form.Label>
            <Form.Control name="age" type="number" placeholder="Enter Age" />
          </Form.Group>

          <Button className="form__submit" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
