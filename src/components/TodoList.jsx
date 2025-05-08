import React, { useState } from "react";

export default function TodoList(props) {
  const [done, setDone] = useState(false);

  //   function handleClick() {
  //     setDone((prev) => {
  //       return !prev;
  //     });
  //     // alert("hello");
  //   }

  return (
    <div
      //  onClick={handleClick}

      onClick={() => {
        {
          props.onChecked(props.id);
        }
      }}
    >
      <li style={{ textDecoration: done && "line-through" }}>{props.item}
      
      <button
          style={buttonStyle}
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          x
        </button>
      </li>
    </div>
  );
}

const buttonStyle = {
  padding: "10px",
  backgroundColor: "yellow",
  color: "black",
  marginLeft : "30px"
};