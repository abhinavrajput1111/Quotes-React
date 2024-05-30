function Footer() {
  return (
    <>
      <div
        id="footer_wrapper"
        className="footer_wrapper w-full h-full pb-8 bg-slate-200"
      >
        <div
          id="footer_box"
          className="footer_box flex  flex-col justify-center items-center"
        >
          <div className="flex justify-center items-center gap-8 mt-5 mb-5">
            <i className="fa-brands fa-square-pied-piper text-4xl mt-6 text-[#0D9488]">
              <span> </span> Quotes of The Day
            </i>
          </div>

          <div className="w-[45%]">
            <p className="mt-5 mb-5 text-wrap text-center ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <div className="mt-5 mb-5">
            <ul className="flex md:gap-2 text-md flex-wrap">
              <li className="cursor-pointer px-3 py-1 hover:text-gray-700">
                About
              </li>
              <li className="cursor-pointer px-3 py-1 hover:text-gray-700 ">
                Careers
              </li>
              <li className="cursor-pointer px-3 py-1 hover:text-gray-700">
                History
              </li>
              <li className="cursor-pointer px-3 py-1 hover:text-gray-700">
                Services
              </li>
              <li className="cursor-pointer px-3 py-1 hover:text-gray-700">
                Projects
              </li>
              <li className="cursor-pointer px-3 py-1 hover:text-gray-700">
                Blogs
              </li>
            </ul>
          </div>

          {/* icons */}

          <div className="">
            <ul className="flex gap-10 text-xl">
              <li className="cursor-pointer  hover:text-gray-700">
                <i class="fa-brands fa-facebook"></i>
              </li>
              <li className="cursor-pointer hover:text-gray-700">
                <i class="fa-brands fa-instagram"></i>
              </li>
              <li className="cursor-pointer hover:text-gray-700">
                <i class="fa-brands fa-square-twitter"></i>
              </li>
              <li className="cursor-pointer hover:text-gray-700">
                <i class="fa-brands fa-github"></i>
              </li>
              <li className="cursor-pointer hover:text-gray-700">
                <i class="fa-brands fa-drupal"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
