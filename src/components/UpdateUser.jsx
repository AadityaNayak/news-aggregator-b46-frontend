import React from "react";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UpdateUser = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
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

    let userID = JSON.parse(localStorage.getItem("user"))._id;
    let formData_with_userID = { ...formData, userID: userID };

    let result = await fetch(`http://localhost:5000/update`, {
      method: "put",
      body: JSON.stringify(formData_with_userID),
      headers: {
        "Content-type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });

    result = await result.json();
    console.log(result);
    if (result.modifiedCount > 0) {
      alert("User info Updated");
    }

    result = await fetch(`http://localhost:5000/user`, {
      method: "put",
      body: JSON.stringify(formData_with_userID),
      headers: {
        "Content-type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });

    result = await result.json();

    // store user info in local storage
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  }

  function cancelAction() {
    navigate("/dashboard");
  }

  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem("user"));
    setFormData(userInfo);
  }, []);

  return (
    <div className="signup-container">
      <div className="signup">
        <h2>Update User</h2>
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
              placeholder="Enter password"
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
            Update
          </button>
          <button type="button" onClick={cancelAction} className="signup-btn">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
