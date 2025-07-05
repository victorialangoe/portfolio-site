import React from "react";
import Typewriter from "typewriter-effect";

export const Type: React.FC = () => {
  const typewriterOptions = {
    strings: ["Software Engineer", "ML Engineer", "NLP Enthusiast"],
    autoStart: true,
    loop: true,
    deleteSpeed: 50,
  };

  return <Typewriter options={typewriterOptions} />;
};
