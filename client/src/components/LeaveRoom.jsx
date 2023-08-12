import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const LeaveRoom = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const roomDetails = {
    userid: props.userid,
    roomid: params.roomid,
  };
  const leaveRoom = async () => {
    const response = await fetch("http://localhost:5000/user/leaveroom", {
      method: "DELETE",
      credentials: "include",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(roomDetails),
    });
    const data = await response.json();
    if (data.status === 200) {
      navigate("/home");
    } else {
      alert("error");
    }
  };
  return (
    <>
      <button className="btn leave-room" onClick={leaveRoom}>
        Leave Room
      </button>
    </>
  );
};

export default LeaveRoom;
