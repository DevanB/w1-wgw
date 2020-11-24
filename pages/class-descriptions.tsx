import { useState } from "react"
import { graphQLClient, gql } from "../utils/graphql"
import { Layout } from "../components/Layout"
import { AnimatePresence, motion } from "framer-motion"
import ReactMarkdown from "react-markdown"

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
