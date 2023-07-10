import "./globals.css";
export const metadata = {
  title: "孤人独影-react网站",
  description: "reactApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="w-screen h-screen overflow-x-hidden bg-[#efefef] dark:bg-slate-900">
        {children}
      </body>
    </html>
  );
}
