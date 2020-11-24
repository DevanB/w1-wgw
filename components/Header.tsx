import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "@headlessui/react"
import { AnimatePresence, motion } from "framer-motion"

export function Header({ noBackground }: { noBackground?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className={`px-4 ${noBackground ? "" : "bg-brand-blue"} sm:px-6`}>
        <div className="flex items-center justify-between pt-6 pb-4 mx-auto md:justify-start md:space-x-10 header-wrapper max-w-7xl">
          <div className="md:w-0 md:flex-1">
            <Link href="/">
              <a className="flex">
                <Image
                  src="/logo.svg"
                  alt="Warrior One logo"
                  width={100}
                  height={104}
                  layout="intrinsic"
                />
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden mobile-menu">
            <button
              onClick={() => setIsMenuOpen(true)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-100 mobile-menu-item rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative inline-block text-left">
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button
                      className={`${
                        open ? "text-gray-300" : "text-gray-100"
                      } inline-flex items-center text-base font-medium group space-x-2 leading-6 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition`}
                    >
                      <span>Classes</span>
                      <svg
                        className="w-5 h-5 text-gray-100 group-hover:text-gray-300 group-focus:text-gray-300 transition"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Menu.Button>
                    <AnimatePresence>
                      {open && (
                        <Menu.Items
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: 0 }}
                          animate={{ opacity: 1, y: "0.5rem" }}
                          exit={{ opacity: 0, y: 0 }}
                          className="absolute w-56 mt-3 bg-gray-100 border border-gray-200 shadow-lg outline-none divide-y divide-gray-100 rounded-md"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <Link href="/class-schedule">
                                <a
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block w-full text-left px-4 py-2 text-base font-medium leading-6 hover:bg-gray-50`}
                                >
                                  Schedule
                                </a>
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link href="/class-descriptions">
                                <a
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block w-full text-left px-4 py-2 text-base font-medium leading-6 hover:bg-gray-50`}
                                >
                                  Class Descriptions
                                </a>
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link href="/new-student-special">
                                <a
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block w-full text-left px-4 py-2 text-base font-medium leading-6 hover:bg-gray-50`}
                                >
                                  New Student Special
                                </a>
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link href="/private-sessions">
                                <a
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block w-full text-left px-4 py-2 text-base font-medium leading-6 hover:bg-gray-50`}
                                >
                                  Private Sessions
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Menu>
            </div>

            <Link href="/events">
              <a className="text-base font-medium text-gray-100 leading-6 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition">
                Events
              </a>
            </Link>
            <Link href="/pricing">
              <a className="text-base font-medium text-gray-100 leading-6 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition">
                Pricing
              </a>
            </Link>
            <Link href="/teacher-trainings">
              <a className="text-base font-medium text-gray-100 leading-6 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition">
                Teacher Training
              </a>
            </Link>
            <div className="relative inline-block text-left">
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button
                      className={`${
                        open ? "text-gray-300" : "text-gray-100"
                      } inline-flex items-center text-base font-medium group space-x-2 leading-6 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition`}
                    >
                      <span>Community</span>
                      <svg
                        className="w-5 text-gray-100 s-5 group-hover:text-gray-300 group-focus:text-gray-300 transition"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Menu.Button>
                    <AnimatePresence>
                      {open && (
                        <Menu.Items
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: 0 }}
                          animate={{ opacity: 1, y: "0.5rem" }}
                          exit={{ opacity: 0, y: 0 }}
                          className="absolute w-56 mt-3 bg-gray-100 border border-gray-200 shadow-lg outline-none divide-y divide-gray-100 rounded-md"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <Link href="/tr1be">
                                <a
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block w-full text-left px-4 py-2 text-base font-medium leading-6 hover:bg-gray-50`}
                                >
                                  Tr1be
                                </a>
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link href="/blog">
                                <a
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block w-full text-left px-4 py-2 text-base font-medium leading-6 hover:bg-gray-50`}
                                >
                                  Blog
                                </a>
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link href="/gallery">
                                <a
                                  className={`${
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  } block w-full text-left px-4 py-2 text-base font-medium leading-6 hover:bg-gray-50`}
                                >
                                  Gallery
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Menu>
            </div>
            <Link href="/about">
              <a className="text-base font-medium text-gray-100 leading-6 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition">
                About
              </a>
            </Link>
            <Link href="/faq">
              <a className="text-base font-medium text-gray-100 leading-6 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition">
                FAQ
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-base font-medium text-gray-100 leading-6 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition">
                Contact
              </a>
            </Link>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-x-0 top-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-lg">
                <div className="bg-gray-100 rounded-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                  <div className="px-5 pt-5 pb-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-auto h-8">
                        <Link href="/">
                          <a>
                            <Image
                              src="/logo-inverted.svg"
                              alt="Warrior One logo"
                              width={35}
                              height={35}
                              layout="intrinsic"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="-mr-2">
                        <button
                          onClick={() => setIsMenuOpen(false)}
                          type="button"
                          className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"
                        >
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <nav className="grid gap-y-6">
                        <Link href="/class-schedule">
                          <a className="flex items-center p-3 -m-3 space-x-3 rounded-md hover:bg-gray-50 transition">
                            <div className="text-base font-medium text-gray-900 leading-6">
                              Class Schedule
                            </div>
                          </a>
                        </Link>
                        <Link href="/class-descriptions">
                          <a className="flex items-center p-3 -m-3 space-x-3 rounded-md hover:bg-gray-50 transition">
                            <div className="text-base font-medium text-gray-900 leading-6">
                              Class Descriptions
                            </div>
                          </a>
                        </Link>
                        <Link href="/new-student-special">
                          <a className="flex items-center p-3 -m-3 space-x-3 rounded-md hover:bg-gray-50 transition">
                            <div className="text-base font-medium text-gray-900 leading-6">
                              New Student Special
                            </div>
                          </a>
                        </Link>
                        <Link href="/about">
                          <a className="flex items-center p-3 -m-3 space-x-3 rounded-md hover:bg-gray-50 transition">
                            <div className="text-base font-medium text-gray-900 leading-6">
                              About
                            </div>
                          </a>
                        </Link>
                        <Link href="/contact">
                          <a className="flex items-center p-3 -m-3 space-x-3 rounded-md hover:bg-gray-50 transition">
                            <div className="text-base font-medium text-gray-900 leading-6">
                              Contact
                            </div>
                          </a>
                        </Link>
                      </nav>
                    </div>
                  </div>
                  <div className="px-5 py-6 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <Link href="/events">
                        <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition">
                          Events
                        </a>
                      </Link>
                      <Link href="/pricing">
                        <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition">
                          Pricing
                        </a>
                      </Link>
                      <Link href="/teacher-trainings">
                        <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition">
                          Teacher Training
                        </a>
                      </Link>
                      <Link href="/private-sessions">
                        <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition">
                          Private Sessions
                        </a>
                      </Link>
                      <Link href="/tr1be">
                        <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition">
                          Tr1be
                        </a>
                      </Link>
                      <Link href="/blog">
                        <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition">
                          Blog
                        </a>
                      </Link>
                      <Link href="/gallery">
                        <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition">
                          Gallery
                        </a>
                      </Link>
                      <Link href="/faq">
                        <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition">
                          FAQ
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
