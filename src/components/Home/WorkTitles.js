import React from "react";
import Typewriter from "typewriter-effect";

function WorkTitles() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Java Full Stack Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default WorkTitles;
