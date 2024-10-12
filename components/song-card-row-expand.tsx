"use client";

import { Song } from "@/types";
import Image from "next/image";
import React from "react";
import {
  FiMoreVertical,
  FiPlayCircle,
  FiThumbsDown,
  FiThumbsUp,
} from "react-icons/fi";
import IconButton from "./elements/icon-button";

interface SongCardRowExpandProps {
  song: Song;
}

const SongCardRowExpand: React.FC<SongCardRowExpandProps> = ({ song }) => {
  const { channel, channelId } = song;

  return (
    <article className="flex flex-row items-center gap-4 h-[48px] w-full relative group">
      <div className="w-[48px] h-[48px] relative">
        <Image src={song.imageSrc} alt="img" fill className="object-cover" />
        <section className="hidden group-hover:flex absolute top-0 w-[48px] h-[48px]  items-center justify-center bg-black cursor-pointer">
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div>
        <div>{song.name}</div>
      </div>
      <section className="hidden absolute top-0 right-0 group-hover:flex flex-row justify-end items-center h-[48px] w-1/2 bg-[rgba(0,0,0,0.7)]">
        <IconButton icon={<FiThumbsDown size={20} />} onClickIcon={() => {}} />
        <IconButton icon={<FiThumbsUp size={20} />} onClickIcon={() => {}} />
        <IconButton
          icon={<FiMoreVertical size={20} />}
          onClickIcon={() => {}}
        />
      </section>
    </article>
  );
};

export default SongCardRowExpand;
