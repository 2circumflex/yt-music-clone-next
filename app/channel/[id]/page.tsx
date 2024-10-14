import HeaderBgChanger from "@/components/header-bg-changer";
import PagePadding from "@/components/page-padding";
import PlaylistCarousel from "@/components/playlist-carousel";
import SongCardRowExpand from "@/components/song-card-row-expand";
import { getChannelById } from "@/lib/dummy-data";
import { getRandomElementFromArray } from "@/lib/utils";
import { Song } from "@/types";
import { permanentRedirect } from "next/navigation";
import React from "react";
import ChannelHead from "../components/channel-head";

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
      <ChannelHead channel={channel} />
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
