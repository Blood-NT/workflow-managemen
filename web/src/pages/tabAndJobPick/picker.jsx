import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Picker = ({ conversation }) => {
  const [task, setUser] = useState(conversation);
// const[checkdonen, setcheck]=useState(checkDone);

  return (
    <>
      {task && (
        <div className="conversation">
          {/* <img
            className="conversationImg"
            src={
              user?.avatar
                ? user?.avatar
                : "https://i0.wp.com/researchictafrica.net/wp/wp-content/uploads/2016/10/default-profile-pic.jpg?ssl=1"
            }
            alt=""
          /> */}
          <span className="conversationName">{task?.id}</span>
        </div>
      )}
    </>
  );
};

export default Picker;
