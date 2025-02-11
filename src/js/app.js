import "./modules/filter.js";

//< Товар>
function productAdd() {
  const items = document.querySelectorAll(".add-pc");
  if (items)
    for (const item of items) {
      const btn = item.querySelector(".prod-cart__add");
      if (btn) btn.addEventListener("click", () => item.classList.add("in"));
    }
}
function productAddBasket(blocks, btnHtml) {
  const items = document.querySelectorAll(blocks);
  if (items)
    for (const item of items) {
      if (document.querySelector(btnHtml)) item.querySelector(btnHtml).addEventListener("click", () => item.classList.add("in"));
    }
}

function quantity() {
  const blocks = document.querySelectorAll(".quantity");
  if (blocks)
    for (const block of blocks) {
      const btnMinus = block.querySelector(".quantity__btn_minus"),
        btnPlus = block.querySelector(".quantity__btn_plus");

      btnMinus.addEventListener("click", () => {
        const input = block.querySelector(".quantity__input");
        let count = +input.value;

        if (count === 1) {
          return;
        } else {
          count--;
          input.value = count;
        }
      });
      btnPlus.addEventListener("click", () => {
        const input = block.querySelector(".quantity__input");
        let count = +input.value;
        count++;
        input.value = count;
      });
    }
}

//</Товар>

//<header>
function search() {
  const blocks = document.querySelectorAll(".search-head");
  if (blocks) {
    for (const body of blocks) {
      const input = body.querySelector(".search-head__input"),
        btnClear = body.querySelector(".search-head__clear");
      input.addEventListener("focus", () => body.classList.add("_focus"));
      input.addEventListener("input", () => (input.value.length ? body.classList.add("_clear") : body.classList.remove("_clear")));
      input.addEventListener("blur", () => (input.value.length ? body.classList.add("_focus") : body.classList.remove("_focus")));
      btnClear.addEventListener("click", () => {
        input.value = "";
        body.classList.remove("_clear");
        input.focus();
      });
    }
  }
}

function rating() {
  const blocks = document.querySelectorAll("._rating");
  if (blocks)
    for (const block of blocks) {
      const numData = block.dataset.value,
        num = block?.querySelector("._rating_num"),
        valImg = block.querySelector("._rating_value");

      valImg.style.width = Math.floor((100 * +numData) / 5) + "%";
      if (num) num.textContent = numData.replace(".", ",");
    }
}

function timeJobs() {
  const el = document.querySelector(".fb-head__time .fb-head__icon");
  if (el) {
    const dataHours = new Date().getHours();
    9 >= dataHours <= 22 ? el.classList.add("job") : el.classList.remove("job");
  }
}
function modalFb() {
  const el = document.querySelector(".fb-head ");
  if (el) {
    el.querySelector(".fb-head__phone").addEventListener("click", () => el.classList.toggle("active"));
    document.addEventListener("click", (e) => (!e.target.closest(".fb-head") ? el.classList.remove("active") : ""));
  }
}

function dropMenuHeader() {
  const items = document.querySelectorAll(".menu-head__item_center");
  if (items) {
    for (const item of items) {
      const body = item?.querySelector(".menu-head__overlay");
      body.style.left = `-${(body.clientWidth - item.clientWidth) / 2}px`;
    }
  }
}

function burger() {
  const catalogListBtn = document.querySelectorAll(".menu-head__btn"),
    btnOpenBurger = document.querySelector(".openBurger"),
    burger = document.querySelector(".burger");
  if (catalogListBtn)
    for (const btn of catalogListBtn) {
      const body = btn.closest(".menu-head__item");
      btn.addEventListener("click", () => {
        body.classList.toggle("active");
      });
    }
  if (btnOpenBurger)
    btnOpenBurger.addEventListener("click", () => {
      btnOpenBurger.classList.toggle("_active");
      burger.classList.toggle("_active");

      btnOpenBurger.classList.contains("_active") ? bgAppend() : bgRemove();
    });
}

//</header>

//<Главная>

function dropAboutHome() {
  const btn = document.querySelector(".home-about__all"),
    desc = document.querySelector(".home-about__desc");
  if (desc)
    btn?.addEventListener("click", () => {
      desc.classList.add("in");
      btn.classList.add("hide");
    });
}

