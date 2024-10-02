import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {login, logout} from "../redux/authSlice"; // Redux 액션 불러오기

const GoogleLoginContainer = styled.div`
    min-width: 342px;
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
const GoogleLogedinContainer= styled.div`
    min-width: 342px;
    height: 534px;
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
    margin: 2.5rem 2.5rem 0 2.5rem;
`;
const LoggedInProfilePicPlaceHolder = styled.img`
    width: 196px;
    height: 177px;
    border-radius: 100%;
    margin: 2.5rem;
`;
const Nickname = styled.span`
  color: #000000;
  font-size: 30px;
  text-align: left;
  width: 100%;
  padding-left: 100px;
`
const MyInfoText = styled.span`
 color: #000000;
  font-size: 32px;
  cursor: pointer;
  text-decoration: underline;
  text-align: left;
  width: 100%;
  padding-left: 100px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
const GoogleLoginButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin-top: 3.5rem;
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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // redux 상태 사용

    const [profilePic, setProfilePic] = useState("/userbaseimg.png");
    const [nickname, setNickname] = useState("Denenne");
    
    const handleLogin = () => {
        if(isLoggedIn) {
            dispatch(logout());
        } // 로그인 상태를 반전시킴
        else {
            dispatch(login());
            setProfilePic("/catprofile.png");
            alert("로그인이 완료되었습니다.")
        }
    };

    const handleMyReservClick = () => {
        navigate("/my-reservation");
    }
    
    return (
        <>
        {isLoggedIn ? (
            <GoogleLogedinContainer>
                <LoggedInProfilePicPlaceHolder src={profilePic} alt="Profile" />
                <Nickname>{nickname}</Nickname>
                <MyInfoText onClick={handleMyReservClick}>내 예약 현황</MyInfoText>
                <GoogleLoginButton onClick={handleLogin}>
                    <LoginText>Logout</LoginText>
                    <img src="/googlelogo.png" alt="Google Logo" />
                </GoogleLoginButton>
            </GoogleLogedinContainer>
        ) : (
            <GoogleLoginContainer>
                <ProfilePicPlaceHolder src="/userbaseimg.png"alt="Profile" />
                <GoogleLoginButton onClick={handleLogin}>
                    <LoginText>Login</LoginText>
                    <img src="/googlelogo.png" alt="Google Logo" />
                </GoogleLoginButton>
            </GoogleLoginContainer>
        )}
    </>
    );
};

export default GoogleLogin;