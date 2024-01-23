import React, { useState, useEffect } from 'react';
import './AnnotationsPage.css';

const AnnotationsPage = () => {
  const [annotations, setAnnotations] = useState([]);
  const [selectedAnnotation, setSelectedAnnotation] = useState(null);


  useEffect(() => {
    fetch('http://localhost:3001/annotations')
      .then(response => response.json())
      .then(data => setAnnotations(data))
      .catch(error => console.error('Error:', error));
  }, []);


  const toggleAnnotation = (annotation) => {
    if (selectedAnnotation && selectedAnnotation.id === annotation.id) {
      setSelectedAnnotation(null);
    } else {
      setSelectedAnnotation(annotation);
    }
  };


  return (
    <div>
      <h1>Received Annotations</h1>
      <div className="cardContainer">
        {annotations.map(annotation => (
          <div
            key={annotation.id}
            className="annotationCard"
            onClick={() => toggleAnnotation(annotation)}
          >
            <div>Annotation ID: {annotation.id}</div>
            <div>Created By: {annotation.createdBy}</div>
            <div> Date: {annotation.createdDate}</div>
          </div>
        ))}
      </div>
      {selectedAnnotation && (
        <div className="detailsContainer">
          <h2>Details for Annotation {selectedAnnotation.id}</h2>
          <pre>{JSON.stringify(selectedAnnotation, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AnnotationsPage;