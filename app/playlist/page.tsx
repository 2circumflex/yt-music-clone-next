import HeaderBgChanger from "@/components/header-bg-changer";
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
    <div>
      <HeaderBgChanger imageSrc={imageSrc} />
      playlist {props.searchParams.list}
    </div>
  );
};

export default page;
