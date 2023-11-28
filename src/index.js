import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

//Pages / components
import App from "./App";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import Home2 from "./Pages/Home2/Home2";
import NewsFeed from "./BoxerComponent/NewsFeed/NewsFeed";
import Chats from "./Components/Chats/Chats";
import Chat from  "./Components/Chat/Chat"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1> Please create component</h1>,
  },
  {
    path: "/pages/sign_in",
    element: <SignIn />,
  },
  {
    path: "/pages/sign_up",
    element: <SignUp />,
  },
  {
    path: "/pages/home",
    element: <Home />,
  },
  {
    path: "/pages/home2",
    element: <Home2 />,
    children: [
      {
        path: "/pages/home2/notification",
        element: <h1> Notification </h1>,
      },
      {
        path: "/pages/home2/calendar",
        element: <h1> Calendar </h1>,
      },
      {
        path: "/pages/home2/chats",
        element: <Chats/>,
      },
      {
          path: "/pages/home2/chats/chat",
          element: <Chat/>
      },
      {
        path: "/pages/home2/newsfeed",
        element: <NewsFeed/>,
      },
      {
        path: "/pages/home2/live",
        element: <h1> Live </h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
