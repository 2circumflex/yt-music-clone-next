import { getPlaylistById } from "@/lib/dummy-data";
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

  return <div>playlist {props.searchParams.list}</div>;
};

export default page;
