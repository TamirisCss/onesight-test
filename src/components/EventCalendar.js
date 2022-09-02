import React from "react";
import { useState, useRef } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { v4 as uuid } from "uuid";

import EventItem from "./EventItem";

const EventCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelect = (info) => {
    const { start, end, allDay } = info;
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      let calendarApi = info.view.calendar;
      calendarApi.addEvent({
        id: uuid(),
        title: eventNamePrompt,
        start: start,
        end: end,
        allDay: allDay,
      });
    }
  };

  const handleEvents = (events) => {
    setEvents(events);
  };

  return (
    <div className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        view={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "today,prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        eventContent={(info) => <EventItem info={info} />}
        dayMaxEvents={3}
        aspectRatio={6}
        height={600}
        editable={true}
        selectable={true}
        selectMirror={true}
        select={handleSelect}
        eventsSet={handleEvents}
      />
    </div>
  );
};

export default EventCalendar;
