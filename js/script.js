

/* Navigation menu */
window.addEventListener('DOMContentLoaded', () => { 
         const instagram = document.querySelector('.nav__list-instagram'),
               showInstagram = document.querySelector('.menu__block-list-instagram'),
               facebook = document.querySelector('.nav__list-facebook'),
               showFacebook = document.querySelector('.menu__block-list-facebook'),
               tiktok = document.querySelector('.nav__list-tiktok'),
               showTiktok = document.querySelector('.menu__block-list-tiktok'),
               twitter = document.querySelector('.nav__list-twitter'),
               showTwitter = document.querySelector('.menu__block-list-twitter'),
               youtube = document.querySelector('.nav__list-youtube'),
               showYoutube = document.querySelector('.menu__block-list-youtube'),
               soundCloud = document.querySelector('.nav__list-cloud'),
               showSoundCloud = document.querySelector('.menu__block-list-SoundCloud'),
               linkedlin = document.querySelector('.nav__list-linkedlin'),
               showLinkedlin = document.querySelector('.menu__block-list-linkedlin'),
               clubhouse = document.querySelector('.nav__list-clubhouse'),
               showClubhouse = document.querySelector('.menu__block-list-clubhouse');

               



        function showContent() {
             function showBlock() {
                instagram.addEventListener('click', (e) => {
                    e.preventDefault()
                    showInstagram.classList.toggle('active');
                            });
                            facebook.addEventListener('click', (e) => {
                                e.preventDefault()
                                showFacebook.classList.toggle('active')
                            });
                            tiktok.addEventListener('click', (e) => {
                                e.preventDefault()
                                showTiktok.classList.toggle('active')
                            });
                            twitter.addEventListener('click', (e) => {
                                e.preventDefault()
                                showTwitter.classList.toggle('active')
                            });
                            youtube.addEventListener('click', (e) => {
                                e.preventDefault()
                                showYoutube.classList.toggle('active')
                            });
                            soundCloud.addEventListener('click', (e) => {
                                e.preventDefault()
                                showSoundCloud.classList.toggle('active')
                            });
                            linkedlin.addEventListener('click', (e) => {
                                e.preventDefault()
                                showLinkedlin.classList.toggle('active')
                            });
                            clubhouse.addEventListener('click', (e) => {
                                e.preventDefault()
                                showClubhouse.classList.toggle('active')
                            });
                            
                            
                         }
             showBlock();
            }
        showContent()

/* Slider*/
$(document).ready(function() {
    $('.slider').slick({
        centerMode: true,
        slidesToShow: 3,
        dots:false,
        arrows:true,
        speed: 500,
        variableWidth: true,       
    })
});
/* menu Burger */
$(document).ready(function() {
    $('.menu__burger,.menu__burger-iphon').click(function() {
        $('.menu__burger, .menuBurger__inner, .menu__burger-iphon').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $(".burger__item-title-inst").click(function() {
        $('.burger__item-lists-instagram').slideToggle(".burger__item-lists-instagram");  
    });
    
    $(".burger__item-title-tiktok").click(function() { 
       $('.burger__item-lists-tiktok').slideToggle(".burger__item-lists-tiktok");  
   });
   $(".burger__item-title-twitter").click(function() {
    $('.burger__item-lists-twitter').slideToggle(".burger__item-lists-twitter");  
});
$(".burger__item-title-youtube").click(function() {
    $('.burger__item-lists-youtube').slideToggle(".burger__item-lists-youtube");  
});
$(".burger__item-title-soundCloud").click(function() {
    $('.burger__item-lists-soundCloud').slideToggle(".burger__item-lists-soundCloud");  
});
$(".burger__item-title-linkedlin").click(function() {
    $('.burger__item-lists-linkedIn').slideToggle(".burger__item-lists-linkedIn");  
});
$(".burger__item-title-clubhouse").click(function() {
    $('.burger__item-lists-clubhouse').slideToggle(".burger__item-lists-clubhouse");  
});
    
    
      });

  const time = 90000000; //ms
    const step = .1;

    function outNum(num, elem) {
        let l = document.querySelector('.main__item-title');
        let m = 'M+'

    n = 2.3;
    let t = Math.trunc(Math.round(time/(num/step)));
    let interval = setInterval(() => {
        n = n + step;
        if(n == num) {
            clearInterval(interval)
        }
        l.innerHTML = n.toFixed(1) + m;
    }, t)
    }
    outNum(1000, 'main__item-title')


    const timem = 103278321; //ms
    const stepm = .1;

    function outNumm(num, elem) {
        let mid = document.querySelector('.main__item-title-middle');
        let mm = 'M+'

    nm = 7.4;
    let tm = Math.trunc(Math.round(timem/(num/stepm)));
    let intervalm = setInterval(() => {
        nm = nm + stepm;
        if(nm == num) {
            clearInterval(intervalm)
        }
        mid.innerHTML = nm.toFixed(1) + mm;
    }, tm)
    }
    outNumm(1000, 'main__item-title')
    

    const timel = 299999999; //ms
    const stepl = .1;

    function outNuml(num, elem) {
        let last = document.querySelector('.main__item-title-last');
        let ml = 'M+'

    nl = 70.6;
    let tl = Math.ceil(Math.round(timel/(num/stepl)));
    let intervall = setInterval(() => {
        nl = nl + stepl;
        if(nl == num) {
            clearInterval(intervall)
        }
        last.innerHTML = nl.toFixed(1) + ml;
    }, tl)
    }
    outNuml(1000, 'main__item-title-last')






 });













