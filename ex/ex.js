const dataInput = document.getElementById('dataInput');
const submitBtn = document.getElementById('submitBtn');

// สำหรับ output
const outputDisplay = document.getElementById('outputDisplay');
const dataOutput = document.getElementById('dataOutput');
const personOutput = document.getElementById('personOutput'); // ค่าคงที่
const showBtn = document.getElementById('showBtn');

// คลิก Submit เพื่อส่งข้อมูล
submitBtn.addEventListener('click', function() {
    // เก็บค่าจาก input
    const data = dataInput.value;

    
    // ส่งค่าจาก input ไปยัง output
    dataOutput.innerHTML = `<strong>Data:</strong> ${data}`;
    
    // ทำให้ output ซ่อนอยู่เมื่อส่งข้อมูล
    outputDisplay.style.display = 'none';
});

// คลิก Show เพื่อแสดงข้อมูล
showBtn.addEventListener('click', function() {
    outputDisplay.style.display = 'block'; // แสดงข้อมูลที่บันทึกไว้
});

// รับค่า input X และ Y
const inputX = document.getElementById('inputX');
const inputY = document.getElementById('inputY');
const compareBtn = document.getElementById('compareBtn');
const output = document.getElementById('output');

// เมื่อกดปุ่ม Compare
compareBtn.addEventListener('click', function() {
    // แปลงค่าจาก input เป็นตัวเลข
    const x = parseFloat(inputX.value);
    const y = parseFloat(inputY.value);

    // ตรวจสอบว่า X และ Y เป็นตัวเลขที่ถูกต้องหรือไม่
    if (isNaN(x) || isNaN(y)) {
        output.innerHTML = `<span class="text-danger">Please enter valid numbers for both X and Y.</span>`;
        return;
    }

    // เปรียบเทียบ X และ Y และแสดงเครื่องหมาย
    if (x < y) {
        output.innerHTML = `X (${x}) < Y (${y})`;
    } else if (x > y) {
        output.innerHTML = `X (${x}) > Y (${y})`;
    } else {
        output.innerHTML = `X (${x}) = Y (${y})`;
    }
});
