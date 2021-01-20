import './App.css';
//connection check for react client
import io from 'socket.io-client';
const socket = io.connect("http://localhost:8080");

function App() {
  return (
    <div className="App">
      test 00
    </div>
  );
}

export default App;
