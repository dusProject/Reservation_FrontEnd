import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  width: 553px;
  height: 274px;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
position: relative;
`;

const ModalTitle = styled.p`
  font-size: 36px;
  color: #000;
  margin-bottom: 38px;
  margin-top: 30px;
`;

const ConfirmButton = styled.button`
  width: 147px;
  height: 69px;
  background-color: #00b8a8;
  border: none;
  border-radius: 15px;
  color: white;
  font-size: 30px;
  text-align: centerl
  cursor: pointer;
  position: absolute; /* 버튼을 부모 내에서 절대 위치 설정 */
  bottom: 21px; /* 아래로 31px 이동 */
  right: 21px; /* 오른쪽으로 31px 이동 */
`;

const LoginModal = ({ isOpen, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalTitle>로그인 후 예약 가능합니다.</ModalTitle>
                <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
            </ModalContainer>
        </ModalOverlay>
    )
}

export default LoginModal;