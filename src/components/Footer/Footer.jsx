
import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#pablo">Home</a>
              </li>
              <li>
                <a href="#pablo">Company</a>
              </li>
              <li>
                <a href="#pablo">Portfolio</a>
              </li>
              <li>
                <a href="#pablo">Blog</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://vnexpress.net/thang-100-trieu-voi-he-thong-gay-quy-minh-bach-bang-blockchain-3848638.html">
              Blarity Team
            </a>
            , made with love for a better farm
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
