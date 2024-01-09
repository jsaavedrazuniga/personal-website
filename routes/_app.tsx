import { type PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function App({ Component, url }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jheyson Saavedra</title>
        <link rel="stylesheet" href="/styles/inter.css" />
        <link rel="stylesheet" href="/styles/tailwind.css" />
      </head>
      <body className="w-scren h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <Header url={url} />
        <main>
          <Component />
        </main>
      </body>
    </html>
  );
}
