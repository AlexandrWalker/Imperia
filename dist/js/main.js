(() => {
  document.addEventListener('DOMContentLoaded', () => {

    var hero__slider = new Swiper(".hero__slider-init", {
      spaceBetween: 30,
      slidesPerView: 1,
      centeredSlides: true,
      grabCursor: true,
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
        clickable: true,
      },
    });

    var feat__slider = new Swiper(".feat__slider-init", {
      slidesPerView: "auto",
      spaceBetween: 10,
      speed: 600,
      freeMode: true,
      grabCursor: true,
      mousewheel: {
        forceToAxis: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
      grabCursor: true,
      loop: true,
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
        clickable: true,
      },
      breakpoints: {
        601: {
          spaceBetween: 10,
          slidesPerView: 2,
        },
        769: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
        1441: {
          spaceBetween: 20,
          slidesPerView: 4,
        }
      },
    });

    var path__slider = new Swiper(".path__slider-init", {
      slidesPerView: 1.65,
      spaceBetween: 108,
      speed: 600,
      grabCursor: true,
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

    var review__slider = new Swiper(".review__slider-init", {
      slidesPerView: 1.5,
      spaceBetween: 10,
      speed: 600,
      grabCursor: true,
      loop: true,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: ".review__slider-next",
        prevEl: ".review__slider-prev",
      },
      breakpoints: {
        601: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1201: {
          slidesPerView: 4,
          spaceBetween: 20,
        }
      },
    });

    var projects__slider = new Swiper(".projects__slider-init", {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 600,
      grabCursor: true,
      loop: true,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: ".projects__slider-next",
        prevEl: ".projects__slider-prev",
      },
      breakpoints: {
        601: {
          slidesPerView: 2,
          spaceBetween: 20,
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

    var case__head = new Swiper(".case__head-slider", {
      spaceBetween: 200,
      slidesPerView: 1,
      grabCursor: true,
      speed: 600,
      loop: true,
      mousewheel: {
        forceToAxis: true,
      },
    });

    var case__body = new Swiper(".case__body-slider", {
      slidesPerView: 1,
      grabCursor: true,
      speed: 1200,
      loop: true,
      effect: "fade",
      navigation: {
        nextEl: ".case__slider-next",
        prevEl: ".case__slider-prev",
      },
      mousewheel: {
        forceToAxis: true,
      },
    });

    var case__foot = new Swiper(".case__foot-slider", {
      spaceBetween: 500,
      slidesPerView: 1,
      grabCursor: false,
      speed: 600,
      loop: true,
      mousewheel: false,
    });

    case__head.controller.control = [case__body, case__foot];
    case__body.controller.control = [case__head, case__foot];

    var advan__thumbs = new Swiper(".advan__thumbs-init", {
      slidesPerView: 1,
      slidesPerGroup: "auto",
      allowPageScroll: "vertical",
      mousewheel: false,
      watchSlidesProgress: true,
    });

    var advan__slider = new Swiper(".advan__slider-init", {
      grabCursor: false,
      mousewheel: false,
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
        swiper: advan__thumbs,
      },
    });

    function accordionFunc() {
      var accordionHead = document.querySelectorAll('.accordion'),
        accordionActive = document.getElementsByClassName('active');

      Array.from(accordionHead).forEach(function (accordionItem, i, accordionHead) {
        accordionItem.addEventListener('click', function (e) {
          if (this.parentNode.dataset.skip) {
            this.classList.toggle('active');
            return;
          }

          if (accordionActive.length > 0 && accordionActive[0] !== this) {
            accordionActive[0].classList.remove('active');
          }
          this.classList.toggle('active');
        });
      });
    }

    accordionFunc();



    /**
     * Управляет переключением кнопки Подробнее.
     * Добавляет и удаляет классы активности для кнопок Подробнее.
     */
    // function moreFunc() {

    //   document.querySelectorAll('.container').forEach((more) => {
    //     more.addEventListener('click', (events) => {
    //       const moreLink = events.target.closest('.link-more');
    //       if (!moreLink || !more.contains(moreLink)) return;

    //       events.stopPropagation();

    //       // Ищем ближайший контейнер, к которому принадлежит нажатая кнопка
    //       const currentContainer = moreLink.closest('.container');
    //       if (!currentContainer) return;

    //       // Сбрасываем активные состояния кнопок
    //       const moreLinks = Array.from(currentContainer.querySelectorAll('.link-more'));

    //       moreLinks.forEach((links) => {
    //         if (links.closest('.container') === currentContainer) {
    //           links.parentNode.classList.toggle('link-more--active');
    //         }
    //       });

    //     });
    //   });
    // };

    // moreFunc();

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



    /**
     * Активация любого количества модальных окон
     */
    function modalFunc() {
      var modal__btn = document.querySelector('.modal__btn');

      if (!modal__btn) {
        return;
      } else {

        var close = document.querySelectorAll('.modal__close-btn');
        var openBtn = document.querySelectorAll('.modal__btn');

        Array.from(openBtn, openButton => {
          openButton.addEventListener('click', e => {

            let open = document.getElementsByClassName('open');

            if (open.length > 0 && open[0] !== this) {
              open[0].classList.remove('open');
            }

            let modalId = e.target.getAttribute('data-id');
            console.log(modalId);
            if (modalId) {
              document.getElementById(modalId).classList.add('open');
              lenis.stop();
            } else {
              return
            }

            let modalTitle = e.target.getAttribute('data-title');
            if (modalTitle) {
              document.getElementById("modal-title").innerHTML = modalTitle;
            }

            let modalText = e.target.getAttribute('data-text');
            if (modalText) {
              document.getElementById("modal-text").innerHTML = modalText;
            }

            Array.from(close, closeButton => {
              closeButton.addEventListener('click', e => {
                document.getElementById(modalId).classList.remove("open");
                lenis.start();
              });

              window.addEventListener('keydown', (e) => {
                if (e.key === "Escape") {
                  document.getElementById(modalId).classList.remove("open")
                  lenis.start();
                }
              });

              document.querySelector(".modal.open .modal__box").addEventListener('click', event => {
                event._isClickWithInModal = true;
              });

              document.getElementById(modalId).addEventListener('click', event => {
                if (event._isClickWithInModal) return;
                event.currentTarget.classList.remove('open');
                lenis.start();
              });
            });
          });
        });
      }
    };

    modalFunc();



    /**
     * Управляет поведением меню-бургера.
     */
    function burgerNav() {
      const burger = document.querySelector('.burger');
      const burgerText = document.querySelector('.burger__text');
      const menu = document.getElementById('mobile-menu');
      const elements = document.querySelectorAll('.menu__list-link');
      const head = document.querySelector('.head');

      /**
       * Переключает видимость меню.
       */
      const toggleMenu = () => {
        const isOpened = burger.classList.toggle('burger--opened');
        menu.classList.toggle('mobile-menu--opened', isOpened);
        document.body.classList.toggle('no-scroll');
        head.classList.toggle('head--active');

        if (burger.classList[1]) {
          burgerText.innerHTML = 'Закрыть';
        } else {
          burgerText.innerHTML = 'Меню';
        }
      };


      /**
       * Закрывает меню.
       */
      const closeMenu = () => {
        burger.classList.remove('burger--opened');
        menu.classList.remove('mobile-menu--opened');
        document.body.classList.remove('no-scroll');
      };

      // Открытие/закрытие меню по клику на бургер
      burger.addEventListener('click', toggleMenu);

      // Закрытие меню по клику на пункты меню
      elements.forEach((element) => element.addEventListener('click', closeMenu));
    };

    burgerNav();



    /**
     * Установка dropdown
     */
    if (document.querySelectorAll('.dropdown')) {
      document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
        const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
        const dropDownBtnText = dropDownWrapper.querySelector('.dropdown__button-text');
        const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
        const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
        const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

        dropDownBtn.addEventListener('click', function (e) {
          dropDownList.classList.toggle('dropdown__list--visible');
          this.classList.add('dropdown__button--active');
        });

        dropDownListItems.forEach(function (listItem) {
          listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownBtnText.innerHTML = this.innerHTML;
            dropDownBtn.dataset.value = this.dataset.value;
            dropDownBtn.focus();
            dropDownBtn.click();
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('dropdown__list--visible');
          });
        });

        document.addEventListener('click', function (e) {
          if (e.target !== dropDownBtn) {
            dropDownBtn.classList.remove('dropdown__button--active');
            dropDownList.classList.remove('dropdown__list--visible');
          }
        });

        document.addEventListener('keydown', function (e) {
          if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownBtn.classList.remove('dropdown__button--active');
            dropDownList.classList.remove('dropdown__list--visible');
          }
        });
      });
    }



    /**
     * Присвоение fixed класса шапке при скролле
     */
    addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      const head = this.document.querySelector('.head');

      if (scrollPosition > 1 && scrollPosition !== 1) {
        head.classList.add('fixed');
      } else {
        head.classList.remove('fixed');
      }
    });



    /**
     * Инициализация mixitup
     */
    if (document.querySelector('.mix')) {
      var mixer = mixitup('.tabs__items', {
        animation: {
          duration: 500,
          effects: 'stagger(3ms) fade scale(0.4)',
          easing: 'ease'
        },
        load: {
          filter: '.mix-1'
        }
      });
    }



    document.getElementById('warning-btn').addEventListener('click', event => {
      document.getElementById('warning-plate').style.display = 'none';
    });

    const presentation = document.getElementById('presentation');

    window.addEventListener('resize', function (event) {
      if (this.window.innerWidth >= 769) {
        presentation.setAttribute('href', './documents/Империя презентация.pdf');
        presentation.setAttribute('download', './documents/Империя презентация.pdf');
      } else {
        presentation.setAttribute('href', './documents/Империя.pdf');
        presentation.setAttribute('download', './documents/Империя.pdf');
      }
    }, true);



    /**
     * Vue
     */
    var geo = document.querySelectorAll('.geo__item'),
      geoActive = document.getElementsByClassName('geo__active');

    Array.from(geo).forEach(function (geoItem, i, geo) {
      geoItem.addEventListener('click', function (e) {
        if (geoActive.length > 0 && geoActive[0] !== this) {
          geoActive[0].classList.remove('geo__active');
        }
        this.classList.toggle('geo__active');

        e.stopPropagation();
        document.getElementById('geo-img').setAttribute('src', this.dataset.img);
        document.getElementById('geo-name').innerText = this.dataset.name;
        document.getElementById('geo-address').innerText = this.dataset.address;
        document.getElementById('geo-year').innerText = this.dataset.year;
        document.getElementById('geo-square').innerText = this.dataset.square;
      });
    });



    /**
     * Инициализация Fancybox
     */
    Fancybox.bind('[data-fancybox="gallery"]', {
      // Your custom options
    });

  });
})();