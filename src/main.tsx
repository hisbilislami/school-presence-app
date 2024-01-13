import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  athensgray: {
    "50": "#f6f7f8",
    "100": "#eaebef", // default
    "200": "#dadce3",
    "300": "#c0c4d0",
    "400": "#a2a7b8",
    "500": "#8b8fa6",
    "600": "#7a7d96",
    "700": "#6d6e88",
    "800": "#5c5c71",
    "900": "#4c4c5c",
    "950": "#31313a",
  },
  frenchgray: {
    "50": "#f5f6f8",
    "100": "#eeeef1",
    "200": "#dfe2e6",
    "300": "#cbced6",
    "400": "#b7bac5", // default
    "500": "#a1a4b3",
    "600": "#8c8d9f",
    "700": "#78788a",
    "800": "#636570",
    "900": "#53545c",
    "950": "#303136",
  },
  strikemaster: {
    "50": "#f9f6f8",
    "100": "#f4eff2",
    "200": "#eae0e7",
    "300": "#dac7d3",
    "400": "#c2a4b6",
    "500": "#ad879d",
    "600": "#91677d", // default
    "700": "#7f576b",
    "800": "#6a4a5a",
    "900": "#5a414d",
    "950": "#34232b",
  },
  abbey: {
    "50": "#f6f5f6",
    "100": "#e7e6e7",
    "200": "#d2cfd2",
    "300": "#b1aeb2",
    "400": "#89858b",
    "500": "#6e6a70",
    "600": "#575458", // default
    "700": "#504d51",
    "800": "#454446",
    "900": "#3d3c3d",
    "950": "#272527",
  },
  matisse: {
    "50": "#f2f8fd",
    "100": "#e4effa",
    "200": "#c4dff3",
    "300": "#8fc4ea",
    "400": "#54a6dc",
    "500": "#2e8bc9",
    "600": "#1f70ad", // default
    "700": "#1a588a",
    "800": "#194b73",
    "900": "#1a4060",
    "950": "#112940",
  },
  pinkflare: {
    main: "#e6cbd2", // default
    "50": "#faf6f7",
    "100": "#f5ebee",
    "200": "#eedadf",
    "300": "#e6cbd2", // default
    "400": "#ce9ba8",
    "500": "#ba798a",
    "600": "#a35f71",
    "700": "#884d5c",
    "800": "#72424e",
    "900": "#603c45",
    "950": "#331c22",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
