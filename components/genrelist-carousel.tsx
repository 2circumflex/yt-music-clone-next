import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { chunkArray } from "@/lib/utils";
import GenreCard from "./genre-card";

interface GenrelistCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  genrelist: string[];
}

const GenreColumn = ({ genrelist = [] }: { genrelist: string[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {genrelist.map((genre) => {
        return <GenreCard key={genre} genre={genre} />;
      })}
    </div>
  );
};

const GenrelistCarousel: React.FC<GenrelistCarouselProps> = ({
  title,
  subTitle,
  Thumbnail,
  genrelist,
}) => {
  const chunkedGenrellist = chunkArray(genrelist, 4) as string[][];

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
          {chunkedGenrellist?.map((genrelist, index) => {
            return (
              <CarouselItem key={index} className="basis-1/3 lg:basis-1/4">
                <GenreColumn genrelist={genrelist} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default GenrelistCarousel;
