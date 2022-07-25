import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Button from "./Button";

export default function Navbar() {
  const links = ["Home", "Web-site", "Learn", "FAQ", "Contact", "About"];
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));
  return (
    <Nav state={isNavOpen ? 1 : 0} className="flex j-between a-center navbar">
      <div className="brand">
        <h2>Trading</h2>
      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul className="flex gap-2">
          {links.map((link) => {
            return (
              <li key={link}>
                <a href={link}>{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="auth flex gap-1">
        <Button text="Sign In" subduedButton />
        <Button text="Sign Up" />
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  
  .brand {
    h2 {
      font-size: 2.5rem;
    }
  }
  .toggle {
    display: none;
  }
  .links {
    ul {
      font-weight: bolder;
      li {
        cursor: pointer;
        &:first-of-type {
          a {
            opacity: 1;
          }
        }
        a {
    font-size: 16px;
    color: #111111;
    text-decoration: none;
    background: linear-gradient(0deg, rgb(180, 180, 180), rgb(239, 239, 239)) no-repeat right bottom / 0 var(--bg-h);
    transition: background-size 350ms;
    --bg-h: 100%;
    text-decoration: none;
    color: inherit;
    line-height: 3;
    padding-bottom: 5px;
    --bg-h: 2px;

    &:where(:hover, :focus-visible) {
        background-size: 100% var(--bg-h);
        background-position-x: left;
    }
}
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0 14px ;
    position: relative;
    z-index: 5;
    flex-direction: row;
    .brand {
      h2 {
        font-size: 2rem;
      }
    }
    .toggle {
      padding-right: 1rem;
      display: block;
      z-index: 51;
      svg {
        color: #2d69fd;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      z-index: 10;
      position: fixed;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: white;
      opacity: 0;
      visibility: hidden;
      transition: 0.7s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          a {
            color: #2d69fd;
          }
        }
      }
    }
    .auth {
      display: none;
    }
  }
`;
