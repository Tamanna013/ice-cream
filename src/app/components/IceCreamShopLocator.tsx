import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const mapCenter = [40.748817, -73.985428];
const markers = [
  { lat: 40.748817, lng: -73.985428, title: "Ice Cream Shop 1" },
  { lat: 40.758817, lng: -73.975428, title: "Ice Cream Shop 2" },
];

export default function IceCreamShopLocator() {
  return (
    <section id="find" className="py-16 px-6 bg-pink-300">
      <div className="max-w-5xl mx-auto text-center bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-4xl font-extrabold text-pink-700 mb-6 drop-shadow-md">
          Find Ice Cream Shops Near You 🍦
        </h2>
        <MapContainer center={mapCenter} zoom={14} style={{ height: "400px", width: "100%" , zIndex: 1}}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {markers.map((marker, index) => (
            <Marker key={index} position={[marker.lat, marker.lng]}>
              <Popup>{marker.title}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
