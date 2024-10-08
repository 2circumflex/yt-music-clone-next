import Category from "./components/category";

export default async function Home() {
  return (
    <div className="min-h-[600px]">
      <div className="mt-9">
        <Category />
      </div>
    </div>
  );
}
