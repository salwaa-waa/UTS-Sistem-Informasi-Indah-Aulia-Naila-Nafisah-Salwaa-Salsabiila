/* ===== DATA CV — edit isi di sini kalau ada yang mau diubah ===== */
const PEOPLE = [
  {
    id: "salwaa",
    name: "Salwaa Salsabiila Ramadhaani",
    short: "Salwaa",
    major: "Manajemen Pendidikan",
    photo: "img/salwaa.jpg",
    theme: { accent: "#7b6fd8", ink: "#2b2570", soft: "#e9e6fb" },
    contacts: [
      { icon: "mail", text: "slwa.waa16@gmail.com" },
      { icon: "pin", text: "Kutabumi, Kec. Ps. Kemis, Kabupaten Tangerang, Banten" },
      { icon: "phone", text: "+62 889-0609-0456" },
    ],
    sections: [
      {
        title: "Tentang Saya",
        kind: "text",
        items:
          "Mahasiswa Manajemen Pendidikan semester 3 di UIN Syarif Hidayatullah Jakarta yang aktif dalam kegiatan sosial dan proyek sukarelawan (volunteer). Memiliki kemampuan adaptasi yang cepat, komunikasi yang baik, serta antusias yang tinggi untuk mempelajari hal-hal baru. Berkomitmen untuk berkontribusi secara positif dan mengembangkan keterampilan profesi melalui berbagai kegiatan dan kesempatan baru.",
      },
      {
        title: "Keahlian", kind: "chips", side: true,
        items: ["Manajemen Waktu & Perencanaan", "Komunikasi yang Baik", "Kerja Tim & Kepemimpinan", "Event Coordination", "Basic Editing"],
      },
      {
        title: "Pendidikan", kind: "timeline",
        items: [
          { t: "R.A Mufidah", d: "2011–2013" },
          { t: "MIS Sabilussalam", d: "2013–2019" },
          { t: "SMP IT Al-Qudwah", d: "2019–2022" },
          { t: "SMA IT Ummul Quro", d: "2022–2025" },
          { t: "UIN Syarif Hidayatullah Jakarta", d: "2025–sekarang" },
        ],
      },
      {
        title: "Prestasi", kind: "bullets",
        items: [
          "Juara 1 Fashion Show Tingkat Kabupaten Tangerang",
          "Juara 2 Cerdas Cermat Antar Sekolah Dasar",
          "Juara 2 Tari Saman Tingkat Kabupaten Tasikmalaya",
        ],
      },
      {
        title: "Pengalaman", kind: "rows",
        items: [
          { t: "Anggota Aktif Klub Memanah", d: "2019–2021" },
          { t: "Anggota Aktif Seni Tari", d: "2020–2022" },
          { t: "Ketua Asrama", d: "2021/2022" },
          { t: "Panitia LDKS", d: "2022" },
          { t: "Ketua Klub Memanah", d: "2023" },
          { t: "Anggota Aktif Bela Diri", d: "2024" },
          { t: "Anggota OSIS Divisi Bapenta", d: "2023/2024" },
          { t: "Panitia Acara Language Fair", d: "2023" },
          { t: "Panitia Maulid Nabi", d: "2023" },
          { t: "Panitia Acara Usbu’ Funny", d: "2024" },
          { t: "Panitia Sidang Kitab Kuning", d: "2024" },
          { t: "Panitia Kelulusan Kelas 12", d: "2024" },
          { t: "Sekretaris", d: "2024/2025" },
        ],
      },
      {
        title: "Pengalaman Lainnya", kind: "rows",
        items: [
          { t: "Pengabdian Masyarakat – Khidmah", d: "2024" },
          { t: "Mengajar di SDN Sadananya", d: "2024" },
          { t: "Mengajar di MI Cikatomas", d: "2024" },
          { t: "Mengajar di SDIT ASDU", d: "2025" },
          { t: "Volunteer – Satu Langkah", d: "2026" },
          { t: "Volunteer – Kreasi Semesta", d: "2026" },
        ],
      },
    ],
  },

  {
    id: "indah",
    name: "Indah Aulia Puteri",
    short: "Indah",
    major: "Manajemen Pendidikan",
    photo: "img/indah.jpg",
    theme: { accent: "#e0518c", ink: "#6b1a40", soft: "#fde2ee" },
    contacts: [
      { icon: "cake", text: "Jakarta, 3 April 2007" },
      { icon: "pin", text: "Jl. Intisari Raya RT.003/09 Kalisari, Pasar Rebo, Jakarta Timur" },
      { icon: "phone", text: "0881-0257-06724" },
      { icon: "mail", text: "Indahap.347@gmail.com" },
    ],
    sections: [
      {
        title: "Tentang Saya", kind: "text",
        items:
          "Mahasiswi Manajemen Pendidikan UIN Syarif Hidayatullah Jakarta. Mampu mengembangkan keterampilan teknis dalam bidang pengembangan, mampu memimpin tim, dan mampu merumuskan solusi untuk masalah pada kegiatan.",
      },
      { title: "Skill", kind: "chips", side: true, items: ["Public Speaking", "Problem Solving", "Leadership"] },
      {
        title: "Pendidikan", kind: "timeline",
        items: [
          { t: "MIN 18 Jakarta", d: "2013–2019" },
          { t: "SMPN 184 Jakarta", d: "2019–2022" },
          { t: "SMAN 98 Jakarta", d: "2022–2025" },
          { t: "UIN Syarif Hidayatullah Jakarta", d: "2025–sekarang" },
        ],
      },
      {
        title: "Organisasi", kind: "bullets",
        items: [
          "Staf Departemen Kemahasiswaan dan Sumber Daya (HMPS Manajemen Pendidikan) 2026",
          "Staf Biro Kaderisasi (PMII Rayon Manajemen Pendidikan) 2026",
          "Sekretaris Karang Taruna RT.003/09 Kalisari 2025–sekarang",
        ],
      },
      {
        title: "Pengalaman & Prestasi", kind: "bullets",
        items: [
          "Siswa terpilih dalam Pelatihan MTQ MIN",
          "Juara Umum Pasukan Pengibar Se-Jabodetabek 2020",
          "Juara Pasukan Pengibar Bendera Terbaik Se-Jabodetabek 2020",
          "Juara Pasukan Pramuka Terbaik Se-Jabodetabek 2019",
          "Juara 1 Lomba Saritilawah 2024",
          "Lomba bernyanyi bahasa Jerman se-Jabodetabek 2024",
          "Juara 1 Lomba Hadroh Se-Jabodetabek 2025",
          "Juara 1 Lomba Hadroh Se-DKI Jakarta 2026",
          "Ketua pelantikan & RAKER pengurus PMII Rayon Manajemen Pendidikan",
          "Mentor PBAK Prodi Manajemen Pendidikan 2026",
          "Moderator pengukuhan HIPMI Banten 2026",
          "EO acara Future Scholars Development IKA PMII Cabang Ciputat",
          "PIC fascia divisi UMKM acara HUT RI ke-81 di Monas",
          "Relawan dan panitia divisi acara program Sahabat Mendidik batch 5 PMII KOMFAKTAR",
          "Motivator dalam sharing session di SMAN 98 Jakarta 2025",
          "Ketua Pelaksana HUT RI Karang Taruna RT.003/09 Kalisari 2024–2025",
          "Panitia divisi acara MAPABA Luar Biasa (MALUBI) 2025",
          "Usaha F&B cheesecuit dan Samrol",
          "Panitia divisi acara dalam Festival Aksi Kampanye 16 HAKTP memperingati Hari Anti Kekerasan Terhadap Perempuan oleh KOPRI KOMFAKTAR",
          "Peserta SIG (Sekolah Islam Gender) KOPRI KOMFAKTAR 2025",
        ],
      },
    ],
  },

  {
    id: "naila",
    name: "Naila Nafisah",
    short: "Naila",
    major: "Manajemen Pendidikan",
    photo: "img/naila.jpg",
    theme: { accent: "#ee6a58", ink: "#6a2219", soft: "#ffe3dc" },
    contacts: [
      { icon: "phone", text: "081385283569" },
      { icon: "mail", text: "nailanaf21@gmail.com" },
      { icon: "pin", text: "Kemanggisan, Grogol, Jakarta Barat" },
    ],
    sections: [
      {
        title: "Profil", kind: "text",
        items:
          "Mahasiswa Manajemen Pendidikan UIN Jakarta yang adaptif dan berorientasi pada hasil. Memiliki pengalaman nyata dalam manajemen operasional acara, administrasi organisasi sebagai Sekretaris, dan pengarahan konsep visual kreatif. Menguasai keterampilan komunikasi, kolaborasi lintas tim, serta penyusunan jadwal kerja. Siap mengembangkan potensi di bidang tata kelola dan pengembangan organisasi.",
      },
      {
        title: "Kemampuan", kind: "chips", side: true,
        items: [
          "Pengolahan Data dan Dokumen",
          "Penyusunan Proposal, Surat-menyurat Resmi & Notulen Rapat",
          "Komunikasi dan Negosiasi",
          "Microsoft Office",
        ],
      },
      {
        title: "Pendidikan", kind: "timeline",
        items: [
          { t: "SDN Palmerah 19 Pagi", d: "2013–2019" },
          { t: "MTsN 12 Jakarta", d: "2019–2022" },
          { t: "MAN 22 Jakarta Barat", d: "2022–2025" },
          { t: "UIN Syarif Hidayatullah Jakarta", d: "2025–sekarang" },
        ],
      },
      {
        title: "Pengalaman", kind: "cards",
        items: [
          { t: "Juara Harapan 2 OSN Bidang IPA Tingkat Kecamatan", d: "2018" },
          { t: "Staf Divisi Perkap · Hari Guru MAN 22 Jakarta", d: "November 2023" },
          {
            t: "Sekretaris Ekstrakurikuler Ratoh Jaroe · MAN 22 Jakarta",
            d: "Des 2023 – Des 2024",
            b: [
              "Mengelola seluruh administrasi, dokumentasi, dan surat-menyurat internal maupun eksternal untuk mendukung operasional tim.",
              "Mengatur timeline persiapan lomba, menghasilkan tingkat partisipasi aktif tim yang tinggi hingga sukses mengikuti berbagai kompetisi dalam 1 tahun.",
              "Mengoordinasikan persiapan performa tim sebagai pengisi acara resmi pada prosesi Wisuda Boarding School di Asrama Haji Jakarta.",
              "Meraih Juara Harapan 3 & Juara Best Supporter pada kompetisi yang diadakan oleh MAN 10 Jakarta.",
              "Meraih Juara Harapan 3 pada ajang Lomba Ratoh Jaroe di Living Plaza Puri.",
            ],
          },
          { t: "Staf Divisi Desain · Gathering Night MAN 22 Jakarta", d: "Februari 2024" },
          { t: "Staf Divisi Acara · Campus Expo MAN 22 Jakarta", d: "Desember 2025" },
          { t: "Staf Divisi Konsumsi · PBAK Manajemen Pendidikan UIN Syarif Hidayatullah Jakarta", d: "Agustus 2026" },
        ],
      },
    ],
  },
];

