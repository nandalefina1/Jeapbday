// JAVASCRIPT
const colors = ['#ff4500', '#ffd700', '#32cd32', '#1e90ff', '#ff69b4'];

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // Random posisi dan warna
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = Math.random() * -100 + 'vh';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Random ukuran (agar terlihat lebih bervariasi)
    const size = Math.random() * 8 + 4; // Ukuran 4px sampai 12px
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    
    // Random durasi dan delay animasi
    confetti.style.animationDuration = Math.random() * 2 + 2 + 's'; 
    confetti.style.animationDelay = Math.random() * 0.5 + 's';

    document.body.appendChild(confetti);

    // Hapus elemen confetti setelah animasi selesai
    confetti.addEventListener('animationend', () => {
        confetti.remove();
    });
}

// Fungsi utama untuk meluncurkan Confetti
function launchConfetti() {
    const numberOfConfetti = 50;
    
    for (let i = 0; i < numberOfConfetti; i++) {
        createConfetti();
    }
}

// Meluncurkan Confetti otomatis saat halaman dimuat
window.onload = launchConfetti;
