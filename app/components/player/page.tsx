"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheck(e.target.checked);
    if (e.target.checked) {
      if (!isPlaying) {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <label className="switch">
      <audio ref={audioRef} src={"/water.mp3"} />
      <input
        type="checkbox"
        checked={isCheck}
        onChange={handleCheckboxChange}
      />
      <span className="slider">
        <span className="slider-play"></span>
        <span className="slider-pause"></span>
      </span>
    </label>
  );
};

export default Player;
