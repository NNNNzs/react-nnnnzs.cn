const TAG_PREFIX_PAGE = "/tags";
const A_TAGET = "_self";
export default function PostCardTags(props: { post: Post }) {
  return (
    <div className="post-tags hidden md:block text-gray text-slate-700 dark:text-slate-400">
      <span className="mr-2">
        {props.post.tags.split(",").map((tag) => {
          return (
            <a key={tag} href={`${TAG_PREFIX_PAGE}/${tag}/`} target={A_TAGET}>
              {tag}
            </a>
          );
        })}
      </span>
    </div>
  );
}
