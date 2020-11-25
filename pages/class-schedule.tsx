import Head from "next/head"
import { useEffect } from "react"
import Link from "../components/Link"
import { Layout } from "../components/Layout"

export default function ClassSchedulePage() {
  const pageTitle = "Class Schedule"

  useEffect(() => {
    return () => {
      const el1 = document.querySelector(".hc-pignose-calendar-wrapper")
      if (el1) el1.outerHTML = ""
      const el2 = document.querySelector(".hc-pignose-calendar-wrapper-overlay")
      if (el2) el2.outerHTML = ""
      const el3 = document.querySelector(".semantic-content")
      if (el3) el3.outerHTML = ""
    }
  }, [])

  return (
    <>
      <Head>
        <script
          src="https://widgets.mindbodyonline.com/javascripts/healcode.js"
          type="text/javascript"
          async={true}
        />
      </Head>
      <Layout title={pageTitle}>
        <p className="px-4 my-8 text-base text-center text-gray-900 sm:px-6">
          If you are having issues with the schedule below, try registering{" "}
          <a className="text-brand-blue" href="#">
            through MINDBODY directly using this link
          </a>
          .<br />
          If your issues persist,{" "}
          <Link href="/contact-us" className="text-brand-blue">
            contact us
          </Link>{" "}
          and we will be happy to help!
        </p>
        <div
          className="mx-auto my-2 max-w-7xl"
          dangerouslySetInnerHTML={{
            __html: `
              <healcode-widget
                data-type="schedules"
                data-widget-partner="object"
                data-widget-id="6d9018181b4"
                data-widget-version="1"
              ></healcode-widget>
            `,
          }}
        />
      </Layout>
    </>
  )
}
