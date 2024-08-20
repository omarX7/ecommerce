"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";
import Cart from "./Cart";

const Header = () => {
  console.log(`href: ${window.location.href}`);
  const { user } = useUser();
  const { cart, setCart } = useContext(CartContext);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    user && getCartItems();
  }, [user]);

  const getCartItems = () => {
    CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress)
      .then((res) => {
        console.log("response from cart items", res?.data?.data);
        res?.data?.data.forEach((citem) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: citem.id,
              product: citem?.attributes?.products?.data[0],
            },
          ]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(
      window.location.href.toString().includes("sign-in") ||
        window.location.href.toString().includes("sign-up")
    );
  }, []);

  return (
    !isLoggedIn && (
      <header className="bg-white dark:bg-gray-900">
        <div className="mx-auto flex h-16 max-w-screen-xl w-full items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
          <a href="/">
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
          </a>
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Explore
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                    href="/sign-in"
                  >
                    Login
                  </a>

                  <a
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                    href="/sign-up"
                  >
                    Register
                  </a>
                </div>
              ) : (
                <div className="flex items-center gap-5 ">
                  <h2 className="flex gap-1 cursor-pointer">
                    <ShoppingCart onClick={() => setOpenCart(!openCart)} />({cart?.length})
                  </h2>
                  <UserButton afterSignOutUrl="/" />
                  {openCart && <Cart />}
                </div>
              )}

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
