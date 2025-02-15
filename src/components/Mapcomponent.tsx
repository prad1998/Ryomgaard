// src/components/MapComponent.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  return (
    <MapContainer  style={{ width: '100%', height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[37.7749, -122.4194]}>
        <Popup>San Francisco, CA</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
