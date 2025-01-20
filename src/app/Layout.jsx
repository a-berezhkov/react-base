import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/map"}>Карта</Link>
            </li>
            <li>
              <Link to={"/profile"}>Профайл</Link>
            </li>
            <li>
              <Link to={"/reviews"}>Места</Link>
            </li>
            <li>
              <Link to={"/login"}>Логин</Link>
            </li>
            <li>
              <Link to={"/reg"}>Рега</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Футер и не волнует!</footer>
    </>
  );
}

export default Layout;
