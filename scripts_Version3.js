// scripts.js (standalone, non-module). Versi diperbarui, lebih stabil dan aman.
// Pastikan styles.css dan assets/*.jpg tersedia di repo.

(function () {
  'use strict';

  // --- Data (ekstrak dari gambar CV) ---
  // Hanya menggunakan teks yang terlihat di ketiga CV; tidak menambah informasi.
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
        'Moderator pengukuhan HIPMI Banten 2026'
      ],
      organization: [
        'Staf Departemen kemahasiswaan dan sumber daya (HMPS Manajemen Pendidikan) 2026',
        'Staf biro kaderisasi (PMII Rayon Manajemen Pendidikan) 2026',
        'Sekretaris Karang Taruna Rt.003/09 Kalisari 2025-Sekarang'
      ],
      skills: ['Public speaking','Problem solving','Leadership'],
      achievements: []
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
      about: 'Mahasiswa Manajemen Pendidikan UIN Jakarta yang adaptif dan berorientasi pada hasil. Memiliki pengalaman nyata dalam manajemen operasional acara, administrasi organisasi sebagai Sekretaris, dan pengarahan konsep visual kreatif.',
      education: [
        {name:'SDN Palmerah 19 pagi', year:'2013 - 2019'},
        {name:'MTsN 12 Jakarta', year:'2019 - 2022'},
        {name:'MAN 22 Jakarta Barat', year:'2022 - 2025'},
        {name:'UIN Syarif Hidayatullah Jakarta', year:'2025 - sekarang'}
      ],
      experience: [
        'Juara Harapan 2 OSN Bidang IPA Tingkat Kecamatan (2018)',
        'Staf Divisi Perkap | Hari Guru MAN 22 Jakarta (November 2023)',
        'Sekretaris Ekstrakurikuler Ratoh Jaroe | MAN 22 Jakarta (Desember 2023 – Desember 2024)',
        'Staf Divisi Desain | Gathering Night MAN 22 Jakarta (Februari 2024)',
        'Staf Divisi Acara | Campus Expo MAN 22 Jakarta (Desember 2025)',
        'Staf Divisi Konsumsi | PBAK Manajemen Pendidikan UIN Syarif Hidayatullah Jakarta (Agustus 2026)'
      ],
      organization: [],
      skills: [
        'Pengolaan Data dan Dokumen',
        'Penyusunan proposal, surat-menyurat resmi serta notulen rapat',
        'Kemampuan komunikasi dan negosiasi',
        'Kemampuan penggunaan Microsoft Office'
      ],
      achievements: []
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
      about: 'Mahasiswa Manajemen Pendidikan semester 3 di UIN Syarif Hidayatullah Jakarta yang aktif dalam kegiatan sosial dan proyek sukarelawan (volunteer). Memiliki kemampuan adaptasi yang cepat, komunikasi yang baik serta antusias yang tinggi untuk mempelajari hal hal baru.',
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
      organization: [],
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

  // --- Utility helpers ---
  function el(sel, ctx = document) { return ctx.querySelector(sel); }
  function els(sel, ctx = document) { return Array.from(ctx.querySelectorAll(sel)); }
  function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>"']/g, function (m) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]);
    });
  }

  // --- Elements ---
  const views = els('.view');
  const homeView = el('#home');
  const listView = el('#cv-list');
  const cvView = el('#cv-view');
  const cvContent = el('#cv-content');
  const cvNameEl = el('#cv-name');
  const cvRoleEl = el('#cv-role');
  const cvPhotoEl = el('#cv-photo');
  const backBtn = el('#back-btn');
  const yearEl = el('#year');
  yearEl && (yearEl.textContent = new Date().getFullYear());

  // show/hide view helper
  function showView(id) {
    views.forEach(v => v.classList.remove('active'));
    const target = el('#' + id);
    if (target) {
      target.classList.add('active');
      // aria
      views.forEach(v => v.setAttribute('aria-hidden', v !== target));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Render CV: build two-column HTML string
  function renderCV(cv) {
    document.body.classList.remove('theme-indah','theme-naila','theme-salwaa');
    document.body.classList.add('theme-' + cv.id);

    cvNameEl.textContent = cv.name;
    cvRoleEl.textContent = cv.role;
    cvPhotoEl.src = cv.photo;

    const leftParts = [];

    if (cv.about) {
      leftParts.push(`<section class="cv-section"><h3>Tentang Saya</h3><p>${escapeHtml(cv.about)}</p></section>`);
    }

    if (cv.experience && cv.experience.length) {
      leftParts.push('<section class="cv-section"><h3>Pengalaman</h3><ul class="list-dot">');
      cv.experience.forEach(it => leftParts.push(`<li>${escapeHtml(it)}</li>`));
      leftParts.push('</ul></section>');
    }

    if (cv.otherExperience && cv.otherExperience.length) {
      leftParts.push('<section class="cv-section"><h3>Pengalaman Lainnya</h3><ul class="list-dot">');
      cv.otherExperience.forEach(it => leftParts.push(`<li>${escapeHtml(it)}</li>`));
      leftParts.push('</ul></section>');
    }

    if (cv.achievements && cv.achievements.length) {
      leftParts.push('<section class="cv-section"><h3>Prestasi</h3><ul class="list-dot">');
      cv.achievements.forEach(it => leftParts.push(`<li>${escapeHtml(it)}</li>`));
      leftParts.push('</ul></section>');
    }

    const rightParts = [];

    // Contact
    rightParts.push('<section class="cv-section"><h3>Kontak</h3>');
    if (cv.contact?.email) rightParts.push(`<p><strong>Email:</strong> <a href="mailto:${escapeHtml(cv.contact.email)}">${escapeHtml(cv.contact.email)}</a></p>`);
    if (cv.contact?.phone) rightParts.push(`<p><strong>Telepon:</strong> <a href="tel:${escapeHtml(cv.contact.phone.replace(/\s+/g,''))}">${escapeHtml(cv.contact.phone)}</a></p>`);
    if (cv.contact?.address) rightParts.push(`<p><strong>Alamat:</strong> ${escapeHtml(cv.contact.address)}</p>`);
    if (cv.contact?.birthplace) rightParts.push(`<p><small>${escapeHtml(cv.contact.birthplace)}</small></p>`);
    rightParts.push('</section>');

    // Education
    if (cv.education && cv.education.length) {
      rightParts.push('<section class="cv-section"><h3>Pendidikan</h3>');
      cv.education.forEach(ed => {
        rightParts.push(`<div class="timeline-item"><div><strong>${escapeHtml(ed.name)}</strong></div><div class="muted">${escapeHtml(ed.year)}</div></div>`);
      });
      rightParts.push('</section>');
    }

    // Skills
    if (cv.skills && cv.skills.length) {
      rightParts.push('<section class="cv-section"><h3>Keahlian</h3><ul class="list-dot">');
      cv.skills.forEach(s => rightParts.push(`<li>${escapeHtml(s)}</li>`));
      rightParts.push('</ul></section>');
    }

    // Organization
    if (cv.organization && cv.organization.length) {
      rightParts.push('<section class="cv-section"><h3>Organisasi</h3><ul class="list-dot">');
      cv.organization.forEach(o => rightParts.push(`<li>${escapeHtml(o)}</li>`));
      rightParts.push('</ul></section>');
    }

    // assemble columns
    const html = `
      <div class="cv-panel">${leftParts.join('')}</div>
      <aside class="cv-panel cv-col-right">${rightParts.join('')}</aside>
    `;
    cvContent.innerHTML = html;

    // small reveal
    requestAnimationFrame(() => {
      els('.fade-in').forEach(el => el.classList.add('is-visible'));
    });
  }

  // open CV by id (updates hash)
  function openCV(id, pushState = true) {
    const cv = CVS[id];
    if (!cv) return;
    renderCV(cv);
    showView('cv-view');
    if (pushState) {
      history.pushState({ cv: id }, '', '#' + id);
    } else {
      // replaceState for initial load
      history.replaceState({ cv: id }, '', '#' + id);
    }
  }

  // Close CV -> back to home
  function closeCV() {
    showView('home');
    document.body.classList.remove('theme-indah','theme-naila','theme-salwaa');
    history.pushState({}, '', location.pathname);
  }

  // --- Event listeners (delegation) ---
  // Cards and list buttons
  const app = el('#app');
  app.addEventListener('click', function (ev) {
    const btn = ev.target.closest('[data-id]');
    if (btn && btn.dataset.id) {
      openCV(btn.dataset.id);
    }
    const linkLike = ev.target.closest('.link-like');
    if (linkLike && linkLike.dataset.id) {
      openCV(linkLike.dataset.id);
    }
    const navBtn = ev.target.closest('.nav-btn');
    if (navBtn && navBtn.dataset.target) {
      showView(navBtn.dataset.target);
    }
  });

  // keyboard support for Enter/Space on profile cards and list items
  app.addEventListener('keydown', function (ev) {
    const active = ev.target.closest('.card, .link-like, button[data-id]');
    if (!active) return;
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      active.click();
    }
  });

  // Back button
  backBtn.addEventListener('click', function () {
    closeCV();
  });

  // popstate handler for back/forward navigation
  window.addEventListener('popstate', function (ev) {
    const state = ev.state;
    if (state && state.cv && CVS[state.cv]) {
      openCV(state.cv, false);
    } else {
      // no state -> show home
      showView('home');
      document.body.classList.remove('theme-indah','theme-naila','theme-salwaa');
    }
  });

  // handle direct hash on load
  function handleHash() {
    const id = location.hash.replace('#', '');
    if (id && CVS[id]) {
      openCV(id, false);
    } else {
      showView('home');
    }
  }

  // init
  window.addEventListener('load', function () {
    handleHash();
  });

})();