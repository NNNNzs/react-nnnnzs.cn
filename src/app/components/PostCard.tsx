import PostCardItem from "./PostCardItem";

export default function PostCard({ postList }: { postList: Post[] }) {
  return (
    <>
      <ul>
        {postList.map((post) => {
          return <PostCardItem key={post.id} post={post} />;
        })}
      </ul>
    </>
  );
}
