import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TopBar from "../components/TopBar";
import ReserveModal from "../modals/ReservModal";

const ReservationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* 가로 가운데 정렬 */
  height: 100%; /* 컨테이너가 화면 전체 높이를 차지하도록 설정 */
  margin-top: 8rem;
`;
const InformColorContainer = styled.div`
  width: 132px;
  height: 296px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(217, 217, 217, 0.3);
  margin-left: 33px; 
  margin-top: 33px;
`;
const InformText = styled.span`
  color: #000000;
  font-size: 16px;
  margin-top: 30px;
  margin-bottom: 15px;
`;
const InformColor1 = styled.div`
  width: 67px;
  height: 67px;
  border-radius:100%;
  background-color: #c5ede4;
`
const InformColor2 = styled.div`
  width: 67px;
  height: 67px;
  border-radius:100%;
  background-color: #d9d9d9;
`
const SeatLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
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
  margin-bottom: 61px;
`;

const SeatSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: -90px;
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
  grid-template-columns: repeat(3, 135px);
  grid-gap: 0px;
  margin-right: -50px;
`;
const Seat = styled.div`
  width: 120px;
  height: 92px;
  border-radius: 10px;
  background-color: ${props => (props.reserved ? '#d9d9d9' : '#c5ede4')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  margin-bottom: 17px;
  cursor: ${props => (props.reserved ? 'normal' : 'pointer')};
  color: ${props => (props.reserved ? '#959595' : '#c5ede4')};
`;

const ReservationPage = () => {
    const seats = [
        { id: 'A1', reserved: false, name: "" },
        { id: 'A2', reserved: false, name: "" },
        { id: 'A3', reserved: false, name: "" },
        { id: 'A4', reserved: true, name: "연개소문" },
        { id: 'A5', reserved: false, name: "" },
        { id: 'A6', reserved: true, name: "예약됨" },
        { id: 'B1', reserved: false, name: "" },
        { id: 'B2', reserved: false, name: "" },
        { id: 'B3', reserved: false, name: "" },
        { id: 'B4', reserved: false, name: "" },
        { id: 'B5', reserved: false, name: "" },
        { id: 'B6', reserved: false, name: "" },
        { id: 'C1', reserved: false, name: "" },
        { id: 'C2', reserved: false, name: "" },
        { id: 'C3', reserved: true, name: "데이" },
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
    ];

    const seatRows = [];
    for (let i = 0; i < seats.length; i += 6) {
        seatRows.push(seats.slice(i, i + 6));
    };

    const [selectedSeat, setSelectedSeat] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSeatClick = (seat) => {
      if (!seat.reserved) {
        setSelectedSeat(seat.id);
        setIsModalOpen(true);
      }
    };

    const handleConfirm = () => {
      alert(`${selectedSeat}번 좌석이 예약되었습니다.`);
      setIsModalOpen(false);
      //예약처리 로직 추가
    };

    const handleCancel = () => {
      setIsModalOpen(false); //모달 닫기
    }
    return (
        <ReservationContainer>
          <TopBar />
            <SeatLayoutContainer>
                <SeatFront>front</SeatFront>
                {seatRows.map((row, index) => (
                    <SeatSection key={index}>
                    <SeatRow>
                    {row.slice(0, 2).map(seat => (
                        <Seat 
                          key={seat.id} 
                          reserved={seat.reserved}
                          onClick={() => handleSeatClick(seat)}
                        >
                        {seat.reserved ? seat.name : ""}
                        </Seat>
                    ))}
                    </SeatRow>
                    <SeatRow>
                    {row.slice(2, 4).map(seat => (
                        <Seat 
                          key={seat.id} 
                          reserved={seat.reserved}
                          onClick={() => handleSeatClick(seat)}
                        >
                        {seat.reserved ? seat.name : ""}
                      </Seat>
                    ))}
                    </SeatRow>
                    <SeatRow>
                    {row.slice(4, 6).map(seat => (
                        <Seat 
                          key={seat.id} 
                          reserved={seat.reserved}
                          onClick={() => handleSeatClick(seat)}
                        >
                        {seat.reserved ? seat.name : ""}
                      </Seat>
                    ))}
                    </SeatRow>
                </SeatSection>
                ))}
            </SeatLayoutContainer>
            <InformColorContainer>
                <InformText>예약 가능</InformText>
                <InformColor1 />
                <InformText>예약 불가</InformText>
                <InformColor2 />
            </InformColorContainer>
            {/* 모달 컴포넌트 */}
            <ReserveModal 
              isOpen={isModalOpen}
              seatId={selectedSeat}
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
        </ReservationContainer>
    );
};

export default ReservationPage;