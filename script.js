const form = document.getElementById("formPendaftaran");
const hasil = document.getElementById("hasilPendaftaran");
const output = document.getElementById("output");
const btnKembali = document.getElementById("btnKembali");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // ambil semua data input
  const data = {
    nama: form.nama.value,
    nik: form.nik.value,
    tempatLahir: form.tempatLahir.value,
    tanggalLahir: form.tanggalLahir.value,
    jenisKelamin: form.jenisKelamin.value,
    alamat: form.alamat.value,
    noHp: form.noHp.value,
    email: form.email.value,
    namaAyah: form.namaAyah.value,
    pekerjaanAyah: form.pekerjaanAyah.value,
    namaIbu: form.namaIbu.value,
    pekerjaanIbu: form.pekerjaanIbu.value,
    alamatOrtu: form.alamatOrtu.value,
    noHpOrtu: form.noHpOrtu.value,
    asalSekolah: form.asalSekolah.value,
    tahunLulus: form.tahunLulus.value,
    jurusanSekolah: form.jurusanSekolah.value,
    fotoIjazah: form.fotoIjazah.files[0]?.name,
    fotoTranskrip: form.fotoTranskrip.files[0]?.name,
    fakultas: form.fakultas.value,
    prodi: form.prodi.value,
    pasFoto: form.pasFoto.files[0]?.name,
    jalur: form.jalur.value,
    alasan: form.alasan.value,
  };

  // tampilkan hasil
  output.innerHTML = `
    <p><strong>Nama Lengkap:</strong> ${data.nama}</p>
    <p><strong>NIK:</strong> ${data.nik}</p>
    <p><strong>Tempat, Tanggal Lahir:</strong> ${data.tempatLahir}, ${data.tanggalLahir}</p>
    <p><strong>Jenis Kelamin:</strong> ${data.jenisKelamin}</p>
    <p><strong>Alamat:</strong> ${data.alamat}</p>
    <p><strong>No HP:</strong> ${data.noHp}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <hr>
    <p><strong>Nama Ayah:</strong> ${data.namaAyah}</p>
    <p><strong>Pekerjaan Ayah:</strong> ${data.pekerjaanAyah}</p>
    <p><strong>Nama Ibu:</strong> ${data.namaIbu}</p>
    <p><strong>Pekerjaan Ibu:</strong> ${data.pekerjaanIbu}</p>
    <p><strong>Alamat Orang Tua:</strong> ${data.alamatOrtu}</p>
    <p><strong>No HP Orang Tua:</strong> ${data.noHpOrtu}</p>
    <hr>
    <p><strong>Asal Sekolah:</strong> ${data.asalSekolah}</p>
    <p><strong>Tahun Lulus:</strong> ${data.tahunLulus}</p>
    <p><strong>Jurusan Sekolah:</strong> ${data.jurusanSekolah}</p>
    <p><strong>Foto Ijazah:</strong> ${data.fotoIjazah}</p>
    <p><strong>Foto Transkrip Nilai:</strong> ${data.fotoTranskrip}</p>
    <p><strong>Fakultas:</strong> ${data.fakultas}</p>
    <p><strong>Program Studi:</strong> ${data.prodi}</p>
    <hr>
    <p><strong>Pas Foto:</strong> ${data.pasFoto}</p>
    <p><strong>Jalur Pendaftaran:</strong> ${data.jalur}</p>
    <p><strong>Alasan Memilih Prodi:</strong> ${data.alasan}</p>
  `;

  form.classList.add("hidden");
  hasil.classList.remove("hidden");
});

btnKembali.addEventListener("click", () => {
  hasil.classList.add("hidden");
  form.classList.remove("hidden");
});

// ======== DATA PRODI BERDASARKAN FAKULTAS ======== //
const dataProdi = {
  "Teknologi Informasi": [
    "Informatika",
    "Sistem Informasi",
    "Teknologi Informasi",
    "Rekayasa Perangkat Lunak",
    "Sains Data",
    "Keamanan Siber"
  ],
  "Ekonomi dan Bisnis": [
    "Manajemen",
    "Akuntansi",
    "Ekonomi Pembangunan",
    "Keuangan dan Perbankan",
    "Bisnis Digital",
    "Kewirausahaan"
  ],
  "Teknik": [
    "Teknik Elektro",
    "Teknik Mesin",
    "Teknik Industri",
    "Teknik Sipil",
    "Teknik Arsitektur",
    "Teknik Lingkungan"
  ],
  "Ilmu Sosial dan Politik": [
    "Ilmu Komunikasi",
    "Hubungan Internasional",
    "Administrasi Publik",
    "Sosiologi"
  ],
  "Hukum": ["Ilmu Hukum"],
  "Kesehatan": [
    "Kesehatan Masyarakat",
    "Keperawatan",
    "Farmasi",
    "Gizi",
    "Kebidanan"
  ],
  "Keguruan dan Ilmu Pendidikan": [
    "Pendidikan Bahasa Inggris",
    "Pendidikan Matematika",
    "Pendidikan Biologi",
    "Pendidikan Ekonomi",
    "Pendidikan Informatika"
  ],
  "Seni dan Desain": [
    "Desain Komunikasi Visual",
    "Desain Interior",
    "Seni Rupa",
    "Film dan Televisi",
    "Animasi"
  ],
  "Psikologi": ["Psikologi"]
};

// ======== EVENT PILIH FAKULTAS ======== //
const fakultasSelect = document.getElementById("fakultas");
const prodiSelect = document.getElementById("prodi");

fakultasSelect.addEventListener("change", function () {
  const fakultas = this.value;
  prodiSelect.innerHTML = '<option value="">-- Pilih Program Studi --</option>';

  if (dataProdi[fakultas]) {
    dataProdi[fakultas].forEach(prodi => {
      const option = document.createElement("option");
      option.value = prodi;
      option.textContent = prodi;
      prodiSelect.appendChild(option);
    });
  }
});
