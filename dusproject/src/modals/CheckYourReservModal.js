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
  width: 726px;
  height: 351px;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
position: relative;
`;

const ModalTitle = styled.p`
  font-size: 38px;
  color: #000;
  margin-bottom: 30px;
  margin-top: 0px;
`;
const ModalSubTitle = styled.p`
  font-size: 32px;
  color: #959595;
  margin-bottom: 60px;
  margin-right: 80px;
`

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
  bottom: 31px; /* 아래로 31px 이동 */
  right: 31px; /* 오른쪽으로 31px 이동 */
`;

const CheckYourReservModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalTitle>이미 예약된 좌석 정보가 존재합니다.</ModalTitle>
                <ModalSubTitle>예약을 취소 후 다시 시도해주십시오.</ModalSubTitle>
                <ConfirmButton onClick={onClose}>확인</ConfirmButton>
            </ModalContainer>
        </ModalOverlay>
    )
}

export default CheckYourReservModal;