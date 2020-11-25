import GoogleMapReact from "google-map-react"
import Image from "next/image"
import { FC } from "react"

const location = {
  lat: 28.480112008846262,
  lng: -81.59224272919339,
}

type LocationPinProps = {
  lat: number
  lng: number
}

const LocationPin: FC<LocationPinProps> = () => (
  <div className="relative flex flex-col items-center w-24 h-24 text-brand-blue">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="absolute -top-4 w-18 h-18"
    >
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
    <Image
      src="/logo-on-blue.svg"
      alt="Warrior One Winter Garden Windermere logo"
      width={50}
      height={52}
      layout="intrinsic"
    />
  </div>
)

export function Map() {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      }}
      defaultCenter={location}
      defaultZoom={17}
    >
      <LocationPin lat={location.lat} lng={location.lng} />
    </GoogleMapReact>
  )
}