function dropPopularSize() {
  const btn = document.querySelector(".popular-size__btn"),
    columns = document.querySelectorAll(".popular-size__col");
  if (columns && btn) {
    columns.forEach((e, idx) => (idx > 3 ? e.classList.add("hide") : ""));

    btn.addEventListener("click", () => {
      columns.forEach((e) => e.classList.remove("hide"));
      btn.classList.add("hide");
    });
  }

  btn?.addEventListener("click", () => btn.classList.add("hide"));
}

function video() {
  const video = document.querySelector(".articles-block__source"),
    poster = document.querySelector(".articles-block__poster"),
    btn = document.querySelector(".articles-block__btn");
  if (video) {
    btn.addEventListener("click", () => {
      poster.classList.add("hide");
      btn.classList.add("hide");

      setTimeout(() => {
        video.play();
      }, 1000);
    });
    video.addEventListener("click", () => {
      video.pause();
      poster.classList.remove("hide");
      btn.classList.remove("hide");
    });
  }
}

function helpSeason() {
  const itemsSeason = document.querySelectorAll(".season-form__checkbox .help"),
    itemsOffersProducts = document.querySelectorAll(".prod-cart__offer.help");

  if (itemsSeason)
    for (const item of itemsSeason) {
      item.style.left = `-${(item.clientWidth - item.parentElement.clientWidth) / 2}px`;
    }
  if (itemsOffersProducts)
    for (const item of itemsOffersProducts) {
      const panel = item.querySelector(".help__text");

      panel.clientHeight > 25 ? panel.classList.add("row2") : panel.classList.add("row1");
    }
}

function filterHome() {
  const selects = document.querySelectorAll(".select-box");
  if (selects) {
    for (const select of selects) {
      const input = select.querySelector("input"),
        list = select.querySelectorAll("ul li");
      if (input) {
        input.addEventListener("focus", () => {
          selects.forEach((e) => e.classList.remove("active"));
          select.classList.add("active");
        });

        input.addEventListener("input", () => {
          selects.forEach((e) => e.classList.remove("active"));
          select.classList.add("active");
        });

        for (const item of list) {
          item.addEventListener("click", () => {
            if (!item.classList.contains("disabled")) {
              input.value = item.textContent;
              select.classList.remove("active");
            }

            list.forEach((e) => e.classList.remove("active"));
            item.classList.add("active");
          });
        }
        document.addEventListener("click", (e) => (!e.target.closest(".select-box__list") && !e.target.closest(".select-box__input") ? select.classList.remove("active") : ""));
      }
    }
  }
}
function filterHomeSportComplect() {
  const input = document.querySelector(".sport-checkbox");
  if (input) {
    toggleSportInput(input.checked);
    input.addEventListener("change", (e) => toggleSportInput(e.target.checked));
  }
}

function toggleSportInput(result) {
  const filterHomeItems = document.querySelectorAll(".sport-input");
  if (filterHomeItems) result ? filterHomeItems.forEach((e) => e.classList.add("show")) : filterHomeItems.forEach((e) => e.classList.remove("show"));

  const filterSport = document.querySelector(".filter-size");
  if (filterSport) result ? filterSport.classList.add("show") : filterSport.classList.remove("show");
}

function filterHoSeason(list, btnAll) {
  const inputs = document.querySelectorAll(list),
    allSeasonInput = document.getElementById(btnAll);
  if (inputs && allSeasonInput) {
    if (allSeasonInput.checked) inputs.forEach((e) => (e.checked = false));

    allSeasonInput.addEventListener("change", (e) => {
      if (allSeasonInput.checked) inputs.forEach((e) => (e.checked = false));
    });
    for (const input of inputs) {
      input.addEventListener("change", () => {
        if (input.checked) allSeasonInput.checked = false;
      });
    }
  }
}

function filterHomeAuto() {
  const btnSend = document.querySelector(".filter-auto_send");
  $(".box-form_auto").each(function (i) {
    $(this)
      .find(".select-custom")
      .on("select2:select", function (e) {
        // $('.filter-home__item_auto .box-form_auto')[i + 1].removeClass('disabled')
        if (i !== 3) document.querySelectorAll(".box-form_auto")[i + 1].classList.remove("disabled");
        if (i === 3) btnSend.removeAttribute("disabled");
      });
  });
}
//</Главная>

