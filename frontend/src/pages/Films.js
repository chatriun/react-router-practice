import { json, useLoaderData } from "react-router-dom";
import FilmsList from "../components/FilmsList";

export const loader = async () => {
  const response = await fetch("http://localhost:8080/films");

  if (!response.ok) {
    throw json({ message: "Could not fetch films..." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.films;
  }
};

const FilmsPage = () => {
  const films = useLoaderData();

  return (
    <>
      <FilmsList films={films} />
    </>
  );
};

export default FilmsPage;
