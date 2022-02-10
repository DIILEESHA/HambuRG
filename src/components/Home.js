import React from "react";
import '../styles/home.css'
import { FaGithub, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <section
      className="
  homepage"
    >
      <div className="over">
          <img className="dp" src="https://avatars.githubusercontent.com/u/89340276?v=4" alt="" />
        <h1>Dileesha Lakshan</h1>
        <p> Frontend Web Developer</p>
        <ul className="hul">
          <li>
            <a href="www.twitter.com" target="_blank" rel="noopenner noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/DILEESHA1 " target="_blank" rel="noopenner noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