function footerDropPhone() {
  const btns = document.querySelectorAll(".footer__arr");
  if (btns)
    for (let i = 0; i < btns.length; i++) {
      const body = document.querySelectorAll(".footer__drop");
      btns[i].addEventListener("click", () => {
        body[i].classList.toggle("active");
      });
    }
}

function tabs(body, tabsBtns, tabsBody) {
  const blocks = document.querySelectorAll(body);
  if (blocks)
    for (const block of blocks) {
      const btns = block.querySelectorAll(tabsBtns),
        content = block.querySelectorAll(tabsBody);
      if (btns && content)
        for (const btn of btns) {
          if (btn.dataset.id === "00" && btn.classList.contains("active")) {
            content.forEach((e) => e.classList.add("active"));
            document.querySelector(".type-dp__list")?.classList.add("no-head");
          }

          btn.addEventListener("click", () => {
            btns.forEach((e) => e.classList.remove("active"));
            btn.classList.add("active");
            if (btn.dataset.id === "00") {
              content.forEach((e) => e.classList.add("active"));
              document.querySelector(".type-dp__list")?.classList.add("no-head");
            } else {
              content.forEach((e) => (e.dataset.id === btn.dataset.id ? e.classList.add("active") : e.classList.remove("active")));
              document.querySelector(".type-dp__list")?.classList.remove("no-head");
            }
          });
        }
    }
}

function tabProductList() {
  const items = document.querySelectorAll(".product-list");
  if (items)
    for (const item of items) {
      const btns = item.querySelectorAll(".product-list__btns button");
      for (const btn of btns) {
        btn.addEventListener("click", productListSlider);
      }
    }
}

//<slider>
function setProgress(index, slider, progressBar) {
  const calc = ((index + 1) / slider.slick("getSlick").slideCount) * 100;
  progressBar.css("width", `${calc}%`);
}

function homeSlider() {
  if (document.querySelector(".home-slider__list")) {
    if ($(".home-slider__list").hasClass("slick-initialized")) $(".home-slider__list").slick("unslick");
    $(".home-slider__list").slick({
      prevArrow: ".home-slider .slider-arr_prev",
      nextArrow: ".home-slider .slider-arr_next",
      dots: true,
      dotsClass: "dots-default",
    });
  }
}
function productListSlider() {
  if ($(".product-list__slider").length > 0)
    $(".product-list__slider").each(function (i) {
      const $slider = $(this).find(".product-list__list"),
        $progressBar = $(this).find(".progress-slider div");
      let countSlideShow = 4;
      if ($slider.hasClass("slick-initialized")) $slider.slick("unslick");

      if ($slider.hasClass("cart3")) {
        countSlideShow = 3;
      }
      $slider.slick({
        slidesToShow: countSlideShow,
        prevArrow: $(this).find(".slider-arr_prev"),
        nextArrow: $(this).find(".slider-arr_next"),
        dots: false,
        responsive: [
          {
            breakpoint: 1360,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 719,
            settings: { slidesToShow: 1, variableWidth: true },
          },
        ],
      });

      setTimeout(() => {
        $progressBar.css("width", `${100 / ($(this).find(".slick-slide").length - $(this).find(".slick-slide.slick-cloned").length)}%`);
      }, 100);
      $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        setProgress(nextSlide, $slider, $progressBar);
      });
    });
}

function servicesHomeSlider() {
  const $slider = $(".services-home__slider");
  const $progressBar = $(".services-home__progress div");
  if ($slider) {
    if (window.innerWidth < 1024) {
      $progressBar.css("width", `${100 / $(".services-home__slider .section-cart").length}%`);
      $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        setProgress(nextSlide, $slider, $progressBar);
      });

      if ($slider.hasClass("slick-initialized")) $slider.slick("unslick");
      $slider.slick({
        arrows: false,
        variableWidth: true,
      });
    } else {
      if ($slider.hasClass("slick-initialized")) $slider.slick("unslick");
    }
  }
}
function stockHomeSlider() {
  if (document.querySelector(".stock-list__items")) {
    if ($(".stock-list__items").hasClass("slick-initialized")) $(".stock-list__items").slick("unslick");

    if (window.innerWidth < 1319) {
      $(".stock-list__items").slick({
        slidesToShow: 2,
        dots: true,
        arrows: false,
        dotsClass: "dots-default",
        responsive: [
          {
            breakpoint: 1319,
            settings: {
              variableWidth: true,
              slidesToShow: 1,
            },
          },
        ],
      });
    } else {
      if ($(".stock-list__items").hasClass("slick-initialized")) $(".stock-list__items").slick("unslick");
    }
  }
}
function detailProductSlider() {
  if (document.querySelector(".big-img__slider")) {
    $(".big-img__slider").slick({
      slidesToScroll: 1,
      slidesToShow: 1,
      arrows: true,
      dots: false,
      focusOnSelect: true,
      asNavFor: ".min-img",
      prevArrow: $(".big-img .slider-arr_prev"),
      nextArrow: $(".big-img .slider-arr_next"),
    });
    $(".min-img").slick({
      slidesToShow: $(".model-d").length ? "auto" : 4,
      slidesToScroll: 1,
      vertical: $(".model-d").length ? false : true,
      verticalSwiping: $(".model-d").length ? false : true,
      arrows: false,
      asNavFor: ".big-img__slider",
      focusOnSelect: true,
    });
  }
}

