import Link from "next/link"

export function TopBanner() {
  return (
    <div className="flex items-center justify-center p-2 bg-brand-orange">
      <div className="mx-auto max-w-7xl">
        <Link href="/covid-19">
          <a className="text-lg font-medium tracking-normal text-center text-gray-900 uppercase leading-5">
            COVID-19 Update & FAQs
          </a>
        </Link>
      </div>
    </div>
  )
}
