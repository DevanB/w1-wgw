import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const Accordion: React.FC = props => (
  <dl className="my-12 space-y-6 divide-y divide-gray-200">{props.children}</dl>
)

type AccordionItemProps = {
  heading: string
}
const AccordionItem: React.FC<AccordionItemProps> = ({ children, heading }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="pt-6">
      <dt className="text-lg">
        <button
          className="flex items-start justify-between w-full text-left text-gray-400 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium text-gray-900">
            <p>{heading}</p>
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
            <div className="my-4 space-y-8">{children}</div>
          </motion.dd>
        )}
      </AnimatePresence>
    </div>
  )
}

export { Accordion as default, AccordionItem }
