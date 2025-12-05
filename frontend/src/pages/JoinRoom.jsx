import React, { useState, useRef } from "react";
import socket from "../../socket/socket";
import { useNavigate } from "react-router-dom";

const JoinRoom = () => {
  const [roomId, setRoomId] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const nameInputRef = useRef(null);
  const roomIdInputRef = useRef(null);
  const navigate = useNavigate();

  const showError = (msg, ref = null) => {
    setError(msg);
    if (ref) ref.current.focus(); // auto focus error field
  };

  const generateRoomId = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const createRoom = () => {
    setError("");

    if (!name.trim()) return showError("Please enter your name", nameInputRef);

    const newRoomId = generateRoomId();

localStorage.setItem("name", name);
  localStorage.setItem("roomId", newRoomId);


    socket.emit("join_room", { name, roomId: newRoomId });

    

    console.log(`Room created: ${newRoomId}`);
    setRoomId(newRoomId); // show generated ID to user

      navigate(`/whiteboard/2323`)


  };

  const joinRoom = () => {
    setError("");

    if (!name.trim()) return showError("Please enter your name", nameInputRef);
    if (!roomId.trim()) return showError("Please enter Room ID", roomIdInputRef);
    if (roomId.trim().length < 4)
      return showError("Room ID must be at least 4 characters", roomIdInputRef);

    socket.emit("join_room", { name, roomId });

    console.log(`Joined Room: ${roomId}`);


localStorage.setItem("name", name);
  localStorage.setItem("roomId", roomId);
     navigate(`/whiteboard/2323`)
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white max-w-md w-full rounded-lg shadow-lg p-8">

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">Whiteboard App</h1>
        <p className="text-sm text-gray-500 text-center mb-6">Real-Time Collaboration Tool</p>

        {error && (
          <p className="text-red-500 text-center font-medium mb-3">{error}</p>
        )}

        <label className="text-sm font-medium text-gray-700">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 mt-1 mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="text-sm font-medium text-gray-700">Room ID</label>
        <input
          ref={roomIdInputRef}
          type="text"
          placeholder="Enter Room ID"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 mt-1 mb-4"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />

        <button
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg"
          onClick={createRoom}
        >
          Create New Room
        </button>

        <p className="text-gray-500 text-center my-2">or</p>

        <button
          className="w-full bg-white text-indigo-600 border-2 border-indigo-600 font-semibold py-3 rounded-lg"
          onClick={joinRoom}
        >
          Join Room
        </button>

      </div>
    </div>
  );
};

export default JoinRoom;
