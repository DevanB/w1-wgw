import Link from "next/link"

export function TopBanner() {
  return (
    <div className="top-banner">
      <div className="mx-auto max-w-7xl">
        <Link href="/covid-19">
          <a>COVID-19 Update & FAQs</a>
        </Link>
      </div>
    </div>
  )
}
