import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let [userInfo, setuserInfo] = useState({});
  let navigate = useNavigate();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")) != null) {
      setuserInfo(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  async function signOut(event) {
    event.preventDefault();
    event.stopPropagation();
    localStorage.clear();
    navigate("/");
  }
  async function handleUpdate(event) {
    event.preventDefault();
    event.stopPropagation();
    navigate("/update");
  }
  async function handleDelete(event) {
    let userID = JSON.parse(localStorage.getItem("user"))._id;

    if (
      window.confirm(
        "NOTE: The Account will be permanetly deleted on this confirmation.\nAre you sure?"
      ) == true
    ) {
      let result = await fetch(`${process.env.REACT_APP_BACKEND}/delete`, {
        method: "delete",
        body: JSON.stringify({ userID: userID }),
        headers: {
          "Content-type": "application/json",
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });

      if (result) {
        alert("Account has been deleted successfully");
        localStorage.clear();
        navigate("/");
      } else {
        alert("Error in deleting account");
      }
    } else {
      alert("Error in deleting account");
    }

  }

  return (
    <div className="dashboard">
      <h2>Welcome {userInfo.name}</h2>
      <p>Stay updated with NewsAggregator</p>

      <div className="dashboard-card">
        <div className="dash-item">
          <div className="dash-attri">Name</div>
          <div className="dash-val">{userInfo.name}</div>
        </div>
        <div className="dash-item">
          <div className="dash-attri">Email</div>
          <div className="dash-val">{userInfo.email}</div>
        </div>
        <div className="dash-item">
          <div className="dash-attri">Country</div>
          <div className="dash-val">{userInfo.country}</div>
        </div>
        <div className="dash-item">
          <div className="dash-attri">Languages</div>
          <div className="dash-val">{userInfo.planguages}</div>
        </div>
        <div className="dash-item">
          <button type="button" onClick={signOut} className="signout-btn">
            SignOut
          </button>
          <button type="button" onClick={handleUpdate} className="signout-btn">
            Update Info
          </button>
          <button type="button" onClick={handleDelete} className="signout-btn">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
