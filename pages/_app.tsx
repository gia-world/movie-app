// import '../styles/globals.css'
import type { AppProps } from "next/app";
import { Montserrat, Noto_Sans_KR } from "@next/font/google";
import GlobalStyle from "../components/GlobalStyle";

/* 폰트 변수 선언, GlobalStyle에서 변수 사용 */
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--monts",
});
export const notosans = Noto_Sans_KR({
  subsets: ["korean"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--noto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} ${notosans.variable} font`}>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}
