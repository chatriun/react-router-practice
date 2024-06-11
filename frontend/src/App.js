import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import FilmsPage, { loader as filmsLoader } from "./pages/Films";

import NewFilmPage, { newFilmAction } from "./pages/NewFilms";
import RootFilmLayout from "./pages/RootFilmLayout";
import FilmDetailPage, {
  loader as filmDetailLoader,
  deleteFilmAction,
} from "./pages/FilmDetail";
import EditFilmPage from "./pages/EditFilm";
import ErrorPage from "./pages/Error";
import { editFilmAction } from "./components/FilmForm";

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
            id: "film-detail",
            loader: filmDetailLoader,
            children: [
              {
                index: true,
                element: <FilmDetailPage />,
                action: deleteFilmAction,
              },
              {
                path: "edit",
                element: <EditFilmPage />,
                action: editFilmAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewFilmPage />,
            action: newFilmAction,
          },
        ],
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
