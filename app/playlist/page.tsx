import HeaderBgChanger from "@/components/header-bg-changer";
import PagePadding from "@/components/page-padding";
import PlaylistHead from "@/components/playlist-head";
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
      <PlaylistHead playlist={playlist} />
    </PagePadding>
  );
};

export default page;
