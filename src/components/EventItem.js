import React from "react";
import { useState, useEffect } from "react";

const EventItem = ({ info, calendarRef }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isCanceled, setIsCancel] = useState(false);

  const { event } = info;

  const handleClick = () => {
    setShowOptions((showOptions) => !showOptions);
  };

  useEffect(() => {
    console.log("the boolean is: ", showOptions);
  }, [showOptions]);

  const handleClickApprove = () => {
    event.setProp("backgroundColor", "#71FF33");
    event.setProp("textColor", "black");
    setShowOptions((showOptions) => !showOptions);
    console.log(isCanceled);
  };

  const handleClickCancel = () => {
    event.setProp("backgroundColor", "#EC4442");
    setIsCancel((isCanceled) => !isCanceled);
    setShowOptions((showOptions) => !showOptions);
  };

  return (
    <div>
      <div className={isCanceled && "isCanceled"} onClick={handleClick}>
        {event.title}
      </div>
      <div>
        {showOptions && (
          <div className="eventOptions">
            <button onClick={handleClickApprove}>Approve</button>
            <button onClick={handleClickCancel}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventItem;
