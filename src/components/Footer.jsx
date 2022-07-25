import React from "react";
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
export default function Footer() {


  const companyLinks = [
    "About",
    "Careers",
    "Affiliates",
    "Blog",
    "Press",
    "Investors",
    "Legal & Privacy",
    "Cookie policy",
    "Cookie preferences",
  ];
  const LearnLinks = [
    "Browse crypto prices",
    "Coinbase Bytes newsletter",
    "Crypto basics",
    "Tips & Turoials",
    "Market Updates",
    "What is Bitcoin?",
    "What is crypto?",
    "What is a blockchain?",
    "How to set up a crypto waller",
    "How to send crypto",
  ];
  const socialIcons = [<BsFacebook />, <BsTwitter />, <BsYoutube />];
  return (
    <Foot className="flex column gap">
      <div  className="upper-footer">
        <div className=" flex column gap-1">
          <div className="brand">
            <h2>Treding</h2>
          </div>
          <div className="info">
            <span>Phone : +998 93 917 07 31</span>
            <span>Email : shohjahonasqarov.web@gmail.com</span>
          </div>
          <div className="social-icons flex gap-2">
            {socialIcons.map((icon, index) => {
              return (
                <div className="icon" key={index}>
                  {icon}
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex column gap-1">
          <div className="title">
            <h3>Company</h3>
          </div>
          <ul className="flex column gap-half">
            {companyLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className=" flex column gap-1">
          <div className="title">
            <h3>Learn</h3>
          </div>
          <ul className="flex column gap-half">
            {LearnLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className=" flex column gap-1">
          <div className="title">
            <h3>Company</h3>
          </div>
          <ul className="flex column gap-half">
            {companyLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>

      </div>

    </Foot>
  );
}

const Foot = styled.footer`
  max-width: 1340px;
  display: block;
  margin: 0 auto;
  padding: 50px 20px;
  position: relative;
  .upper-footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    li {
      font-size: 16px;
      line-height: 40px;
      transition: all .3s;
      &:hover {
        border-left: 3px solid red;
        padding-left: 20px;
      }
    }
    .social-icons {
      margin-top: 2rem;
      svg {
        font-size: 2rem;
      }
    }
    .spacemen {
      position: absolute;
      right: 0rem;
      top: -23rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem 2rem;
    .social-icons {
      display: none;
      flex-direction: row;
    }
    .upper-footer {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 20px 0;
      * {
        text-align: center;
      }

      li {
        font-size: 18px;
        line-height: 35px;
        
      }

      h3 {
        font-size: 20px;
      }
    }
    .spacemen {
      display: none !important;
    }
    .cards {
      img {
        width: 80vw;
      }
    }
  }
`;
