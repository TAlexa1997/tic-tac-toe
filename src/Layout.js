import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main>
        <header></header>
      </main>

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
            
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" href="#" to="/">Tic-Tac-Toe</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" href="#" to="/lighton">Light On</Link>
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
