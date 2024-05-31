
  function kirimData(event) {
    event.preventDefault(); // Mencegah perilaku default formulir

    // Mengambil nilai dari input field
    var nama = document.getElementById("nama").value;
    var telepon = document.getElementById("telepon").value;
    var gayaDekorasi = document.querySelector('input[name="Decoration"]:checked').value;
    var jumlahTamu = document.getElementById("guest_count").value;
    var tanggalPernikahan = document.getElementById("wedding_date").value;
    var lokasiPernikahan = document.getElementById("lokasi_pernikahan").value;
    var deskripsi = document.getElementById("deskripsi").value;

    // Membuat pesan output
    var outputMessage = "Terima kasih atas pendaftaran Anda!\n\n" +
                        "Nama: " + nama + "\n" +
                        "Telepon: " + telepon + "\n" +
                        "Gaya Dekorasi: " + gayaDekorasi + "\n" +
                        "Jumlah Tamu: " + jumlahTamu + "\n" +
                        "Tanggal Pernikahan: " + tanggalPernikahan + "\n" +
                        "Lokasi Pernikahan: " + lokasiPernikahan + "\n" +
                        "Deskripsi Tambahan: " + deskripsi;

    // Menampilkan pesan output di alert
    alert(outputMessage);
  }