// function tabsArticlesSlider() {
//   if (document.querySelector(".tab-article")) {
//     if ($(".tab-article").hasClass("slick-initialized")) $(".tab-article").slick("unslick");
//     $(".tab-article").slick({
//       infinite: true,
//       variableWidth: true,
//       dots: false,
//       arrows: false,
//       speed: 300,
//     });
//   }
// }

function stockSlider() {
  if (document.querySelector(".stock-block__slider")) {
    $(".stock-block__slider").slick({
      dots: false,
      arrows: false,
      variableWidth: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1600,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            variableWidth: false,
            slidesToShow: 1,
          },
        },
      ],

    });
  }
}
function castomScroll(el) {
  const block = document.querySelectorAll(el);
  if (block) block.forEach((e) => new SimpleBar(e));
}

function bgAppend() {
  const newDiv = document.createElement("div");
  document.body.classList.add("_lock");
  newDiv.classList.add("openShow");
  document.querySelector("body").appendChild(newDiv);
}
function bgRemove() {
  document.body.classList.remove("_lock");
  if (document.querySelector(".openShow")) document.querySelector(".openShow").remove();
}

function anchorScroll(idSelect, endSelect) {
  const btns = document.querySelectorAll(idSelect);
  if (btns)
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollBy({
          top: document.querySelector(endSelect).getBoundingClientRect().top,
          behavior: "smooth",
        });
      });
    }
}

function anchorUp() {
  window.innerHeight / 2 < window.scrollY ? document.querySelector(".btn-up").classList.add("in") : document.querySelector(".btn-up").classList.remove("in");
}

