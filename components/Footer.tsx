import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <Image
          src="/baptisteLogo.png"
          alt="Baptist Power Vinyasa Flow Yoga logo"
          width={250}
          height={109}
        />

        <div className="mailingList">
          <h6 className="heading">Join our mailing list</h6>
          <label htmlFor="newsletterEmail">
            Enter your email address
            <input
              name="newsletterEmail"
              id="newsletterEmail"
              placeholder="Enter your email address"
              type="email"
            />
          </label>
        </div>

        <div className="stayConnected-wrapper">
          <h6 className="heading">Stay connected</h6>
          <div className="stayConnected-socials-wrapper">
            <a
              target="_blank"
              rel="noreferrer nofollow"
              href="https://facebook.com/WarriorOneWGW"
            >
              f
            </a>
            <a
              target="_blank"
              rel="noreferrer nofollow"
              href="https://instagram.com/warrioronewgw"
            >
              i
            </a>
          </div>
        </div>

        <div className="fineprint-wrapper">
          <small className="fineprint">
            Copyright © {new Date().getFullYear()} Warior One WGW. All Rights
            Reserved.
          </small>
          <small className="fineprint">
            <Link href="/privacy-notice">
              <a>Privacy Notice</a>
            </Link>{" "}
            |{" "}
            <Link href="/terms-and-conditions">
              <a>Terms & Conditions</a>
            </Link>{" "}
            |{" "}
            <Link href="/covid-19">
              <a>COVID-19 Update</a>
            </Link>{" "}
            |{" "}
            <Link href="/faq">
              <a>FAQ</a>
            </Link>{" "}
          </small>
        </div>
      </div>
    </footer>
  )
}
