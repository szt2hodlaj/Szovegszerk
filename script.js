document.getElementById('filePicker').addEventListener('change', handleFileSelect);
document.getElementById('saveButton').addEventListener('click', saveText);

function handleFileSelect(event) {
 const file = event.target.files[0];
 if (file) {
 const reader = new FileReader();
 reader.onload = function (e) {
 document.getElementById('textEditor').value = e.target.result;
 };
 reader.readAsText(file);
 }
}

function saveText() {
 const textToSave = document.getElementById('textEditor').value;
 const fileName = document.getElementById('filePicker').value.split('\\')[2];
 const blob = new Blob([textToSave], { type: 'text/plain' });
 saveAs(blob, fileName);


 document.getElementById('feedback').innerText = '';


 document.getElementById('feedback').style.backgroundColor = 'green';
 document.getElementById('feedback').style.color = 'white';
 document.getElementById('feedback').innerText = 'File saved successfully!';
}


function saveAs(blob, fileName) {
 saveAs(blob, fileName);
}