(() => {
  document.addEventListener('DOMContentLoaded', () => {

    function initSwiper() {
      var hero__slider = new Swiper(".hero__slider-init", {
        spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        speed: 600,
        mousewheel: {
          forceToAxis: true,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: false
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".hero__slider-next",
          prevEl: ".hero__slider-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });

      var feat__slider = new Swiper(".feat__slider-init", {
        slidesPerView: "auto",
        spaceBetween: 10,
        speed: 600,
        mousewheel: {
          forceToAxis: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        grid: false,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        breakpoints: {
          601: {
            spaceBetween: 20,
            slidesPerView: 2,
            grid: {
              rows: 2,
            },
          }
        },
      });

      var tenants__slider = new Swiper(".tenants__slider-init", {
        spaceBetween: 10,
        slidesPerView: "auto",
        speed: 600,
        mousewheel: {
          forceToAxis: true,
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".tenants__slider-next",
          prevEl: ".tenants__slider-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          601: {
            spaceBetween: 10,
            slidesPerView: 2,
            pagination: {
              el: ".swiper-pagination",
            },
          },
          769: {
            spaceBetween: 20,
            slidesPerView: 3,
            pagination: false,
          },
          1441: {
            spaceBetween: 20,
            slidesPerView: 4,
            pagination: false,
          }
        },
      });

      var path__slider = new Swiper(".path__slider-init", {
        slidesPerView: 1.65,
        spaceBetween: 108,
        speed: 600,
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: ".path__slider-next",
          prevEl: ".path__slider-prev",
        },
        breakpoints: {
          601: {
            slidesPerView: 2,
            spaceBetween: 108,
          },
          769: {
            slidesPerView: 3,
            spaceBetween: 108,
          },
          1201: {
            slidesPerView: 3,
            spaceBetween: 233,
          }
        },
      });

      var case__thumbs = new Swiper(".case__thumbs-init", {
        mousewheel: false,
        slidesPerView: 1,
        allowTouchMove: true,
        noSwiping: true,
        freeMode: true,
        watchSlidesProgress: true,
        loop: true,
        speed: 600,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: false,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
      });

      var case__slider = new Swiper(".case__slider-init", {
        slidesPerView: 1,
        grabCursor: true,
        speed: 600,
        effect: "creative",
        // effect: "fade",
        loop: true,
        navigation: {
          nextEl: ".case__slider-next",
          prevEl: ".case__slider-prev",
        },
        thumbs: {
          swiper: case__thumbs,
        },
      });

      var adv__thumbs = new Swiper(".adv__thumbs-init", {
        allowPageScroll: "vertical",
        mousewheel: false,
        slidesPerView: 1,
        watchSlidesProgress: true,
      });

      var adv__slider = new Swiper(".adv__slider-init", {
        grabCursor: true,
        speed: 600,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        thumbs: {
          swiper: adv__thumbs,
        },
      });
    }

    // Initialize Swiper on page load
    window.onload = initSwiper;


    /**
     * Управляет переключением вкладок на странице.
     * Добавляет и удаляет классы активности для кнопок и панелей вкладок.
     * Поддерживает вложенные табы любой глубины и сохраняет активное состояние у вложенных табов при переключении внешних.
     */
    function tabsFunc() {
      document.querySelectorAll('.tabs').forEach((tabsContainer) => {
        tabsContainer.addEventListener('click', (event) => {
          const tabsBtn = event.target.closest('.tabs__btn');
          if (!tabsBtn || !tabsContainer.contains(tabsBtn)) return;

          // Останавливаем всплытие, чтобы вложенные табы не влияли на родительские
          event.stopPropagation();

          // Ищем ближайший контейнер, к которому принадлежит нажатая кнопка
          const currentTabsContainer = tabsBtn.closest('.tabs');
          if (!currentTabsContainer) return;

          // Сбрасываем активные состояния кнопок и панелей только внутри текущего уровня
          const tabsBtns = Array.from(currentTabsContainer.querySelectorAll('.tabs__btn'));
          const tabsPanels = Array.from(currentTabsContainer.querySelectorAll('.tabs__item'));

          tabsBtns.forEach((btn) => {
            if (btn.closest('.tabs') === currentTabsContainer) {
              btn.classList.remove('tabs-active');
            }
          });

          tabsPanels.forEach((panel) => {
            if (panel.closest('.tabs') === currentTabsContainer) {
              panel.classList.remove('tabs-active');
            }
          });

          // Устанавливаем активное состояние для выбранной вкладки
          tabsBtn.classList.add('tabs-active');
          const targetPanel = currentTabsContainer.querySelector(
            `.tabs__item[data-tab="${tabsBtn.dataset.tab}"]`,
          );
          if (targetPanel) {
            /* HACK */
            targetPanel.classList.add('tabs-active');
          }
        });
      });
    };

    tabsFunc();

    function accordionFunc() {
      var accordionHead = document.querySelectorAll('.accordion'),
        accordionActive = document.getElementsByClassName('active');

      Array.from(accordionHead).forEach(function (accordionItem, i, accordionHead) {
        accordionItem.addEventListener('click', function (e) {
          if (accordionActive.length > 0 && accordionActive[0] !== this) {
            accordionActive[0].classList.remove('active');
          }
          this.classList.toggle('active');
        });
      });
    }

    accordionFunc();

    /**
     * Инициализация Lenis и ScrollTrigger
     */
    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis({
      anchors: {
        offset: 100,
        onComplete: () => {
          console.log('scrolled to anchor')
        }
      }
    });

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);

  });
})();