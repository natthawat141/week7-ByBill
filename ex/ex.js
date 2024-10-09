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

// ฟังก์ชันสำหรับรับเวลาปัจจุบันในรูปแบบ HH:MM:SS
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

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

    // รับเวลาในขณะนี้
    const currentTime = getCurrentTime();

    // เปรียบเทียบ X และ Y และแสดงผลพร้อมเวลา
    if (x < y) {
        output.innerHTML = `X (${x}) < Y (${y})<br><small>Compared at: ${currentTime}</small>`;
    } else if (x > y) {
        output.innerHTML = `X (${x}) > Y (${y})<br><small>Compared at: ${currentTime}</small>`;
    } else {
        output.innerHTML = `X (${x}) = Y (${y})<br><small>Compared at: ${currentTime}</small>`;
    }
});


// ค้นหา element ที่ต้องการควบคุม
const imgElement = document.getElementById('image');
const swapImgButton = document.getElementById('swapimg');
const changeImageText = document.getElementById('changeImage'); // เพิ่มตัวแปรสำหรับพารากราฟแสดงชื่อรูปภาพ

// กำหนด action เมื่อกดปุ่ม
swapImgButton.addEventListener('click', function() {
    // ตรวจสอบรูปภาพปัจจุบัน
    if (imgElement.src === 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg') {
        // ถ้าเป็นรูป adonisjs เปลี่ยนเป็นรูปใหม่
        imgElement.src = 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg';  // เปลี่ยนเป็นรูป Laravel
        swapImgButton.innerText = 'Change to Adonisjs';  // เปลี่ยนข้อความปุ่ม
        changeImageText.textContent = 'Laravel'; // เปลี่ยนข้อความใน <p> เป็น Laravel
    } else {
        // ถ้าเป็นรูปใหม่แล้ว ให้เปลี่ยนกลับเป็นรูปเดิม
        imgElement.src = 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg';  // เปลี่ยนกลับเป็นรูป Adonisjs
        swapImgButton.innerText = 'Change to Laravel';  // เปลี่ยนข้อความปุ่ม
        changeImageText.textContent = 'AdonisJS'; // เปลี่ยนข้อความใน <p> เป็น AdonisJS
    }
});


