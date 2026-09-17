import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="font-medium">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-medium">Forecast</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-8">
      <div className="navbar-start">
        <a className="text-2xl font-bold text-primary">
          ☀️ Weather<span className="text-secondary">ly</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2"> {links} </ul>
      </div>

      {/* Search + Mobile Menu */}
      <div className="navbar-end gap-2">
        {/* Search */}
        <div className="hidden sm:flex">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow w-32 md:w-48"
              placeholder="Search city..."
            />
            🔍
          </label>
        </div>

        <button className="btn btn-circle btn-ghost text-xl">🌙</button>

        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
