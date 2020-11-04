import { FunctionComponent } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { SEO, SEOProps } from "./SEO"
import config from "../config"

export const Layout: FunctionComponent<SEOProps> = ({
  children,
  description,
  title,
}) => {
  return (
    <>
      <SEO title={title} description={description} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