/* ===== IKON ===== */
const ICONS = {
  mail: '<path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 1.5 8 5.5 8-5.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  phone: '<path d="M6.6 3h3l1.4 4-2 1.3a11 11 0 0 0 5.7 5.7l1.3-2 4 1.4v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  pin: '<path d="M12 21s7-6.1 7-11.2A7 7 0 0 0 5 9.8C5 14.9 12 21 12 21Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.4" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  cake: '<path d="M4 20h16v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6Zm2-8V9m6 3V9m6 3V9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
};
const icon = (name) =>
  `<span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg></span>`;

/* ===== RENDER ===== */
const $ = (sel) => document.querySelector(sel);
const home = $("#home");
const cvView = $("#cv-view");
const paper = $("#paper");

function renderArches() {
  $("#arches").innerHTML = PEOPLE.map(
    (p) => `
    <a class="arch" href="#${p.id}"
       style="--a:${p.theme.accent}; --soft:${p.theme.soft}; --ink:${p.theme.ink}"
       aria-label="Buka CV ${p.name}">
      <div class="frame"><img src="${p.photo}" alt="Foto ${p.short}" /></div>
      <h2 class="name">${p.name}</h2>
      <p class="role">${p.major}</p>
      <span class="open">Lihat CV</span>
    </a>`
  ).join("");
}

