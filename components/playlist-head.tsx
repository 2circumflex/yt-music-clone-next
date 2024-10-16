"use client";

import { Playlist } from "@/types";
import React from "react";
import IconButton from "./elements/icon-button";
import { FiFolderPlus, FiMoreVertical, FiPlay } from "react-icons/fi";
import { getRandomElementFromArray } from "@/lib/utils";
import Image from "next/image";
import WhiteButton from "./elements/white-button";
import DarkButton from "./elements/dark-button";
import usePlayerState from "@/hooks/usePlayerState";

const PlaylistHead = ({ playlist }: { playlist: Playlist }) => {
  const { addSongList } = usePlayerState();
  const { playlistName, owner, songList } = playlist;

  const randomSong = getRandomElementFromArray(songList);

  const onClickPlaylist = () => {
    addSongList(songList);
  };

  return (
    <section>
      <div className="flex gap-[50px] flex-row">
        <div className="relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]">
          <Image alt="songImg" fill src={randomSong?.imageSrc} />
        </div>
        <article className="flex flex-col justify-center">
          <div className="font-bold text-[28px]">{playlistName}</div>
          <div className="text-neutral-400 mt-4 text-[14px]">
            <div>{`앨범 • ${owner} • 2019`}</div>
            <div>{`${songList.length}곡 • 15분`}</div>
          </div>
          <ul className="hidden lg:flex flex-row gap-4 mt-4 ">
            <WhiteButton
              onClick={onClickPlaylist}
              className="w-[85px] text-[14px]"
              icon={<FiPlay size={15} />}
              label="재생"
            />
            <DarkButton
              className="w-[135px] text-[14px]"
              icon={<FiFolderPlus size={15} />}
              label="보관함에 저장"
            />
            <IconButton
              icon={<FiMoreVertical size={24} />}
              onClickIcon={() => {}}
            />
          </ul>
        </article>
      </div>
      <ul className="flex flex-row gap-4 mt-4 lg:hidden">
        <WhiteButton
          onClick={onClickPlaylist}
          className="w-[85px] text-[14px]"
          icon={<FiPlay size={15} />}
          label="재생"
        />
        <DarkButton
          className="w-[135px] text-[14px]"
          icon={<FiFolderPlus size={15} />}
          label="보관함에 저장"
        />
        <IconButton
          icon={<FiMoreVertical size={24} />}
          onClickIcon={() => {}}
        />
      </ul>
    </section>
  );
};

export default PlaylistHead;
