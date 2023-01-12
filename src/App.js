import './App.css';

import { FcBusinessContact } from "react-icons/fc";

function App() {
  return (
    <div className="App">
      <h1>Business Card</h1>
      <FcBusinessContact style={{height:"30px",width:"30px",backgroundColor:"purple", padding:"5px", borderRadius:"50%" }} />
    </div>
  );
}

export default App;
