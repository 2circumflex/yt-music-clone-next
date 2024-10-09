"use client";

import { getRandomElementFromArray } from "@/lib/utils";
import { Playlist, Song } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PlaylistCard = ({ playlist }: { playlist: Playlist }) => {
  const router = useRouter();
  const { id, owner, playlistName, songList } = playlist;

  const songListLen = songList?.length;
  const imgSrc = (getRandomElementFromArray(songList) as Song).imageSrc;

  const onClickCard = () => {
    router.push(`/playlist?list=${id}`);
  };

  return (
    <article className="h-[240px] cursor-pointer">
      <section onClick={onClickCard} className="relative h-[136px]">
        <Image
          src={imgSrc}
          fill={true}
          alt="thumbnail"
          className="object-cover"
        />
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songListLen}개`}</div>
      </section>
    </article>
  );
};

export default PlaylistCard;
