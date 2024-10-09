document.getElementById('language-button').addEventListener('click', function() {
    const nameElement = document.getElementById('student-name'); // ดึงข้อมูลชื่อ
    const IdElement = document.getElementById('student-Id');     // ดึงข้อมูลรหัสนักศึกษา
    const courseElement = document.getElementById('student-course'); // ดึงข้อมูลคอร์สเรียน
    const yearsElement = document.getElementById('student-years');   // ดึงข้อมูลปีการศึกษา
    const birthElement = document.getElementById('student-birth');   // ดึงข้อมูลวันเกิด
    const mailElement = document.getElementById('student-mail');     // ดึงข้อมูลอีเมล
    const phoneElement = document.getElementById('student-phone');   // ดึงข้อมูลเบอร์โทรศัพท์

    // ตรวจสอบภาษาปัจจุบัน
    if (nameElement.textContent.includes('ชื่อ')) {
        // เปลี่ยนเป็นภาษาอังกฤษ
        nameElement.textContent = 'Name: Somchai Jaidee';
        IdElement.textContent = 'Student ID: 12345678';
        courseElement.textContent = 'Course: Computer Engineering';
        yearsElement.textContent = 'Year: 3';
        birthElement.textContent = 'Birthdate: 01 January 2003';
        mailElement.textContent = 'Email: somchai@example.com';
        phoneElement.textContent = 'Phone: 080-123-4567';
    } else {
        // เปลี่ยนกลับเป็นภาษาไทย
        nameElement.textContent = 'ชื่อ: สมชาย ใจดี';
        IdElement.textContent = 'รหัสนักศึกษา: 12345678';
        courseElement.textContent = 'คอร์ส: วิศวกรรมคอมพิวเตอร์';
        yearsElement.textContent = 'ปีการศึกษา: 3';
        birthElement.textContent = 'วันเกิด: 01 มกราคม 2546';
        mailElement.textContent = 'อีเมล: somchai@example.com';
        phoneElement.textContent = 'เบอร์โทร: 080-123-4567';
    }
});
