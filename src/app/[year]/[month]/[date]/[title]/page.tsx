// import PostDetail from "@/components/PostDetail.tsx";
import PostDetail from "../../../../components/PostDetail";

export default async function PostDetailPage({
  params,
}: {
  params: {
    title: string;
  };
}) {
  const title = decodeURIComponent(params.title);
  const postRes = await fetch(`https://www.nnnnzs.cn/api-remote/post/${title}`);
  const post: ResponeBody<Post> = await postRes.json();
  return <PostDetail post={post.data}></PostDetail>;
}
