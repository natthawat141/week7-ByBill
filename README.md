# week7-ByBill แจกแบบฝึกหัด week 7 by bill
แจกจ่ายต่อได้เต็มที่
<h2>ใช้  DOM (Document Object Model) ในการเปลี่ยนภาษา</h2>

document.getElementById():

    นี่คือฟังก์ชันที่ใช้เพื่อดึงองค์ประกอบจากหน้าเว็บที่มี id เฉพาะมาใช้งานใน JavaScript
    ตัวอย่างเช่น document.getElementById('student-name') จะดึงองค์ประกอบ <p> ที่มี id="student-name" ออกมา ซึ่งเราสามารถใช้เปลี่ยนแปลงหรือแสดงผลข้อมูลได้

addEventListener('click', function() {...}):

    เราใช้ addEventListener เพื่อระบุว่าควรให้เกิดเหตุการณ์อะไรเมื่อปุ่มถูกคลิก
    ในกรณีนี้ เราได้ระบุว่า เมื่อปุ่มที่มี id="language-button" ถูกคลิก จะเรียกใช้ฟังก์ชันภายในที่ทำการเปลี่ยนภาษาของข้อมูลบนหน้าเว็บ

textContent:

    textContent ใช้ในการเข้าถึงหรือแก้ไขข้อความภายในองค์ประกอบ HTML ที่เราดึงมา
    ตัวอย่างเช่น nameElement.textContent จะแสดงข้อความที่อยู่ภายในแท็ก <p> ของ student-name (เช่น 'ชื่อ: สมชาย ใจดี')

การตรวจสอบภาษาปัจจุบัน (if...else):

    เราใช้ if เพื่อเช็คว่าข้อความใน nameElement.textContent มีคำว่า "ชื่อ" อยู่หรือไม่ ซึ่งเป็นการตรวจสอบว่าข้อความนั้นเป็นภาษาไทย
    ถ้าใช่ (คือเป็นภาษาไทย) เราจะเปลี่ยนข้อความทั้งหมดเป็นภาษาอังกฤษในบรรทัดถัดไป
    ถ้าไม่ใช่ (คือเป็นภาษาอังกฤษแล้ว) ก็จะเปลี่ยนกลับเป็นภาษาไทย

การเปลี่ยนข้อความ (nameElement.textContent = '...'):

    เมื่อเงื่อนไขตรวจสอบเสร็จ เราจะทำการเปลี่ยนข้อความในแต่ละองค์ประกอบโดยการตั้งค่า textContent ให้กับองค์ประกอบที่ถูกดึงมา เช่น nameElement.textContent = 'Name: Somchai Jaidee'; จะเปลี่ยนข้อความในชื่อจากภาษาไทยเป็นภาษาอังกฤษ
