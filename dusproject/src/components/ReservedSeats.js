import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginModal from "../modals/LoginModal";
import axios from "axios";

const SeatLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 8%;

`
const SeatFront = styled.div`
  width: 430px;
  height: 54px;
  font-size: 32px;
  color: #717171;
  border-radius: 10px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 59px;
`;

const SeatSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: -70px;
`;
// const SeatGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(6, 100px);
//   grid-gap: 10px;
//   margin-top: 49px;
//   margin-bottom: 59px;
// `;
const SeatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 110px);
  grid-gap: 0px;
  margin-right: -50px;
`;
const Seat = styled.div`
  width: 97px;
  height: 74px;
  border-radius: 10px;
  background-color: ${props => (props.reserved ? '#d9d9d9' : '#c5ede4')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 13px;
  color: ${props => (props.reserved ? '#959595' : '#c5ede4')};
`;

const ReserveButton = styled.button`
  width: 409px;
  height: 83px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #959595;
  font-size: 32px;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 45px;
`;

const ReservedSeats = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [isModalOpen, setIsModalOpen ] = useState(false);
    // const seats = [
    //     { id: 'A1', reserved: false, name: "" },
    //     { id: 'A2', reserved: false, name: "" },
    //     { id: 'A3', reserved: false, name: "" },
    //     { id: 'A4', reserved: false, name: "" },
    //     { id: 'A5', reserved: false, name: "" },
    //     { id: 'A6', reserved: false, name: "" },
    //     { id: 'B1', reserved: false, name: "" },
    //     { id: 'B2', reserved: false, name: "" },
    //     { id: 'B3', reserved: false, name: "" },
    //     { id: 'B4', reserved: false, name: "" },
    //     { id: 'B5', reserved: false, name: "" },
    //     { id: 'B6', reserved: false, name: "" },
    //     { id: 'C1', reserved: false, name: "" },
    //     { id: 'C2', reserved: false, name: "" },
    //     { id: 'C3', reserved: false, name: "" },
    //     { id: 'C4', reserved: false, name: "" },
    //     { id: 'C5', reserved: false, name: "" },
    //     { id: 'C6', reserved: false, name: "" },
    //     { id: 'D1', reserved: false, name: "" },
    //     { id: 'D2', reserved: false, name: "" },
    //     { id: 'D3', reserved: false, name: "" },
    //     { id: 'D4', reserved: false, name: "" },
    //     { id: 'D5', reserved: false, name: "" },
    //     { id: 'D6', reserved: false, name: "" },
    //     { id: 'E1', reserved: false, name: "" },
    //     { id: 'E2', reserved: false, name: "" },
    //     { id: 'E3', reserved: false, name: "" },
    //     { id: 'E4', reserved: false, name: "" },
    //     { id: 'E5', reserved: false, name: "" },
    //     { id: 'E6', reserved: false, name: "" }
    // ];
    const [seats, setSeats] = useState([]);

    useEffect(() => {
      const fetchSeats = async () =>{
        try {
          const response = await axios.get('http://localhost:8080/ureca', {
            headers: {
              Authorization: `Bearer ${'abc'}`, 
            },
          });
          const seatData = response.data.map(seat => ({
            id: seat.seatNo,
            reserved: seat.status,
            name: seat.userName,
          }));
          setSeats(seatData);
        } catch(error) {
          console.error("Failed to fetch seat data", error.response, error);
          setSeats([
            { id: 'A1', reserved: false, name: "" },
            { id: 'A2', reserved: false, name: "" },
            { id: 'A3', reserved: false, name: "" },
            { id: 'A4', reserved: false, name: "" },
            { id: 'A5', reserved: false, name: "" },
            { id: 'A6', reserved: false, name: "" },
            { id: 'B1', reserved: false, name: "" },
            { id: 'B2', reserved: false, name: "" },
            { id: 'B3', reserved: false, name: "" },
            { id: 'B4', reserved: false, name: "" },
            { id: 'B5', reserved: false, name: "" },
            { id: 'B6', reserved: false, name: "" },
            { id: 'C1', reserved: false, name: "" },
            { id: 'C2', reserved: false, name: "" },
            { id: 'C3', reserved: false, name: "" },
            { id: 'C4', reserved: false, name: "" },
            { id: 'C5', reserved: false, name: "" },
            { id: 'C6', reserved: false, name: "" },
            { id: 'D1', reserved: false, name: "" },
            { id: 'D2', reserved: false, name: "" },
            { id: 'D3', reserved: false, name: "" },
            { id: 'D4', reserved: false, name: "" },
            { id: 'D5', reserved: false, name: "" },
            { id: 'D6', reserved: false, name: "" },
            { id: 'E1', reserved: false, name: "" },
            { id: 'E2', reserved: false, name: "" },
            { id: 'E3', reserved: false, name: "" },
            { id: 'E4', reserved: false, name: "" },
            { id: 'E5', reserved: false, name: "" },
            { id: 'E6', reserved: false, name: "" }
        ]);
        }
      };
      fetchSeats();

      // SSE 구독을 추가
      const eventSource = new EventSource('http://localhost:8080/home/sse'); // 서버의 SSE 엔드포인트
      
      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setSeats(prevSeats => {
          return prevSeats.map(seat => 
            seat.id === data.seatNo
            ? {...seat, reserved: data.status, name: data.userName }
            : seat
          );
        });
      }; 
    eventSource.onerror = (error) => {
      console.error("SSE connection error:", error);
      eventSource.close();
    };

    // 컴포넌트 언마운트 시 SSE 연결 닫기
    return () => {
      eventSource.close();
    };
    }, []);

    const seatRows = [];

    for (let i = 0; i < seats.length; i += 6) {
        seatRows.push(seats.slice(i, i + 6));
    }
    const handleButtonClick = () => {
       if( isLoggedIn ) {
        navigate("/reservation");
       }
       else {
        setIsModalOpen(true);
       }
    }
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    return (
        <SeatLayoutContainer>
            <SeatFront>front</SeatFront>
            {seatRows.map((row, index) => (
                <SeatSection key={index}>
                <SeatRow>
                  {row.slice(0, 2).map(seat => (
                    <Seat key={seat.id} reserved={seat.reserved}>
                      {seat.reserved ? seat.name : ""}
                    </Seat>
                  ))}
                </SeatRow>
                <SeatRow>
                  {row.slice(2, 4).map(seat => (
                    <Seat key={seat.id} reserved={seat.reserved}>
                      {seat.reserved ? seat.name : ""}
                    </Seat>
                  ))}
                </SeatRow>
                <SeatRow>
                  {row.slice(4, 6).map(seat => (
                    <Seat key={seat.id} reserved={seat.reserved}>
                      {seat.reserved ? seat.name : ""}
                    </Seat>
                  ))}
                </SeatRow>
              </SeatSection>
            ))}
            <ReserveButton onClick={handleButtonClick}>좌석 예약하기</ReserveButton>
            <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </SeatLayoutContainer>
    );
};

export default ReservedSeats;


