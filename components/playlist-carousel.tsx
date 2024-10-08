import { Playlist } from "@/types";
import React from "react";

interface PlaylistCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  playlistArray?: Playlist[];
}

const PlaylistCarousel: React.FC<PlaylistCarouselProps> = ({
  title,
  subTitle,
  Thumbnail,
  playlistArray,
}) => {
  return (
    <div>
      {/* {Thumbnail}
      {title} - {subTitle}
      {JSON.stringify(playlistArray)} */}
    </div>
  );
};

export default PlaylistCarousel;
