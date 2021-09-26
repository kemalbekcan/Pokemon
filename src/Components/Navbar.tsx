import React, {Fragment, useState} from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../Components/themes';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor}
  
`;

const Navbar = () => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  const [theme, setTheme] = useState<any>("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <Fragment>
<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
  <GlobalStyles />
  <StyledApp>
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="d-flex flex-row align-items-center justify-content-between">
              <ul className="navbar-nav w-100 d-flex flex-row align-items-center justify-content-between">
                <div>
                  <li className="nav-item">
                    <Link to="/">
                      <img
                          className="img-fluid"
                          src="../img/pokeapi_logo.png"
                          alt="logo"
                          width="100"
                          height="100"
                      />
                    </Link>
                  </li>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <li className="nav-item mx-3">
                    <NavLink
                        exact
                        to="/"
                        className={`nav-link ${
                            splitLocation[1] === "" ? "active" : ""
                        }`}
                    >
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-item mx-3">
                    <NavLink
                        to="/catch/pokemon"
                        className={`nav-link ${
                            splitLocation[1] === "pokemon" ? "active" : ""
                        }`}
                    >
                      Pokemon
                    </NavLink>
                  </li>
                  <li>
                    {theme === "light" ? (<button className="btn shadow-none" onClick={() => themeToggler()} ><i className="fas fa-toggle-off" style={{fontSize: "20px"}}></i></button>) : (<button className="btn shadow-none" onClick={() => themeToggler()} ><i className="fas fa-toggle-on" style={{fontSize: "20px"}}></i></button>)}

                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </StyledApp>

</ThemeProvider>

    </Fragment>
  );
};

export default Navbar;
