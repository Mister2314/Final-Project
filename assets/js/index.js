var cursor = document.querySelector(".cursor")
var cursor2 = document.querySelector(".cursor2")
document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";  
  })

  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #0ef0ad}";
    document.body.appendChild(css);
};
// index.js dosyası

const button = document.querySelector('.click-top');
const sectionToAppear = document.querySelector('.section2'); // Bölümün sınıfını buraya ekleyin

button.style.opacity = '0'; // Butonu başlangıçta görünmez yap

window.addEventListener('scroll', () => {
    const sectionTop = sectionToAppear.getBoundingClientRect().top;
    
    // Bölüm görünür hale geldiğinde butonun opacity'sini artır
    if (sectionTop <= window.innerHeight / 2) {
        button.style.opacity = '1';
    } else {
        button.style.opacity = '0';
    }
});

button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// // // script.js
// document.addEventListener("DOMContentLoaded", function () {
//   const loadingScreen = document.querySelector(".loading-screen-container");
  
//   // Yükleme ekranını 3 saniye sonra gizle
//   const displayDuration = 3000; // 3000 milisaniye (3 saniye)
  
//   setTimeout(function () {
//       loadingScreen.style.opacity = "0";
//   }, displayDuration);

// });


// document.addEventListener("DOMContentLoaded", function () {
//   const loadingScreen = document.querySelector(".loading-screen-container");
//   const body = document.querySelector("body");

//   // Yükleme ekranını 3 saniye sonra gizle
//   const displayDuration = 3000; // 3000 milisaniye (3 saniye)

//   setTimeout(function () {
//     loadingScreen.style.opacity = "0";

//     // Sayfa kaydırılabilirliğini geri aç
//     body.style.overflow = "visible";
//   }, displayDuration);

//   // Sayfa yüklenirken kaydırılabilirliğini kapat
//   body.style.overflow = "hidden";
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const loadingScreen = document.querySelector(".loading-screen-container");
//   const contentSection = document.querySelector(".content");

//   // Yükleme ekranını görüntüle
//   loadingScreen.style.opacity = "1";

//   // Sayfa yüklendikten sonra yükleme ekranını gizle ve içeriği görüntüle
//   window.addEventListener("load", function () {
//     loadingScreen.style.opacity = "0";
//     contentSection.style.visibility = "visible"; // İçeriği görüntüle
//   });

//   // Sayfa yenilendiğinde yükleme ekranını tekrar görüntüle ve içeriği gizle
//   window.addEventListener("beforeunload", function () {
//     loadingScreen.style.opacity = "1";
//     contentSection.style.visibility = "hidden"; // İçeriği gizle
//   });
// });

