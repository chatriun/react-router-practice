import { useRouteLoaderData } from "react-router-dom";
import FilmForm from "../components/FilmForm";

const EditFilmPage = () => {
  const film = useRouteLoaderData("film-detail");

  return (
    <>
      <h1>edit film</h1>
      <FilmForm method="patch" film={film} />
    </>
  );
};

export default EditFilmPage;
