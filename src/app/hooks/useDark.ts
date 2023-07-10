import { useState, useEffect } from 'react';


export default function useDark() {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDark = () => {
    const newValue = !isDark
    setDark(newValue);
    document.documentElement.classList.toggle("dark");
    window.localStorage.setItem('_isdark', newValue + '');
  };
  const handleChange = (e: Event & { key: string }) => {
    console.log('handleChange', handleChange)
    //监听key为_isdark的localstorage变化
    if (e.key === '_isdark') {
      const v = JSON.parse(localStorage.getItem('_isdark') as string) as boolean
      setDark(v)
    }
  }

  useEffect(() => {
    // @ts-ignore
    window.addEventListener("setItemEvent", handleChange);

    return () => {
      // @ts-ignore
      window.removeEventListener("setItemEvent", handleChange);
    }
  })



  return {
    toggleDark,
    isDark
  }
}