const box = document.getElementsByTagName('div')[0];
box.classList.add('fBox');

const menu = document.getElementsByTagName('ul')[0];

const textMenuR = menu.getElementsByTagName('a')[0];

textMenuR.style.color = 'black';


const textMenuP = menu.getElementsByTagName('a')[1];

textMenuP.style.color = 'black';

// Fungsi Membuka Tab
function openTab(evt, tabName) {
    let tabcontent = document.getElementsByClassName("tab");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}
 
// Fungsi untuk mengirim data form dan menambahkannya ke tabel
function submitForm() {
    let nama = document.getElementById("nama").value;
    let umur = document.getElementById("umur").value;
    let uangSangu = document.getElementById("uang-sangu").value;
    
    
    // Validasi data (bisa ditambahkan sesuai kebutuhan)

    if (nama.length <= 10) {
        alert('Nama tidak boleh kurang dari 10 karakter');
        return;
    }

    if (isNaN(umur)) {
        alert('Umur Harus disi Angka!')
        return;

    }else if (umur < 25) {
        alert('Umur Minimal 25 Tahun');
        return;
    } 

    if (isNaN(uangSangu)) {
        alert('Uang Sangu Harus disi Angka!')
        return;
    } else if (uangSangu < 100000) {
        alert('Uang Sangu Minimal Rp 100.000');
        return;
    } else if (uangSangu > 1000000) {
        alert('Uang Sangu Maksimal Rp.1.000.000');
        return;
    }   

    // Tambahkan data ke tabel
    let table = document.querySelector("table");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = nama;
    cell2.innerHTML = umur;
    cell3.innerHTML = uangSangu;

    // Reset form
    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("uang-sangu").value = "";
}