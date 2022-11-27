import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { QueryClient } from "react-query";
import AppLayout from "../layout/AppLayout";
import client from "../lib/client";
import "../styles/globals.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ApolloProvider>
  );
}
