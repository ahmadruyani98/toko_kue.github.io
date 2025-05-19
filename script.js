let keranjang = [];
let totalHarga = 0;

function tambahKeKeranjang(namaKue, harga) {
 keranjang.push({ nama: namaKue, harga: harga });
 totalHarga += harga;
 updateKeranjang();
}

function updateKeranjang() {
 const keranjangBelanja = document.getElementById('keranjang-belanja');
 keranjangBelanja.innerHTML = ''; // Kosongkan isi keranjang

 if (keranjang.length === 0) {
 keranjangBelanja.innerHTML = '<li>Keranjang belanja masih kosong.</li>';
 } else {
 keranjang.forEach(item => {
 const listItem = document.createElement('li');
 listItem.textContent = item.nama + ' - Rp ' + item.harga;
 keranjangBelanja.appendChild(listItem);
 });
 }

 document.getElementById('total-harga').textContent = totalHarga;
}

function checkout() {
 if (keranjang.length === 0) {
 alert('Keranjang belanja Anda masih kosong!');
 return;
 }

 let pesan = "Hai, saya ingin memesan:\n";
 keranjang.forEach(item => {
 pesan += "- " + item.nama + " - Rp " + item.harga + "\n";
 });
 pesan += "Total: Rp " + totalHarga;

 const nomorWhatsApp = "+6282268487849";
 const tautanWhatsApp = "https://wa.me/" + nomorWhatsApp + "?text=" + encodeURIComponent(pesan);

 window.open(tautanWhatsApp, '_blank');

 keranjang = [];
 totalHarga = 0;
 updateKeranjang();
}
