import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TopBarContainer = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 40px;
  padding: 10px 1372px 10px 23px;
  background-color: #00b8a8;
  display: felx;
  align-items: center;

`
const HomeButton = styled.img`
    width: 35px;
    height: 35px;
    color: white;
    cursor: pointer;
`
const TopBar = () => {
    const navigate = useNavigate();
    return (
        <TopBarContainer>
            <HomeButton src="/home.svg" alt="Home" onClick={() => {navigate("/")}}/>
        </TopBarContainer>
    );
};

export default TopBar;