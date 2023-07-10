import PostCardTags from "./PostCardTags";
import dayjs from "dayjs";
import Image from "next/image";
import "./PostCardItem.scss";

const dateFormat = (date: Post["date"]) => {
  if (!date) return "";
  return dayjs(date).format("MM月 DD日, YYYY");
};

const homeThumbnail = (cover: string | undefined) => {
  if (cover) {
    if (cover.startsWith("https://static.nnnnzs.cn")) {
      return (
        cover + "?imageMogr2/thumbnail/680x/format/webp/interlace/1/quality/100"
      );
    } else {
      return cover;
    }
  } else {
    return "https://static.nnnnzs.cn/upload/c794699b0dcd2d1db62b4d3b583744a9.gif";
  }
};

const toLink = (post: Post) => {
  const { path } = post;
  return path;
};

const target = "_blank";

export default function PostCardItem({ post }: { post: Post }) {
  return (
    <li
      className="post max-h-[30rem] md:h-auto flex-col md:flex-row md:even:flex-row-reverse rounded-2xl md:11/12 bg-white dark:bg-slate-800 group"
      id={`post_${post.id}`}
    >
      <div className="post-cover w-full md:w-3/5 text-center bg-transparent">
        <Image
          width={680}
          height={346}
          src={homeThumbnail(post.cover)}
          alt={post.cover}
          className="w-full h-48 md:max-h-96 md:h-full md:hover:shadow-2xl rounded-t-xl md:rounded-2xl group-even:md:rounded-l-none group-odd:md:rounded-r-none"
        />
      </div>

      <div className="post-text dark:border-none bg-white dark:bg-slate-800 text-left w-full p-4 md:w-2/5 md:relative md:border md:border-gray-300 border-t-0 even:lg:border-l-0 odd:lg:border-r-0">
        <p className="post-time text-gray-300">{dateFormat(post?.date)}</p>
        <h2 className="post-title md:line-clamp-1 text-slate-950 dark:text-white text-2xl my-4">
          <a
            href={toLink(post)}
            className="WenYueQingLongTi"
            title={post.title}
            target={target}
          >
            {post.title}
          </a>
        </h2>
        <PostCardTags post={post}></PostCardTags>
        <p className="post-description hidden md:block md:h-[11rem] text-gray-500 leading-10">
          {post?.description}
        </p>
        <p className="post-content bg-white dark:bg-slate-800 text-gray-500 leading-10">
          {/* <MdEditor
            preview-theme="cyanosis"
            editor-id={`post-editor-${post.id}`}
            theme="theme"
            previewOnly={true}
          ></MdEditor> */}
        </p>

        <p className="text-slate-700 dark:text-slate-400 post-meta hidden md:block">
          <span className="leancloud_visitors my-6">
            <i className="iconfont icon-eye"></i>热度<i>{post?.visitors}</i>
          </span>

          <span className="leancloud_likes">
            <i className="iconfont icon-collection"></i>喜欢<i>{post?.likes}</i>
          </span>
        </p>
      </div>
    </li>
  );
}
