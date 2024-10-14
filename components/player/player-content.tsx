"use client";

import React, { useCallback, useEffect } from "react";
import { PlayerSlider } from "../ui/player-slider";
import { useAudio } from "react-use";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoShuffle,
  IoVolumeHighOutline,
} from "react-icons/io5";
import { AiFillCaretUp, AiOutlinePause } from "react-icons/ai";
import { RiPlayFill } from "react-icons/ri";
import usePlayerState from "@/hooks/usePlayerState";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import { RxLoop } from "react-icons/rx";

const PlayerContent = () => {
  const { activeSong, prevPlayerQueue, nextPlayerQueue, playBack, playNext } =
    usePlayerState();
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src ?? "",
    autoPlay: true,
  });

  const isLoading = activeSong?.src && state.buffered?.length === 0;

  const onClickPrev = () => {
    if (state.playing && state.time > 10) {
      controls.seek(0);
      return;
    }
    if (prevPlayerQueue.length === 0) return;
    playBack();
  };
  const onClickStart = () => {
    if (activeSong) {
      controls.play();
    } else {
      playNext();
    }
  };
  const onClickPause = () => {
    controls.pause();
  };
  const onClickNext = useCallback(() => {
    if (nextPlayerQueue.length === 0) {
      controls.pause();
    } else {
      playNext();
    }
  }, [controls, playNext, nextPlayerQueue]);

  useEffect(() => {
    const refAudio = ref.current;
    refAudio?.addEventListener("ended", onClickNext);
    return () => {
      refAudio?.removeEventListener("ended", onClickNext);
    };
  }, [ref, onClickNext]);

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
          max={state.duration}
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
        <article>
          <div className="flex flex-row gap-4 items-center">
            <div className="relative w-[40px] h-[40px]">
              <Image
                fill
                className="object-cover"
                src={activeSong?.imageSrc ?? ""}
                alt="img"
              />
            </div>
            <div className="flex flex-col">
              <div>{activeSong?.name}</div>
              <div className="text-neutral-500 text-[14px]">
                {activeSong?.channel} - 조회수 8.7만회 - 좋아요 9.9천개{" "}
              </div>
            </div>
          </div>
        </article>
        <div className="flex flex-row gap-2">
          <div className="hidden lg:flex flex-row gap-2">
            <IoVolumeHighOutline size={24} className="cursor-pointer" />
            <IoShuffle size={24} className="cursor-pointer" />
            <RxLoop size={24} className="cursor-pointer" />
          </div>
          <div>
            <AiFillCaretUp size={24} className="cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerContent;
