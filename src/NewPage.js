import React from 'react'

function NewPage() {

    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
      return (
        <div>
        <h1 style={mystyle}>Hello Style!</h1>
        <p>Add a little style!</p>
        </div>
      );
  
}

export default NewPage