import React from "react";
import { useState, useEffect } from "react";

const EventItem = ({ info }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isCanceled, setIsCancel] = useState(false);

  const { event } = info;

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    console.log("the boolean is: ", showOptions);
  }, [showOptions]);

  const handleClickApprove = () => {
    event.setProp("backgroundColor", "#198754");
    event.setProp("textColor", "black");
    setIsCancel(false);
    setShowOptions(false);
  };

  const handleClickCancel = () => {
    event.setProp("backgroundColor", "#DC3545");
    setIsCancel(true);
    setShowOptions(false);
  };

  const handleClickDelete = () => {
    event.remove();
  };

  const handleEdit = (info) => {
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      event.setProp("title", eventNamePrompt);
    }
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
            <button onClick={handleClickDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventItem;
