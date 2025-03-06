import React from "react";
import "../components/OptimaCss/Timeline.css";
import timelineDataDay2 from "../constants/Day0.js";

const Day2 = () => {
  return (
    <div className="tl tl-day0">
      {timelineDataDay2.map((event) => (
        <div key={event.id} className={`tl-container ${event.position}-container`}>
          {event.image ? (
            <img
              src={event.image}
              alt={event.title}
              className="rounded-full border border-orange-700 bg-white backdrop-blur-lg"
            />
          ) : (
            <img
              src={"Untitled design1.png"}
              alt={event.title}
              className="rounded-full border border-gray-300 bg-white backdrop-blur-lg"
            />
          )}
          <div className="tl-text-box">
            <h2 className="text-xl bg-gradient-to-r from-orange-500 to-red-300 bg-clip-text text-transparent">
              {event.title}
            </h2>
            <small>{event.time}</small>
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 mt-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition-all duration-300"
            >
              <span className="text-sm md:text-base">{event.location}</span>
            </a>
            <span className={`${event.position}-container-arrow`}></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Day2;
