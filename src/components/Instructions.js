import React from 'react';
import styles from './Instructions.module.css';

const images = {
    step1: '/object_labeling/step1.png',
    step2: '/object_labeling/step2.png',
    step3: '/object_labeling/step3.png',
    step4: '/object_labeling/Step4.png',
    step41: '/object_labeling/Step41.png',
    step5: '/object_labeling/Step5.png',
    step6: '/object_labeling/Step6.png',
    step7: '/object_labeling/Step7.png',
};

    function Instructions() {
        return (
                <div className={styles.Instructions}>
                    <section>
                        <h2>Step 1: Input Lat/Long</h2>
                        <p>
                            Input the correct Latitute and Longitude for the location of interest.
                        </p>
                        <img src={images.step1} alt="Step 1: Input Lat/Long" />
                    </section>

                    <section>
                        <h2>Step 2: Select a Label Type</h2>
                        <p>
                        At the top of the interface, ensure that the correct 'Label Type' is selected from the dropdown menu. This could be a bounding boxes (rectangles) or a polygon.
                        </p>
                        <img src={images.step2} alt="Step 2: Select a Label Type" />
                    </section>

                    <section>
                        <h2>Step 3: Choose the Correct Label</h2>
                        <p>
                        Below the map, there is usually a list of labels that you can choose from (e.g., Tank, Truck, Airplane, Helicopter, Person, Trench). Click on the label that you want to apply.
                        </p>
                        <img src={images.step3} alt="Step 3: Choose the Correct Label" />
                    </section>

                    <section>
                        <h2>Step 4: Create the Annotation</h2>
                        <p>
                        For bounding boxes: Click and drag to create a rectangle around the object.
                        For polygons: Click to create the first point, then continue clicking around the perimeter of the object to create a shape. Double-click to close the polygon.
                        </p>
                        <img src={images.step4} alt="Step 4: Create the Annotation" />
                    </section>

                    <section>
                        <h2>Step 4.5: Submit the Annotation</h2>
                        <p>
                        Click Submit to save the annotation
                        </p>
                        <img src={images.step41} alt="Step 4.5: Submit the Annotation" />
                    </section>

                    <section>
                        <h2>Step 5: Verify the Annotation Saved</h2>
                        <p>
                        You should see a unique code to signify a new annotation
                        Then click the annotation button at the top of the page
                        </p>
                        <img src={images.step5} alt="Step 5: Verify the Annotation Saved" />
                    </section>

                    <section>
                        <h2>Step 6: Verify the Annotation Data</h2>
                        <p>
                        Click the box with your unique annotation id
                        </p>
                        <img src={images.step6} alt="Step 6: Verify the Annotation Data" />
                    </section>

                    <section>
                        <h2>Step 7: View the Annotation Data in all its Glory</h2>
                        <p>
                        Now you can enabled Machine Learning for Computer Vision. Happy Hunting!
                        </p>
                        <img src={images.step7} alt="Step 7: View the Annotation Data in all its Glory" />
                    </section>
                </div>
    );
}

export default Instructions;