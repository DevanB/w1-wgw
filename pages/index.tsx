import Image from "next/image"
import Link from "next/link"
import { Layout } from "../components/Layout"
import { Header } from "../components/Header"
import { TopBanner } from "../components/TopBanner"
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function IndexPage() {
  return (
    <Layout title="Home" noHeader>
      <TopBanner />
      <div
        className="h-full bg-center bg-cover"
        style={{
          backgroundImage: `url("/hero.jpg"), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <Header noBackground />
          <div className="px-4 pb-16 text-gray-100 sm:px-6 sm:pt-8 md:py-24 lg:pb-48">
            <small className="text-xs">A Baptiste Affiliate Yoga Studio</small>
            <div className="space-y-3 sm:space-y-6 md:space-y-8">
              <h1 className="text-3xl leading-9 md:max-w-lg md:text-4xl">
                Welcome to Warrior One <br className="hidden sm:block" />
                Winter Garden-Windermere
              </h1>
              <h2 className="max-w-xs text-base leading-tight sm:max-w-none">
                Now offering in-studio, outdoor, and online classes
              </h2>
              <div className="flex flex-col pt-4 sm:flex-row space-y-3 row sm:space-y-0 sm:space-x-2">
                <div className="flex">
                  <Link href="/new-student-special">
                    <a className="px-4 py-2 font-medium text-center text-gray-200 rounded bg-brand-red hover:bg-gray-100 hover:border-gray-100 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                      New Student Special
                    </a>
                  </Link>
                </div>
                <div className="flex">
                  <Link href="/class-scheduel">
                    <a className="px-4 py-2 font-medium text-center text-gray-900 rounded bg-brand-orange hover:bg-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                      Book A Class
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-center min-h-full px-10 py-12 h-80 space-y-4 bg-brand-orange">
          <h3 className="text-2xl md:text-3xl">New to Yoga?</h3>
          <p className="text-base tracking-tight">
            You do not need to stand on your head to be part of our studio! All
            you need is an open mind.
          </p>
          <div className="flex">
            <Link href="/new-to-yoga">
              <a className="px-4 py-2 text-base font-medium text-center border-2 border-gray-900 rounded sm:mt-2 hover:bg-gray-100 hover:border-gray-100 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Learn More
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center min-h-full px-10 py-12 h-80 space-y-4 bg-brand-red">
          <h3 className="text-2xl md:text-3xl">Inside Our Studio</h3>
          <p className="text-base tracking-tight">
            Yoga is always better with the company of some inspirational people
            who keep you moving forward.
          </p>
          <div className="flex">
            <Link href="/our-studio">
              <a className="px-4 py-2 text-base font-medium text-center border-2 border-gray-900 rounded sm:mt-2 hover:bg-gray-100 hover:border-gray-100 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                See the Space
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center min-h-full px-10 py-12 h-80 space-y-4 bg-brand-orange sm:order-4 lg:order-3">
          <h3 className="text-2xl md:text-3xl">Our Classes</h3>
          <p className="text-base tracking-tight">
            All of our classes follow the Baptist method that's summarized by
            its five pillars: gaze, breath, core stabilization, heat, and flow.
          </p>
          <div className="flex">
            <Link href="/class-descriptions">
              <a className="px-4 py-2 text-base font-medium text-center border-2 border-gray-900 rounded sm:mt-2 hover:bg-gray-100 hover:border-gray-100 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                View Our Classes
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center min-h-full px-10 py-12 h-80 space-y-4 bg-brand-red sm:order-3 lg:order-4">
          <h3 className="text-2xl md:text-3xl">Upcoming Events</h3>
          <p className="text-base tracking-tight">
            Finding like-minded individuals is what keeps us together. Take a
            look at our upcoming community events.
          </p>
          <div className="flex">
            <Link href="/events">
              <a className="px-4 py-2 text-base font-medium text-center border-2 border-gray-900 rounded sm:mt-2 hover:bg-gray-100 hover:border-gray-100 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                View the Calendar
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-10 py-16 bg-brand-blue">
        <div className="mx-auto text-gray-100 h-80 max-w-7xl space-y-2">
          <small className="text-xs">Google, Facebook, Yelp Reviews</small>
          <h2 className="text-2xl md:text-3xl">Testimonials</h2>
          <div className="block sm:hidden">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={3}
              visibleSlides={1}
            >
              <Slider>
                <Slide index={0}>I am the first Slide.</Slide>
                <Slide index={1}>I am the second Slide.</Slide>
                <Slide index={2}>I am the third Slide.</Slide>
              </Slider>
              <DotGroup />
            </CarouselProvider>
          </div>
          <div className="hidden sm:block md:hidden">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={3}
              visibleSlides={2}
            >
              <Slider>
                <Slide index={0}>I am the first Slide.</Slide>
                <Slide index={1}>I am the second Slide.</Slide>
                <Slide index={2}>I am the third Slide.</Slide>
                <Slide index={3}>I am the fourth Slide.</Slide>
              </Slider>
              <DotGroup />
            </CarouselProvider>
          </div>
          <div className="hidden sm:hidden md:block">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={3}
              visibleSlides={3}
            >
              <Slider>
                <Slide index={0}>I am the first Slide.</Slide>
                <Slide index={1}>I am the second Slide.</Slide>
                <Slide index={2}>I am the third Slide.</Slide>
                <Slide index={3}>I am the fourth Slide.</Slide>
                <Slide index={4}>I am the fifth Slide.</Slide>
                <Slide index={5}>I am the sixth Slide.</Slide>
              </Slider>
              <DotGroup />
            </CarouselProvider>
          </div>
        </div>
      </div>

      <div className="px-10 py-16">
        <div className="mx-auto h-80 max-w-7xl space-y-2">
          <small className="text-xs">Instructors</small>
          <h2 className="text-2xl md:text-3xl">
            Meet Our Talented Instructors
          </h2>
        </div>
      </div>

      <div className="h-40 py-12 bg-brand-red">
        <div className="min-h-full mx-auto text-gray-100 max-w-7xl">
          <h2 className="text-4xl">Class Packages</h2>
          <p>Purchase now to save on yoga classes</p>
          <Link href="/pricing">
            <a>Check them out</a>
          </Link>
        </div>
      </div>

      <div className="pt-12 h-90">
        <div className="flex flex-col-reverse items-center min-h-full px-4 mx-auto sm:px-6 max-w-7xl md:flex-row">
          <div className="flex flex-1 mt-8 lg:ml-12">
            <Image src="/mindBodyApp.webp" alt="" height={468} width={455} />
          </div>
          <div className="flex flex-col items-center justify-center flex-1 text-center text-gray-900 md:items-start md:text-left space-y-4">
            <h2 className="text-3xl lg:text-4xl">Download Our App</h2>
            <div className="flex m-w-3/4">
              <a
                target="_blank"
                rel="nofollow noreferrer"
                href="http://get.mndbdy.ly/OU6zrTWdIS"
                className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-black border border-transparent bg-brand-orange rounded-md leading-6 hover:bg-orange-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Get MINDBODY
              </a>
            </div>
            <p className="text-base">
              Find and book your favorite yoga classes from anywhere with our
              yoga app.
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
      </div>

      <div className="py-12 h-90 bg-brand-blue">
        <div className="flex min-h-full mx-auto max-w-7xl lg:flex-row">
          <div className="text-gray-100">
            <small className="text-xs">
              Events, Trainings, Workshops & Challenges
            </small>
            <h2 className="text-3xl lg:text-4xl">What's Coming Up...</h2>
            <Link href="/events">
              <a>More Events</a>
            </Link>
          </div>
          <div className="flex">
            <Image
              src="/hero.jpg"
              layout="responsive"
              objectFit="contain"
              objectPosition="bottom right"
              height={1330}
              width={2000}
            />
          </div>
        </div>
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

      <div className="h-96">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDZemqSWwhOwkUnP22GfdJmw50tvPzAllc" }}
          defaultCenter={{
            lat: 28.478872,
            lng: -81.591729,
          }}
          defaultZoom={17}
        >
          <AnyReactComponent text="My Marker" />
        </GoogleMapReact>
      </div>
    </Layout>
  )
}

//AIzaSyDWCA_3_2CKhqcGOb_nS3PG9giXerNxkzs
