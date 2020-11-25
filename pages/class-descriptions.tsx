import ReactMarkdown from "react-markdown"
import Accordion, { AccordionItem } from "../components/Accordion"
import { Layout } from "../components/Layout"
import Link from "../components/Link"
import { graphQLClient, gql } from "../utils/graphql"

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
        <Accordion>
          {classes
            ?.sort((a: any, b: any) => (a.type > b.type ? 1 : -1))
            .map((classType: any) => (
              <AccordionItem key={classType.sys.id} heading={classType.type}>
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
              <Link
                href="/class-schedule"
                className="px-4 py-2 text-base font-medium text-center text-gray-100 rounded bg-brand-blue hover:bg-blue-900 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                View Schedule
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
