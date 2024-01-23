import React, { useEffect, useRef, useState } from 'react';
import LabelStudio from 'label-studio';
import 'label-studio/build/static/css/main.css';

const getMapSnapshotUrl = (lat, lng, zoom = 17, scale=4, size = '940x900', type = 'hybrid') => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&scale=${scale}&size=${size}&maptype=${type}&key=${apiKey}`;
};

const MapSnapshot = () => {
  const [latitude, setLatitude] = useState(45.11384566935438);
  const [longitude, setLongitude] = useState(42.1186446113149);
  const [labelType, setLabelType] = useState('PolygonLabels');
  //const [showMap, setShowMap] = useState(true);
  //const [formSubmitted, setFormSubmitted] = useState(false);
  const labelStudioContainerRef = useRef();

  useEffect(() => {
    if (labelStudioContainerRef.current) {
      initializeLabelStudio();
    }
  }, [labelType]); // Reinitialize when labelType changes

  const handleLatitudeChange = (event) => {
    setLatitude(Number(event.target.value));

  };

  const handleLongitudeChange = (event) => {
    setLongitude(Number(event.target.value));

  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    initializeLabelStudio();
  };

const initializeLabelStudio = () => {
  console.log("Start...");
  const mapImageUrl = getMapSnapshotUrl(latitude, longitude);
  const labelStudioConfig = {
    config: `<View>
  <Image name="image" value="$image" zoomControl="true"/>
  <${labelType} name="labels" toName="image">
    <Label value="Tank" />
    <Label value="Truck" />
    <Label value="Airplane" />
    <Label value="Helicopter" />
    <Label value="Person" />
    <Label value="Trench" />
  </${labelType}>
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
   <div style={{ margin: '0 auto', maxWidth: '1024px', padding: '1em' }}>
      <form onSubmit={handleFormSubmit} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        background: '#f3f3f3',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, .1)'
      }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="latitude" style={{ marginRight: '5px' }}>Latitude:</label>
          <input
            id="latitude"
            type="number"
            value={latitude}
            onChange={handleLatitudeChange}
            style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="longitude" style={{ marginRight: '5px' }}>Longitude:</label>
          <input
            id="longitude"
            type="number"
            value={longitude}
            onChange={handleLongitudeChange}
            style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div>
          <label htmlFor="labelType" style={{ marginRight: '5px' }}>Label Type:</label>
          <select
            id="labelType"
            value={labelType}
            onChange={(e) => setLabelType(e.target.value)}
            style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
          >
            <option value="PolygonLabels">Polygon Labels</option>
            <option value="RectangleLabels">Rectangle Labels</option>
          </select>
        </div>
        <button type="submit" style={{
          padding: '5px 15px',
          border: 'none',
          borderRadius: '4px',
          background: '#007bff',
          color: '#fff',
          cursor: 'pointer'
        }}>Show Map</button>
      </form>
      <div ref={labelStudioContainerRef} id="label-studio" style={{ width: '100%', height: '400px' }}></div>
    </div>
);
};

export default MapSnapshot;