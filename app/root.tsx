import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
// import ToastComponent from "./components/toast";

export const links: LinksFunction = () => [
{ rel: "icon", href: "/Logo_DNBS.jpeg", type: "image/png" },
{ rel: "stylesheet", href: stylesheet }
];

export default function App() {
  // const { toast: any } = useLoaderData()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* <ToastComponent/> */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
