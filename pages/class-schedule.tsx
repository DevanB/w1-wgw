import Link from "next/link"
import Head from "next/head"
import { useEffect } from "react"
import { Layout } from "../components/Layout"

export default function ClassSchedulePage() {
  const pageTitle = "Class Schedule"

  useEffect(() => {
    return () => {
      document.querySelector(".hc-pignose-calendar-wrapper").outerHTML = ""
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
          <Link href="/contact-us">
            <a className="text-brand-blue">contact us</a>
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
