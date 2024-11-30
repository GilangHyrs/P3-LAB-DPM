const movieService = {
    getMovies: async () => {
      return [
        { 
          id: 1, 
          title: 'Transformers', 
          poster: 'https://th.bing.com/th/id/OIP.R1YpBq_ktkP8Dmx4JaHKqAHaLj?rs=1&pid=ImgDetMain',
          description: 'Transformers: Rise of the Beasts adalah film aksi fiksi ilmiah tahun 2023 yang merupakan bagian dari waralaba Transformers. Film ini disutradarai oleh Steven Caple Jr. dan menjadi angsuran ketujuh dalam seri, sekaligus melanjutkan cerita yang dimulai di Bumblebee (2018). Ceritanya membawa elemen-elemen baru dengan memperkenalkan kelompok Maximals, Predacons, dan Terrorcons ke dalam konflik klasik antara Autobots dan Decepticons.'
        },
        { 
          id: 2, 
          title: 'Haikyuu', 
          poster: 'https://th.bing.com/th/id/OIP.DhgkuAd4iXnUxAwNG4ZrrAHaKk?rs=1&pid=ImgDetMain',
          description: 'Film Haikyuu!!: The Dumpster Battle adalah bagian pertama dari dua film yang dirancang untuk menyelesaikan adaptasi anime Haikyuu!!. Dirilis di Jepang pada 16 Februari 2024, film ini menggambarkan pertandingan yang sangat dinanti antara tim voli SMA Karasuno dan SMA Nekoma, dikenal sebagai "Pertempuran Sampah" karena nama kedua sekolah berasal dari istilah terkait kucing dan burung gagak.'
        },
        { 
          id: 3, 
          title: 'Exhuma', 
          poster: 'https://external-preview.redd.it/occult-blockbuster-exhuma-set-for-march-release-in-133-v0-PTLlUYOvy298ZKik-qoSlrdcjbQkfcZLKyoIy8qu24Y.jpg?auto=webp&s=8929d58f7ffa80a2e005e92d6cc8c8d3796baf83',
          description: '"Exhuma" (2024) adalah film horor-thriller Korea Selatan yang disutradarai oleh Jang Jae-hyun, seorang ahli dalam genre cerita supernatural. Film ini berpusat pada upaya tim pemuka spiritual untuk memecahkan kutukan kuno yang berakar pada penjajahan Jepang di Korea.'
        },
        { 
          id: 4, 
          title: 'Furious 7', 
          poster: 'https://i.ytimg.com/vi/kQ78dcSVrkM/maxresdefault.jpg',
          description: 'Furious 7, dirilis pada 2015, adalah film aksi ketujuh dalam waralaba Fast & Furious. Disutradarai oleh James Wan, film ini dikenal karena adegan aksi spektakuler, eksplorasi tema keluarga, dan penghormatan emosional kepada Paul Walker, yang meninggal sebelum produksi selesai.'
        },
        { 
          id: 5, 
          title: 'Siksa Neraka', 
          poster: 'https://th.bing.com/th/id/OIP.UgfnQQ50BWXUutea96anEwHaJQ?w=2756&h=3445&rs=1&pid=ImgDetMain',
          description: '"Siksa Neraka" adalah film horor Indonesia yang dirilis pada 14 Desember 2023. Film ini disutradarai oleh Anggy Umbara dan diadaptasi dari komik legendaris karya MB Rahimsyah. Ceritanya menggambarkan perjalanan empat bersaudara Saleh, Fajar, Tyas, dan Azizah yang sejak kecil sering mendengar kisah tentang surga dan neraka dari ayah mereka, seorang ustaz. Suatu malam, mereka mengalami kecelakaan saat menyeberangi sungai dan terbangun di alam akhirat, menghadapi hukuman atas dosa-dosa mereka selama hidup.'
        },
      ];
    },
  };
  
  export default movieService;