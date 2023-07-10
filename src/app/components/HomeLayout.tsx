import Header from "./Header";
import Footer from "./Footer";
import PostCard from "./PostCard";

interface Props {
  data: Post[];
}

export default function HomeLayout({ data }: Props) {
  return (
    <>
      <div className="relative">
        <Header />
        <PostCard postList={data}></PostCard>
        <Footer />
      </div>
    </>
  );
}
