(() => {
  document.addEventListener('DOMContentLoaded', () => {

    const hero__slider = new Swiper(".hero__slider-init", {
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

    const feat__slider = new Swiper(".feat__slider-init", {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 10,
      speed: 600,
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

    const tenants__slider = new Swiper(".tenants__slider-init", {
      spaceBetween: 10,
      slidesPerView: "auto",
      slidesPerGroup: 1,
      speed: 600,
      grabCursor: true,
      loop: true,
      mousewheel: {
        forceToAxis: true,
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

    const path__slider = new Swiper(".path__slider-init", {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      speed: 600,
      touchEventsTarget: true,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: ".path__slider-next",
        prevEl: ".path__slider-prev",
      },
      breakpoints: {
        769: {
          slidesPerView: 2.63,
        },
        1201: {
          slidesPerView: 2.63,
        }
      },
      on: {

        transitionEnd: function (swiper) {

          const slides = swiper.slides;

          if (swiper.isEnd) {

            const lastSlide = slides[slides.length - 3];
            lastSlide.classList.add('swiper-slide-active');

            if (slides.length > 1) {
              const preLasSlide = slides[slides.length - 4];
              preLasSlide.classList.remove('swiper-slide-active');
            }

          }
        }
      }
    });

    const review__slider = new Swiper(".review__slider-init", {
      slidesPerView: 1,
      slidesPerGroup: 1,
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
        361: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
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

    const projects__slider = new Swiper(".projects__slider-init", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
      speed: 600,
      // grabCursor: true,
      touchEventsTarget: true,
      loop: true,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: ".projects__slider-next",
        prevEl: ".projects__slider-prev",
      },
      breakpoints: {
        361: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        601: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        769: {
          slidesPerView: 2.63,
          spaceBetween: 0,
          // spaceBetween: 108,
        },
        1201: {
          slidesPerView: 2.63,
          spaceBetween: 0,
          // spaceBetween: 233,
        }
      },
    });

    const case__head = new Swiper(".case__head-slider", {
      spaceBetween: 200,
      slidesPerView: 1,
      // grabCursor: true,
      speed: 600,
      loop: true,
      grabCursor: false,
      mousewheel: false,
      // mousewheel: {
      //   forceToAxis: true,
      // },
    });

    const case__body = new Swiper(".case__body-slider", {
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
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });

    const case__foot = new Swiper(".case__foot-slider", {
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

    const advan__slider = new Swiper(".advan__slider-init", {
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

    const create_f__slider = new Swiper(".create_f__slider-init", {
      slidesPerView: "auto",
      spaceBetween: 20,
      speed: 600,
      grabCursor: true,
      mousewheel: {
        forceToAxis: true,
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      grid: false,
      breakpoints: {
        769: {
          spaceBetween: 20,
          slidesPerView: 3,
          grid: {
            rows: 2,
          },
        }
      },
    });

    const objects__slider = new Swiper(".objects__slider-init", {
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 600,
      grabCursor: true,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: ".objects__slider-next",
        prevEl: ".objects__slider-prev",
      },
      breakpoints: {
        381: {
          slidesPerView: 2,
          spaceBetween: 10,
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

    const objects_s__slider = new Swiper(".objects-s__slider", {
      slidesPerView: 1,
      grabCursor: true,
      speed: 600,
      loop: true,
      mousewheel: {
        forceToAxis: true,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: false
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".case__slider-next",
        prevEl: ".case__slider-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
        offset: -100,
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

        // if (menu.classList.contains('mobile-menu--opened')) {
        //   lenis.stop();
        // } else {
        //   lenis.start();
        // }

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
        // lenis.start();
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
    // if (document.querySelectorAll('.dropdown__block')) {
    //   document.querySelectorAll('.dropdown__block').forEach(function (dropDownWrapper) {
    //     const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    //     const dropDownBtnText = dropDownWrapper.querySelector('.dropdown__button-text');
    //     const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    //     const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    //     const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

    //     dropDownBtn.addEventListener('click', function (e) {
    //       dropDownList.classList.toggle('dropdown__list--visible');
    //       this.classList.add('dropdown__button--active');
    //     });

    //     dropDownListItems.forEach(function (listItem) {
    //       listItem.addEventListener('click', function (e) {
    //         e.stopPropagation();
    //         dropDownBtnText.innerHTML = this.innerHTML;
    //         dropDownBtn.dataset.value = this.dataset.value;
    //         dropDownBtn.focus();
    //         dropDownBtn.click();
    //         dropDownInput.value = this.dataset.value;
    //         dropDownList.classList.remove('dropdown__list--visible');
    //       });
    //     });

    //     document.addEventListener('click', function (e) {
    //       if (e.target !== dropDownBtn) {
    //         dropDownBtn.classList.remove('dropdown__button--active');
    //         dropDownList.classList.remove('dropdown__list--visible');
    //       }
    //     });

    //     document.addEventListener('keydown', function (e) {
    //       if (e.key === 'Tab' || e.key === 'Escape') {
    //         dropDownBtn.classList.remove('dropdown__button--active');
    //         dropDownList.classList.remove('dropdown__list--visible');
    //       }
    //     });
    //   });
    // }



    /**
     * Присвоение fixed класса шапке при скролле
     */
    // addEventListener('scroll', function () {
    //   const scrollPosition = window.scrollY;
    //   const head = this.document.querySelector('.head');

    //   // if (scrollPosition > 1 && scrollPosition !== 1) {
    //   if (scrollPosition > 230 && scrollPosition !== 230) {
    //     head.classList.add('fixed');
    //   } else {
    //     head.classList.remove('fixed');
    //   }
    // });







    /**
     * Скрытие шапки при скролле вниз и появление при скролле вверх.
     * Добавление класса out для смены стиля шапки при скролле.
     */
    function headerFunc() {
      const header = document.querySelector('.head');
      const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

      window.addEventListener('scroll', () => {
        if (scrollPosition() > 300) {
          header.classList.add('out');
        } else {
          header.classList.remove('out');
        }

        if (scrollPosition() > 700) {
          header.classList.add('change');
        } else {
          header.classList.remove('change');
        }
      })
    }
    headerFunc();



    let dropdowns = document.querySelectorAll('.dropdown--js');
    dropdowns.forEach(dropdown => {

      function updateSelected() {
        let selectedValue = dropdown.querySelector('.dropdown__value');
        let selectedOption = document.querySelector('.dropdown__radio:checked');
        let selectedLabel = selectedOption.parentElement.querySelector('.dropdown__label');
        let text = selectedLabel.textContent;
        let selectedDropdown = dropdown.querySelector('.dropdown__selected--js');
        selectedDropdown.querySelector('span').textContent = text;
        selectedValue.dataset.value = text;
      }

      function toggleClass(el, className, add) {
        let addClass = add;
        if (typeof addClass === 'undefined') {
          addClass = !el.classList.contains(className);
        }
        if (addClass) {
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
      }

      let radios = dropdown.querySelectorAll('.dropdown__radio');
      let root = dropdown;

      for (let i = 0; i < radios.length; ++i) {
        let radio = radios[i];
        radio.addEventListener('change', function () {
          updateSelected();
        });
        radio.addEventListener('click', function () {
          toggleClass(root, 'is-active', false);
        });
      }

      let selectedLabel = dropdown.querySelector('.dropdown__selected--js');
      selectedLabel.addEventListener('click', function () {
        toggleClass(root, 'is-active');
      });
      // updateSelected();
    });



    /**
     * Инициализация mixitup
     */
    if (document.querySelector('.other-mix')) {
      var mixer = mixitup('.other-mix', {
        animation: {
          duration: 600,
          effects: 'stagger(3ms) fade scale(0.4)',
          easing: 'linear'
        },
        load: {
          filter: '.mix-1'
        }
      });
    }

    if (document.querySelector('.vacancy-mix')) {
      var mixerVacancy = mixitup('.vacancy-mix', {
        animation: {
          duration: 600,
          effects: 'stagger(3ms) fade scale(0.4)',
          easing: 'linear'
        },
        load: {
          filter: 'all'
        }
      });
    }


    /**
     * Кнопка куки
     */

    if (('; ' + document.cookie).split(`; COOKIE_ACCEPT=`).pop().split(';')[0] !== '1') {
      const cookiesNotify = document.getElementById('warning-plate');

      if (cookiesNotify) {
        cookiesNotify.style.display = 'block';
      }
    }
    // document.getElementById('warning-btn').addEventListener('click', event => {
    //   document.getElementById('warning-plate').style.display = 'none';
    // });



    const presentation = document.getElementById('presentation');
    const stageItems = document.querySelectorAll('.stage__item');

    window.addEventListener('resize', function () {
      if (this.window.innerWidth >= 769) {
        presentation.setAttribute('href', './documents/Империя презентация.pdf');
        presentation.setAttribute('download', './documents/Империя презентация.pdf');

        stageItems.forEach(stageElem => {
          stageElem.classList.remove('accordion');
        });
      } else {
        presentation.setAttribute('href', './documents/Империя.pdf');
        presentation.setAttribute('download', './documents/Империя.pdf');

        stageItems.forEach(stageElem => {
          stageElem.classList.add('accordion');
        });
      }
    }, true);

    if ((this.window.innerWidth <= 768) || (~['Android', 'iPhone',
      'iPod', 'iPad', 'BlackBerry'].indexOf(navigator.platform))) {
      presentation.setAttribute('href', './documents/Империя.pdf');
      presentation.setAttribute('download', './documents/Империя.pdf');

      stageItems.forEach(stageElem => {
        stageElem.classList.add('accordion');
      });
    }

    /**
     * Geo
     */
    if (document.querySelector('.geo__item')) {
      var geo = document.querySelectorAll('.geo__item'),
        geoBlock = document.querySelector('.geo__block'),
        geoActive = document.getElementsByClassName('geo__active');

      Array.from(geo).forEach(function (geoItem, i, geo) {
        geoItem.addEventListener('click', function (e) {
          if (geoActive.length > 0 && geoActive[0] !== this) {
            geoActive[0].classList.remove('geo__active');
          }
          this.classList.toggle('geo__active');
          geoBlock.classList.add('show');

          if (window.innerWidth < 601) {
            lenis.stop();
          }

          let geo__close = document.querySelector('.geo__block-close');
          geo__close.addEventListener('click', function () {
            geoBlock.classList.remove('show');

            if (window.innerWidth < 601) {
              lenis.start();
            }

            if (geoActive.length > 0 && geoActive[0] !== this) {
              geoActive[0].classList.remove('geo__active');
            }
          });

          e.stopPropagation();
          document.getElementById('geo-img').setAttribute('src', this.dataset.img);
          document.getElementById('geo-name').innerText = this.dataset.name;
          document.getElementById('geo-address').innerText = this.dataset.address;
          document.getElementById('geo-year').innerText = this.dataset.year;
          document.getElementById('geo-square').innerText = this.dataset.square;
        });
      });
    }

    $(document).on('mouseup', function (e) { // При нажатии на документ
      let s = $('.geo__block.show'); // берём .geo__block.show
      if (!s.is(e.target) && s.has(e.target).length === 0) {
        // Если нажат не он и не его дочернии И сам он существует
        s.removeClass('show'); // То удаляем у него класс .show

        if (window.innerWidth < 601) {
          lenis.start();
        }
      }
    });



    /**
     * Инициализация TransferElements
     */
    if (document.querySelector('.transfer-pos-1')) {

      new TransferElements(
        {
          sourceElement: document.querySelector('.transfer-elem-1'),
          breakpoints: {
            600: {
              targetElement: document.querySelector('.transfer-pos-1')
            }
          },
        }
      );
      new TransferElements(
        {
          sourceElement: document.querySelector('.transfer-elem-2'),
          breakpoints: {
            600: {
              targetElement: document.querySelector('.transfer-pos-1')
            }
          }
        }
      );
    }



    /**
     *  Copyboard
     */
    const copyButton = document.querySelector("#copyButton");
    if (copyButton) {
      copyButton.addEventListener("click", function () {
        navigator.clipboard.writeText(document.querySelector("#copyContent").innerText).then(function () {
          console.log('Text copied to clipboard');
        }).catch(function (error) {
          console.error('Error:', error);
        });
      });
    }



    accordionFunc();



    /* Анимация */
    gsap.registerPlugin(ScrollTrigger);

    const titleChars = document.querySelectorAll('[data-splitting="chars"]');
    titleChars.forEach(titleChar => {
      const char = new SplitType(titleChar, { types: 'words, chars' });
    });

    const titleWords = document.querySelectorAll('[data-splitting="words"]');
    titleWords.forEach(titleWord => {
      const word = new SplitType(titleWord, { types: 'words, words' });
    });

    const fadeLeftToRightContainers = document.querySelectorAll('[data-animation="fadeLeftToRightAnim"]');
    fadeLeftToRightContainers.forEach(fadeLeftToRightContainer => {
      const tl = gsap.timeline({
        paused: true
      });
      tl.from(fadeLeftToRightContainer, {
        opacity: 1,
        width: "15%",
        duration: .8,
        ease: "power1.out",
        stagger: {
          amount: .8
        }
      });
      scrollTriggerPlayer(fadeLeftToRightContainer, tl)
    });

    const fadeLongToWidthContainers = document.querySelectorAll('[data-animation="fadeLongToWidth"]');
    fadeLongToWidthContainers.forEach(fadeLongToWidthContainer => {
      const tl = gsap.timeline({
        paused: true
      });
      tl.from(fadeLongToWidthContainer, {
        opacity: 1,
        width: "120%",
        x: -120,
        duration: .8,
        ease: "power1.out",
        stagger: {
          amount: .8
        }
      });
      scrollTriggerPlayer(fadeLongToWidthContainer, tl)
    });

    const fadeLongToShortContainers = document.querySelectorAll('[data-animation="fadeLongToShort"]');
    fadeLongToShortContainers.forEach(fadeLongToShortContainer => {
      const tl = gsap.timeline({
        paused: true
      });
      tl.from(fadeLongToShortContainer, {
        opacity: 1,
        width: "100%",
        duration: .8,
        ease: "power1.out",
        stagger: {
          amount: .8
        }
      });
      scrollTriggerPlayer(fadeLongToShortContainer, tl)
    });

    const parallaxContainers = document.querySelectorAll('[data-animation="parallax"]');
    parallaxContainers.forEach(parallaxContainer => {
      gsap.fromTo(parallaxContainer, {
        y: "0%"
      }, {
        y: "15%",
        scrollTrigger: {
          trigger: parallaxContainer,
          start: "top 60%",
          end: "bottom top",
          scrub: true
        }
      })
    });

    const fadeInItems = document.querySelectorAll('[data-animation="fadeIn"]');
    fadeInItems.forEach(fadeInItem => {
      const chars = fadeInItem.querySelectorAll("div.char");
      const tl = gsap.timeline({
        paused: true
      });
      tl.from(chars, {
        opacity: 0,
        duration: .3,
        ease: "power1.out",
        stagger: {
          amount: .8
        }
      });
      scrollTriggerPlayer(fadeInItem, tl)
    });

    const revealItems = document.querySelectorAll('[data-animation="reveal"]');
    revealItems.forEach(revealItem => {
      const word = revealItem.querySelectorAll("div.word");
      const tl = gsap.timeline({
        paused: true
      });
      tl.from(word, {
        opacity: 0,
        y: "10",
        duration: .4,
        ease: "power1.out",
        stagger: {
          amount: .6
        }
      });
      scrollTriggerPlayer(revealItem, tl)
    });

    const fadeUpItems = document.querySelectorAll('[data-animation="fadeUp"]');
    fadeUpItems.forEach(fadeUpItem => {
      const tl = gsap.timeline({
        paused: true
      });
      tl.from(fadeUpItem, {
        opacity: 0,
        y: "80",
        duration: .8,
        ease: "power1.out",
        stagger: {
          amount: .8
        }
      });
      scrollTriggerPlayer(fadeUpItem, tl)
    });

    const fadeDownItems = document.querySelectorAll('[data-animation="fadeDown"]');
    fadeDownItems.forEach(fadeDownItem => {
      const tl = gsap.timeline({
        paused: true
      });
      tl.from(fadeDownItem, {
        opacity: 0,
        y: "40",
        duration: .8,
        ease: "power1.out",
        stagger: {
          amount: .8
        }
      });
      scrollTriggerPlayer(fadeDownItem, tl, "top 60%")
    });

    const fadeLeftToRightItems = document.querySelectorAll('[data-animation="fadeLeftToRight"]');
    fadeLeftToRightItems.forEach(parentItem => {
      const items = parentItem.querySelectorAll(".item--animation");
      const tl = gsap.timeline({
        paused: true
      });
      const staggerAmount = items.length < 5 ? .8 : 1.2;
      tl.from(items, {
        opacity: 0,
        y: 10,
        duration: .3,
        ease: "power1.in",
        stagger: {
          amount: staggerAmount
        }
      });
      scrollTriggerPlayer(parentItem, tl)
    });

    const fadeBottomToTopItems = document.querySelectorAll('[data-animation="fadeBottomToTop"]');
    fadeBottomToTopItems.forEach(parentItem => {
      const items = parentItem.querySelectorAll(".item--animation");
      const tl = gsap.timeline({
        paused: true
      });
      const staggerAmount = items.length < 5 ? .8 : 1.2;
      tl.from(items, {
        opacity: 0,
        y: 30,
        duration: .3,
        ease: "power1.in",
        stagger: {
          amount: staggerAmount
        }
      });
      scrollTriggerPlayer(parentItem, tl)
    });

    const cropDownItems = document.querySelectorAll('[data-animation="cropDown"]');
    cropDownItems.forEach(cropDownItem => {
      const image = cropDownItem.querySelector("img");
      const tl = gsap.timeline({
        paused: true
      });
      tl.from(image, {
        height: 0,
        duration: 1.2,
        ease: "expoScale"
      });
      scrollTriggerPlayer(cropDownItem, tl, "top 60%")
    });

    const advanItems = document.querySelectorAll('.advan__thumbs-item');
    advanItems.forEach(advanItem => {
      const tl = gsap.timeline({
        paused: true
      });
      tl.from(advanItem, {
        opacity: 0,
        x: -50,
        duration: .8,
        ease: "power1.out",
        stagger: {
          amount: .8
        }
      });
      scrollTriggerPlayer(advanItem, tl)
    });

    const serviceRedItems = document.querySelectorAll('.service__block.red');
    serviceRedItems.forEach(serviceRedItem => {
      const serviceRedItemInner = serviceRedItem.querySelector(".service__item");
      const tl = gsap.timeline({
        paused: true
      });
      tl.from(serviceRedItemInner, {
        opacity: 1,
        x: 50,
        duration: .8,
        ease: "power1.out",
        stagger: {
          amount: .8
        }
      });
      scrollTriggerPlayer(serviceRedItemInner, tl)
    });

    const serviceYellowItems = document.querySelectorAll('.service__block.yellow');
    serviceYellowItems.forEach(serviceYellowItem => {
      const serviceYellowItemInner = serviceYellowItem.querySelector(".service__item");
      const tl = gsap.timeline({
        paused: true
      });
      tl.from(serviceYellowItemInner, {
        opacity: 1,
        x: -50,
        duration: .8,
        ease: "power1.out",
        stagger: {
          amount: .8
        }
      });
      scrollTriggerPlayer(serviceYellowItemInner, tl)
    });

    function scrollTriggerPlayer(triggerElement, timeline, onEnterStart = "top 85%") {
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        onLeaveBack: () => {
          timeline.progress(1);
          timeline.pause()
        }
      });
      ScrollTrigger.create({
        trigger: triggerElement,
        start: onEnterStart,
        onEnter: () => timeline.play()
      })
    }

    

    /**
     * Инициализация Fancybox
     */
    if (document.querySelector('.fancybox')) {
      Fancybox.bind('[data-fancybox="gallery"]', {
        // Your custom options
      });
    }

  });
})();


function checkCookies() {
  document.cookie = 'COOKIE_ACCEPT=1;path=\'/\';expires:' + (new Date(new Date().getTime() + 86400e3 * 365).toUTCString());
  document.getElementById('warning-plate').remove();
}