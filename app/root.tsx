import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

import styles from "./styles/app.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta = () => ([ {
    charset: "utf-8",
    title: "Quote Wall App",
    viewport: "width=device-width,initial-scale=1",
} ]);

export default function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
        <body className="bg-purple-100 relative px-5">
        <div className="mt-20 w-full max-w-screen-lg mx-auto">
        <Outlet />
        <Scripts />
        </div>
      </body>
    </html>
  );
}

