import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TopBar from "../components/TopBar";
import CancelModal from "../modals/CancelModal";
import { useSelector, useDispatch } from "react-redux";
import { cancelSeat } from "../redux/authSlice";

const MyReservationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15rem;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-left: -27rem;
  margin-bottom: 29px;
`;
const ReservationContainer = styled.div`
  width: 650px;
  height: 330px;
  border-radius: 10px;
  background-color: rgba(217, 217, 217, 0.3); 
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const SeatInfoContainer = styled.div`
  width: 550px;
  height: 100px;
  border-radius: 10px;
  background-color: #c5ede4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 75px;
  margin-top: 48px;
`
const SeatLabel = styled.span`
  font-size: 34px;
  color: #000;
  margin-left: 142px;
`
const SeatNumber = styled.span`
  font-size: 36px;
  color: #000;
  font-weight: bold;
  margin-right: 121px;
`
const CancleButton = styled.button`
  width: 242px;
  height: 76px;
  border-radius: 10px;
  border: none;
  background-color: #959595;
  color: white;
  font-size: 28px;
  text-align: center;
  cursor: pointer;
  position: absolute; /* 버튼을 부모 내에서 절대 위치 설정 */
  bottom: 31px; /* 아래로 31px 이동 */
  right: 31px; /* 오른쪽으로 31px 이동 */
`


const MyReservationPage = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [seatNumber, setSeatNumber] = useState(null);
    const userId = useSelector((state) => state.auth.userId);

    useEffect(() => {
      const fetchMyReservation = async () => {
        try {
          const response = await axios.get('http://localhost:8080/ureca/myReservation', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            params: {
              userId: userId,
            }
          });
          
          if (response.data && response.data.seatNo !== null) {
            setSeatNumber(response.data.seatNo);
          } else {
            setSeatNumber("None");
          }
        } catch (error) {
          console.error("Failed to fetch reservation data", error);
        }
      };
      fetchMyReservation(); 
    }, [userId]);

    const handleCancel = () => {
      setIsModalOpen(true); //모달열기
    };

      //취소로직 실행
    const handleConfirm = async () => {
      try {
        const response = await axios.delete('http://localhost:8080/ureca/myReservation/delete', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          data: {
            seatNo: seatNumber,
            userId: userId,
          }
        });
        if (response.status === 200){
          dispatch(cancelSeat())
          alert("예약이 취소되었습니다.");
          setSeatNumber("None");
        }
      } catch (error) {
        console.error("Failed to cancel reservation", error);
        alert("에약 취소에 실패했습니다.");
      }

      setIsModalOpen(false);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false); //모달닫기
    };

    return (
        <MyReservationContainer>
          <TopBar/>
          <Title>내가 예약한 좌석</Title>
          <ReservationContainer>
            <SeatInfoContainer>
              <SeatLabel>좌석번호</SeatLabel>
              <SeatNumber>{seatNumber}</SeatNumber>
            </SeatInfoContainer>
            <CancleButton onClick={handleCancel}>예약 취소</CancleButton>
          </ReservationContainer>

          {/* 모달 컴포넌트 */}
          <CancelModal 
            isOpen={isModalOpen}
            onConfirm={handleConfirm}
            onCancel={handleCloseModal}
          />
        </MyReservationContainer>
    );
};

export default MyReservationPage;