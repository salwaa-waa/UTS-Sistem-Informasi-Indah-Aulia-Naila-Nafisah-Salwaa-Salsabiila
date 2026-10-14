// Data extracted only from the three CV images provided.
// Structure: id, meta (name, role, photo), sections (About, Education, Contact, Experience, Skills, Achievements, Organization)
// NOTE: Data used exactly as present in the images; no additions.

const CVS = {
  indah: {
    id: 'indah',
    name: 'Indah Aulia Puteri',
    role: 'Manajemen Pendidikan',
    photo: 'assets/indah.jpg',
    contact: {
      email: 'Indahap.347@gmail.com',
      phone: '0881-0257-06724',
      address: 'Jl. Intisari Raya RT.003/09 Kalisari, Pasar Rebo, Jaktim',
      birthplace: 'Jakarta, 3 April 2007'
    },
    about: 'Mahasiswi Manajemen Pendidikan UIN Syarif Hidayatullah Jakarta. Mampu mengembangkan keterampilan teknis dalam bidang pengembangan, mampu memimpin tim, dan mampu merumuskan solusi untuk masalah pada kegiatan.',
    education: [
      {name:'MIN 18 JAKARTA', year:'2013-2019'},
      {name:'SMPN 184 JAKARTA', year:'2019-2022'},
      {name:'SMAN 98 JAKARTA', year:'2022-2025'},
      {name:'UIN SYARIF HIDAYATULLAH JAKARTA', year:'2025-Sekarang'}
    ],
    experience: [
      'Siswa terpilih dalam Pelatihan MTQ MIN',
      'Juara Umum Pasukan Pengibar Se-Jabodetabek 2020',
      'Juara Pasukan Pengibar Bendera Terbaik Se-JABODETABEK 2020',
      'Juara Pasukan Pramuka Terbaik Se-JABODETABEK 2019',
      'Juara 1 Lomba Saritilawah 2024',
      'Lomba bernyanyi bahasa Jerman se-Jabodetabek 2024',
      'Juara 1 Lomba Hadroh Se-Jabodetabek 2025',
      'Juara 1 Lomba Hadroh Se-DKI Jakarta 2026',
      'Ketua pelantikan & RAKER pengurus PMII Rayon Manajemen Pendidikan',
      'Mentor PBAK prodi manajemen pendidikan 2026',
      'Moderator pengukuhan HIPMI Banten 2026',
      'EO acara Future Scholars Development IKA PMII Cabang Ciputat',
      'PIC fascia divisi UMKM acara HUT RI ke-81 di Monas',
      'Relawan dan panitia divisi acara program Sahabat Mendidik batch. 5 PMII KOMFAKTAR',
      'Motivator dalam sebuah sharing session di SMAN 98 Jakarta 2025',
      'Ketua Pelaksana HUT RI Karang Taruna Rt.003/09 Kalisari 2024-2025',
      'Panitia divisi acara MAPABA Luar Biasa (MALUBI) 2025',
      'Usaha F&B cheesecutit dan Samrol',
      'Panitia divisi Acara dalam Festival Aksi Kampanye 16 HAKTP Memperingati Hari Anti Kekerasan Terhadap Perempuan oleh KOPRI KOMFAKTAR',
      'Peserta SIG (Sekolah Islam Gender) KOPRI KOMFAKTAR 2025'
    ],
    organization: [
      'Staf Departemen kemahasiswaan dan sumber daya (HMPS Manajemen Pendidikan) 2026',
      'Staf biro kaderisasi (PMII Rayon Manajemen Pendidikan) 2026',
      'Sekretaris Karang Taruna Rt.003/09 Kalisari 2025-Sekarang'
    ],
    skills: ['Public speaking','Problem solving','Leadership'],
    achievements:[
      // Image lists achievements mixed into Experience section; for Indah there is no separate short Achievement list in image besides many listed items — we keep major ones above.
    ]
  },

  naila: {
    id: 'naila',
    name: 'Naila Nafisah',
    role: 'Manajemen Pendidikan',
    photo: 'assets/naila.jpg',
    contact: {
      email: 'nailanaf21@gmail.com',
      phone: '081385283569',
      address: 'Kemanggisan Grogol, Jakarta Barat'
    },
    about: 'Mahasiswa Manajemen Pendidikan UIN Jakarta yang adaptif dan berorientasi pada hasil. Memiliki pengalaman nyata dalam manajemen operasional acara, administrasi organisasi sebagai Sekretaris, dan pengarahan konsep visual kreatif. Menguasai keterampilan komunikasi, kolaborasi lintas tim, serta penyusunan jadwal kerja.',
    education: [
      {name:'SDN Palmerah 19 pagi', year:'2013-2019'},
      {name:'MTsN 12 Jakarta', year:'2019-2022'},
      {name:'MAN 22 Jakarta Barat', year:'2022-2025'},
      {name:'UIN Syarif Hidayatullah Jakarta', year:'2025-sekarang'}
    ],
    experience: [
      'Juara Harapan 2 OSN Bidang IPA Tingkat Kecamatan (2018)',
      'Staf Divisi Perkap | Hari Guru MAN 22 Jakarta (November 2023)',
      'Sekretaris Ekstrakurikuler Ratoh Jaroe | MAN 22 Jakarta (Desember 2023 – Desember 2024)',
      'Staf Divisi Desain | Gathering Night MAN 22 Jakarta (Februari 2024)',
      'Staf Divisi Acara | Campus Expo MAN 22 Jakarta (Desember 2025)',
      'Staf Divisi Konsumsi | PBAK Manajemen Pendidikan UIN Syarif Hidayatullah Jakarta (Agustus 2026)'
    ],
    skills: [
      'Pengolaan Data dan Dokumen',
      'Penyusunan proposal, surat-menyurat resmi serta notulen rapat',
      'Kemampuan komunikasi dan negosiasi',
      'Kemampuan penggunaan Microsoft Office'
    ],
    achievements: [
      // achievements included in experience above (Juara Harapan 2 OSN)
    ],
    organization: [
      // no separate organization list on image other than roles in experience
    ]
  },

  salwaa: {
    id: 'salwaa',
    name: 'Salwaa Salsabiila Ramadhaani',
    role: 'Manajemen Pendidikan',
    photo: 'assets/salwaa.jpg',
    contact: {
      email: 'slwa.waa16@gmail.com',
      phone: '+62 889-0609-0456',
      address: 'Kutabumi, Kec. Ps. Kemis, Kabupaten Tangerang, Banten'
    },
    about: 'Mahasiswa Manajemen Pendidikan semester 3 di UIN Syarif Hidayatullah Jakarta yang aktif dalam kegiatan sosial dan proyek sukarelawan (volunteer). Memiliki kemampuan adaptasi yang cepat, komunikasi yang baik serta antusias yang tinggi untuk mempelajari hal hal baru. Berkomitmen untuk berkontribusi secara positif dan mengembangkan keterampilan profesi melalui berbagai kegiatan dan kesempatan baru.',
    education: [
      {name:'R.A Mufidah', year:'2011–2013'},
      {name:'MIS Sabilussalam', year:'2013–2019'},
      {name:'SMP IT Al-Qudwah', year:'2019–2022'},
      {name:'SMA IT Ummul Qura', year:'2022–2025'},
      {name:'UIN Syarif Hidayatullah Jakarta', year:'2025–sekarang'}
    ],
    experience: [
      'Anggota Aktif Klub Memanah (2019–2021)',
      'Anggota Aktif Seni Tari (2020–2022)',
      'Ketua Asrama (2021/2022)',
      'Panitia LDKS (2022)',
      'Ketua Klub Memanah (2023)',
      'Anggota Aktif Bela diri (2024)',
      'Anggota Osis Divisi Bapenta (2023/2024)',
      'Panitia Acara Language Fair (2023)',
      'Panitia Maulid Nabi (2023)',
      "Panitia Acara Usbu' funny (2024)",
      'Panitia Sidang Kitab Kuning (2024)',
      'Panitia Kelulusan Kelas 12 (2024)',
      'Sekretaris (2024/2025)'
    ],
    otherExperience: [
      'Pengabdian Masyarakat - khidmah (2024)',
      'Mengajar di SDN Sadanannya (2024)',
      'Mengajar di MI Cikatomos (2024)',
      'Mengajar di SDIT ASDU (2025)',
      'Volunteer - Satu Langkah (2026)',
      'Volunteer - kreasi semesta (2026)'
    ],
    skills: [
      'Manajemen Waktu & Perencanaan',
      'Komunikasi yang Baik',
      'Kerja Tim & Kepemimpinan',
      'Event Coordination',
      'Basic Editing'
    ],
    achievements: [
      'Juara 1 Fashion Show Tingkat Kabupaten Tangerang',
      'Juara 2 Cerdas Cermat Antar Sekolah Dasar',
      'Juara 2 Tari Saman Tingkat Kabupaten Tasikmalaya'
    ]
  }
};

