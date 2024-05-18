import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Error = ({error}) => {
    console.log("Page Not Found",error)
  return (
    <Wrapper>
      <img src="./images/error/error2.svg" alt="error" />
      <NavLink to="/">
        <button className="btn">Go Back</button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 0px;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    margin-top: -12rem;
    font-size: 0.8rem;
    padding: 0 1rem;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: black;
    cursor: pointer;
  }
  .btn:hover {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }

  @media (min-width: 580px) {
    .btn {
      font-size: 1.5rem;
      margin-top: -17rem;
    }
  }

  @media (min-width: 768px) {
    .btn {
      margin-top: -22rem;
    }
  }
  @media (min-width: 1024px) {
    img {
      padding: 1rem 0;
      margin-top: 2rem;
      width: 90dvh;
    }

    .btn {
      margin-top: -15rem;
    }
  }
  @media (min-width: 1250px) {
    .btn {
      margin-top: -17rem;
    }
  }
`;
export default Error;
