import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { reserveSeat } from "../redux/authSlice";
import TopBar from "../components/TopBar";
import ReserveModal from "../modals/ReservModal";
import CheckYourReservModal from "../modals/CheckYourReservModal";
import ReservedSeatModal from "../modals/ReservedSeatModal";

const ReservationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* 가로 가운데 정렬 */
  height: 100%; /* 컨테이너가 화면 전체 높이를 차지하도록 설정 */
  margin-top: 8rem;
  margin-left: 10rem;

`;
const InformColorContainer = styled.div`
  min-width: 132px;
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
    // const seats = [
    //     { id: 'A1', reserved: false, name: "" },
    //     { id: 'A2', reserved: false, name: "" },
    //     { id: 'A3', reserved: false, name: "" },
    //     { id: 'A4', reserved: true, name: "연개소문" },
    //     { id: 'A5', reserved: false, name: "" },
    //     { id: 'A6', reserved: true, name: "예약됨" },
    //     { id: 'B1', reserved: false, name: "" },
    //     { id: 'B2', reserved: false, name: "" },
    //     { id: 'B3', reserved: false, name: "" },
    //     { id: 'B4', reserved: false, name: "" },
    //     { id: 'B5', reserved: false, name: "" },
    //     { id: 'B6', reserved: false, name: "" },
    //     { id: 'C1', reserved: false, name: "" },
    //     { id: 'C2', reserved: false, name: "" },
    //     { id: 'C3', reserved: true, name: "데이" },
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
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCheckYourReservModalOpen, setIsCheckYourReservModalOpen] = useState(false);
    const [isReservedSeatModalOpen, setIsReservedSeatModalOpen] = useState(false);
    const [seats, setSeats] = useState([]);
    const userId = useSelector((state) => state.auth.userId);

    const dispatch = useDispatch();
    const myrReservedSeat = useSelector((state) => state.auth.reservedSeat);
   
    useEffect(() => {
      const fetchSeats = async () => {
        try {
          const response = await axios.get('http://localhost:8080/ureca/reservation', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          if(response.status === 200) {
            const seatData = response.data.map(seat => ({
              id: seat.seatNo,
              reserved: seat.status,
              name: seat.userName
            }));
            setSeats(seatData);
          }
        } catch (error) {
          console.error("Failed to fetch seat data", error);
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

      // SSE 구독 로직 추가
      const eventSource = new EventSource('http://localhost:8080/reservation/sse');

      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setSeats((prevSeats) => 
        prevSeats.map((seat) =>
          seat.id === data.seatNo
          ? {...seat, reserved: data.status, name: data.userName }
          : seat
       )
      );
      };
      eventSource.onerror = (error) => {
        console.error("SSE connectionn error:", error);
        eventSource.close();
      };
      return () => {
        eventSource.close();
      }
    }, []);
    
    const seatRows = [];
    for (let i = 0; i < seats.length; i += 6) {
        seatRows.push(seats.slice(i, i + 6));
    };


    const handleSeatClick = (seat) => {
      if (!seat.reserved && !myrReservedSeat) {
        setSelectedSeat(seat.id);
        setIsModalOpen(true);
      } else if (myrReservedSeat){
        setIsCheckYourReservModalOpen(true);
      } else if (seat.reserved) {
        setIsReservedSeatModalOpen(true);
      }
        
    };

    const handleConfirm = async () => {
      //예약처리 로직 추가
      try {
        const response = await axios.patch(
          `http://localhost:8080/ureca/reservation/${selectedSeat}`, 
          {
            userId: userId,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.status === 200 ){
          dispatch(reserveSeat(selectedSeat)); 
          alert(`${selectedSeat}번 좌석이 예약되었습니다.`);
          setIsModalOpen(false);
        }
      } catch (error) {
        console.error("Failed to reserve seat", error);
        alert("예약에 실패하였습니다.")
      }
    };

    const handleCancel = () => {
      setIsModalOpen(false); //모달 닫기
    }
    const handleCheckYourReservModalClose = () => {
      setIsCheckYourReservModalOpen(false); // 예약 확인 모달 닫기
    };
    const handleReservedSeatModalClose = () => {
      setIsReservedSeatModalOpen(false);
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
            {/* 예약 모달 컴포넌트 */}
            <ReserveModal 
              isOpen={isModalOpen}
              seatId={selectedSeat}
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
            {/* 이미 예약된 내역 확인 요청 모달 컴포넌트 */}
            <CheckYourReservModal
              isOpen={isCheckYourReservModalOpen}
              onClose={handleCheckYourReservModalClose}
            />
            {/* 이미 예약된 좌석 모달 컴포넌트 */}
            <ReservedSeatModal 
              isOpen={isReservedSeatModalOpen}
              onClose={handleReservedSeatModalClose}
            />
        </ReservationContainer>
    );
};

export default ReservationPage;