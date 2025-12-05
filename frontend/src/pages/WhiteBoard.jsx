import React, { useEffect, useState } from 'react';
import { Stage, Layer, Line, Rect } from 'react-konva';
import socket from '../../socket/socket';
import toast from 'react-hot-toast';
import Toolbar from '../components/Toolbar';
import Topbar from '../components/Topbar';
const WhiteBoard = () => {
    const [tool, setTool] = useState("rect");
    const [shapes, setShapes] = useState([]);

    const roomId = localStorage.getItem("roomId");
    const name = localStorage.getItem("name");  


    const handleMouseDown = (e) => {
        console.log("mouse down");
        const pos = e.target.getStage().getPointerPosition();
        console.log(pos);
        setShapes({

    x: pos.x,
    y: pos.y,
    width: 0,
    height: 0,
        })

        socket.emit("draw_rect", {

                x: pos.x,
    y: pos.y,
    width: 0,
    height: 0,
    roomId: roomId



        })

    }



    useEffect(() => {


     socket.on("user_joined", (data) => {
        const {name } = data;
        console.log("User joined:", data);
            toast.success(`${name} joined the room`);

     });

     socket.on("draw_rect", (data) => {
        console.log("Drawing data received:", data);

        setShapes(data); // Update shapes with received data
     });


   return () => {
    socket.off("user_joined");
   }

    }, []);
    return (
        <div className='w-screen h-screen bg-white'>


          <Topbar  roomId={roomId} name={name   }/>
            <Toolbar/>

            <Stage width={window.innerWidth} height={window.innerHeight}
            
            onMouseDown={handleMouseDown}

  
            >
                <Layer>
                  <Rect
            key={232}   
            x={shapes.x}
            y={shapes.y}
            width={100}
            height={100}
            stroke="black"
            strokeWidth={1}
          />
                </Layer>
            </Stage>


            
        </div>
    );
}

export default WhiteBoard;