function renderSwitch(activeId) {
  $("#switch").innerHTML = PEOPLE.map(
    (p) => `
    <a href="#${p.id}" style="--dot:${p.theme.accent}" ${p.id === activeId ? 'aria-current="page"' : ""}>
      <i></i>${p.short}
    </a>`
  ).join("");
}

function renderSection(s) {
  const head = `<h2>${s.title}</h2>`;
  switch (s.kind) {
    case "text":
      return `<section>${head}<p class="about">${s.items}</p></section>`;
    case "timeline":
      return `<section>${head}<ul class="timeline">${s.items
        .map((i) => `<li><strong>${i.t}</strong><span class="when">${i.d}</span></li>`).join("")}</ul></section>`;
    case "rows":
      return `<section>${head}<ul class="rows">${s.items
        .map((i) => `<li><span>${i.t}</span><span class="when">${i.d}</span></li>`).join("")}</ul></section>`;
    case "bullets":
      return `<section>${head}<ul class="bullets">${s.items.map((i) => `<li>${i}</li>`).join("")}</ul></section>`;
    case "cards":
      return `<section>${head}<div class="cards">${s.items
        .map((i) => `<div class="card">
            <div class="head"><h3>${i.t}</h3><span class="when">${i.d}</span></div>
            ${i.b ? `<ul>${i.b.map((b) => `<li>${b}</li>`).join("")}</ul>` : ""}
          </div>`).join("")}</div></section>`;
    default:
      return "";
  }
}

