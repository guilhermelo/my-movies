import { MainMenuContainer } from "../styles/MainMenuContainer";
import { Link, BrowserRouter as Router } from "react-router-dom";

export const MainMenu = () => (
  <MainMenuContainer>
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    </Router>
  </MainMenuContainer>
);
