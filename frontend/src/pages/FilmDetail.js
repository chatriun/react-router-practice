import { json, useLoaderData } from "react-router-dom";
import FilmItem from "../components/FilmItem";

export const loader = async ({ params }) => {
  const filmId = params.filmId;

  const response = await fetch("http://localhost:8080/films/" + filmId);

  if (!response.ok) {
    throw json({ message: "could not found a film" }, { status: 500 });
  }

  const resData = await response.json();
  return resData;
};

const FilmDetailPage = () => {
  const film = useLoaderData();
  return (
    <>
      <FilmItem film={film} />
    </>
  );
};

export default FilmDetailPage;
