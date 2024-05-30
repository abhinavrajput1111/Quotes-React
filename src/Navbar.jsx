let navlinks = ["Home", "Quotes", "List", "Shayari", "Book Us"];

function Navbar() {
  return (
    <>
      <div id="wrapper" className="sticky_navbar relative w-full h-auto">
        <div
          id="nav_box"
          className="nav_box flex justify-between  items-center w-full md:p-5 p-3 sticky top-0"
        >
          <div className="logo-div flex md:gap-3 gap-1">
            <img src="https://flowbite.com/docs/images/logo.svg" />
            <h2 className="md:text-2xl text-xl font-semibold">
              Quotes Of the Day
            </h2>
          </div>
          <div className="nav-links-list">
            <ul className="md:flex md:gap-8 sm:block hidden">
              {navlinks.map(function (list, index) {
                return (
                  <li
                    key={index}
                    className="font-semibold cursor-pointer hover:text-gray-400"
                  >
                    {" "}
                    {list}{" "}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <button className="font-semibold bg-blue-500 hover:bg-blue-400 text-white md:px-2 md:py-1 px-1 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