function renderCV(p) {
  const side = p.sections.filter((s) => s.side);
  const main = p.sections.filter((s) => !s.side);

  paper.innerHTML = `
    <aside class="side">
      <div class="avatar"><img src="${p.photo}" alt="Foto ${p.name}" /></div>
      <h1>${p.name}</h1>
      <p class="major">${p.major}</p>
      <p class="campus">UIN Syarif Hidayatullah Jakarta</p>
      <ul class="contacts">
        ${p.contacts.map((c) => `<li>${icon(c.icon)}<span class="t">${c.text}</span></li>`).join("")}
      </ul>
      ${side.map((s) => `<h2>${s.title}</h2>
        <ul class="chips">${s.items.map((i) => `<li>${i}</li>`).join("")}</ul>`).join("")}
    </aside>
    <div class="main">${main.map(renderSection).join("")}</div>`;

  paper.classList.remove("enter");
  void paper.offsetWidth;
  paper.classList.add("enter");
}

/* ===== ROUTING (index.html#salwaa) ===== */
function route() {
  const id = location.hash.replace("#", "").toLowerCase();
  const person = PEOPLE.find((p) => p.id === id);

  if (person) {
    document.body.dataset.theme = person.id;
    home.hidden = true;
    cvView.hidden = false;
    renderSwitch(person.id);
    renderCV(person);
    document.title = `CV ${person.short} — Manajemen Pendidikan`;
  } else {
    document.body.dataset.theme = "home";
    cvView.hidden = true;
    home.hidden = false;
    document.title = "CV Mahasiswi Manajemen Pendidikan";
  }
  window.scrollTo({ top: 0 });
}

$("#print-btn").addEventListener("click", () => window.print());
window.addEventListener("hashchange", route);
renderArches();
route();
