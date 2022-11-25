import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import AppLayout from "../layout/AppLayout";
import "../styles/globals.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </QueryClientProvider>
  );
}
