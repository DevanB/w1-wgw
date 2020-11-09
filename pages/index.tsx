import Image from "next/image"
import Link from "next/link"
import { Layout } from "../components/Layout"
import { Header } from "../components/Header"
import { TopBanner } from "../components/TopBanner"
import GoogleMapReact from "google-map-react"
import { graphQLClient, gql } from "../utils/graphql"

export default function IndexPage({ events, instructors, testimonials }: any) {
  return (
    <Layout title="Home" noHeader>
      <TopBanner />
      <div
        className="h-full bg-center bg-cover"
        style={{
          backgroundImage: `url("/hero.jpg"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.4))`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <Header noBackground />
          <div className="px-4 pb-16 text-gray-100 sm:px-6 sm:pt-8 md:py-24 lg:pb-48">
            <small className="text-xs tracking-wider uppercase">
              A Baptiste Affiliate Yoga Studio
            </small>
            <div className="space-y-3 sm:space-y-6 md:space-y-8">
              <h1 className="font-serif text-3xl leading-9 md:max-w-lg md:text-4xl">
                Welcome to Warrior One <br className="hidden sm:block" />
                Winter Garden-Windermere
              </h1>
              <h2 className="max-w-xs font-serif text-2xl leading-tight text-yellow-200 sm:max-w-none">
                Now offering in-studio, outdoor, and online classes
              </h2>
              <div className="flex flex-col pt-4 sm:flex-row space-y-3 row sm:space-y-0 sm:space-x-2">
                <div className="flex">
                  <Link href="/new-student-special">
                    <a className="px-4 py-2 text-base font-medium text-center text-gray-900 rounded bg-brand-red hover:bg-orange-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                      New Student Special
                    </a>
                  </Link>
                </div>
                <div className="flex">
                  <Link href="/class-scheduel">
                    <a className="px-4 py-2 text-base font-medium text-center text-gray-900 rounded bg-brand-orange hover:bg-orange-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                      Book A Class
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- Highlights ----- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-center min-h-full px-10 py-12 h-80 space-y-4 bg-brand-orange">
          <h3 className="font-serif text-2xl text-gray-900 md:text-3xl">
            New to Yoga?
          </h3>
          <p className="text-base tracking-tight text-gray-900">
            You do not need to stand on your head to be part of our studio! All
            you need is an open mind.
          </p>
          <div className="flex">
            <Link href="/new-to-yoga">
              <a className="py-2 text-base font-medium text-center text-gray-900 rounded sm:mt-2 hover:text-black focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Learn More
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center min-h-full px-10 py-12 h-80 space-y-4 bg-brand-red">
          <h3 className="font-serif text-2xl text-gray-900 md:text-3xl">
            Inside Our Studio
          </h3>
          <p className="text-base tracking-tight text-gray-900">
            Yoga is always better with the company of some inspirational people
            who keep you moving forward.
          </p>
          <div className="flex">
            <Link href="/our-studio">
              <a className="py-2 text-base font-medium text-center text-gray-900 rounded sm:mt-2 hover:text-black focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                See the Space
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center min-h-full px-10 py-12 h-80 space-y-4 bg-brand-orange sm:order-4 lg:order-3">
          <h3 className="font-serif text-2xl text-gray-900 md:text-3xl">
            Our Classes
          </h3>
          <p className="text-base tracking-tight text-gray-900">
            All of our classes follow the Baptist method that's summarized by
            its five pillars: gaze, breath, core stabilization, heat, and flow.
          </p>
          <div className="flex">
            <Link href="/class-descriptions">
              <a className="py-2 text-base font-medium text-center text-gray-900 rounded sm:mt-2 hover:text-black focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                View Our Classes
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center min-h-full px-10 py-12 h-80 space-y-4 bg-brand-red sm:order-3 lg:order-4">
          <h3 className="font-serif text-2xl text-gray-900 md:text-3xl">
            Upcoming Events
          </h3>
          <p className="text-base tracking-tight text-gray-900">
            Finding like-minded individuals is what keeps us together. Take a
            look at our upcoming community events.
          </p>
          <div className="flex">
            <Link href="/events">
              <a className="py-2 text-base font-medium text-center text-gray-900 rounded sm:mt-2 hover:text-black focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                View the Calendar
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* ----- Testimonials ----- */}
      <div className="py-16 bg-brand-blue">
        <div className="px-4 mx-auto sm:px-6 max-w-7xl">
          <small className="text-xs tracking-wider text-gray-100">
            Google, Facebook, Yelp Reviews
          </small>
          <div className="space-y-8">
            <h2 className="font-serif text-2xl text-gray-100 md:text-3xl">
              Testimonials
            </h2>
            <div className="flex flex-col overflow-x-auto sm:flex-row space-y-8 sm:space-x-8 sm:space-y-0">
              {testimonials.map(t => (
                <blockquote
                  key={t.sys.id}
                  className="flex flex-col flex-none w-full px-12 py-12 bg-gray-100 rounded sm:pb-6 sm:flex-grow sm:max-w-sm"
                >
                  <div className="relative text-lg font-medium text-white leading-7 md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 w-10 h-10 text-gray-200 transform -translate-x-6 -translate-y-4"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative text-gray-900">
                      {t.testimonial.slice(0, 140)}...
                    </p>
                  </div>
                  <footer className="mt-8">
                    <div className="flex items-center justify-between">
                      <Link href="/testimonials">
                        <a className="text-base font-medium text-center text-gray-900 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                          Read More
                        </a>
                      </Link>
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
                        <span className="font-medium leading-none text-white">
                          {t.firstName.slice(0, 1)}
                          {t.lastName?.slice(0, 1)}
                        </span>
                      </span>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
            <div>
              <Link href="/testimonials">
                <a className="text-base font-medium text-center text-gray-100 rounded bg-brand-blue hover:bg-blue-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  View More Testimonials
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ----- Instructors ----- */}
      <div className="px-4 py-16 mx-auto sm:px-6 max-w-7xl">
        <small className="text-xs tracking-wider uppercase">Instructors</small>
        <h2 className="mb-4 font-serif text-2xl md:text-3xl">
          Meet Our Talented Instructors
        </h2>
        <div className="flex flex-row mb-4 overflow-x-auto space-x-8">
          {instructors.slice(1, 6).map(i => (
            <div className="flex-none w-64 h-auto pb-4" key={i.sys.id}>
              <Link href={`/instructors/${i.slug}`}>
                <div className="cursor-pointer space-y-2">
                  <Image
                    src={i.image.url}
                    height={i.image.height}
                    width={i.image.width}
                    alt={i.image.description}
                  />
                  <h3 className="font-serif text-xl text-gray-900">
                    {i.firstName}
                  </h3>
                  <p className="text-base text-gray-900 truncate">
                    {i.position}
                  </p>
                </div>
              </Link>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center flex-none w-64 group-hover:bg-gray-100 group transition ease-in-out h-80 duration-150">
            <Link href="/teacher-trainings">
              <div className="flex flex-col items-center justify-center space-y-2">
                <h3 className="font-serif text-xl text-gray-900">You!</h3>
                <p className="text-base text-center text-gray-900 cursor-pointer">
                  Learn About Teacher Trainings
                </p>
              </div>
            </Link>
          </div>
        </div>
        <Link href="/instructors">
          <a className="px-4 py-2 text-base font-medium text-center text-gray-100 rounded bg-brand-blue hover:bg-blue-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            View All Instructors
          </a>
        </Link>
      </div>

      {/* ----- Class Packages ----- */}
      {/*<div className="px-4 py-16 sm:px-6 bg-gradient-to-r from-red-600 to-red-900">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col space-y-4 ">
            <h2 className="font-serif text-2xl text-gray-100 md:text-3xl">
              Class Packages
            </h2>
            <p className="text-base text-gray-100">
              Purchase now to save on yoga classes
            </p>
            <div className="sm:flex">
              <Link href="/pricing">
                <a className="px-4 py-2 text-base font-medium text-center text-gray-100 rounded bg-brand-blue hover:bg-blue-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  Check Them Out
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>*/}

      {/* ----- Events ----- */}
      <div className="px-4 bg-brand-blue sm:px-6">
        <div className="flex justify-between max-w-5xl mx-auto">
          <div className="py-16">
            <small className="text-xs tracking-wider text-gray-100">
              Events, Trainings, Workshops & Challenges
            </small>
            <h2 className="font-serif text-2xl text-gray-100 md:text-3xl">
              What's Coming Up...
            </h2>
            {events.map(e => (
              <div key={e.sys.id}>
                <Image
                  src={e.image.url}
                  width={e.image.width}
                  height={e.image.height}
                  alt=""
                />
                <span>
                  {e.date} - {e.endDate}
                </span>
                <h3>{e.name}</h3>
                <span>{e.cost}</span>
                <span>{e.url}</span>
                <p>{e.description}</p>
                <Link href={`/events/${e.slug}`}>
                  <a>Learn More</a>
                </Link>
              </div>
            ))}
            <Link href="/events">
              <a className="text-gray-100">More Events</a>
            </Link>
          </div>
          <div className="flex h-auto w-96">
            <Image src="/events.jpg" height={512} width={341} />
          </div>
        </div>
      </div>

      {/* ----- MINDBODY App ----- */}
      <div className="flex flex-col-reverse items-center max-w-6xl px-4 pt-12 mx-auto sm:px-6 md:flex-row">
        <div className="flex flex-1 mt-8 lg:ml-12">
          <Image src="/mindBodyApp.webp" alt="" height={468} width={455} />
        </div>
        <div className="flex flex-col items-center justify-center flex-1 text-center md:items-start md:text-left space-y-8">
          <h2 className="font-serif text-2xl text-gray-900 lg:text-3xl">
            Download Our App
          </h2>
          <p className="text-base text-gray-900 lg:max-w-md">
            Find and book your favorite yoga classes from anywhere with our yoga
            app.
          </p>
          <div className="flex flex-row items-center space-y-0 space-x-2">
            <a
              target="_blank"
              rel="nofollow noreferrer"
              href="http://get.mndbdy.ly/OU6zrTWdIS"
            >
              <Image
                src="/downloadiOSAppStoreDark.svg"
                alt="Download MINDBODY on the Apple App Store"
                height={50}
                width={150}
              />
            </a>
            <a
              target="_blank"
              rel="nofollow noreferrer"
              href="http://get.mndbdy.ly/OU6zrTWdIS"
            >
              <Image
                src="/downloadGooglePlayStoreDark.svg"
                alt="Download MINDBODY on the Google Play Store"
                height={70}
                width={170}
              />
            </a>
          </div>
        </div>
      </div>

      {/* ----- Contact Us ----- */}
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

      {/* ----- Map ----- */}
      <div className="h-96">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          }}
          defaultCenter={{
            lat: 28.478872,
            lng: -81.591729,
          }}
          defaultZoom={17}
        />
      </div>
    </Layout>
  )
}

const homePageQuery = gql`
  query HomePageQuery($currentDate: DateTime!) {
    instructorCollection(order: [order_ASC], limit: 6) {
      items {
        sys {
          id
        }
        slug
        order
        image {
          width
          height
          title
          description
          url
        }
        firstName
        position
      }
    }
    testimonialCollection(limit: 3) {
      items {
        sys {
          id
        }
        source
        firstName
        lastName
        testimonial
      }
    }
    eventCollection(
      where: { endDate_gte: $currentDate }
      order: [date_ASC]
      limit: 3
    ) {
      items {
        sys {
          id
        }
        slug
        image {
          width
          height
          title
          description
          url
        }
        date
        endDate
        name
        description
        cost
        url
      }
    }
  }
`

export async function getStaticProps() {
  try {
    const homePage = await graphQLClient.request(homePageQuery, {
      currentDate: new Date(),
    })

    return {
      props: {
        instructors: homePage.instructorCollection.items,
        testimonials: homePage.testimonialCollection.items,
        events: homePage.eventCollection.items,
      },
    }
  } catch (err) {
    console.error(err)

    return {
      props: {},
    }
  }
}
