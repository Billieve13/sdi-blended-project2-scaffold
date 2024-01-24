import React from 'react';
import styles from './ObjectLabelingInfo.module.css';

const images = {
    objectLabeling: '/object_labeling/object_labeling_overview.png',
    yoloFineTuning: '/object_labeling/yolo_fine_tuning.png',
    bestPractices: '/object_labeling/best_practices.jpg'
};

function ObjectLabelingInfo() {
    return (
            <div className={styles.objectLabelingInfo}>
                <section>
                    <h2>Overview of Object Labeling</h2>
                    <p>
                        Object labeling is a process in machine learning where objects within images are identified and labeled to help the system recognize and classify different items in the data. This process is essential for training computer vision models, as it provides the necessary context and understanding for the model to learn from visual data. In object labeling, each object in an image is marked and assigned a label, such as 'dog', 'car', or 'tree'. This annotation process is critical for creating a dataset that a machine learning model can use to learn the characteristics of different objects. Object labeling is beneficial because it enables models to accurately identify and classify objects in different environments and conditions, improving their performance in tasks like object detection, image classification, and scene understanding.
                    </p>
                    <img src={images.objectLabeling} alt="Object Labeling Overview" />
                </section>

                <section>
                    <h2>Fine-tuning YOLO Models</h2>
                    <p>
                        In the context of fine-tuning YOLO (You Only Look Once) models, object labeling plays a crucial role. YOLO models are a type of convolutional neural networks that are extremely efficient in detecting objects in real-time. Fine-tuning a YOLO model involves adjusting its parameters to better fit specific data or tasks. Object labeling provides the detailed and accurate data needed for this fine-tuning. By using a well-labeled dataset, where objects are correctly identified and marked, the YOLO model can learn more effectively. This improved learning leads to higher accuracy in object detection, as the model can better understand the variations and features of different objects.
                    </p>
                    <img src={images.yoloFineTuning} alt="Fine-tuning YOLO Models" />
                </section>

                <section>
                    <h2>Best Practices for Object Labeling</h2>
                    <p>
                        When it comes to best practices for object labeling, particularly for creating 2D boundary boxes and 2D polygons, precision and consistency are key. For 2D boundary boxes, the box should tightly encompass the object, with minimal background space. This helps the model in precisely identifying the object's location and size. The boxes should be consistent in terms of size and shape across similar objects to maintain uniformity in the dataset. On the other hand, 2D polygons provide a more precise outline of an object, especially for irregular shapes. When using polygons, it's important to have enough points to accurately outline the object but avoid too many points as it can complicate the model training. The points should be placed consistently at key corners or curvature changes of the object. In both cases, ensuring high-quality, accurate labeling is crucial for the success of the model training and the eventual performance of the YOLO model in object detection tasks.
                    </p>
                    <img src={images.bestPractices} alt="Best Practices for Object Labeling" />
                </section>
            </div>
    );
}

export default ObjectLabelingInfo;