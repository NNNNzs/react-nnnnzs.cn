import Search from "./Seach";
import Link from "next/link";
import dynamic from "next/dynamic";
import GitHubIcon from "../icons/github.svg";
const githubPage = "https://github.com/NNNNzs/react-nnnnzs.cn";

interface MenuItem {
  name: string;
  path: string;
  target?: HTMLAnchorElement["target"];
}

const ThemeSettingComonent = dynamic(() => import("./ThemeSetting"), {
  ssr: false,
});

export default function Header() {
  const MenuList: MenuItem[] = [
    { name: "分类", path: "/tags" },
    { name: "归档", path: "/timeline" },
  ];
  return (
    <header className="header h-[3rem] sticky bg-white text-slate-900 dark:bg-slate-900 dark:text-white top-0 z-10">
      <div className="mx-auto container h-full px-4">
        <div className="mx-auto h-full menu flex items-center justify-between leading-8 ">
          <a className="text-xl text-center align-bottom" href="/">
            NNNNzs
          </a>
          <div className="hidden md:flex justify-between category w-auto h-full">
            <Search className="mr-4"></Search>
            <ul className="h-full leading-[3rem]">
              {MenuList.map((e) => {
                return (
                  <Link
                    key={e.name}
                    className="h-full inline-block mr-4 after:bg-white dark:after:bg-slate-800"
                    target={e.target}
                    href={e.path}
                  >
                    {e.name}
                  </Link>
                );
              })}
            </ul>
            <ThemeSettingComonent />
            <a
              target="_blank"
              className="mr-4 h-full align-middle flex items-center"
              href={githubPage}
            >
              <GitHubIcon className="text-[1.2rem]"></GitHubIcon>
            </a>
          </div>
        </div>
      </div>
      <div
        id="scrollBarRef"
        className="absolute bottom-0 h-[1px] bg-slate-500 w-[var(--percent)]"
      ></div>
    </header>
  );
}
