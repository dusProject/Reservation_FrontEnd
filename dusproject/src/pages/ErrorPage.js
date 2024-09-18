import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 279px;
  height: 100%;
  text-align: center;
  margin
`;

const ErrorMessage = styled.h1`
  font-size: 64px;
  color: #717171;
  font-weight: bold;
  margin-bottom: 25px;
`;

const SubMessage = styled.p`
  font-size: 32px;
  color: #959595;
  margin-bottom: 76px
`;

const HomeButton = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
`

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
    }

    return (
        <ErrorContainer>
            <ErrorMessage>에러가 발생했습니다.</ErrorMessage>
            <SubMessage>아래 홈버튼을 클릭하며 메인화면으로 이동합니다.</SubMessage>
            <HomeButton src="/homecopy.svg" alt="Home" onClick={handleHomeClick} />
        </ErrorContainer>
    );
};

export default ErrorPage;