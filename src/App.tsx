import { MapContainer } from 'react-leaflet'
import './App.css'
import 'leaflet/dist/leaflet.css';
import '@maplibre/maplibre-gl-leaflet'
import { MapLibreTileLayer } from './MapLibreTileLayer';
import { useState } from 'react';

function App() {

  const position = [51.505, -0.09]
  const [url, setUrl] = useState('https://demotiles.maplibre.org/style.json')
  const [searchText, setSearchText] = useState(url)

  const handleChangeUrl = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value)
  }

  const handleSendUrl = () => {
    setUrl(searchText)
  }

  return (
    <>
      <div className="input">
        <input type="text" value={searchText} onChange={handleChangeUrl} />
        <button onClick={handleSendUrl}>Send</button>
      </div>
      <div style={{ width: '1200px', height: '600px' }}>
        {/* @ts-ignore */}
        <MapContainer style={{ width: '1200px', height: '600px' }} center={position} zoom={13}>
          <MapLibreTileLayer attribution='x' url={url} />
      </MapContainer>
      </div>
    </>
  )
}

export default App
