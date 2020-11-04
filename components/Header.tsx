import Image from "next/image"
import Link from "next/link"
import { TopBanner } from "./TopBanner"

export function Header() {
  return (
    <>
      <TopBanner />
      <header className="px-4 header sm:px-6">
        <div className="flex items-center justify-between py-6 mx-auto lg:justify-start lg:space-x-10 header-wrapper max-w-7xl">
          <div className="lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex">
                <Image
                  className="w-auto h-8 sm:h-10"
                  src="/logo.png"
                  alt="Warrior One Winter Garden Windermere logo"
                  width={110}
                  height={114}
                />
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 lg:hidden mobile-menu">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-100 mobile-menu-item rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
          <nav className="hidden lg:flex space-x-10">
            <div className="relative">
              <button
                type="button"
                className="inline-flex items-center text-base font-medium text-gray-100 group space-x-2 leading-6 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition ease-in-out duration-150"
              >
                <span>Classes</span>
                {/*<!--
              Heroicon name: chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
              -->*/}
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              {/*<!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
              -->*/}
              <div className="absolute w-screen max-w-xs px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg">
                  <div className="overflow-hidden rounded-lg shadow-xs">
                    <div className="relative z-20 px-5 py-6 bg-white grid gap-6 sm:gap-8 sm:p-8">
                      <Link href="/class-schedule">
                        <a className="flex items-start p-3 -m-3 rounded-lg space-x-4 hover:bg-gray-50 transition ease-in-out duration-150">
                          <div className="space-y-1">
                            <p className="text-base font-medium text-gray-900 leading-6">
                              Class Schedule
                            </p>
                          </div>
                        </a>
                      </Link>
                      <Link href="/class-descriptions">
                        <a className="flex items-start p-3 -m-3 rounded-lg space-x-4 hover:bg-gray-50 transition ease-in-out duration-150">
                          <div className="space-y-1">
                            <p className="text-base font-medium text-gray-900 leading-6">
                              Class Descriptions
                            </p>
                          </div>
                        </a>
                      </Link>
                      <Link href="/new-student-special">
                        <a className="flex items-start p-3 -m-3 rounded-lg space-x-4 hover:bg-gray-50 transition ease-in-out duration-150">
                          <div className="space-y-1">
                            <p className="text-base font-medium text-gray-900 leading-6">
                              New Student Special
                            </p>
                          </div>
                        </a>
                      </Link>
                      <Link href="/private-sessions">
                        <a className="flex items-start p-3 -m-3 rounded-lg space-x-4 hover:bg-gray-50 transition ease-in-out duration-150">
                          <div className="space-y-1">
                            <p className="text-base font-medium text-gray-900 leading-6">
                              Private Sessions
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/events">
              <a className="text-base font-medium text-gray-400 leading-6 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition ease-in-out duration-150">
                Events
              </a>
            </Link>
            <Link href="/pricing">
              <a className="text-base font-medium text-gray-400 leading-6 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition ease-in-out duration-150">
                Pricing
              </a>
            </Link>
            <Link href="/teacher-trainings">
              <a className="text-base font-medium text-gray-400 leading-6 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition ease-in-out duration-150">
                Teacher Trainings
              </a>
            </Link>
            <div className="relative">
              <button
                type="button"
                className="inline-flex items-center text-base font-medium text-gray-100 group space-x-2 leading-6 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition ease-in-out duration-150"
              >
                <span>Community</span>
                {/*<!--
              Heroicon name: chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
              -->*/}
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              {/*<!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
              -->*/}
              <div className="absolute w-screen max-w-xs px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg">
                  <div className="overflow-hidden rounded-lg shadow-xs">
                    <div className="relative z-20 px-5 py-6 bg-white grid gap-6 sm:gap-8 sm:p-8">
                      <Link href="/tr1be">
                        <a className="flex items-start p-3 -m-3 rounded-lg space-x-4 hover:bg-gray-50 transition ease-in-out duration-150">
                          <div className="space-y-1">
                            <p className="text-base font-medium text-gray-900 leading-6">
                              Tr1be
                            </p>
                          </div>
                        </a>
                      </Link>
                      <Link href="/blog">
                        <a className="flex items-start p-3 -m-3 rounded-lg space-x-4 hover:bg-gray-50 transition ease-in-out duration-150">
                          <div className="space-y-1">
                            <p className="text-base font-medium text-gray-900 leading-6">
                              Blog
                            </p>
                          </div>
                        </a>
                      </Link>
                      <Link href="/gallery">
                        <a className="flex items-start p-3 -m-3 rounded-lg space-x-4 hover:bg-gray-50 transition ease-in-out duration-150">
                          <div className="space-y-1">
                            <p className="text-base font-medium text-gray-900 leading-6">
                              Gallery
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about">
              <a className="text-base font-medium text-gray-400 leading-6 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition ease-in-out duration-150">
                About
              </a>
            </Link>
            <Link href="/faq">
              <a className="text-base font-medium text-gray-400 leading-6 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition ease-in-out duration-150">
                FAQ
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-base font-medium text-gray-400 leading-6 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition ease-in-out duration-150">
                Contact
              </a>
            </Link>
          </nav>
        </div>
      </header>
      {/*<!--
		Mobile menu, show/hide based on mobile menu state.

		Entering: "duration-200 ease-out"
			From: "opacity-0 scale-95"
			To: "opacity-100 scale-100"
		Leaving: "duration-100 ease-in"
			From: "opacity-100 scale-100"
			To: "opacity-0 scale-95"
-->*/}
      <div className="absolute inset-x-0 top-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg">
          <div className="bg-white rounded-lg shadow-xs divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="w-auto h-8"
                    src="/logo.png"
                    alt="Workflow"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    {/*<!-- Heroicon name: x -->*/}
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
                <nav className="grid gap-y-8">
                  <Link href="/class-schedule">
                    <a className="flex items-center p-3 -m-3 space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                      <div className="text-base font-medium text-gray-900 leading-6">
                        Class Schedule
                      </div>
                    </a>
                  </Link>
                  <Link href="/class-descriptions">
                    <a className="flex items-center p-3 -m-3 space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                      <div className="text-base font-medium text-gray-900 leading-6">
                        Class Descriptions
                      </div>
                    </a>
                  </Link>
                  <Link href="/new-student-special">
                    <a className="flex items-center p-3 -m-3 space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                      <div className="text-base font-medium text-gray-900 leading-6">
                        New Student Special
                      </div>
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="flex items-center p-3 -m-3 space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                      <div className="text-base font-medium text-gray-900 leading-6">
                        About
                      </div>
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="flex items-center p-3 -m-3 space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
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
                  <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
                    Events
                  </a>
                </Link>
                <Link href="/pricing">
                  <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
                    Pricing
                  </a>
                </Link>
                <Link href="/teacher-trainings">
                  <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
                    Teacher Training
                  </a>
                </Link>
                <Link href="/private-sessions">
                  <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
                    Private Sessions
                  </a>
                </Link>
                <Link href="/tr1be">
                  <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
                    Tr1be
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
                    Blog
                  </a>
                </Link>
                <Link href="/gallery">
                  <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
                    Gallery
                  </a>
                </Link>
                <Link href="/faq">
                  <a className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
                    FAQ
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// <div className="relative bg-white">
// 	<div className="px-4 mx-auto max-w-7xl sm:px-6">
// 		<div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
// 			<nav className="hidden md:flex space-x-10">
// 				<a href="#" className="text-base font-medium text-gray-500 leading-6 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
// 					Pricing
// 				</a>
// 			</nav>
// 		</div>
// 	</div>

// {/*<!--
// 		Mobile menu, show/hide based on mobile menu state.

// 		Entering: "duration-200 ease-out"
// 			From: "opacity-0 scale-95"
// 			To: "opacity-100 scale-100"
// 		Leaving: "duration-100 ease-in"
// 			From: "opacity-100 scale-100"
// 			To: "opacity-0 scale-95"
// -->*/}
// 	<div className="absolute inset-x-0 top-0 p-2 transition transform origin-top-right md:hidden">
// 		<div className="rounded-lg shadow-lg">
// 			<div className="bg-white rounded-lg shadow-xs divide-y-2 divide-gray-50">
// 				<div className="px-5 pt-5 pb-6 space-y-6">
// 					<div className="flex items-center justify-between">
// 						<div>
// 							<img className="w-auto h-8" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow">
// 						</div>
// 						<div className="-mr-2">
// 							<button type="button" className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
// {/*<!-- Heroicon name: x -->*/}
// 								<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// 									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
// 								</svg>
// 							</button>
// 						</div>
// 					</div>
// 					<div>
// 						<nav className="grid gap-y-8">
// 							<a href="#" className="flex items-center p-3 -m-3 space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
// 								<svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// 									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
// 								</svg>
// 								<div className="text-base font-medium text-gray-900 leading-6">
// 									Analytics
// 								</div>
// 							</a>
// 							<a href="#" className="flex items-center p-3 -m-3 space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
// 								<svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// 									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
// 								</svg>
// 								<div className="text-base font-medium text-gray-900 leading-6">
// 									Engagement
// 								</div>
// 							</a>
// 							<a href="#" className="flex items-center p-3 -m-3 space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
// 								<svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// 									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
// 								</svg>
// 								<div className="text-base font-medium text-gray-900 leading-6">
// 									Security
// 								</div>
// 							</a>
// 							<a href="#" className="flex items-center p-3 -m-3 space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
// 								<svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// 									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
// 								</svg>
// 								<div className="text-base font-medium text-gray-900 leading-6">
// 									Integrations
// 								</div>
// 							</a>
// 							<a href="#" className="flex items-center p-3 -m-3 space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
// 								<!-- Heroicon name: refresh -->
// 								<svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// 									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
// 								</svg>
// 								<div className="text-base font-medium text-gray-900 leading-6">
// 									Automations
// 								</div>
// 							</a>
// 						</nav>
// 					</div>
// 				</div>
// 				<div className="px-5 py-6 space-y-6">
// 					<div className="grid grid-cols-2 gap-y-4 gap-x-8">
// 						<a href="#" className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
// 							Pricing
// 						</a>
// 						<a href="#" className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
// 							Docs
// 						</a>
// 						<a href="#" className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
// 							Enterprise
// 						</a>
// 						<a href="#" className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
// 							Blog
// 						</a>
// 						<a href="#" className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
// 							Help Center
// 						</a>
// 						<a href="#" className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
// 							Guides
// 						</a>
// 						<a href="#" className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
// 							Security
// 						</a>
// 						<a href="#" className="text-base font-medium text-gray-900 leading-6 hover:text-gray-700 transition ease-in-out duration-150">
// 							Events
// 						</a>
// 					</div>
// 					<div className="space-y-6">
// 						<span className="flex w-full rounded-md shadow-sm">
// 							<a href="#" className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent leading-6 rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
// 								Sign up
// 							</a>
// 						</span>
// 						<p className="text-base font-medium text-center text-gray-500 leading-6">
// 							Existing customer?
// 							<a href="#" className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
// 								Sign in
// 							</a>
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
