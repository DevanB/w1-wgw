import { Layout } from "../components/Layout"
import Link from "../components/Link"

export default function HealthPage() {
  const pageTitle = "Warrior One Winter Garden Windermere COVID-19 Guidelines"

  return (
    <Layout title={pageTitle}>
      <div className="px-4 mx-auto my-8 text-base text-gray-900 max-w-7xl sm:px-6 prose">
        <p>
          We are excited to welcome you back into our studio. We miss you and
          are so grateful for this yoga community. Let’s practice space,
          cleanliness, and community together. Your health and safety is our #1
          priority
        </p>

        <p>
          <b>Classes and Environments&nbsp;</b>
        </p>
        <p>
          We have added more classes and environments for you to choose from
          and&nbsp;be safe.
        </p>
        <ul>
          <li>Online live via Zoom classes</li>
          <li>
            On-demand video library (dozens of classes featuring a great variety
            to choose from)
          </li>
          <li>Outdoor classes (next to our studio)</li>
        </ul>
        <p>
          Please view our <Link href="/class-schedule">class schedule</Link> to
          pick the dates, times, and classes that are right for you.
        </p>
        <p>
          <b>Studio Reopening Measures</b>
        </p>
        <p>
          We’ve been working hard and have taken several steps to get ready to
          reopen and welcome you back to our studio.
        </p>
        <ul>
          <li>
            Converted and outfitted our entire studio (all 3 rooms) to create
            more space and social distancing during your practice.
          </li>
          <li>
            Installed brand new anti-bacterial Zebra flooring. Zebra is the
            world’s leading training facility outfitter, offering
            premier-quality flooring backed by experts who design, install, and
            maintain outstanding facilities.{" "}
            <Link href="/studio">Learn more about Zebra flooring.</Link>
          </li>
          <li>
            Dyson Air Purifiers in every room.&nbsp;
            <Link href="/studio">
              Learn more about our Dyson air purifiers.
            </Link>
          </li>
          <li>
            Ionizer and Ozone Generator (link within our website).&nbsp;
            <Link href="/studio">
              Learn more about our ionizers and ozone generators.
            </Link>
          </li>
          <li>
            Sanitation Stations: We have added three hand sanitation stations
            (one per room).
          </li>
        </ul>
        <p>
          Thank you for your patience as we all learn to navigate and&nbsp;move
          through these unknown times together.
        </p>
        <p>
          <b>What are we doing to keep staff, instructors and students safe?</b>
        </p>
        <p>
          Our staff and instructors conduct regular and thorough cleaning of all
          surfaces, and areas of the studio and regularly complete deep
          cleanings. Although we cannot eliminate all risks associated with
          COVID-19, we’ve taken several additional steps to strengthen our
          existing cleanliness policies and procedures to help keep everyone
          safe.
        </p>
        <p>Below are some of the changes we have made:</p>
        <ul>
          <li>
            Converted and outfitted our entire studio (all 3 rooms) to create
            more space and social distancing during your practice.
          </li>
          <li>
            Increased, thorough cleaning is conducted using disinfectant on the
            EPA list effective against COVID-19. This includes continually
            cleaning and sanitizing high-touch areas. We wipe down and disinfect
            before and after each class. Daily overnight studio deep cleaning
            takes place using air purifiers and ionizer.
          </li>
          <li>
            Sanitation stations available in each room&nbsp;of the studio.
          </li>
          <li>Mats are placed only in clearly designated floor marks.</li>
          <li>No shared props. Students will bring their own props.</li>
          <li>
            Touchless check-in, via our website and the MINDBODY&nbsp;app.
          </li>
          <li>
            New signage placed throughout the studio highlighting sanitation
            stations and social distancing guidelines.
          </li>
          <li>
            Additional information about operating hours, class environments to
            choose from as well as other local guidelines that may apply can be
            found <Link href="/">on our website</Link>.
          </li>
        </ul>
        <p>
          <b>Our requests to you</b>
        </p>
        <ul>
          <li>Sign a new COVID-19 waiver before taking class.</li>
          <li>
            If you have ANY symptoms of COVID-19 or have been&nbsp;exposed
            please stay home.
          </li>
          <li>Sanitize your hands or wash hands for 20 seconds.</li>
          <li>Bring your own mat, towel, water bottle, and props.</li>
          <li>No shoes allowed in the studio, please carry them in and out.</li>
          <li>Respect social distancing guidelines.</li>
          <li>Leave directly after class, keep conversations outside.</li>
          <li>Give us time to clean the studio for the next class.</li>
          <li>Wipe things down after use.</li>
          <li>
            We encourage you to download the MINDBODY mobile app or pre-register
            for a class via{" "}
            <Link href="/class-schedule">our online schedule</Link> beforehand
            to allow for a touchless check-in process.
          </li>
          <li>
            Unless otherwise noted, students are not required to wear a mask or
            gloves unless local guidelines require it.
          </li>
          <li>Try our great zoom classes!</li>
        </ul>
        <p>
          <b>What type of disinfectant do you use?</b>
        </p>
        <p>
          We will be conducting increased, thorough cleanings throughout all
          areas of the club using disinfectant on the EPA list effective against
          COVID-19.
        </p>
        <p>
          <b>What can I do to stay safe?</b>
        </p>
        <ul>
          <li>
            The CDC recommends you wash your hands for at least 20 seconds with
            soap and water.
          </li>
          <li>Remember to disinfect equipment before and after use.</li>
          <li>Maintain physical distance.</li>
          <li>Please stay home if you’re not feeling well.</li>
        </ul>
        <p>
          <b>Should I wear a mask or gloves to the studio?</b>
        </p>
        <p>
          You are not required to wear a mask or gloves unless local guidelines
          require it. We will continue to follow the recommendations of local
          authorities in order to take every necessary precaution to ensure the
          safety of our community.
        </p>
        <p>
          <b>
            Does Warrior One WGW offer digital-online classes and other content
            I can access?
            <br />
          </b>
        </p>
        <p>
          Yes. We have extensive live classes via Zoom plus a robust on-demand
          video library featuring dozens of classes with a great variety to
          choose from. Please see our{" "}
          <Link href="/class-schedule">class schedule</Link> for more
          information.
        </p>
      </div>
    </Layout>
  )
}
