// import '../styles/globals.css'
import type { AppProps } from "next/app";
import styled from "styled-components";
import { Montserrat, Noto_Sans_KR } from "@next/font/google";

export const montserrat = Montserrat({ subsets: ["latin"], variable: "--monts" });
export const notosans = Noto_Sans_KR({
  subsets: ["korean"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--noto",
});

export const Font = styled.div`
  font-family: var(--monts), var(--noto);
  font-weight: 400;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={[montserrat.variable, notosans.variable].join(" ")}>
      <Font>
        <Component {...pageProps} />
      </Font>
    </div>
  );
}
