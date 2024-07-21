'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import SocketProvider from "@/providers/socket.provider";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={Store}>
          <SocketProvider>
            <main>
              {children}
            </main>
          </SocketProvider>
        </Provider>
      </body>
    </html>
  );
}
