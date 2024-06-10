import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import FilmsPage, { loader as filmsLoader } from "./pages/Films";

import NewFilmPage from "./pages/NewFilms";
import RootFilmLayout from "./pages/RootFilmLayout";
import FilmDetailPage, {
  loader as filmDetailLoader,
  action as deleteFilmAction,
} from "./pages/FilmDetail";
import EditFilmPage from "./pages/EditFilm";
import ErrorPage from "./pages/Error";
import { action as filmEditAction } from "./components/FilmForm";

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
                action: filmEditAction,
              },
            ],
          },
          {
            // TODO: split action(new,edit)
            path: "new",
            element: <NewFilmPage />,
            action: filmEditAction,
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
