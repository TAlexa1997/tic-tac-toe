import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main>
        <header></header>
      </main>

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active"  to="/">Tic-Tac-Toe</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active"  to="/lighton">Light On</Link>
            </li>
          </ul>
        </div>
      </nav>

      <article>
        <Outlet />
      </article>
      <footer></footer>
    </>
  );
};

export default Layout;
