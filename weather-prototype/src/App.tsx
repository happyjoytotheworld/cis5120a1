import React, { useState } from 'react';
import './App.css';
import bkgd from './assets/bkgd.png';
import map from './assets/map.png';

type ModalType =
  | 'none'
  | 'globe'
  | 'settings'
  | 'menu1'
  | 'menu2'
  | 'menu3'
  | 'menu4'
  | 'addFeature';

function App() {
  const [location, setLocation] = useState<string>('Philadelphia');

  const [modalType, setModalType] = useState<ModalType>('none');
  const [tempNewLocation, setTempNewLocation] = useState<string>('');

  const closeModal = () => {
    setModalType('none');
  };

  const handleGlobeSave = () => {
    if (tempNewLocation.trim().length > 0) {
      setLocation(tempNewLocation);
    }
    closeModal();
  };

  let modalContent: React.ReactNode = null;

  switch (modalType) {
    case 'globe':
      modalContent = (
        <div>
          <h2>Enter a New Location</h2>
          <input
            type="text"
            placeholder="Type location..."
            value={tempNewLocation}
            onChange={(e) => setTempNewLocation(e.target.value)}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <button onClick={handleGlobeSave} style={{ marginRight: '1rem' }}>
            Save
          </button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      );
      break;

    case 'settings':
      modalContent = (
        <div>
          <h2>Settings</h2>
          <p>
            Change Celsius/Fahrenheit,
            <br />
            Notification Settings,
            <br />
            Location Preferences,
            <br />
            and Widget Settings here.
          </p>
          <button onClick={closeModal} style={{ marginTop: '1rem' }}>
            Close
          </button>
        </div>
      );
      break;

    case 'menu1':
      modalContent = (
        <div>
          <h2>Menu 1</h2>
          <p>Change Widget Ordering here.</p>
          <button onClick={closeModal} style={{ marginTop: '1rem' }}>
            Close
          </button>
        </div>
      );
      break;

    case 'menu2':
    case 'menu3':
    case 'menu4':
      modalContent = (
        <div>
          <h2>{modalType.toUpperCase()}</h2>
          <p>Widget Specific Settings</p>
          <button onClick={closeModal} style={{ marginTop: '1rem' }}>
            Close
          </button>
        </div>
      );
      break;

    case 'addFeature':
      modalContent = (
        <div>
          <h2>Add Feature</h2>
          <p>Change Widget Selection here.</p>
          <button onClick={closeModal} style={{ marginTop: '1rem' }}>
            Close
          </button>
        </div>
      );
      break;

    default:
      modalContent = null;
      break;
  }

  return (
    <div className="frame-1">
      <div className="header">
        <div className="temp">62</div>
        <div className="f">°F</div>
        <div className="low-high">low: 48°/high: 72°</div>
      </div>
      <div className="philadelphia">{location}</div>
      <div className="ellipse-temp"></div>
      <div
        className="add-feature"
        style={{ cursor: 'pointer' }}
        onClick={() => setModalType('addFeature')}
      >
        <div className="div">+</div>
      </div>
      <div className="spacer-1"></div>
      <div className="spacer-2"></div>
      <div className="spacer-3"></div>

      <div
        className="div2"
        style={{ cursor: 'pointer' }}
        onClick={() => setModalType('menu1')}
      >
        ≡
      </div>
      <div
        className="div3"
        style={{ cursor: 'pointer' }}
        onClick={() => setModalType('menu2')}
      >
        ≡
      </div>
      <div
        className="div4"
        style={{ cursor: 'pointer' }}
        onClick={() => setModalType('menu3')}
      >
        ≡
      </div>
      <div
        className="div5"
        style={{ cursor: 'pointer' }}
        onClick={() => setModalType('menu4')}
      >
        ≡
      </div>
      <div className="spacer-4"></div>
      <div
        className="div6"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setTempNewLocation('');
          setModalType('globe');
        }}
      >
        🌎
      </div>
      <div className="spacer-5"></div>
      <div
        className="div7"
        style={{ cursor: 'pointer' }}
        onClick={() => setModalType('settings')}
      >
        ⚙️
      </div>

      <div className="favorite-location">
        <span>
          <span className="favorite-location-span">
            favorite locations:<br />
          </span>
          <span className="favorite-location-span2"><br /></span>
          <span className="favorite-location-span3">
            wissahickon valley park:
          </span>
          <span className="favorite-location-span4">
            {' '}open, high wind advisory in upper park region<br />
          </span>
          <span className="favorite-location-span5"><br /></span>
          <span className="favorite-location-span6">
            valley forge nat’l hist. park:
          </span>
          <span className="favorite-location-span7">
            {' '}open, conditions normal<br />
          </span>
          <span className="favorite-location-span8"><br /><br /></span>
        </span>
      </div>

      <div className="current-wind">
        <span>
          <span className="current-wind-span">
            current:<br />
          </span>
          <span className="current-wind-span2"><br /></span>
          <span className="current-wind-span3">wind:</span>
          <span className="current-wind-span4">
            {' '}10 mph/25 mph gusts<br />
          </span>
          <span className="current-wind-span5">precipitation:</span>
          <span className="current-wind-span6">
            {' '}high 60% @ 2PM<br />
          </span>
          <span className="current-wind-span7">air quality index:</span>
          <span className="current-wind-span8">
            {' '}15 ppm<br />
          </span>
          <span className="current-wind-span9">fire risk:</span>
          <span className="current-wind-span10"> low</span>
        </span>
        <img className="map" src={map} alt="Map" />
      </div>

      {modalType !== 'none' && (
        <div className="modal-container">
          {modalContent}
        </div>
      )}
    </div>
  );
}

export default App;
