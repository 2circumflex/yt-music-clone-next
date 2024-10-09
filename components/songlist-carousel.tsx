import { Playlist, TopSong } from "@/types";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlaylistCard from "./playlist-card";
import { chunkArray } from "@/lib/utils";
import SongCard from "./song-card";

interface SonglistCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  songlistTop10: TopSong[];
}

const SongColumn = ({ songlist = [] }: { songlist: TopSong[] }) => {
  return (
    <div>
      {songlist.map((song, idx) => {
        return <SongCard key={idx} song={song} />;
      })}
    </div>
  );
};

const SonglistCarousel: React.FC<SonglistCarouselProps> = ({
  title,
  subTitle,
  Thumbnail,
  songlistTop10,
}) => {
  const chunkedTop10Songlist = chunkArray(songlistTop10, 4) as TopSong[][];

  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3">
            {Thumbnail}
            <div className="flex flex-col justify-center">
              <div>
                {subTitle && <div className="text-neutral-500">{subTitle}</div>}
              </div>
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className="left-2" />
            </div>
          </div>
        </div>
        <CarouselContent className="mt-4">
          {chunkedTop10Songlist?.map((songlist, index) => {
            return (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <SongColumn songlist={songlist} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SonglistCarousel;
