import React from "react";
import PropTypes from "prop-types";
import style from "../styles/nav.css";
import $ from "jquery";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useNavigate } from "react-router-dom";

function NavBar(props) {
  let navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  window.addEventListener("load", function () {
    let nav_toggle = document.getElementById("nav_toggle");
    let nav_ul = document.getElementById("nav_list");
    let close = 0;
    if (nav_toggle) {
      let i = 0;
      nav_toggle.addEventListener("click", () => {
        if (close == 1) {
          nav_ul.classList.remove("active");
          nav_toggle.classList.remove("active");
          close = 0;
        } else {
          nav_ul.classList.add("active");
          nav_toggle.classList.add("active");
          close = 1;
        }
      });
    }
  });

  function searchHandle(event){
    let val = event.target.value;
    setSearchValue(val);
  }

  function searchNewsEnter(event) {
    if (event.key === "Enter") {
      let path = "/" + searchValue;
      props.updateSearchVal(searchValue);
      navigate(path);
    }
  }

  const auth = localStorage.getItem("user");

  return (
    <div style={style}>
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
          </div>
          <nav>
            <div className="nav-mobile">
              <button id="nav_toggle" href="#">
                <span></span>
              </button>
            </div>
            <ul className="nav_list" id="nav_list">
              {/* <!-- Setting the links to #! will ensure that no action takes place on click. --> */}
              {auth?<li>
                <input type="text" id="nav-search" placeholder="Search" onChange={(event) => searchHandle(event)}
          onKeyDown={(event) => {
            searchNewsEnter(event);
          }}/>
              </li>:""}
              <li>
              <a href="/">Top News</a>
              </li>
              <li>
              {auth?<a href="/entertainment">Entertainment</a>:""}
              </li>
              <li>
              {auth?<a href="/business">Business</a>:""}
              </li>
              <li>
                {auth?<a href="/science">Science</a>:""}
              </li>
              <li>
                {auth?<a href="/technology">Technology</a>:""}
              </li>
              <li>
                {auth==null? <a href="/signup" style={{backgroundColor: "#383f51"}}>Sign Up</a>:""}
              </li>
              <li>
                {auth == null? <a href="/login" style={{backgroundColor: "#383f51"}}>Log in</a>:""}
              </li>
              <li>
              {auth?<a href="/dashboard "><i class="fa-solid fa-user" style={{color: "#ff3a24"}}></i></a>:""}
              </li>
              {/* <li><a href="/">Contact Me</a></li> */}
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
