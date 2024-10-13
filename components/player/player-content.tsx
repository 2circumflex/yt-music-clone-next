"use client";

import React from "react";
import { PlayerSlider } from "../ui/player-slider";
import { useAudio } from "react-use";
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from "react-icons/io5";
import { AiOutlinePause } from "react-icons/ai";
import { RiPlayFill } from "react-icons/ri";
import usePlayerState from "@/hooks/usePlayerState";
import { ClipLoader } from "react-spinners";

const PlayerContent = () => {
  const { activeSong } = usePlayerState();
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src ?? "",
    autoPlay: true,
  });

  const isLoading = activeSong?.src && state.buffered?.length === 0;

  const onClickPrev = () => {};
  const onClickStart = () => {
    controls.play();
  };
  const onClickPause = () => {
    controls.pause();
  };
  const onClickNext = () => {};

  return (
    <div className="h-full w-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider
          className="w-full"
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={(value) => {
            controls.seek(value[0]);
          }}
        />
      </div>
      {audio}
      <section className="flex flex-row justify-between items-center w-full h-full px-2 lg:px-6">
        <div className="h-full flex flex-row items-center gap-1 lg:gap-8">
          <IoPlaySkipBackSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickPrev}
          />
          {isLoading ? (
            <ClipLoader color="#FFF" />
          ) : state.playing ? (
            <AiOutlinePause
              size={40}
              className="cursor-pointer"
              onClick={onClickPause}
            />
          ) : (
            <RiPlayFill
              size={40}
              className="cursor-pointer"
              onClick={onClickStart}
            />
          )}
          <IoPlaySkipForwardSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickNext}
          />
        </div>
        <article></article>
        <div></div>
      </section>
    </div>
  );
};

export default PlayerContent;
