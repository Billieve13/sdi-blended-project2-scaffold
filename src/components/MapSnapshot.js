
import React, { useEffect } from "react";
import LabelStudio from "@heartexlabs/label-studio";
import '@heartexlabs/label-studio/build/static/css/main.css'; // Import Label Studio's CSS

const getMapSnapshotUrl = (lat, lng, zoom = 18, size = '600x300', type = 'hybrid') => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${size}&maptype=${type}&key=${apiKey}`;
};

const MapSnapshot = ({ lat, lng }) => {
  const mapImageUrl = getMapSnapshotUrl(lat, lng);

  useEffect(() => {
    // Initialize Label Studio inside useEffect
    new LabelStudio('label-studio-container', {
      config: `
        <View>
          <Image name="image" value="$image"/>
          <PolygonLabels name="label" toName="image">
            <Label value="" background="green"/>
          </PolygonLabels>
        </View>
      `,
      interfaces: [
        "panel", "update", "submit", "controls", "side-column",
      ],
      task: {
        annotations: [],
        predictions: [],
        id: 1,
        data: {
          image: mapImageUrl
        }
      },
      onLabelStudioLoad: (LS) => {
        const c = LS.annotationStore.addAnnotation({
          userGenerate: true
        });
        LS.annotationStore.selectAnnotation(c.id);
      },
      onSubmitAnnotation: (LS, annotation) => {
        console.log("Annotation submitted", annotation);
      },
    });
  }, [mapImageUrl]); // Only re-run if mapImageUrl changes

  return (
    <div id="label-studio-container" style={{ height: '100%', width: '100%' }}>
      {/* Container where Label Studio will be rendered */}
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