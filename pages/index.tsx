import Image from "next/image"
import Link from "next/link"
import { Layout } from "../components/Layout"

export default function IndexPage() {
  return (
    <Layout title="Home">
      <div className="h-56">
        <div className="fixed w-screen overflow-hidden -z-10">
          <Image className="object-cover" src="/hero.jpg" layout="fill" />
        </div>
        <small>A Baptiste affiliate yoga studio</small>
        <h1>Welcome to Warrior One Winter Garden-Windermere</h1>
        <h2>Now offering in-studio, outdoor, and online classes</h2>
        <Link href="/class-schedule">
          <a>Book a class</a>
        </Link>
        <Link href="/new-student-special">
          <a>New student special</a>
        </Link>
      </div>

      <div className="text-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-center min-h-full px-10 py-12 space-y-4 bg-brand-orange">
          <h3 className="text-3xl">New to Yoga?</h3>
          <p className="text-base tracking-tight">
            You do not need to stand on your head to be part of our studio! All
            you need is an open mind.
          </p>
          <div className="flex">
            <Link href="/new-to-yoga">
              <a className="px-4 py-2 font-medium text-center border-2 border-gray-900 rounded hover:bg-white hover:border-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Learn More
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center min-h-full px-10 py-12 space-y-4 bg-brand-red">
          <h3 className="text-3xl">Inside Our Studio</h3>
          <p className="text-base tracking-tight">
            Yoga is always better with the company of some inspirational people
            who keep you moving forward.
          </p>
          <div className="flex">
            <Link href="/our-studio">
              <a className="px-4 py-2 font-medium text-center border-2 border-gray-900 rounded hover:bg-white hover:border-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                See the Space
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center min-h-full px-10 py-12 space-y-4 bg-brand-orange sm:order-4 lg:order-3">
          <h3 className="text-3xl">Our Classes</h3>
          <p className="text-base tracking-tight">
            All of our classes follow the Baptist method that's summarized by
            its five pillars: gaze, breath, core stabilization, heat, and flow.
          </p>
          <div className="flex">
            <Link href="/class-descriptions">
              <a className="px-4 py-2 font-medium text-center border-2 border-gray-900 rounded hover:bg-white hover:border-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                View Our Classes
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center min-h-full px-10 py-12 space-y-4 bg-brand-red sm:order-3 lg:order-4">
          <h3 className="text-3xl">Upcoming Events</h3>
          <p className="text-base tracking-tight">
            Finding like-minded individuals is what keeps us together. Take a
            look at our upcoming community events.
          </p>
          <div className="flex">
            <Link href="/events">
              <a className="px-4 py-2 font-medium text-center border-2 border-gray-900 rounded hover:bg-white hover:border-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                View the Calendar
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <small>Google, Facebook, Yelp Reviews</small>
        <h2>Testimonials</h2>
      </div>

      <div>
        <small>Instructors</small>
        <h2>Meet Our Talented Instructors</h2>
      </div>

      <div>
        <h2>Class Packages</h2>
        <p>Purchase now to save on yoga classes</p>
        <Link href="/pricing">
          <a>Check them out</a>
        </Link>
      </div>

      <div>
        <img src="" />
        <h2>Download Our App</h2>
        <p>
          Find and book your favorite yoga classes from anywhere with our yoga
          app.
        </p>
        <a href="#">
          <img src="" alt="Download on the App Store" />
        </a>
        <a href="#">
          <img src="" alt="Get it on Google Play" />
        </a>
      </div>

      <div>
        <small>Events, Trainings, Workshops & Challenges</small>
        <h2>What's Coming Up...</h2>
        <Link href="/events">
          <a>More events</a>
        </Link>
      </div>

      <div className="contact-us">
        <div>
          <small className="topic">Have a question?</small>
          <h2 className="heading-2">Contact Us</h2>
          <p className="intro-text">
            Feel free to send us any questions you may have. We are happy to
            answer them.
          </p>
        </div>
        <div>
          <div>
            <small>Postal address</small>
            <h3>
              13796 Bridgewater Crossings Blvd
              <br />
              Suite 1040
              <br />
              Windermere, FL 34786
            </h3>
            <a href="#">Get directions</a>
          </div>

          <div>
            <small>Phone number</small>
            <h3>
              <a href="tel: +14076148240">(407) 614-8240</a>
            </h3>
          </div>

          <div>
            <small>Email address</small>
            <h3>
              <a href="mailto: info@warrioronewgw.com">
                info@warrioronewgw.com
              </a>
            </h3>
          </div>

          <div>
            <small>Hours</small>
            <h3>
              Monday - Sunday:
              <br />
              6am - 9pm
            </h3>
          </div>

          <div>
            <small>Stay connected</small>
            <p>f</p>
            <p>i</p>
          </div>
        </div>
      </div>

      <div>
        <p>Map</p>
      </div>
    </Layout>
  )
}
