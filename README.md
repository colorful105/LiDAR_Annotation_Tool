# Lidar_annotation
## Installation
1. Create virtual environment
   conda create -n annotation python=3.7
2. Clone this repository
   git clone https://github.com/colorful105/LiDAR_annotation.git
3. Install dependencies
   cd LiDAR_annotation
   pip install -r requirements.txt
4. Use 'cd ./app && python app.py' command to run annotation tool
5. Open http://127.0.0.1:5000/ on a browser
## Start guide
1. Select the file to use for data annotation through the file dialog.
2. Click 'Click to start recording'
3. You can draw a bounding box through 'Control'.
4. You can modify the size of the drawn bounding box through 'Control', or modify the angle through a point located in the middle of the bounding box.
5. You can change the depth of the bounding box by clicking on the '3D' image and moving the center point of the bounding box.
6. Labeling is possible through the combo box located at the bottom of Object IDs.
7. Click 'save' image to save in json format.
