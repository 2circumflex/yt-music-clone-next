import PagePadding from "@/components/page-padding";
import React from "react";
import Category from "./components/category";
import { getAllPlaylist, getSongListTop10 } from "@/lib/dummy-data";
import PlaylistCarousel from "@/components/playlist-carousel";
import SonglistCarousel from "@/components/songlist-carousel";

const page = async () => {
  const [playlistArry, songlistTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);

  return (
    <PagePadding>
      <div className="mt-4"></div>
      <Category />
      <div className="mt-20"></div>
      <PlaylistCarousel playlistArray={playlistArry} title="새 앨범 및 싱글" />
      <div className="mt-20"></div>
      <SonglistCarousel songlistTop10={songlistTop10} title="인기곡" />
      <div className="mt-20"></div>
      <div className="mt-20"></div>
      <div className="mt-20"></div>
    </PagePadding>
  );
};

export default page;
