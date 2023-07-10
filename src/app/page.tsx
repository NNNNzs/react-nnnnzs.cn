import HomeLayout from "./components/HomeLayout";

export default async function Home() {
  const post: ResponeBody<PageQueryRes<Post>> = await getPost();
  console.log(post);
  return <HomeLayout data={post.data.record} />;
}

async function getPost() {
  const res = await fetch("https://www.nnnnzs.cn/api-remote/post/list");
  return res.json();
}
