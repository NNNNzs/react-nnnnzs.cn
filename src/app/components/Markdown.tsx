"use client";
import { MdPreview } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import useDark from "../hooks/useDark";

export default function Markdown({ value, id }: { value: string; id: string }) {
  const { toggleDark, isDark } = useDark();

  return (
    <MdPreview
      modelValue={value}
      editorId={id}
      previewTheme="cyanosis"
      theme={isDark ? "dark" : "light"}
    ></MdPreview>
  );
}
