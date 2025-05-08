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
      <li style={{ textDecoration: done && "line-through" }}>{props.item}</li>;
    </div>
  );
}
