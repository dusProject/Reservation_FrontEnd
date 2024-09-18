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
  width: 700px;
  height: 355px;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalTitle = styled.p`
  font-size: 36px;
  color: #000;
  margin-bottom: 38px;
  margin-top: 30px;
`;

const ModalSubText = styled.p`
  font-size: 26px;
  color: #959595;
  margin-bottom: 65px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 35px;
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
`;
const CancelButton = styled.button`
  width: 147px;
  height: 69px;
  background-color: #959595;
  border: none;
  border-radius: 15px;
  color: white;
  font-size: 30px;
  text-align: centerl
  cursor: pointer;
`;

const CancelModal = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalTitle>예약한 좌석을 취소하시겠습니까?</ModalTitle>
                <ModalSubText>취소하신다면 확인을 눌러주세요</ModalSubText>
                <ButtonContainer>
                    <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
                    <CancelButton onClick={onCancel}>취소</CancelButton>
                </ButtonContainer>
            </ModalContainer>
        </ModalOverlay>
    )
}

export default CancelModal;