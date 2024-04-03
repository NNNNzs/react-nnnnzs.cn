import HomeLayout from "./components/HomeLayout";

export default async function Home() {
  const post: ResponeBody<PageQueryRes<Post>> = await getPost();
  return <HomeLayout data={post.data.record} />;
}

function getCurrentHourTimestamp() {
  // 创建一个新的Date对象，它将使用当前日期和时间
  const now = new Date();

  // 将小时设置为0，分钟和秒设置为0，即当前日期的开始时间
  now.setHours(0, 0, 0, 0);

  // 获取时间戳（毫秒数）
  const timestamp = now.getTime();

  // 返回时间戳
  return timestamp;
}
// 获取小时的时间戳


async function getPost() {
  const t = getCurrentHourTimestamp();
  const res = await fetch("https://www.nnnnzs.cn/api-remote/post/list?t=" + t);
  return res.json();
}
