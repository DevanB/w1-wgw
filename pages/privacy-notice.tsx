import { Layout } from "../components/Layout"

export default function PrivacyNoticePage() {
  const pageTitle = "Privacy Notice"

  return (
    <Layout title={pageTitle}>
      <div className="px-4 mx-auto my-8 text-base text-gray-900 prose max-w-7xl sm:px-6">
        <p>
          <strong>Information Collection, Use, and Sharing</strong>
        </p>
        <p>
          We are the sole owners of the information collected on this site. We
          only have access to/collect information that you voluntarily give us
          via email or other direct contact from you. We will not sell or rent
          this information to anyone.
        </p>
        <p>
          We will use your information to respond to you, regarding the reason
          you contacted us. We will not share your information with any third
          party outside of our organization, other than as necessary to fulfill
          your request, e.g. to ship an order.
        </p>
        <p>
          Unless you ask us not to, we may contact you via email in the future
          to tell you about specials, new products or services, or changes to
          this privacy policy.
        </p>
        <p>
          <strong>Your Access to and Control Over Information</strong>
        </p>
        <p>
          You may opt-out of any future contacts from us at any time. You can do
          the following at any time by contacting us via the email address or
          phone number given on our website:
        </p>
        <ul>
          <li>See what data we have about you, if any.</li>
          <li>Change/correct any data we have about you.</li>
          <li>Have us delete any data we have about you.</li>
          <li>Express any concern you have about our use of your data.</li>
        </ul>
        <p>
          <strong>Security</strong>
        </p>
        <p>
          We take precautions to protect your information. When you submit
          sensitive information via the website, your information is protected
          both online and offline.
        </p>
        <p>
          Wherever we collect sensitive information (such as credit card data),
          that information is encrypted and transmitted to us in a secure way.
          You can verify this by looking for a lock icon in the address bar and
          looking for “https” at the beginning of the address of the Web page.
        </p>
        <p>
          While we use encryption to protect sensitive information transmitted
          online, we also protect your information offline. Only employees who
          need the information to perform a specific job (for example, billing
          or customer service) are granted access to personally identifiable
          information. The computers/servers in which we store personally
          identifiable information are kept in a secure environment.
        </p>
        <p>
          <strong>Registration</strong>
        </p>
        <p>
          In order to use this website, a user must first complete the
          registration form for certain classes, events, workshops, and
          challenges from the MindBody platform. During registration, a user is
          required to give certain information (such as name and email address).
          This information is used to contact you about the products/services on
          our site in which you have expressed interest. At your option, you may
          also provide demographic information (such as gender or age) about
          yourself, but it is not required.
        </p>
        <p>
          This website contains links to other sites. Please be aware that we
          are not responsible for the content or privacy practices of such other
          sites. We encourage our users to be aware when they leave our site and
          to read the privacy statements of any other site that collects
          personally identifiable information.
        </p>
        <p>
          <a
            href="https://company.mindbodyonline.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to review MindBody Priacy Policy.
          </a>
        </p>
        <p>
          <strong>
            If you feel that we are not abiding by this privacy policy, you
            should contact us immediately via telephone at{" "}
            <a href="tel:+14076148240">(407) 614-8240</a> or via{" "}
            <a href="mailto:info@warrioronewgw.com">email</a>.
          </strong>
        </p>
      </div>
    </Layout>
  )
}
