import { json, redirect } from "react-router-dom";
import FilmForm from "../components/FilmForm";

export const newFilmAction = async ({ request }) => {
  const data = await request.formData();

  const newFilm = {
    title: data.get("title"),
    date: data.get("date"),
    url: data.get("url"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/films", {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFilm),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save film..." }, { status: 500 });
  }

  return redirect("/films");
};

const NewFilmPage = () => {
  return <FilmForm method="post" />;
};

export default NewFilmPage;