function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll(".phone"), function (input) {
    let keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___ __ __",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      let reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});



$("#comp-form").on("submit", function (e) {
  e.preventDefault();
  $.fancybox.close({
    src: "#comp",
  });
  $.fancybox.open({
    src: "#comp-success",
  });
  $(".comp-block").addClass("active");
  $(".comp-block__result").addClass("successBlock");
});

$("#closeCompPopup").click(function () {
  $.fancybox.close({
    src: "#comp-success",
  });
});
$("#popup-order .order-popup__back").click(function () {
  $.fancybox.close({
    src: "#popup-order",
  });
});

$(".openDetail").click(function () {
  $.fancybox.open({
    src: "#popup-detail",
  });
});
$(".openEp").click(function () {
  $.fancybox.open({
    src: "#edit-profile",
  });
});
$(".openEPass").click(function () {
  $.fancybox.close({
    src: "#recovery",
  });

  $.fancybox.open({
    src: "#edit-password",
  });
});
$(".openRecovery").click(function () {
  $.fancybox.close({
    src: "#edit-password",
  });

  $.fancybox.open({
    src: "#recovery",
  });
});
$(".openBall").click(function () {
  $.fancybox.open({
    src: "#ball-info",
  });
});

$(".info-tw__item a").click(function (e) {
  e.preventDefault()
  $.fancybox.open({
    src: "#season-p",
  });
});


function helpPopupPhone() {
  const blocks = document.querySelectorAll(".help");
  if (blocks)
    for (const block of blocks) {
      const btn = block.querySelector(".help__icon"),
        titleBlock = document.querySelector(".popup-help__title"),
        textBlock = document.querySelector(".popup-help__text");

      btn?.addEventListener("click", () => {
        $.fancybox.open({
          src: "#popup-help",
        });


        if (block.closest(".checkbox")) {
          titleBlock.textContent = block.closest(".checkbox").querySelector("label").textContent;
          textBlock.textContent = block.querySelector(".help__text").textContent;
        }
        if (block.closest(".box-form")) {
          titleBlock.textContent = block.closest(".box-form").querySelector("label>span").textContent;
          textBlock.textContent = block.querySelector(".help__text").textContent;
        }
        if (block.closest(".info-dp__list")) {
          titleBlock.textContent = block.closest(".info-dp_help").querySelector("span").textContent;
          textBlock.textContent = block.querySelector(".help__text").textContent;
        }
      });
    }
}

/** Фильтр */
function filterPhone() {
  const btn = document.querySelector(".catalog__filter-btn"),
    body = document.querySelector(".filter");
  if (btn)
    btn.addEventListener("click", () => {
      body.classList.add("_active");
      bgAppend();
    });
}

function onFilterBtn(item, num) {
  const btn = document.querySelector(".result-filter");
  btn.classList.add("in");
  btn.style.top = `${+item.offsetTop - num}px`;

  setTimeout(() => {
    btn.remove("in");
  }, 3000);
}

function observerSortPanel() {
  const el = document.querySelector(".catalog__top"),
    bodyCatalog = document.querySelector(".catalog__content");
  if (bodyCatalog) {
    if (bodyCatalog.getBoundingClientRect().top < 0) {
      bodyCatalog.style.paddingTop = el.clientHeight + "px";
      el.classList.add("fixed");
    } else {
      bodyCatalog.style.paddingTop = "0px";
      el.classList.remove("fixed");
    }
  }
}
function manufCout() {
  const items = document.querySelectorAll(".monuf-popup__body .input-box_radio .input"),
    countValue = document.querySelector(".monuf-popup__count span");
  let count = 0;
  countValue.textContent = count;
  if (items)
    for (const item of items) {
      item.addEventListener("click", () => {
        item.checked ? count++ : count--;
        countValue.textContent = count;
      });
    }
}
function popularBlock() {
  const items = document.querySelectorAll(".popular-list__wrap a"),
    btn = document.querySelector(".popular-list__btn");
  if (items && btn) {
    items.forEach((e, i) => {
      if (i > 19) e.classList.add("hide");
    });

    if (items.length < 20) btn.classList.add("hide");
    btn.addEventListener("click", () => {
      items.forEach((e) => e.classList.remove("hide"));
    });
  }
}

jQuery(document).ready(function ($) {
  (function initPlayVideo() {
    var $videoCover = $(".video-y__cover");
    var $videoPlayer = $(".video-y__player");
    var $videoUrl = $(".video-y__btn").data("video");

    $videoCover.on("click", function () {
      $videoCover.fadeOut();
      $videoPlayer.html('<iframe src="https://www.youtube.com/embed/' + $videoUrl + '?feature=oembed&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });
  })();
});

$(document).ready(function () {
  if ($(".select-search").length) {
    $(".select-search").select2({
      placeholder: {
        id: "-1", // the value of the option
        text: "Поиск по адресу или станции метро",
      },
      language: {
        noResults: function () {
          return "Нет результатов";
        },
      },
    });

    $(".select-search").each(function (i) {
      $(this).on("select2:opening", function (e) {
        setTimeout(() => {
          castomScroll(".select2-results");
        }, 100);
      });
    });
  }
  if ($(".district").length) {
    $(".district").select2({
      placeholder: {
        id: "-1", // the value of the option
        text: "Район",
      },
    });
    $(".district").each(function (i) {
      $(this).on("select2:opening", function (e) {
        setTimeout(() => {
          castomScroll(".select2-results");
        }, 100);
      });
    });
  }

  if ($(".metro").length) {
    function formatState(state) {
      if (!state.id) {
        return state.text;
      }
      var baseUrl = "img/icons";
      var $state = $('<span><img src="' + baseUrl + "/" + state.element.dataset.icon + '" class="img-flag" /> ' + state.text + "</span>");
      return $state;
    }

    $(".metro").select2({
      templateResult: formatState,
    });

    $(".metro").each(function (i) {
      $(this).on("select2:opening", function (e) {
        setTimeout(() => {
          castomScroll(".select2-results");
        }, 100);
      });
    });
  }

  if ($(".select-custom").length) {
    $(".select-custom").each(function (i) {
      $(this).select2();
    });

    $(".select-custom").each(function (i) {
      $(this).on("select2:opening", function (e) {
        setTimeout(() => {
          castomScroll(".select2-results");
        }, 100);
      });
    });
  }
});
function toggleBtnDh() {
  const btns = document.querySelectorAll(".btn-hdb"),
    panel = document.getElementById("compare");
  if (btns)
    for (const btn of btns) {
      btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        if (btn.classList.contains("btn-hdb_compare")) {
          panel.classList.add("active");
        }
        if (btn.classList.contains("btn-hdb_compare")) {
          if (btn.classList.contains("active")) {
            panel.classList.add("active");
            panel.querySelector("span").textContent = "Добавлено к сравнению. Нажмите, чтобы перейти к сравнению товаров.";
          } else {
            panel.querySelector("span").textContent = "Товар удален из сравнения";
          }
        }
        setTimeout(() => panel.classList.remove("active"), 4000);
      });
    }
}
function copyArt() {
  const btns = document.querySelectorAll(".copyArt"),
    panel = document.getElementById("art");
  if (btns)
    for (const btn of btns) {
      btn.addEventListener("click", () => {
        panel.classList.toggle("active");
        setTimeout(() => panel.classList.remove("active"), 4000);
      });
    }
}

function basketMaps() {
  const dropList = document.querySelectorAll(".res-map__drop");
  if (dropList) {
    for (const dropItem of dropList) {
      const btnToggle = dropItem.querySelector(".res-map__head");
      btnToggle.addEventListener("click", () => dropItem.classList.toggle("active"));
    }
  }
}

function basketRadBlock() {
  const blocks = document.querySelectorAll(".rad-block");
  if (blocks) {
    for (const block of blocks) {
      const items = block.querySelectorAll(".radio-box"),
        btn = block.querySelector(".rad-block__more");
      block.classList.add("in");
      items.forEach((e, idx) => {
        if (idx > 4) e.classList.add("hide");
      });
      if (btn)
        btn.addEventListener("click", () => {

          btn.classList.toggle("active");
          if (btn.classList.contains("active")) {
            items.forEach((e) => e.classList.remove("hide"));
            btn.querySelector("span").textContent = "Скрыть";
          } else {
            items.forEach((e, idx) => {
              if (idx > 4) e.classList.add("hide");
            });
            btn.querySelector("span").textContent = "Показать еще";
          }
        });
    }
  }
}
function basketDelTr() {
  const blocks = document.querySelectorAll(".del-tr .radio-box input"),
    chInput = document.getElementById("adres-input");
  if (blocks) {
    for (const block of blocks) {
      block.addEventListener("click", () => {
        block.checked && block.getAttribute("id") === "adres-btn" ? chInput.classList.add("active") : chInput.classList.remove("active");
      });
    }
  }
}
function basketPay() {
  const blocks = document.querySelectorAll(".pay-b__btn"),
    block1 = document.querySelector(".pay-b__radio_1"),
    block2 = document.querySelector(".pay-b__radio_2");
  if (blocks) {
    for (const block of blocks) {
      const input = block.querySelector("input");

      input.addEventListener("click", () => {
        input.checked && input.getAttribute("id") === "pay-b-bk" ? block1.classList.add("active") : block1.classList.remove("active");
        input.checked && input.getAttribute("id") === "pay-b-bp" ? block2.classList.add("active") : block2.classList.remove("active");
      });
    }
  }
}

function dropToggleDefault(blocks, btn) {
  const $blocks = document.querySelectorAll(blocks);
  if ($blocks) for (const block of $blocks) block.querySelector(btn).addEventListener("click", () => block.classList.toggle("active"));
}

function reg() {
  const radLegal = document.getElementById('entity-legal'),
    radFiz = document.getElementById('entity-fiz'),
    block = document.getElementById('entity-legal-input'),
    inputs = document.querySelectorAll('#reg-form .input-box .input')
  if (radLegal) {
    radFiz.addEventListener('change', (e) => {
      if (e.target.checked) {
        block.classList.remove('active')
        radLegal.setAttribute('data-parsley-group', "reg1")
      }
    })
    radLegal.addEventListener('change', (e) => {
      if (e.target.checked) {
        block.classList.add('active')
        inputs.forEach(e => e.setAttribute('data-parsley-group', "reg"))
      }
    })
  }
}
function titlesContent() {
  const blocks = document.querySelectorAll('.contetn-a h2'),
    head = document.querySelector('.head-titles')
  if (blocks)
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i]

      block.setAttribute('id', 'anchor-k' + i)
      const createA = document.createElement("a");
      createA.setAttribute('href', '#anchor-k' + i)
      createA.textContent = block.textContent
      head.appendChild(createA);

      if (blocks.length) head.classList.add('active')
    }
}
document.addEventListener("DOMContentLoaded", function () {
  isWebp();

  castomScroll(".select-box__list");
  castomScroll(".filter-check .filter__overlay");
  anchorScroll(".btn-up", "html");
  anchorScroll(".feed-tf__wrap .btn", ".cald-tf");
  anchorUp();
  dropAboutHome();
  video();
  // tabsHome();
  helpSeason();
  footerDropPhone();
  tabProductList();
  popularBlock();
  tabs(".tab", ".tab-head__btn", ".tab-content");
  tabs(".type-dp", ".type-dp__btn", ".table-tdp");
  tabs(".sdt", ".tab-sdt__btn", ".tab-sdt__item");
  toggleBtnDh();
  copyArt();
  tabs(".maps-home", ".maps-home__tabs button", ".maps-home__wrap .tab-item");

  /** Фильтр главная */
  filterHome();
  filterHomeSportComplect();
  filterHoSeason(".season-form .season-form__checkbox:not(:nth-child(1)) input", "all-season");
  filterHoSeason(".filter-season .checkbox:not(:last-child) input", "all-season-filter");
  filterHomeAuto();

  /** header */
  timeJobs();
  search();
  rating();
  castomScroll(".burger");

  /** Фильтр Каталог */
  filterPhone();

  /** Товар */

  productAddBasket(".prod-cart__bottom", ".prod-cart__add");
  productAddBasket(".basket-dp__control", ".basket-dp__add");
  productAddBasket(".table-tdp__line .td_add", ".table-tdp__line .td_add .btn-add");
  manufCout();
  productAdd();

  /** Детальная карточка */
  detailProductSlider();
  quantity();

  /** Корзина */
  basketMaps();
  tabs(".del-b", ".del-b__btn", ".del-b__block");
  castomScroll(".res-map");
  tabs(".maps", ".maps__ch button", ".maps__item");


  tabs(".articles-h", ".tab-article__btn", ".cart-article");

  tabs(".serv-tf", ".serv-tf__list li", ".serv-tf__item");

  titlesContent()

  basketRadBlock();
  basketDelTr();
  basketPay();

  /** ЛК */
  dropToggleDefault(".order-lk__item", ".order-lk__head");
  dropToggleDefault(".drop-inst__item", ".drop-inst__head");

  /** Регистрация */
  reg()


  if (window.innerWidth < 1320) dropPopularSize();

  if (window.innerWidth > 1023) {
    dropMenuHeader();
    modalFb();
  }
  if (window.innerWidth < 1024) {
    burger();
    helpPopupPhone();
    castomScroll(".filter__wrap");
    observerSortPanel();
  }

  setTimeout(() => {
    castomScroll(".monuf-popup__body");
  }, 300);

  setTimeout(() => {
    servicesHomeSlider();
    stockHomeSlider();
    homeSlider();
    productListSlider();
    stockSlider()
    // tabsArticlesSlider()
  }, 300);
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 1320) {
    dropPopularSize();
  }

  if (window.innerWidth > 1023) dropMenuHeader();
  if (window.innerWidth < 1024) {
    castomScroll(".filter__wrap");
    burger();
  }

  setTimeout(() => {
    stockHomeSlider();
    servicesHomeSlider();

  }, 200);
});

document.addEventListener("scroll", () => {
  anchorUp();
  if (window.innerWidth < 1024) {
    observerSortPanel();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".openShow") || e.target.closest(".openShowFile")) {
    document.querySelectorAll("._active").forEach((e) => e.classList.remove("_active"));
    if (document.body.classList.contains("_lock")) document.body.classList.remove("_lock");
    if (document.querySelector(".openShow")) document.querySelector(".openShow").remove();
  }
  if (e.target.closest("._close")) {
    document.querySelectorAll("._active").forEach((e) => e.classList.remove("_active"));
    if (document.body.classList.contains("_lock")) document.body.classList.remove("_lock");
    if (document.querySelector(".openShow")) document.querySelector(".openShow").remove();
  }
});
