import { useState } from "react";
import Child from "./components/Child"; 

function Parent() {
  const [message, setMessage] = useState("No message yet");

  
  function handleChildMessage(childData) {
    setMessage(childData);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Parent Component</h1>
      <h2>Message from Child: {message}</h2>
      <Child sendMessage={handleChildMessage} />
    </div>
  );
}

export default Parent;
