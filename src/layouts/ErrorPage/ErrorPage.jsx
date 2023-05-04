import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import errorImg from "../../assets/error.svg"

const Error = () => {
  return (
    <Wrapper>
      <img src={errorImg} alt="error" />
      <NavLink to="/">
        <button className="btn btn-wide btn-primary">Go Back To Home Page</button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1.3rem;
    margin-top: 3rem;
  }
`;

export default Error;