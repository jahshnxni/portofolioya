document.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-theme")) {
    const themeFile = event.target.getAttribute("data-theme");
    const themeButtons = document.querySelectorAll("[data-theme]");
    themeButtons.forEach((btn) => btn.classList.remove("active-theme"));
    event.target.classList.add("active-theme");
    document.getElementById("themeStylesheet").setAttribute("href", themeFile);
  }
});    
const validPaths = ['/', '/index.html', '/about.html', '/contact.html']; // tambah path yang sah
  const currentPath = window.location.pathname;

  if (!validPaths.includes(currentPath)) {
    window.location.replace('/index.html');
  }
    // Pilih kontainer latar belakang
    const bg = document.querySelector('.starry-bg');

    // Buat banyak bintang statis (sesuaikan jumlahnya sesuai keinginan)
    const starCount = 300;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 2 + 's';
      bg.appendChild(star);
    }

    // Buat beberapa bintang jatuh
    const shootingStarCount = 5;
    for (let i = 0; i < shootingStarCount; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.top = Math.random() * 100 + '%';
      shootingStar.style.left = Math.random() * 100 + '%';
      shootingStar.style.animationDelay = Math.random() * 5 + 's';
      bg.appendChild(shootingStar);
    }