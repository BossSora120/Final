// script.js

// Reference to form fields
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const systolicInput = document.getElementById('systolic');
const diastolicInput = document.getElementById('diastolic');
const entriesList = document.getElementById('entriesList');
let editingIndex = -1; // Index for the current item being edited

// Event listener for Create button
document.getElementById('createBtn').addEventListener('click', () => {
    const name = nameInput.value;
    const age = ageInput.value;
    const weight = weightInput.value;
    const height = heightInput.value;
    const systolic = systolicInput.value;
    const diastolic = diastolicInput.value;

    if (!name || !age || !weight || !height || !systolic || !diastolic) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
    }

    if (editingIndex === -1) {
        // Create new entry
        addEntry({ name, age, weight, height, systolic, diastolic });
    } else {
        // Update existing entry
        updateEntry(editingIndex, { name, age, weight, height, systolic, diastolic });
        editingIndex = -1; // Reset after updating
    }

    clearForm();
});

// Function to add a new entry to the list
function addEntry(data) {
    const li = document.createElement('li');
    li.textContent = `ชื่อ: ${data.name}, อายุ: ${data.age}, น้ำหนัก: ${data.weight} กก., ส่วนสูง: ${data.height} ซม., ความดัน: ${data.systolic}/${data.diastolic} mmHg`;
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => editEntry(li, data);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteEntry(li);

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    entriesList.appendChild(li);
}

// Function to edit an existing entry
function editEntry(li, data) {
    nameInput.value = data.name;
    ageInput.value = data.age;
    weightInput.value = data.weight;
    heightInput.value = data.height;
    systolicInput.value = data.systolic;
    diastolicInput.value = data.diastolic;

    editingIndex = Array.from(entriesList.children).indexOf(li); // Save the index of the entry being edited
}

// Function to update an entry
function updateEntry(index, data) {
    const li = entriesList.children[index];
    li.childNodes[0].textContent = `ชื่อ: ${data.name}, อายุ: ${data.age}, น้ำหนัก: ${data.weight} กก., ส่วนสูง: ${data.height} ซม., ความดัน: ${data.systolic}/${data.diastolic} mmHg`;
}

// Function to delete an entry
function deleteEntry(li) {
    entriesList.removeChild(li);
}

// Function to clear the form fields
function clearForm() {
    nameInput.value = '';
    ageInput.value = '';
    weightInput.value = '';
    heightInput.value = '';
    systolicInput.value = '';
    diastolicInput.value = '';
}
