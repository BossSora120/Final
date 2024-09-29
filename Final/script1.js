function openTab(event, tabName) {
    let tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.add('d-none');
    }
    document.getElementById(tabName).classList.remove('d-none');
}

// ฟังก์ชันเปิดโหมด Dark Mode (สามารถขยายเพิ่มได้ตามต้องการ)
function darkModeOn() {
    document.body.classList.toggle('dark-mode');
}
