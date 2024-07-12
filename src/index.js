// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";

// //Pages / components
// // import App from "./App";
// import SignIn from "./Pages/SignIn/SignIn";
// import SignUp from "./Pages/SignUp/SignUp";
// import Home from "./Pages/Home/Home";
// import Home2 from "./Pages/Home2/Home2";
// import NewsFeeds from "./BoxerComponent/NewsFeeds/NewsFeeds";
// import Chats from "./Components/Chats/Chats";
// import Chat from "./Components/Chat/Chat";
// import Notification from "./Components/Notification/Notification";
// import Live from "./Components/Live/Live";
// import Searches from "./Components/Search/Searches";
// import SearchItem from "./Components/SearchItem/SearchItem";
// import PostItem from "./Components/PostItem/PostItem";
// import ChatGraphics from "./Components/ChatGraphics/ChatGraphics"
// import ProfileEditor from "./Components/Editor/ProfileEditor/ProfileEditor";

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <h1> Please create component</h1>,
//   },
//   {
//     path: "/pages/sign_in",
//     element: <SignIn />,
//   },
//   {
//     path: "/pages/sign_up",
//     element: <SignUp />,
//   },
//   {
//     path: "/pages/home",
//     element: <Home />,
//   },
//   {
//     path: "/pages/home2",
//     element: <Home2 />,
//     children: [
//       {
//         path: "/pages/home2/notification",
//         element: <Notification />,
//       },
//       {
//          path: "/pages/home2/profile",
//          element: <ProfileEditor/>
//       },
//       {
//         path: "/pages/home2/search/search_item",
//         element: <SearchItem />,
//       },
//       {
//         path: "/pages/home2/search",
//         element: <Searches/>,
//       },
//       {
//         path: "/pages/home2/post_item",
//         element: <PostItem />,
//       },
//       {
//         path: "/pages/home2/calendar",
//         element: <h1> Calendar </h1>,
//       },
//       {
//         path: "/pages/home2/chats",
//         element: <Chats />,
//       },
//       {
//         path: "/pages/home2/chats/chat",
//         element: <Chat />,
//       },
//       {
//         path: "/pages/home2/chats/chat/graphics", 
//         element: <ChatGraphics/>
//       },
//       {
//         path: "/pages/home2/newsfeeds",
//         element: <NewsFeeds />,
//       },
//       {
//         path: "/pages/home2/live",
//         element: <Live />,
//       },
//     ],
//   },
// ]);


// //Event for responsive navbar resizing
// let MEDIA_WIDTH = 900;
// window.addEventListener("resize", () => {
//   if (window.innerWidth > MEDIA_WIDTH) {
//     let navbarElement = document.querySelector("nav#main_side_nav");
//     navbarElement.style.display = "grid";
//   }
// });

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={Router} />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// Pages / components
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import Home2 from "./Pages/Home2/Home2";
import NewsFeeds from "./BoxerComponent/NewsFeeds/NewsFeeds";
import Chats from "./Components/Chats/Chats";
import Chat from "./Components/Chat/Chat";
import Notification from "./Components/Notification/Notification";
import Live from "./Components/Live/Live";
import Searches from "./Components/Search/Searches";
import SearchItem from "./Components/SearchItem/SearchItem";
import PostItem from "./Components/PostItem/PostItem";
import ChatGraphics from "./Components/ChatGraphics/ChatGraphics";
import ProfileEditor from "./Components/Editor/ProfileEditor/ProfileEditor";

const BASE_PATH = "/getHooked";
const withBasePath = (path) => `${BASE_PATH}${path}`;

const Router = createBrowserRouter([
  {
    path: withBasePath("/"),
    element: <Home />,
    errorElement: <h1> Please create component</h1>,
  },
  {
    path: withBasePath("/pages/sign_in"),
    element: <SignIn />,
  },
  {
    path: withBasePath("/pages/sign_up"),
    element: <SignUp />,
  },
  {
    path: withBasePath("/pages/home"),
    element: <Home />,
  },
  {
    path: withBasePath("/pages/home2"),
    element: <Home2 />,
    children: [
      {
        path: withBasePath("/pages/home2/notification"),
        element: <Notification />,
      },
      {
        path: withBasePath("/pages/home2/profile"),
        element: <ProfileEditor />,
      },
      {
        path: withBasePath("/pages/home2/search/search_item"),
        element: <SearchItem />,
      },
      {
        path: withBasePath("/pages/home2/search"),
        element: <Searches />,
      },
      {
        path: withBasePath("/pages/home2/post_item"),
        element: <PostItem />,
      },
      {
        path: withBasePath("/pages/home2/calendar"),
        element: <h1> Calendar </h1>,
      },
      {
        path: withBasePath("/pages/home2/chats"),
        element: <Chats />,
      },
      {
        path: withBasePath("/pages/home2/chats/chat"),
        element: <Chat />,
      },
      {
        path: withBasePath("/pages/home2/chats/chat/graphics"),
        element: <ChatGraphics />,
      },
      {
        path: withBasePath("/pages/home2/newsfeeds"),
        element: <NewsFeeds />,
      },
      {
        path: withBasePath("/pages/home2/live"),
        element: <Live />,
      },
    ],
  },
]);

// Event for responsive navbar resizing
let MEDIA_WIDTH = 900;
window.addEventListener("resize", () => {
  if (window.innerWidth > MEDIA_WIDTH) {
    let navbarElement = document.querySelector("nav#main_side_nav");
    navbarElement.style.display = "grid";
  }
});

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
