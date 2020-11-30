import { format } from "date-fns"
import Image from "next/image"
import readingTime from "reading-time"
import { Layout } from "../components/Layout"
import Link from "../components/Link"
import { graphQLClient, gql } from "../utils/graphql"

export default function BlogPage({ posts }) {
  const pageTitle = "Blog"

  return (
    <Layout title={pageTitle}>
      <div className="relative px-4 my-8 sm:px-6">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-lg mx-auto mt-12 grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map(post => (
              <div
                key={post.sys.id}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.heroImage.url}
                      alt={post.heroImage.description}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-brand-blue">
                      <Link
                        href={`/blog/topic/${post.topic}`}
                        className="hover:underline"
                      >
                        {post.topic}
                      </Link>
                    </p>
                    <Link href={`/blog/${post.slug}`} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.teaser}
                      </p>
                    </Link>
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="flex-shrink-0">
                      <Link href={`/tr1be/${post.author.slug}`}>
                        <span className="sr-only">{post.author.firstName}</span>
                        <div className="w-10 h-10">
                          <Image
                            className="rounded-full"
                            src={post.author.image.url}
                            width={post.author.image.width}
                            height={post.author.image.height}
                            alt={post.author.image.description}
                            layout="responsive"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <Link
                          href={`/tr1be/${post.author.slug}`}
                          className="hover:underline"
                        >
                          {post.author.firstName}
                        </Link>
                      </p>
                      <div className="flex text-sm text-gray-500 space-x-1">
                        <time dateTime="2020-03-16">
                          {format(new Date(post.date), "LLL d, yyyy")}
                        </time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{readingTime(post.content).text}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

const blogPageQuery = gql`
  query BlogPageQuery {
    blogPostCollection(order: [date_DESC]) {
      items {
        sys {
          id
        }
        slug
        title
        date
        teaser
        content
        heroImage {
          description
          url
        }
        topic
        author {
          firstName
          slug
          image {
            width
            height
            description
            url
          }
        }
      }
    }
  }
`

export async function getStaticProps() {
  try {
    const blogPage = await graphQLClient.request(blogPageQuery)

    return {
      props: {
        posts: blogPage.blogPostCollection.items,
      },
    }
  } catch (err) {
    console.error(err)

    return {
      props: {},
    }
  }
}
