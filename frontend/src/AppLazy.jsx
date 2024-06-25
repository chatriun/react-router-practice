import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";

import NewFilmPage, { newFilmAction } from "./pages/NewFilms";
import RootFilmLayout from "./pages/RootFilmLayout";
import EditFilmPage, { editFilmAction } from "./pages/EditFilm";
import ErrorPage from "./pages/Error";
import { lazy, Suspense } from "react";

const FilmsPage = lazy(() => import("./pages/Films"));
const FilmDetailPage = lazy(() => import("./pages/FilmDetail"));

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
            element: (
              <Suspense fallback={<h2>loading...</h2>}>
                <FilmsPage />
              </Suspense>
            ),
            shouldRevalidate: () => false,
            loader: () =>
              import("./pages/Films").then((module) => module.loader()),
          },
          {
            path: ":filmId",
            id: "film-detail",
            loader: ({ params }) =>
              import("./pages/FilmDetail").then((module) =>
                module.loader({ params })
              ),
            children: [
              {
                index: true,
                element: <FilmDetailPage />,
                action: ({ request, params }) =>
                  import("./pages/FilmDetail").then((module) =>
                    module.deleteFilmAction({ request, params })
                  ),
                // action: deleteFilmAction,
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

const AppLazy = () => {
  return (
    <>
      <h3>lazy</h3>
      <RouterProvider router={router} />
    </>
  );
};

export default AppLazy;
