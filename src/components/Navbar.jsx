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
                        className="block h-8 w-auto lg:hidden transition-all hover:-translate-y-1 "
                        src={logo}
                        alt="logo"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block hover:opacity-80 transition-all   "
                        src={logo}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block ">
                    <div className="flex space-x-4 ">
                      {/* {guestLinks.map((item) => ( */}
                      {(authUser ? authLinks : guestLinks).map((item) => (
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
                  </div>
                </div>
                {/* // ! user True  */}
                {authUser ? (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Link
                      to="/profile"
                      // type="button"
                      className="p-1 rounded text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 cursor-pointer"
                    >
                      {authUser?.user?.username}
                    </Link>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300">
                          <span className="sr-only">Open user menu</span>

                          {/* <AvatarLoader /> */}
                          {(authUser?.image && (
                            <img
                              className="h-8 w-8  rounded-full  hover:outline hover:outline-3 hover:outline-sky-500 transition-all duration-300"
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                // to="/"
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
                    <button
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      Guest
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <Menu.Button
                        className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        as={Link}
                        to={"/login"}
                      >
                        <img
                          className="h-8 w-8 rounded-full  hover:outline hover:outline-3 hover:outline-sky-500 transition-all duration-100"
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
                {(authUser ? authLinks : guestLinks).map((item) => (
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
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
