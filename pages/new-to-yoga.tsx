import { Layout } from "../components/Layout"

export default function NewToYogaPage() {
  const pageTitle = "New To Yoga"

  return (
    <>
      <Layout title={pageTitle}>
        <div className="px-4 mx-auto my-8 sm:px-6 max-w-7xl space-y-8">
          <div className="prose max-w-7xl">
            <p className="text-base text-gray-900">
              Welcome to Warrior One Winter Garden Windermere. Thank you for
              considering our studio. Our goal is to provide you a meaningful
              and fulfilling experience.
            </p>
            <p className="text-base text-gray-900">
              This special 30 days unlimited introductory offer will allow you
              to experience all of our instructors and environments (In-Studio,
              Outdoor and Online Classes), nearly 100 classes per week! Hot
              Yoga, Cool Yoga, Power Yoga, Yin Yoga, Yoga Flow, Yoga Sculpt and
              Yoga HIIT (high intensity interval training).
            </p>
            <p className="text-base text-gray-900">
              Just Show Up and Shine Out!
            </p>
            <p className="text-base text-gray-900">
              [Note, this introductory special is only applicable if you have
              never attended class at Warrior ONE or if you have attended only
              ONE class and then you decided to buy this special. When you come
              in-person for your first in-studio and/or outdoor class, please
              show up at least 15 minutes early.]
            </p>
          </div>
          <div>
            <a
              href="https://clients.mindbodyonline.com/classic/ws?studioid=590563&stype=41&sTG=22&prodId=100008"
              className="px-4 py-2 text-base font-medium text-center text-gray-900 rounded bg-brand-orange hover:bg-orange-600 focus:outline-none focus:ring transition"
            >
              Start Your 30 Day Unlimited Special
            </a>
          </div>
        </div>
      </Layout>
    </>
  )
}
