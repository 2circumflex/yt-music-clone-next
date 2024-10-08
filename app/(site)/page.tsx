import PagePadding from "@/components/page-padding";
import Category from "./components/category";
import PlaylistCarousel from "@/components/playlist-carousel";
import { dummyPlaylistArray } from "@/lib/dummy-data";
import UserIcon from "@/components/user-icon";

export default async function Home() {
  const dummyPlayListArray1 = [...dummyPlaylistArray];
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />
        <div className="mt-12"></div>
        <PlaylistCarousel
          playlistArray={[...dummyPlayListArray1]}
          Thumbnail={
            <div className="w-[56px] h-[56px]">
              <UserIcon size={"lg"} />
            </div>
          }
          title={"다시 듣기"}
          subTitle="로이"
        />
      </div>
    </PagePadding>
  );
}
