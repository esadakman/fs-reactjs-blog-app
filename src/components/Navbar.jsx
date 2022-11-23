import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import logo from "../assets/images/logo.png";
import profileDefault from "../assets/images/default.webp";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { onImageError } from "../helpers/functions";
import { AvatarLoader } from "../helpers/loaders";

const authLinks = [
  { name: "Home", to: "/", current: false },
  { name: "New Post", to: "/newblog", current: false },
  { name: "Profile", to: "/profile", current: false },
];
const guestLinks = [
  { name: "Home", to: "/", current: true },
  { name: "Register", to: "/register", current: false },
  { name: "Login", to: "/login", current: false },
];

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  // const { authUser, isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.user
  // );
  // console.log(authUser)
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout(navigate));
    dispatch(reset());
  };
  return (
    <>
      <Disclosure as="nav" className="bg-gray-900 ">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex h-16 items-center justify-between ">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="transition-all inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only ">Open main menu</span>
                    {open ? (
                      <i className="fa-solid fa-x"></i>
                    ) : (
                      <i className="fa-solid fa-bars"></i>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center ">
                    <Link to="/">
                      <img
                        className="block h-8 w-auto lg:hidden transition-all duration-300 hover:opacity-80 hover:scale-110  "
                        src={logo}
                        alt="logo"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block transition-all duration-300 hover:opacity-80  hover:scale-110    "
                        src={logo}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block w-full  ">
                    <div className="flex justify-between items-center">
                      {authUser ? (
                        <>
                          <div className="centeralizer">
                            {authLinks.map((item) => (
                              <Link
                                key={item.name}
                                to={item.to}
                                className="text-gray-300  hover:bg-gray-700 hover:text-white transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium "
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                          <div className="relative centeralizer text-gray-600 dark:text-white sm:block hidden">
                            <input
                              className="border-2 w-40 border-gray-400 dark:bg-gray-700 h-8 pl-2 rounded-xl text-sm outline-0 focus:border-blue-500 transition-all  duration-300"
                              type="text"
                              name="search"
                              placeholder="Search"
                            />
                            <button
                              type="submit"
                              className=" flex centeralizer absolute right-0 top-0 mt-2 mr-2"
                            >
                              <svg
                                className="text-gray-600 dark:text-white h-4 w-4 fill-current hover:text-blue-400 transition-all"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 56.966 56.966"
                                width="512px"
                                height="512px"
                              >
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                              </svg>
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="centeralizer">
                          {guestLinks.map((item) => (
                            <Link
                              key={item.name}
                              to={item.to}
                              className="text-gray-300  hover:bg-gray-700 hover:text-white transition-all px-3 py-2 rounded-md text-sm font-medium "
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* // ! user True  */}
                {authUser ? (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-3 sm:pr-0">
                    <p className="p-1 rounded text-white select-none">
                      {authUser?.user?.username}
                    </p>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3 flex">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300">
                          <span className="sr-only">Open user menu</span>
                          {(authUser?.image && (
                            <img
                              className="h-8 w-8 rounded-full outline-none hover:outline hover:outline-3 hover:outline-sky-500 transition-all duration-300 select-none"
                              src={
                                authUser?.image
                                  ? authUser?.image
                                  : profileDefault
                              }
                              onError={onImageError}
                              alt="pic"
                            />
                          )) || <AvatarLoader />}
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-20 mt-8 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                // as={Button}
                                to="/profile"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                onClick={handleLogout}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                ) : (
                  // ! user FALSE
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <p className="p-1 rounded text-white select-none">Guest</p>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-1">
                      <Menu.Button
                        className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        as={Link}
                        to={"/login"}
                      >
                        <img
                          className="h-8 w-8 rounded-full hover:outline hover:outline-3 hover:outline-sky-500 transition-all duration-100 select-none"
                          src={profileDefault}
                          alt="pic"
                        />
                      </Menu.Button>
                    </Menu>
                  </div>
                )}
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden fixed bg-gray-800 w-screen z-10">
              <div className="space-y-1 px-2 pt-2 pb-3 "> 
                {authUser ? (
                  <>
                    {authLinks.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as={Link}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                    <div className="relative  ">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-6 transition-all duration-300 focus:outline-none"
                        placeholder="Search"
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute h-6 right-2 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300"
                      >
                        Search
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {guestLinks.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as={Link}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;

// {/* {(authUser ? authLinks : guestLinks).map((item) => (
//                         <Link
//                           key={item.name}
//                           to={item.to}
//                           className="text-gray-300  hover:bg-gray-700 hover:text-white transition-all px-3 py-2 rounded-md text-sm font-medium "
//                           aria-current={item.current ? "page" : undefined}
//                         >
//                           {item.name}
//                         </Link>
//                       ))} */}

// {
//   /* <div className="relative centeralizer text-gray-600 dark:text-white">
//                       <input
//                         className="border-2 w-full border-gray-400 dark:bg-gray-700 h-8 pl-2 rounded-xl text-sm outline-0 focus:border-blue-500 transition-all "
//                         type="text"
//                         name="search"
//                         placeholder="Search"
//                       />
//                       <button
//                         type="submit"
//                         className=" flex centeralizer absolute right-0 top-0 mt-2 mr-2"
//                       >
//                         <svg
//                           className="text-gray-600 dark:text-white h-4 w-4 fill-current"
//                           xmlns="http://www.w3.org/2000/svg"
//                           version="1.1"
//                           id="Capa_1"
//                           x="0px"
//                           y="0px"
//                           viewBox="0 0 56.966 56.966"
//                           width="512px"
//                           height="512px"
//                         >
//                           <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
//                         </svg>
//                       </button>
//                     </div> */
// }
