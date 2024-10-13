import React from "react";
import { PlayerSlider } from "../ui/player-slider";
import { useAudio } from "react-use";

const PlayerContent = () => {
  const [audio, state, controls, ref] = useAudio({
    src: "",
    autoPlay: true,
  });

  return (
    <div className="h-full w-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider />
      </div>
    </div>
  );
};

export default PlayerContent;
