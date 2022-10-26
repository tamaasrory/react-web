import './App.css';
import { io } from "socket.io-client";
import { useState } from 'react';

const socket = io.connect('http://testsocket.localhost/api',{
  path: "/api/uploader",
  transports: ['websocket'],
}/*, {secure: true}*/);


function App() {
  const [Progress, setProgress] = useState({ sheet: null, current: 0 });

  const processData = async () => {
    socket.removeAllListeners();
    socket.on("eventdata", (args) => {
      console.log('eventdata => ', args)
      setProgress(args);
    });
    await fetch('http://testsocket.localhost/test/socket').then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div>
      <div style={{ padding: 10 }}>
        {Progress.sheet !== null && <div style={{ paddingBottom: 10 }}>
          Please wait in upload and processing data.
          <div>
            <strong>Current: Sheet {Progress.sheet} and at Row {Progress.current}</strong>
          </div>
        </div>}
        <button
          type="button"
          onClick={processData}
          disabled={Progress.sheet !== null && Progress.sheet === 'completed'}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 disabled"
        >
          Test Process State
        </button>
      </div>
    </div >
  );
}

export default App;
