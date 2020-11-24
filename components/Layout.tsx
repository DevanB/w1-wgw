import { FunctionComponent } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { SEO, SEOProps } from "./SEO"
import { TopBanner } from "./TopBanner"

type LayoutProps = {
  noHeader?: boolean
} & SEOProps

export const Layout: FunctionComponent<LayoutProps> = ({
  children,
  description,
  noHeader,
  title,
}) => {
  return (
    <div className="">
      <SEO title={title} description={description} />
      {noHeader ? (
        <>{children}</>
      ) : (
        <>
          <TopBanner />
          <Header />
          <main>
            <div className="bg-gray-100">
              <h1 className="py-12 font-serif text-3xl text-center md:text-4xl text-brand-blue">
                {title}
              </h1>
            </div>
            {children}
          </main>
        </>
      )}
      <Footer />
    </div>
  )
}
