
import React, { useEffect, useRef, useState } from 'react';
import LabelStudio from 'label-studio';
import 'label-studio/build/static/css/main.css';
//import HomePage from './Home';

const getMapSnapshotUrl = (lat, lng, zoom = 18, size = '640x600', type = 'hybrid') => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${size}&maptype=${type}&key=${apiKey}`;
};

const MapSnapshot = () => {
  const [latitude, setLatitude] = useState(45.11384566935438);
  const [longitude, setLongitude] = useState(42.1186446113149);
  const [showMap, setShowMap] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const labelStudioContainerRef = useRef();

  useEffect(() => {
    if (labelStudioContainerRef.current || formSubmitted) {
      initializeLabelStudio();
    }
  }, [latitude, longitude, formSubmitted]); // Reinitialize when lat or lng changes

  const handleLatitudeChange = (event) => {
    setLatitude(Number(event.target.value));
    setShowMap(true);
  };

  const handleLongitudeChange = (event) => {
    setLongitude(Number(event.target.value));
    setShowMap(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowMap(true);
    setFormSubmitted(true);
  };

const initializeLabelStudio = () => {
  console.log("Start...");
  const mapImageUrl = getMapSnapshotUrl(latitude, longitude);
  const labelStudioConfig = {
    config: `<View>
  <Image name="image" value="$image" />
  <PolygonLabels name="labels" toName="image">
    <Label value="Tank" />
    <Label value="Trench" />
  </PolygonLabels>
    </View>`,
    interfaces: [
      "panel",
      "update",
      "submit",
      "controls",
      "side-column",
      "annotations:menu",
      "annotations:add-new",
      "annotations:delete",
      "predictions:menu"
    ],
    user: {
      pk: 1,
      firstName: "Pvt",
      lastName: "Snuffy"
    },
    task: {
      annotations: [],
      predictions: [],
      id: 1,
      data: {
        image: mapImageUrl     }
    },

    onLabelStudioLoad: function (LS) {
      var c = LS.annotationStore.addAnnotation({
        userGenerate: true
      });
      LS.annotationStore.selectAnnotation(c.id);
    },

    onSubmitAnnotation: (LS, annotation) => {
        console.log("Annotation submitted", annotation);
        fetch ('http://localhost:3001/submit-annotation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(annotation)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  };

new LabelStudio(labelStudioContainerRef.current.id, labelStudioConfig);
    console.log("Label Studio Initialized");
};

return (
  <div>
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>
          Latitude:
          <input
            type="number"
            value={latitude}
            onChange={handleLatitudeChange}
            disabled={showMap}
          />
        </label>
      </div>
      <div>
        <label>
          Longitude:
          <input
            type="number"
            value={longitude}
            onChange={handleLongitudeChange}
            disabled={showMap}
          />
        </label>
      </div>
      <button type="submit">Show Map</button>
    </form>
    {showMap && (
        <div>
          <img
            src={getMapSnapshotUrl(latitude, longitude)}
            alt="Map Snapshot"
            style={{ size: '640x400' }}
          />
        </div>
      )}
    <div ref={labelStudioContainerRef} id="label-studio" style={{ width: '100%', height: '400px' }}></div>
  </div>
);
};

export default MapSnapshot;














// import React from 'react';
// import { ReactPictureAnnotation } from 'react-picture-annotation';

// const getMapSnapshotUrl = (lat, lng, zoom = 18, size = '640x600', type = 'hybrid') => {
//   const apiKey = process.env.REACT_APP_GOOGLE_API_KEY; // Replace with your API key
//   return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${size}&maptype=${type}&key=${apiKey}`;
// };

// const MapSnapshot = ({ lat, lng}) => {
//   const mapImageUrl = getMapSnapshotUrl(lat, lng, 18);

//   const onSelect = selectedId => console.log(selectedId);
//   const onChange = data => console.log(data);



//   return (
//   <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//     <div style={{ flexGrow: 0}}>
//       <ReactPictureAnnotation
//         image={mapImageUrl}
//         onSelect={onSelect}
//         onChange={onChange}
//         width={640}
//         height={600}

//         style= {{objectFit: 'contain'}}
//       />
//     </div>

//   </div>
// );

// };

// export default MapSnapshot;