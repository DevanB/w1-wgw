import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => <div>{text}</div>

export function Map() {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDZemqSWwhOwkUnP22GfdJmw50tvPzAllc" }}
      defaultCenter={{
        lat: 59.95,
        lng: 30.33,
      }}
      defaultZoom={11}
    >
      <AnyReactComponent text="My Marker" />
    </GoogleMapReact>
  )
}
