import React from "react";
import styled from "styled-components";
import { useState } from "react";

const GoogleLoginContainer = styled.div`
    width: 342px;
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    margin-left: 8%;
    margin-right: 10%;
    background-color: rgba(217, 217, 217, 0.3); 
`;

const ProfilePicPlaceHolder = styled.img`
    width: 177px;
    height: 177px;
    border-radius: 30%;
    opacity: 0.3;
    margin: 2.5rem;
`;
const GoogleLoginButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 285px;
    height: 62px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
    padding: 0 20px; /* 좌우 padding 추가 */
    cursor: pointer;
    

    img {
        width: 46px;
        height: 46px;
    }
`;
const LoginText = styled.span`
    flex-grow: 1; /* Login 텍스트를 가운데로 정렬하기 위해 공간 확장 */
    text-align: center; /* 가운데 정렬 */
    font-size: 24px;
`;
const GoogleLogin = () => {
    const [profilePic, setProfilePic] = useState("/userbaseimg.png");
    
    const handleLogin = () => {

    };
    
    return (
        <GoogleLoginContainer>
            <ProfilePicPlaceHolder src={profilePic} alt="profile" />
            <GoogleLoginButton onClick={handleLogin}>
                <LoginText>Login</LoginText>
                <img src="/googlelogo.png" alt="Google Logo" />
            </GoogleLoginButton>
        </GoogleLoginContainer>
    );
};

export default GoogleLogin;