import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle />
        <span className="ps-1">Login With Google</span>
      </Button>
      <Button variant="outline-secondary">
        <FaGithub />
        <span className="ps-2"> Login With Github</span>
      </Button>
      <div className="mt-3">
        <h4>Find Us on</h4>
        <ListGroup className="gap-3">
          <ListGroup.Item className="d-flex gap-2 align-items-center">
            <FaFacebook className="fs-4" />
            <span className="fs-4">Facebook</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex gap-2 align-items-center">
            <FaTwitter className="fs-4" />
            <span className="fs-4 ">Twitter</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex gap-2 align-items-center">
            <FaInstagram className="fs-4" />
            <span className="fs-4">Instagram</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            height: "500px",
            width: "310px",
            backgroundSize: "cover",
            borderRadius: "10px",
          }}
        >
          <div className="">
            <h3 className="text-light text-center pt-5 ">
              Create an Amazing Newspaper
            </h3>
            <h5 className="text-light text-center px-3 pt-4">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </h5>
            <div className="text-center pt-4">
              <button className="bg-danger text-light pt-3 fs-5 pb-3 px-5 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
