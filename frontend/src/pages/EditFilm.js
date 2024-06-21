import { json, redirect, useRouteLoaderData } from "react-router-dom";
import FilmActionForm from "../components/FormAction";

export const editFilmAction = async ({ request, params }) => {
  const filmId = params.filmId;
  const data = await request.formData();

  const editedData = {
    title: data.get("title"),
    date: data.get("date"),
    url: data.get("url"),
    description: data.get("description"),
  };

  const response = await fetch(`http://localhost:8080/films/${filmId}`, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedData),
  });

  if (!response.ok) {
    throw json({ message: "Could not edit this film..." }, { status: 500 });
  }

  return redirect("/films");
};

const EditFilmPage = () => {
  const film = useRouteLoaderData("film-detail");

  return <FilmActionForm film={film} />;
};

export default EditFilmPage;
