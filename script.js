function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    // ดึงวันที่และเวลาไทย
    const thaiDate = now.toLocaleDateString('th-TH', options);
    const thaiTime = now.toLocaleTimeString('th-TH');

    // สั่งให้ไปแสดงใน HTML
    document.getElementById('date').innerText = thaiDate;
    document.getElementById('time').innerText = thaiTime;
}

// อัปเดตทุก 1 วินาที
setInterval(updateClock, 1000);
updateClock();
