import HeaderBgChanger from "@/components/header-bg-changer";
import PagePadding from "@/components/page-padding";
import PlaylistHead from "@/components/playlist-head";
import SongCardRowExpand from "@/components/song-card-row-expand";
import { getPlaylistById } from "@/lib/dummy-data";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";

interface PlaylistPageProps {
  searchParams: {
    list: string;
  };
}

const page = async (props: PlaylistPageProps) => {
  const playlist = await getPlaylistById(Number(props.searchParams.list));

  if (!playlist) {
    permanentRedirect("/");
  }

  const imageSrc: string = getRandomElementFromArray(
    playlist.songList
  )?.imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-12"></div>
      <PlaylistHead playlist={playlist} />
      <div className="mt-12"></div>
      <section className="flex flex-col gap-2">
        {playlist.songList.map((song, idx) => {
          return <SongCardRowExpand song={song} key={idx} />;
        })}
      </section>
    </PagePadding>
  );
};

export default page;
