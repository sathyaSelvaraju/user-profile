import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Posts from './pages/Posts';
import Gallery from './pages/Gallery';
import Todo from './pages/Todo'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",

    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/home/:id",

    children: [
      {
        index: true,

        element: <Home />,
      },
    ],
  },
  {
    path: "/posts",

    children: [
      {
        index: true,

        element: <Posts />,
      },
    ],
  },
  {
    path: "/gallery",

    children: [
      {
        index: true,

        element: <Gallery />,
      },
    ],
  },
  {
    path: "/todo",

    children: [
      {
        index: true,

        element: <Todo />,
      },
    ],
  },
];
