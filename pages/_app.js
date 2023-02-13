import "../styles/globals.css";

import { MobileContextProvider } from "../mobileContext";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <MobileContextProvider>
        <Component {...pageProps} />
      </MobileContextProvider>
    </ThemeProvider>
  );
}
