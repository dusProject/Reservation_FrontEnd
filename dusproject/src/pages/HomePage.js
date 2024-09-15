import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "../components/GoogleLogin";
import ReservedSeats from "../components/ReservedSeats";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-top: 9rem;
  margin-left: 10%;
  margin-right: 10%;
  white-space: nowrap;
`

const HomePage = () => {
    return (
        <HomePageContainer>
            <GoogleLogin />
            <ReservedSeats />
        </HomePageContainer>
    );
};

export default HomePage;