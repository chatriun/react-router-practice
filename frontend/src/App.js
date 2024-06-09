import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import FilmsPage, { loader as filmsLoader } from "./pages/Films";

import NewFilmPage from "./pages/NewFilms";
import RootFilmLayout from "./pages/RootFilmLayout";
import FilmDetailPage, { loader as filmDetailLoader } from "./pages/FilmDetail";
import EditFilmPage from "./pages/EditFilm";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "films",
        element: <RootFilmLayout />,
        children: [
          {
            index: true,
            element: <FilmsPage />,
            loader: filmsLoader,
          },
          {
            path: ":filmId",
            element: <FilmDetailPage />,
            loader: filmDetailLoader,
          },
          {
            path: ":filmId/edit",
            element: <EditFilmPage />,
          },
        ],
      },
      {
        path: "new",
        element: <NewFilmPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
