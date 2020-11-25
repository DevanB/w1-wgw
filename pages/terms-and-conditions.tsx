import { Layout } from "../components/Layout"
import Accordion, { AccordionItem } from "../components/Accordion"

export default function TermsAndConditionsPage() {
  const pageTitle = "Terms and Conditions"

  return (
    <Layout title={pageTitle}>
      <div className="px-4 mx-auto my-8 max-w-7xl sm:px-6">
        <p className="text-base text-gray-900 prose max-w-7xl">
          <strong>
            Classes do fill up! Reserve your spot online to be SURE!&nbsp;
          </strong>
          Regular Class Reservations must be canceled 2 or more hours before the
          start time of class or you may be charged a late cancelation fee. If
          you have pre-registered for a class, your spot may be given away if
          you are not present at the studio five minutes before the start time
          of the class.Appointments for private sessions or massages must be
          canceled 24 hours in advance to avoid being charged for the service.If
          you have urgency, or cannot get there on time use Facebook Messenger
          to contact us since we keep phones off during sessions.If you are on
          auto-pay, be sure to cancel auto-pay via email at&nbsp;
          <a
            href="mailto:warrioronewgw@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            warrioronewgw@gmail.com
          </a>
          &nbsp;at least 5 days before the next charge date to ensure full
          termination processing.No Refunds. All sales final.
        </p>
        <Accordion>
          <AccordionItem heading="Reservation Policy">
            <p className="prose max-w-none">
              Online class reservations may be canceled up to 10 minutes before
              class without penalty. No-shows will be charged the full drop-in
              rate or a deduction from your series class pass or Mini Membership
              will be taken. Warrior one unlimited members will be charged the
              full drop-in rate for no-shows. Preregistration class spots are
              held until class start time and then forfeited and considered a
              no-show for the class.
            </p>
          </AccordionItem>
          <AccordionItem heading="Teacher Training">
            <p className="prose max-w-none">
              Please thoroughly consider your ability to commit to our Teacher
              Training and Immersion programs prior to enrollment. Each has a
              custom cancellation policy, with a specific deadline for
              cancellation and associated processing fee. Due to the scale of
              these programs, and the preparation required for each student,
              there are no exceptions to our cancellation deadline. Please email{" "}
              <a href="mailto:info@warrioronewgw.com">info@warrioronewgw.com</a>{" "}
              to request cancellation.
            </p>
          </AccordionItem>
          <AccordionItem heading="Check-In">
            <p className="prose max-w-none">
              The class start time is when we will begin our yoga journey
              together. Please arrive 10 to 15 minutes prior to the class start
              time. You’ll be able to check-in, secure your belongings, remove
              your shoes and connect with your fellow yogis. We have a 5-minute
              grace period for you to enter the class after the start time.
            </p>
          </AccordionItem>
          <AccordionItem heading="Facilities">
            <p className="prose max-w-none">
              No food or open containers are allowed in the main practice
              studio. Arrive a few minutes prior to the start of class to allow
              plenty of time to check-in.
            </p>
          </AccordionItem>
          <AccordionItem heading="Medical Concerns">
            <p className="prose max-w-none">
              Anyone with series of medical conditions or injuries should
              consult a doctor prior to participating. It is your responsibility
              to inform the instructor if you are pregnant or have any injuries
              prior to the start of class.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  )
}
