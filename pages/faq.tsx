import Link from "../components/Link"
import ReactMarkdown from "react-markdown"
import Accordion, { AccordionItem } from "../components/Accordion"
import { Layout } from "../components/Layout"
import { graphQLClient, gql } from "../utils/graphql"

export default function FAQPage({ faqs }) {
  const pageTitle = "Frequently Asked Questions"
  return (
    <Layout title={pageTitle}>
      <div className="px-4 mx-auto sm:px-6 max-w-7xl">
        <p className="my-8 text-base text-center text-gray-900">
          Did not find an answer to your question?{" "}
          <Link href="/contact-us">Contact us</Link> and we will be glad to
          help.
        </p>
        <Accordion>
          {faqs?.map((faq: any) => (
            <AccordionItem key={faq.sys.id} heading={faq.question}>
              {faq.answer && (
                <ReactMarkdown
                  className="text-base text-gray-900 prose max-w-none"
                  source={faq.answer}
                />
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="px-4 py-10 sm:px-6 bg-gradient-to-r from-red-600 to-red-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between">
            <h2 className="font-serif text-2xl text-gray-100 md:text-3xl">
              Book A Class
            </h2>
            <div className="sm:flex">
              <Link href="/class-schedule">
                <a className="px-4 py-2 text-base font-medium text-center text-gray-100 rounded bg-brand-blue hover:bg-blue-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  View Schedule
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const faqPageQuery = gql`
  query FAQPageQuery {
    faqCollection {
      items {
        sys {
          id
        }
        question
        answer
      }
    }
  }
`

export async function getStaticProps() {
  try {
    const faqs = await graphQLClient.request(faqPageQuery)

    return {
      props: {
        faqs: faqs.faqCollection.items,
      },
    }
  } catch (err) {
    console.error(err)

    return {
      props: {},
    }
  }
}
