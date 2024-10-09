import PagePadding from "@/components/page-padding";
import Category from "./components/category";
import PlaylistCarousel from "@/components/playlist-carousel";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummy-data";
import UserIcon from "@/components/user-icon";

const page = async () => {
  const dummyPlayListArray1 = [...dummyPlaylistArray];
  const dummyPlayListArray2 = [await getPlaylistById(1)];
  const dummyPlayListArray3 = [await getPlaylistById(2)];
  const dummyPlayListArray4 = [await getPlaylistById(3)];

  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />
        <div className="mt-20"></div>
        <PlaylistCarousel
          playlistArray={[...dummyPlayListArray1]}
          Thumbnail={
            <div className="w-[56px] h-[56px]">
              <UserIcon size={"lg"} />
            </div>
          }
          title="다시 듣기"
          subTitle="로이"
        />
        <div className="mt-20"></div>
        <PlaylistCarousel
          playlistArray={[...dummyPlayListArray2]}
          title="케이시 - Full Bloom"
          subTitle="새로운 앨범"
        />
        <div className="mt-20"></div>
        <PlaylistCarousel
          playlistArray={[...dummyPlayListArray3]}
          title={"커뮤니티 제공"}
        />
        <div className="mt-20"></div>
        <PlaylistCarousel
          playlistArray={[...dummyPlayListArray4]}
          title={"커버  및 리믹스"}
        />
      </div>
    </PagePadding>
  );
};

export default page;
