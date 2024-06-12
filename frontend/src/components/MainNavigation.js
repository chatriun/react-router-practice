import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  const styleActive = {
    color: "#8A2BE2",
    fontWeight: "bold",
  };

  return (
    <>
      <nav>
        <ul style={{ display: "flex", flexDirection: "row", gap: 16 }}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? styleActive : { textDecoration: "none" }
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/films"
              style={({ isActive }) =>
                isActive ? styleActive : { textDecoration: "none" }
              }
            >
              Films
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNavigation;
