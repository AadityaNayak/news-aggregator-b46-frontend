import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>
              We are a team of four developers who are passionate about building
              great websites. We are always learning and growing, and we are
              always looking for new challenges.
            </p>
          </div>
          <div class="col-md-4">
            <h4>Team Members</h4>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/aaditya-nayak-an73a8208/"
                  target="_blank"
                >
                  Aaditya Nayak
                </a>
                <a href="https://github.com/AadityaNayak" target="_blank">
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vedanta-sharma-7857b7251"
                  target="_blank"
                >
                  Vedanta Sharma
                </a>
                <a href="https://github.com/vedanta-sharma" target="_blank">
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abhinay-reddy-9375a1203/"
                  target="_blank"
                >
                  Abhinay Prakash Reddy
                </a>
                <a href="https://github.com/abhi-apple" target="_blank">
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/melvin-m-george/"
                  target="_blank"
                >
                  Melvin M George
                </a>
                <a href="https://github.com/Melvin-M-George" target="_blank">
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h4>Contact Us</h4>
            <p>
              Email: <a href="">asecondary652@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="copyright">&copy; 2023</div>
      </div>
    </footer>
  );
}

export default Footer;
