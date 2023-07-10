import Banner from "./Banner";
import Footer from "./Footer";
import dayjs from "dayjs";
import dynamic from "next/dynamic";

const fomat = (date: Post["date"]) => {
  return dayjs(date).format("YYYY-MM-DD");
};

const MarkDown = dynamic(() => import("./Markdown"), {
  ssr: false,
});

export default function PostDetail({ post }: { post: Post }) {
  const title = post.title;
  return (
    <>
      <Banner cover={post?.cover}></Banner>
      <div
        id="post"
        className="center text-left lg:w-3/5 sm:w-full md:w-3/5 m-auto border-l-fuchsia-900 p-8"
      >
        <div className="m-auto mb4">
          <h1 className="text-gray-900 dark:text-white text-center my-4 text-4xl WenYueQingLongTi">
            {title}
          </h1>
        </div>
        <div className="meta text-center text-gray-600 mb-4">
          <i className="iconfont icon-calendaralt-fill mr-2"></i>
          <span className="mr-8">发表于:{fomat(post?.date)}</span>
          <i className="iconfont icon-tag-fill mr-2"></i>
          <span className="mr-8">{post.tags}</span>
          <i className="iconfont icon-eye mr-2"></i>
          <span className="mr-8">热度:{post.visitors}</span>
          <i className="iconfont icon-collection mr-2"></i>
          <span>喜欢:{post.likes}</span>
        </div>
        <div className="full text-slate-700">
          <MarkDown value={post.content} id={`post_${post.id}`}></MarkDown>
        </div>
      </div>
      <Footer />
    </>
  );
}
