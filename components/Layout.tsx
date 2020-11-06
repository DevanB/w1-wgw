import { FunctionComponent } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { SEO, SEOProps } from "./SEO"
import { TopBanner } from "./TopBanner"

type LayoutProps = {
  noHeader: boolean
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
          <main>{children}</main>
        </>
      )}
      <Footer />
    </div>
  )
}
