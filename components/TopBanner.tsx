import Link from "./Link"

export function TopBanner() {
  return (
    <div className="flex items-center justify-center p-2 bg-brand-orange">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/covid-19"
          arrow
          className="text-lg font-medium tracking-normal text-gray-900 uppercase leading-5"
        >
          <span>COVID-19 Update & FAQs</span>
        </Link>
      </div>
    </div>
  )
}
