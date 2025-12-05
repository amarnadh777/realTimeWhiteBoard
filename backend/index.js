const express =require('express');
const app = express();
const {createServer} = require('http');
const {Server} = require('socket.io');
const cors = require('cors');
app.use(cors());

const server =  createServer(app);
const io = new Server (server, {
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
});


io.on('connection',(socket)=>{  
    console.log(`User connected: ${socket.id}`);


   socket.on("join_room",(data)=>{
    console.log("join room data",data);
const {roomId,name}=data;



    console.log(`User ${name} joined room: ${roomId}`);
    socket.join(roomId);
    socket.to(roomId).emit("user_joined", { name });


   })

   socket.on("draw_rect",(data)=>{

    console.log("draw rect data",data);

    const {roomId,x,y,width,height}=data;

    socket.to(roomId).emit("draw_rect", {x,y,width,height});



   })


    socket.on("disconnect",()=>{
        console.log(`User disconnected: ${socket.id}`);
    });


});








const port = 3000;





server.listen(port, () => {


    console.log(`Server is running on http://localhost:${port}`);
    }   )