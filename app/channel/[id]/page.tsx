import HeaderBgChanger from "@/components/header-bg-changer";
import PagePadding from "@/components/page-padding";
import { getChannelById } from "@/lib/dummy-data";
import { getRandomElementFromArray } from "@/lib/utils";
import { Song } from "@/types";
import { permanentRedirect } from "next/navigation";
import React from "react";

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
      <div>channel/{props.params.id}</div>
    </PagePadding>
  );
};

export default page;
