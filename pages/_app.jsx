import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin", "cyrillic"] });
import "../styles/global.css";
import clsx from "clsx";

export default function App({ Component, pageProps }) {
  return (
    <div className={clsx(inter.className, "text-slate-900")}>
      <Component {...pageProps} />
      <div id="modals"></div>
    </div>
  );
}
