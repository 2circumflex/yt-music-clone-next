import { sleep } from "@/lib/utils";

export default async function Home() {
  console.log("before Home sleep ...");
  await sleep(4000);
  console.log("after Home sleep ...");
  // Layout에서는 오래 걸리는 작업을 하면 안됨

  return <div>HomePage</div>;
}
