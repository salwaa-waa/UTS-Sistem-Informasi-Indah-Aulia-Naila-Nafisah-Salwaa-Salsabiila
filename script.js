function showCV(person) {
    document.getElementById('beranda').style.display = 'none';
    document.getElementById('cv-salwaa').style.display = 'none';
    document.getElementById('cv-indah').style.display = 'none';
    document.getElementById('cv-naila').style.display = 'none';

    if(person === 'salwaa') {
        document.getElementById('cv-salwaa').style.display = 'block';
    } else if(person === 'indah') {
        document.getElementById('cv-indah').style.display = 'block';
    } else if(person === 'naila') {
        document.getElementById('cv-naila').style.display = 'block';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
    document.getElementById('cv-salwaa').style.display = 'none';
    document.getElementById('cv-indah').style.display = 'none';
    document.getElementById('cv-naila').style.display = 'none';
    document.getElementById('beranda').style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
