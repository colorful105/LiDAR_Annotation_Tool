var options = `<select>
    <option value="select">select</option>
    <option value="stop_sign">정류장 표지판</option>
    <option value="bollard">볼라드</option>
    <option value="no_jaywalking_facility">무단횡단 금지시설</option>
    <option value="traffic_Light">신호등주</option>
    <option value="road_safety_sign">도로 안전 표지판</option>
    <option value="Car">승용차</option>
    <option value="Van">승합차</option>
    <option value="Truck">트럭</option>
    /select`;

// method to add row to object id table
function addRow(box) {
    $("#object-table tbody").append("<tr><td class='id'>" + box.id + "</td><td>" + options + "</td></tr>");
    $("#object-table tbody select").last().focus();
}

// handler that highlights input and corresponding bounding box when input is selected
$("#object-table").on('mousedown', 'tbody tr', function() {
    isMoving = false;
    var boxId = $(this).find('.id').text();
    var box = getBoxById(boxId);
    selectRow(boxId);
    box.select(null);
    selectedBox = box;
    var center = box.get_center();
    var current_angle = camera.rotation.z;
    console.log("current angle:", current_angle);
    controls.target.set(center.x, 0, center.y);
    
    // controls.target.set(0, 0, 0);
    camera.updateProjectionMatrix();
    controls.update();
    
    controls.update();
    camera.rotation.z = current_angle;
    console.log("camera rotation: ", camera.rotation.z);
    // camera.lookAt(new THREE.Vector3(center.x,0,center.y));
    
    // controls.update();
    });



// handler that saves input when input is changed
$("#object-table").on('change', 'tbody tr', updateObjectId);

// method to update Box's object id
function updateObjectId() {    
    var boxId = $(this).find(".id").text();
    var input = $(this).find('select').val();
    var box = getBoxById(boxId);
    box.object_id = input;

    evaluator.increment_label_count();
}


// method to get object id table row given id
function getRow(id) {
    var row = $("#object-table tbody").find('td').filter(function() {
        return $(this).text() == id.toString();}).closest("tr");
    return row;
}

// method to select row of object id table given ids
function selectRow(id) {
    var row = getRow(id);    
    $(row).find('select').get(0).focus();
}



// gets box given its id
function getBoxById(id) {
    for (var i = 0; i < boundingBoxes.length; i++) {
        if (boundingBoxes[i].id == id) {
            return boundingBoxes[i];
        }
    }
}