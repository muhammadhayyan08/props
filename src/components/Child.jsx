import React from "react";

const Child = ({ sendMessage }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button 
        onClick={() => sendMessage("Hello from Child!")} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Send Message to Parent
      </button>
    </div>
  );
};

export default Child;
