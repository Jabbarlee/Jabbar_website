import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MobileContextProvider } from "../mobileContext";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <MobileContextProvider>
        <Component {...pageProps} />
      </MobileContextProvider>
    </ThemeProvider>
  );
}
