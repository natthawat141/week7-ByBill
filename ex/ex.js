const dataInput = document.getElementById('dataInput');
const personInput = document.getElementById('personInput');
const submitBtn = document.getElementById('submitBtn');

// สำหรับ output
const outputDisplay = document.getElementById('outputDisplay');
const dataOutput = document.getElementById('dataOutput');
const personOutput = document.getElementById('personOutput');
const showBtn = document.getElementById('showBtn');

// คลิก Submit เพื่อส่งข้อมูล
submitBtn.addEventListener('click', function() {
    // เก็บค่าจาก input
    const data = dataInput.value;
    const person = personInput.value;

    // ส่งค่าจาก input ไปยัง output
    dataOutput.innerHTML = `<strong>Data:</strong> ${data}`;
    personOutput.innerHTML = `<strong>Person:</strong> ${person}`;

    // ทำให้ output ซ่อนอยู่เมื่อส่งข้อมูล
    outputDisplay.style.display = 'none';
});

// คลิก Show เพื่อแสดงข้อมูล
showBtn.addEventListener('click', function() {
    outputDisplay.style.display = 'block'; // แสดงข้อมูลที่บันทึกไว้
});