// Elements
const views = document.querySelectorAll('.view');
const cards = document.querySelectorAll('.profile-card');
const listButtons = document.querySelectorAll('.link-like, .nav-btn, .nav-btn[data-target]');
const cvView = document.getElementById('cv-view');
const cvContent = document.getElementById('cv-content');
const cvNameEl = document.getElementById('cv-name');
const cvRoleEl = document.getElementById('cv-role');
const cvPhotoEl = document.getElementById('cv-photo');
const backBtn = document.getElementById('back-btn');
const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

// Helpers
function showView(id){
  views.forEach(v => v.classList.remove('active'));
  const view = document.getElementById(id);
  if(view) view.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

// Render CV content into cvContent element
function renderCV(cv){
  document.body.classList.remove('theme-indah','theme-naila','theme-salwaa');
  // set theme class per profile (monokrom beda)
  document.body.classList.add(`theme-${cv.id}`);

  cvNameEl.textContent = cv.name;
  cvRoleEl.textContent = cv.role;
  cvPhotoEl.src = cv.photo;

  // build HTML
  let html = '';

  // Left column (main)
  html += '<div class="cv-panel fade-in" style="min-height:120px">';
  // About
  if(cv.about){
    html += `<section class="cv-section"><h3>Tentang Saya</h3><p>${cv.about}</p></section>`;
  }

  // Experience
  if(cv.experience && cv.experience.length){
    html += `<section class="cv-section"><h3>Pengalaman</h3><ul class="list-dot">`;
    cv.experience.forEach(it => html += `<li>${it}</li>`);
    html += `</ul></section>`;
  }

  // otherExperience (Salwaa)
  if(cv.otherExperience && cv.otherExperience.length){
    html += `<section class="cv-section"><h3>Pengalaman Lainnya</h3><ul class="list-dot">`;
    cv.otherExperience.forEach(it => html += `<li>${it}</li>`);
    html += `</ul></section>`;
  }

  // Achievements
  if(cv.achievements && cv.achievements.length){
    html += `<section class="cv-section"><h3>Prestasi</h3><ul class="list-dot">`;
    cv.achievements.forEach(it => html += `<li>${it}</li>`);
    html += `</ul></section>`;
  }

  html += '</div>';

  // Right column (sidebar)
  html += '<aside class="cv-panel cv-col-right fade-in">';
  // Contact
  html += '<section class="cv-section"><h3>Kontak</h3>';
  if(cv.contact?.email) html += `<p><strong>Email:</strong> <a href="mailto:${cv.contact.email}">${cv.contact.email}</a></p>`;
  if(cv.contact?.phone) html += `<p><strong>Telepon:</strong> <a href="tel:${cv.contact.phone.replace(/\s+/g,'')}">${cv.contact.phone}</a></p>`;
  if(cv.contact?.address) html += `<p><strong>Alamat:</strong> ${cv.contact.address}</p>`;
  if(cv.contact?.birthplace) html += `<p><small>${cv.contact.birthplace}</small></p>`;
  html += '</section>';

  // Education
  if(cv.education && cv.education.length){
    html += '<section class="cv-section"><h3>Pendidikan</h3><div>';
    cv.education.forEach(ed => {
      html += `<div class="timeline-item"><div><strong>${ed.name}</strong></div><div class="muted">${ed.year}</div></div>`;
    });
    html += '</div></section>';
  }

  // Skills
  if(cv.skills && cv.skills.length){
    html += '<section class="cv-section"><h3>Keahlian</h3><ul class="list-dot">';
    cv.skills.forEach(s => html += `<li>${s}</li>`);
    html += '</ul></section>';
  }

  // Organization
  if(cv.organization && cv.organization.length){
    html += '<section class="cv-section"><h3>Organisasi</h3><ul class="list-dot">';
    cv.organization.forEach(o => html += `<li>${o}</li>`);
    html += '</ul></section>';
  }

  html += '</aside>';

  cvContent.innerHTML = html;

  // add reveal class after insertion
  requestAnimationFrame(() => {
    const fades = document.querySelectorAll('.fade-in');
    fades.forEach(el => el.classList.add('is-visible'));
  });
}

// Event wiring
cards.forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.id;
    openCV(id);
  });
  card.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') card.click();
  });
});

document.querySelectorAll('.link-like').forEach(btn => {
  btn.addEventListener('click', () => openCV(btn.dataset.id));
});
document.querySelectorAll('.nav-btn[data-target]').forEach(btn => {
  btn.addEventListener('click', () => showView(btn.dataset.target));
});

backBtn.addEventListener('click', () => {
  showView('home');
  // reset theme to default neutral
  document.body.classList.remove('theme-indah','theme-naila','theme-salwaa');
});

// openCV helper
function openCV(id){
  const cv = CVS[id];
  if(!cv) return;
  renderCV(cv);
  showView('cv-view');
  // update URL hash (so direct link possible)
  location.hash = `#${id}`;
}

// handle hash on load for deep link
function handleHashOnLoad(){
  const h = location.hash.replace('#','');
  if(h && CVS[h]){
    openCV(h);
  } else {
    showView('home');
  }
}
window.addEventListener('load', handleHashOnLoad);

// accessibility: allow clicking card by keyboard already added
// small UX: close mobile menu or similar is not needed here

// End of script