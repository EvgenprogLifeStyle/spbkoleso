$(".openFeedback").click(function () {
  $.fancybox.open({
    src: "#popup",
  });
});
$(".openComp").click(function () {
  $.fancybox.open({
    src: "#comp",
    touch: false,
    autoFocus: false,
  });
});
$(".openAdm").click(function () {
  $.fancybox.open({
    src: "#adm",
  });
});
$(".openManuf").click(function () {
  $.fancybox.open({
    src: "#popup-manuf",
  });
});
$(".openSdt").click(function (e) {
  $("#btn-split-p").click();
  $.fancybox.open({
    src: "#popup-sdt",
  });
});
$(".openSdtD").click(function (e) {
  $("#btn-dol-p").click();
  $.fancybox.open({
    src: "#popup-sdt",
  });
});
$(".openRun").click(function (e) {
  $.fancybox.open({
    src: "#popup-run",
  });
});
$(".openSport").click(function (e) {
  $.fancybox.open({
    src: "#popup-sport",
  });
});
$(".clearBasket").click(function (e) {
  $.fancybox.open({
    src: "#popup-clear",
  });
});
$(".delProduct").click(function (e) {
  $.fancybox.open({
    src: "#popup-del",
  });
});
$(".orderPopup").click(function (e) {
  $.fancybox.open({
    src: "#popup-order",
  });
});
$(".filterBasket").click(function (e) {
  $.fancybox.open({
    src: "#popup-filter-b",
  });
});

if ($("#adm-form").length > 0)
  $("#adm-form").on("submit", function (e) {
    e.preventDefault();
    $("#adm-form")
      .parsley()
      .on("form:submit", function () {
        $.fancybox.close({
          src: "#adm",
        });
        $.fancybox.open({
          src: "#admResult",
        });
        return;
      });
  });

$("#basket_send").on("click", function () {
  if ($("#basket").parsley().validate("basket")) {
    //ajax
    console.log("ok");
  }
});
$(".form-faq .btn").on("click", function () {
  if ($(".form-faq").parsley().validate()) {
    //ajax
    console.log("ok");
  }
});
$("#edit-profile .btn").on("click", function () {
  if ($("#edit-profile .popup__body").parsley().validate()) {
    //ajax
    console.log("ok");
  }
});
$("#edit-password .btn").on("click", function () {
  if ($("#edit-password .popup__body").parsley().validate()) {
    //ajax
    console.log("ok");
  }
});
$("#recovery .btn").on("click", function () {
  if ($("#recovery .popup__body").parsley().validate()) {
    //ajax
    console.log("ok");

    $.fancybox.close({
      src: "#recovery",
    });
    $.fancybox.open({
      src: "#recovery-success",
    });
  }
});
$("#auth-form #send").on("click", function () {
  if ($("#auth-form").parsley().validate()) {
    //ajax
    console.log("ok");
  }
});
$("#reg-form #send").on("click", function () {
  if ($("#reg-form").parsley().validate('reg')) {

    //ajax
    console.log("ok");
  }
});
$("#recovery-form #send").on("click", function () {
  if ($("#recovery-form").parsley().validate()) {

    //ajax
    console.log("ok");
  }
});
$("#form-r .btn").on("click", function () {
  if ($("#form-r").parsley().validate()) {

    //ajax
    console.log("ok");
  }
});
$("#form-tft .btn").on("click", function () {
  if ($("#form-tft").parsley().validate()) {

    //ajax
    console.log("ok");
  }
});

//========================================================================================================================================================

const daysListName = [
  'СБ',
  'ВС',
  'ПН',
  'ВТ',
  'СР',
  'ЧТ',
  'ПТ',
];

let date = new Date(),
  newYear,
  newMonth,
  newDay

function controlMouth() {
  const btnPrev = document.querySelector('.cald-tf__arr_prev'),
    btnNext = document.querySelector('.cald-tf__arr_next'),
    value = document.getElementById('month')

  if (value) {
    btnNext.addEventListener('click', () => {
      newYear = date.getFullYear()
      newMonth = date.getMonth()

      if (newMonth < 12) {
        newMonth += 2
        date = new Date(newYear, newMonth, 0)
        initCalendar(date)
      } else {
        newYear++
        date = new Date(newYear, 0, 0)
        initCalendar(date)
      }
      btnPrev.classList.remove('disabled')
    })
    btnPrev.addEventListener('click', () => {
      year = new Date().getFullYear()
      month = new Date().getMonth()

      if (month + 1 < newMonth && newYear == year) {
        newMonth--
        date = new Date(newYear, newMonth, 0)
        initCalendar(date)
      } else {
        btnPrev.classList.add('disabled')
      }
    })
  }
}


function initCalendar(val) {
  const date = val ? val : new Date()

  // год
  const year = date.getFullYear()

  //  название и id месяца
  const monthName = date.toLocaleString('default', { month: 'long' });
  let monthNameShort = date.toLocaleString('default', { month: 'short' });
  const monthId = date.getMonth();
  monthNameShort = monthNameShort.split('')
  monthNameShort.pop()

  // количество дней в месяце
  const days = new Date(year, monthId, 0).getDate();

  updateCalendar(year, monthName, monthId, days, monthNameShort)
}

// год, месяц, id месяца, день, краткое наименование месяца
function updateCalendar(year, monthName, monthId, days, monthNameShort) {
  const textInnerMonth = document.getElementById('month'),
    daysBlock = document.getElementById('days'),
    dayToday = new Date().getDate(),
    monthToday = new Date().getMonth();

  textInnerMonth.textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1)
  daysBlock.innerHTML = ''

  if (days) {
    for (let i = 1; i <= days; i++) {
      const dayId = new Date(year, monthId, i + 1).getDay(),
        item = `<div class="cald-tf__item ${i < dayToday && monthId === monthToday ? 'disabled' : ''}">
                        <p>${i + ' ' + monthNameShort.join('')}</p>
                        <span>${daysListName[dayId]}</span>
                     </div>`

      daysBlock.insertAdjacentHTML("beforeend", item)
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  controlMouth()
  initCalendar()
})

