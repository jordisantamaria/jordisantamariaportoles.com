import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction, MetaFunction } from "@remix-run/server-runtime";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import globalStyles from './styles/global.css'

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }, { rel: "stylesheet", href: globalStyles }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Jordi Santamaria Portoles",
  viewport: "width=device-width,initial-scale=1",
});


export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-background text-primary-light">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
