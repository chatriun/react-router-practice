import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <h1>something went wrong...</h1>
      <p>
        go back to <Link to="/">home</Link>
      </p>
    </>
  );
};

export default ErrorPage;
