import React from "react";
import "../../styles/globals.css";
import type { AppProps } from "next/app";

/**
 * Adds two numbers together.
 * @param {AppProps} AppProps Properties of App Component.
 * @return {NextComponentType<NextPageContext, any, {}>} App Component.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
