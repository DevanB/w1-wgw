import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import ReactMarkdown from "react-markdown"

import { Layout } from "../components/Layout"
import { graphQLClient, gql } from "../utils/graphql"

const AccordionItem = (classType: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="pt-6">
      <dt className="text-lg">
        <button
          className="flex items-start justify-between w-full text-left text-gray-400 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium text-gray-900">
            <p>{classType.type}</p>
          </span>
          <span className="flex items-center ml-6 h-7">
            <motion.svg
              key="accordionHeaderIndicator"
              variants={{
                closed: {
                  rotate: 0,
                },
                open: {
                  rotate: 180,
                },
              }}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              exit="closed"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </span>
        </button>
      </dt>
      <AnimatePresence initial={isOpen}>
        {isOpen && (
          <motion.dd
            className="pr-12 mt-2 overflow-hidden"
            key="accordionItemBody"
            variants={{ closed: { height: 0 }, open: { height: "auto" } }}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="my-4 space-y-8">
              {classType.classesCollection &&
                classType.classesCollection.items.map((aClass: any) => (
                  <div key={aClass.sys.id}>
                    {classType.type !== aClass.title && (
                      <h2 className="text-xl font-medium text-brand-blue">
                        {aClass.title}
                      </h2>
                    )}
                    <ReactMarkdown
                      className="text-base text-gray-900 prose max-w-none"
                      source={aClass.description}
                    />
                  </div>
                ))}
            </div>
          </motion.dd>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ClassDescriptionsPage({ classes }) {
  const pageTitle = "Class Descriptions"

  return (
    <Layout title={pageTitle}>
      <div className="px-4 mx-auto sm:px-6 max-w-7xl">
        <p className="my-8 text-base text-gray-900">
          Every class features modification options to make gentler or more
          vigorous movements, as you need. Get a whole-body workout to
          strengthen, balance, and provide clarity to your mind and body.
        </p>
        <dl className="my-12 space-y-6 divide-y divide-gray-200">
          {classes
            ?.sort((a: any, b: any) => (a.type > b.type ? 1 : -1))
            .map((classType: any) => (
              <AccordionItem key={classType.sys.id} {...classType} />
            ))}
        </dl>
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

const classDescriptionsPageQuery = gql`
  query ClassDescriptionsPageQuery {
    classTypeCollection {
      items {
        sys {
          id
        }
        type
        classesCollection {
          items {
            sys {
              id
            }
            title
            description
          }
        }
      }
    }
  }
`

export async function getStaticProps() {
  try {
    const classes = await graphQLClient.request(classDescriptionsPageQuery)

    return {
      props: {
        classes: classes.classTypeCollection.items,
      },
    }
  } catch (err) {
    console.error(err)

    return {
      props: {},
    }
  }
}
