import { motion } from "framer-motion"
import NextLink, { LinkProps as NextLinkProps } from "next/link"

type LinkProps = NextLinkProps & {
  arrow?: boolean
  className?: string
}

const Link: React.FC<LinkProps> = props => {
  const classNames = "flex items-center"

  return (
    <motion.span
      initial="idle"
      whileHover="hover"
      variants={{
        idle: {},
        hover: {},
      }}
    >
      <NextLink href={props.href}>
        <a className={`${classNames} ${props.className || ""}`}>
          {props.children}
          {props.arrow && (
            <motion.svg
              className="w-6 h-6 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              variants={{
                idle: {},
                hover: {
                  x: 5,
                },
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          )}
        </a>
      </NextLink>
    </motion.span>
  )
}

export default Link
