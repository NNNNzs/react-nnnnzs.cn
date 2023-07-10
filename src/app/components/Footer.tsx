interface Social {
  href: string;
  title: string;
  componentName: string;
}

const social: Social[] = [
  {
    href: "https://github.com/NNNNzs",
    title: "Github",
    componentName: "icon-github-fill",
  },
  {
    href: "https://weibo.com/NNNNzs",
    title: "微博",
    componentName: "icon-weibo",
  },
  {
    href: "https://www.instagram.com/nnnn2s/",
    title: "instagram",
    componentName: "icon-instagram",
  },
  {
    href: "https://twitter.com/NNNNzs",
    title: "twitter",
    componentName: "icon-google",
  },
  {
    href: "https://www.zhihu.com/people/NNNNzs",
    title: "知乎",
    componentName: "icon-zhihu",
  },
];
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4 mt-8">
      <div className="social">
        <ul
          className="
        flex
        m-auto
        w-1/5
        max-auto
        justify-around
        items-center
        text-center
        margin-auto
      "
        >
          {social.map((s) => {
            return (
              <li key={s.href} className="cursor-pointer" title={s.title}>
                <a href={s.href} target="_blank">
                  <i
                    className={`iconfont text-4xl text-white w-4 h-4 ${s.componentName}`}
                  ></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="copyright text-center">
        <p>©2021 - {YEAR}, content by NNNNzs. All Rights Reserved.</p>
        <p>
          <a href="https://nextjs.org/" target="_blank">
            Next13{" "}
          </a>
        </p>
        <p>
          <a href="https://beian.miit.gov.cn" target="_blank">
            皖ICP备16025009号-1
          </a>
        </p>
      </div>
    </footer>
  );
}
