import DarkButton from "@/components/elements/dark-button";
import WhiteButton from "@/components/elements/white-button";
import HeaderBgChanger from "@/components/header-bg-changer";
import PagePadding from "@/components/page-padding";
import PlaylistCarousel from "@/components/playlist-carousel";
import SongCardRowExpand from "@/components/song-card-row-expand";
import { getChannelById } from "@/lib/dummy-data";
import { getRandomElementFromArray } from "@/lib/utils";
import { Song } from "@/types";
import { permanentRedirect } from "next/navigation";
import React from "react";
import { FiMusic, FiShuffle } from "react-icons/fi";

interface ChannelPageProps {
  params: {
    id: string;
  };
}

const page = async (props: ChannelPageProps) => {
  const channel = await getChannelById(Number(props.params.id));

  if (!channel) {
    permanentRedirect("/");
  }

  const imageSrc: string = (getRandomElementFromArray(channel.songList) as Song)
    .imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-[200px]"></div>
      <section>
        <div className="text-[28px] font-bold">{channel.name}</div>
        <article className="mt-4 lg:hidden">
          <div>
            <DarkButton
              className="w-[230px] flex justify-center"
              label="구독중 4.18만"
            />
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <WhiteButton label="셔플" icon={<FiShuffle size={16} />} />
            <WhiteButton label="뮤직 스테이션" icon={<FiMusic size={16} />} />
          </div>
        </article>
        <div className="hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4">
          <WhiteButton label="셔플" icon={<FiShuffle size={16} />} />
          <WhiteButton label="뮤직 스테이션" icon={<FiMusic size={16} />} />
          <DarkButton
            className="w-[230px] flex justify-center"
            label="구독중 4.18만"
          />
        </div>
      </section>
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">노래</div>
        <div className="mt-[20px]">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song, idx) => {
              return <SongCardRowExpand song={song} key={idx} />;
            })}
          </ul>
        </div>
      </section>
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">앨범</div>
        <PlaylistCarousel playlistArray={channel.playlistArray} />
      </section>
      <section className="mt-[80px]"></section>
    </PagePadding>
  );
};

export default page;
