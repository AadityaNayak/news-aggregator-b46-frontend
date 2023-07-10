import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";
function SignUp() {
  // Making form input as controlled components by managing them in states
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    age: "",
    city: "",
    state: "",
    country: "",
    planguages: "",
  });

  // To navigate to another rout on demand
  const navigate = useNavigate();

  // To link form data with state formData
  function updateFormData(event) {
    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  }

  // on form submit
  async function submitData(event) {
    event.preventDefault();
    event.stopPropagation();
    let result = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();

    // store user info in local storage
    localStorage.setItem("user", JSON.stringify(result.result));
    // store auth token in local storage
    localStorage.setItem("token", JSON.stringify(result.auth));

    console.log(result);
    if (result) {
      navigate("/");
    }
  }

  return (
    <div className="signup-container">
      <div className="signup">
        <h2>SignUp</h2>
        <form action="POST">
          <div className="form-ele">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              placeholder="Enter name"
              onChange={updateFormData}
              name="name"
              value={formData.name}
            />
          </div>
          <div className="form-ele">
            <label htmlFor="email">Email </label>
            <input
              type="text"
              placeholder="Enter email"
              onChange={updateFormData}
              name="email"
              value={formData.email}
            />
          </div>
          <div className="form-ele">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={updateFormData}
              name="password"
              value={formData.password}
            />
          </div>
          <div className="form-ele">
            <label htmlFor="age">Age: </label>
            <input
              type="text"
              placeholder="Enter age"
              onChange={updateFormData}
              name="age"
              value={formData.age}
            />
          </div>
          <div className="form-ele">
            <label htmlFor="country">Coutry </label>
            <input
              type="text"
              placeholder="Enter country"
              onChange={updateFormData}
              name="country"
              value={formData.country}
            />
          </div>
          <div className="form-ele">
            <label htmlFor="state">State </label>
            <input
              type="text"
              placeholder="Enter state"
              onChange={updateFormData}
              name="state"
              value={formData.state}
            />
          </div>
          <div className="form-ele">
            <label htmlFor="city">City </label>
            <input
              type="text"
              placeholder="Enter city"
              onChange={updateFormData}
              name="city"
              value={formData.city}
            />
          </div>
          <div className="form-ele">
            <label htmlFor="planguages">Primary Languages </label>
            <input
              type="text"
              placeholder="Enter primary languages"
              onChange={updateFormData}
              name="planguages"
              value={formData.planguages}
            />
          </div>

          <button type="submit" onClick={submitData} className="signup-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
