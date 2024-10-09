import PagePadding from "@/components/page-padding";
import React from "react";
import Category from "./components/category";
import { getAllPlaylist } from "@/lib/dummy-data";
import PlaylistCarousel from "@/components/playlist-carousel";

const page = async () => {
  const playlistArry = await getAllPlaylist();

  return (
    <PagePadding>
      <div className="mt-4"></div>
      <Category />
      <div className="mt-20"></div>
      <PlaylistCarousel playlistArray={playlistArry} title="새 앨범 및 싱글" />
    </PagePadding>
  );
};

export default page;
