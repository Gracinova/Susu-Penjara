const navEl = document.querySelector(".navbar");
const brand = document.querySelector(".navbar-brand span");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add("navbar-scrolled");
    brand.classList.add("navbar-brand-scrolled");
  } else if (window.scrollY < 56) {
    navEl.classList.remove("navbar-scrolled");
    brand.classList.remove("navbar-brand-scrolled");
  }
});

const title = document.getElementById("title");

window.addEventListener("scroll", function () {
  const value = window.scrollY;

  title.style.top = value * 0.5 + "px";
});

var btnvar1 = document.querySelector("#product #btnh1 i");
var btnvar2 = document.querySelector("#product #btnh2 i");
var btnvar3 = document.querySelector("#product #btnh3 i");
var btnvar4 = document.querySelector("#product #btnh4 i");
var btnvar5 = document.querySelector("#product #btnh5 i");
var btnvar6 = document.querySelector("#product #btnh6 i");
var btnvar7 = document.querySelector("#product #btnh7 i");
var btnvar8 = document.querySelector("#product #btnh8 i");
const no1 = document.getElementById("no1");
const no2 = document.getElementById("no2");
const no3 = document.getElementById("no3");
const no4 = document.getElementById("no4");
const no5 = document.getElementById("no5");
const no6 = document.getElementById("no6");
const no7 = document.getElementById("no7");
const no8 = document.getElementById("no8");

function Toggle1() {
  if (btnvar1.style.color == "red") {
    btnvar1.style.color = "#fff1e6";
  } else {
    btnvar1.style.color = "red";
  }
}
function Toggle2() {
  if (btnvar2.style.color == "red") {
    btnvar2.style.color = "#fff1e6";
  } else {
    btnvar2.style.color = "red";
  }
}
function Toggle3() {
  if (btnvar3.style.color == "red") {
    btnvar3.style.color = "#fff1e6";
  } else {
    btnvar3.style.color = "red";
  }
}
function Toggle4() {
  if (btnvar4.style.color == "red") {
    btnvar4.style.color = "#fff1e6";
  } else {
    btnvar4.style.color = "red";
  }
}
function Toggle5() {
  if (btnvar5.style.color == "red") {
    btnvar5.style.color = "#fff1e6";
  } else {
    btnvar5.style.color = "red";
  }
}
function Toggle6() {
  if (btnvar6.style.color == "red") {
    btnvar6.style.color = "#fff1e6";
  } else {
    btnvar6.style.color = "red";
  }
}
function Toggle7() {
  if (btnvar7.style.color == "red") {
    btnvar7.style.color = "#fff1e6";
  } else {
    btnvar7.style.color = "red";
  }
}
function Toggle8() {
  if (btnvar8.style.color == "red") {
    btnvar8.style.color = "#fff1e6";
  } else {
    btnvar8.style.color = "red";
  }
}

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

document.getElementById("quantity").defaultValue = 1;
document.getElementById("total").innerHTML = formatter.format(6000);
function mySummary() {
  var radioBtn = document.getElementsByName("size");
  var harga;
  for (i = 0; i < radioBtn.length; i++) {
    var a = document.getElementById("quantity").value;
    if (radioBtn[0].checked) {
      harga = 6000;
      let subtotal = harga * a;
      document.getElementById("total").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    } else {
      harga = 9000;
      let subtotal = harga * a;
      document.getElementById("total").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    }
  }
}
function sui() {
  var radioBtn = document.getElementsByName("size");
  var c;
  for (i = 0; i < radioBtn.length; i++) {
    if (radioBtn[0].checked) {
      return "reguler";
    } else {
      return "big";
    }
  }

  var a = document.getElementById("quantity").value;

  document.getElementById("total").innerHTML = formatter.format(c * a);
}
function sendwhatsapp1() {
  var phonenumber = "+6285695879412";
  var input_select1 = mySummary();
  var menu = "Original";
  var quantity = document.querySelector("#quantity").value;
  var time = document.querySelector("#time").value;
  var size = sui();

  var cek = document.getElementsByClassName("checked");

  if (time == "") {
    alert("Mohon isi jam pemesanan");
    return false;
  }

  var url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    "Hallo Kak," +
    "%0a" +
    "Saya ingin Memesan" +
    "%0a%0a" +
    "*Menu :* " +
    menu +
    "%0a" +
    "*Size :* " +
    size +
    "%0a" +
    "*Price :* " +
    input_select1 +
    "%0a" +
    "*Quantity :* " +
    quantity +
    "%0a" +
    "*Time :* " +
    time +
    "%0a%0a" +
    "Have a nice day";

  window.open(url, "_blank").focus();
}

document.getElementById("quantity2").defaultValue = 1;
document.getElementById("total2").innerHTML = formatter.format(7000);
function mySummary2() {
  var radioBtn = document.getElementsByName("size3");
  var harga;
  for (i = 0; i < radioBtn.length; i++) {
    var a = document.getElementById("quantity2").value;
    if (radioBtn[0].checked) {
      harga = 7000;
      let subtotal = harga * a;
      document.getElementById("total2").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    } else {
      harga = 10000;
      let subtotal = harga * a;
      document.getElementById("total2").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    }
  }
}
function sui() {
  var radioBtn = document.getElementsByName("size2");
  var c;
  for (i = 0; i < radioBtn.length; i++) {
    if (radioBtn[0].checked) {
      return "reguler";
    } else {
      return "big";
    }
  }

  var a = document.getElementById("quantity2").value;

  document.getElementById("total2").innerHTML = formatter.format(c * a);
}
function sendwhatsapp2() {
  var phonenumber = "+6285695879412";
  var input_select1 = mySummary2();
  var menu = "Banana";
  var quantity = document.querySelector("#quantity2").value;
  var time = document.querySelector("#time2").value;
  var size = sui();

  var cek = document.getElementsByClassName("checked");

  if (time == "") {
    alert("Mohon isi jam pemesanan");
    return false;
  }

  var url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    "Hallo Kak," +
    "%0a" +
    "Saya ingin Memesan" +
    "%0a%0a" +
    "*Menu :* " +
    menu +
    "%0a" +
    "*Size :* " +
    size +
    "%0a" +
    "*Price :* " +
    input_select1 +
    "%0a" +
    "*Quantity :* " +
    quantity +
    "%0a" +
    "*Time :* " +
    time +
    "%0a%0a" +
    "Have a nice day";

  window.open(url, "_blank").focus();
}

document.getElementById("quantity3").defaultValue = 1;
document.getElementById("total3").innerHTML = formatter.format(7000);
function mySummary3() {
  var radioBtn = document.getElementsByName("size2");
  var harga;
  for (i = 0; i < radioBtn.length; i++) {
    var a = document.getElementById("quantity3").value;
    if (radioBtn[0].checked) {
      harga = 7000;
      let subtotal = harga * a;
      document.getElementById("total3").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    } else {
      harga = 10000;
      let subtotal = harga * a;
      document.getElementById("total3").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    }
  }
}
function sui() {
  var radioBtn = document.getElementsByName("size3");
  var c;
  for (i = 0; i < radioBtn.length; i++) {
    if (radioBtn[0].checked) {
      return "reguler";
    } else {
      return "big";
    }
  }

  var a = document.getElementById("quantity3").value;

  document.getElementById("total3").innerHTML = formatter.format(c * a);
}
function sendwhatsapp3() {
  var phonenumber = "+6285695879412";
  var input_select1 = mySummary3();
  var menu = "Strawberry";
  var quantity = document.querySelector("#quantity3").value;
  var time = document.querySelector("#time3").value;
  var size = sui();

  var cek = document.getElementsByClassName("checked");

  if (time == "") {
    alert("Mohon isi jam pemesanan");
    return false;
  }

  var url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    "Hallo Kak," +
    "%0a" +
    "Saya ingin Memesan" +
    "%0a%0a" +
    "*Menu :* " +
    menu +
    "%0a" +
    "*Size :* " +
    size +
    "%0a" +
    "*Price :* " +
    input_select1 +
    "%0a" +
    "*Quantity :* " +
    quantity +
    "%0a" +
    "*Time :* " +
    time +
    "%0a%0a" +
    "Have a nice day";

  window.open(url, "_blank").focus();
}

document.getElementById("quantity4").defaultValue = 1;
document.getElementById("total4").innerHTML = formatter.format(7000);
function mySummary4() {
  var radioBtn = document.getElementsByName("size4");
  var harga;
  for (i = 0; i < radioBtn.length; i++) {
    var a = document.getElementById("quantity4").value;
    if (radioBtn[0].checked) {
      harga = 7000;
      let subtotal = harga * a;
      document.getElementById("total4").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    } else {
      harga = 10000;
      let subtotal = harga * a;
      document.getElementById("total4").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    }
  }
}
function sui() {
  var radioBtn = document.getElementsByName("size4");
  var c;
  for (i = 0; i < radioBtn.length; i++) {
    if (radioBtn[0].checked) {
      return "reguler";
    } else {
      return "big";
    }
  }

  var a = document.getElementById("quantity4").value;

  document.getElementById("total4").innerHTML = formatter.format(c * a);
}
function sendwhatsapp4() {
  var phonenumber = "+6285695879412";
  var input_select1 = mySummary4();
  var menu = "Melon";
  var quantity = document.querySelector("#quantity4").value;
  var time = document.querySelector("#time4").value;
  var size = sui();

  var cek = document.getElementsByClassName("checked");

  if (time == "") {
    alert("Mohon isi jam pemesanan");
    return false;
  }

  var url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    "Hallo Kak," +
    "%0a" +
    "Saya ingin Memesan" +
    "%0a%0a" +
    "*Menu :* " +
    menu +
    "%0a" +
    "*Size :* " +
    size +
    "%0a" +
    "*Price :* " +
    input_select1 +
    "%0a" +
    "*Quantity :* " +
    quantity +
    "%0a" +
    "*Time :* " +
    time +
    "%0a%0a" +
    "Have a nice day";

  window.open(url, "_blank").focus();
}

document.getElementById("quantity5").defaultValue = 1;
document.getElementById("total5").innerHTML = formatter.format(7000);
function mySummary5() {
  var radioBtn = document.getElementsByName("size5");
  var harga;
  for (i = 0; i < radioBtn.length; i++) {
    var a = document.getElementById("quantity5").value;
    if (radioBtn[0].checked) {
      harga = 7000;
      let subtotal = harga * a;
      document.getElementById("total5").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    } else {
      harga = 10000;
      let subtotal = harga * a;
      document.getElementById("total5").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    }
  }
}
function sui() {
  var radioBtn = document.getElementsByName("size5");
  var c;
  for (i = 0; i < radioBtn.length; i++) {
    if (radioBtn[0].checked) {
      return "reguler";
    } else {
      return "big";
    }
  }

  var a = document.getElementById("quantity5").value;

  document.getElementById("total5").innerHTML = formatter.format(c * a);
}
function sendwhatsapp5() {
  var phonenumber = "+6285695879412";
  var input_select1 = mySummary5();
  var menu = "Chocolate";
  var quantity = document.querySelector("#quantity5").value;
  var time = document.querySelector("#time5").value;
  var size = sui();

  var cek = document.getElementsByClassName("checked");

  if (time == "") {
    alert("Mohon isi jam pemesanan");
    return false;
  }

  var url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    "Hallo Kak," +
    "%0a" +
    "Saya ingin Memesan" +
    "%0a%0a" +
    "*Menu :* " +
    menu +
    "%0a" +
    "*Size :* " +
    size +
    "%0a" +
    "*Price :* " +
    input_select1 +
    "%0a" +
    "*Quantity :* " +
    quantity +
    "%0a" +
    "*Time :* " +
    time +
    "%0a%0a" +
    "Have a nice day";

  window.open(url, "_blank").focus();
}

document.getElementById("quantity6").defaultValue = 1;
document.getElementById("total6").innerHTML = formatter.format(7000);
function mySummary6() {
  var radioBtn = document.getElementsByName("size6");
  var harga;
  for (i = 0; i < radioBtn.length; i++) {
    var a = document.getElementById("quantity6").value;
    if (radioBtn[0].checked) {
      harga = 7000;
      let subtotal = harga * a;
      document.getElementById("total6").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    } else {
      harga = 10000;
      let subtotal = harga * a;
      document.getElementById("total6").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    }
  }
}
function sui() {
  var radioBtn = document.getElementsByName("size6");
  var c;
  for (i = 0; i < radioBtn.length; i++) {
    if (radioBtn[0].checked) {
      return "reguler";
    } else {
      return "big";
    }
  }

  var a = document.getElementById("quantity6").value;

  document.getElementById("total6").innerHTML = formatter.format(c * a);
}
function sendwhatsapp6() {
  var phonenumber = "+6285695879412";
  var input_select1 = mySummary6();
  var menu = "Lychee";
  var quantity = document.querySelector("#quantity6").value;
  var time = document.querySelector("#time6").value;
  var size = sui();

  var cek = document.getElementsByClassName("checked");

  if (time == "") {
    alert("Mohon isi jam pemesanan");
    return false;
  }

  var url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    "Hallo Kak," +
    "%0a" +
    "Saya ingin Memesan" +
    "%0a%0a" +
    "*Menu :* " +
    menu +
    "%0a" +
    "*Size :* " +
    size +
    "%0a" +
    "*Price :* " +
    input_select1 +
    "%0a" +
    "*Quantity :* " +
    quantity +
    "%0a" +
    "*Time :* " +
    time +
    "%0a%0a" +
    "Have a nice day";

  window.open(url, "_blank").focus();
}

document.getElementById("quantity7").defaultValue = 1;
document.getElementById("total7").innerHTML = formatter.format(8000);
function mySummary7() {
  var radioBtn = document.getElementsByName("size7");
  var harga;
  for (i = 0; i < radioBtn.length; i++) {
    var a = document.getElementById("quantity7").value;
    if (radioBtn[0].checked) {
      harga = 8000;
      let subtotal = harga * a;
      document.getElementById("total7").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    } else {
      harga = 11000;
      let subtotal = harga * a;
      document.getElementById("total7").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    }
  }
}
function sui() {
  var radioBtn = document.getElementsByName("size7");
  var c;
  for (i = 0; i < radioBtn.length; i++) {
    if (radioBtn[0].checked) {
      return "reguler";
    } else {
      return "big";
    }
  }

  var a = document.getElementById("quantity7").value;

  document.getElementById("total7").innerHTML = formatter.format(c * a);
}
function sendwhatsapp7() {
  var phonenumber = "+6285695879412";
  var input_select1 = mySummary7();
  var menu = "Milo";
  var quantity = document.querySelector("#quantity7").value;
  var time = document.querySelector("#time7").value;
  var size = sui();

  var cek = document.getElementsByClassName("checked");

  if (time == "") {
    alert("Mohon isi jam pemesanan");
    return false;
  }

  var url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    "Hallo Kak," +
    "%0a" +
    "Saya ingin Memesan" +
    "%0a%0a" +
    "*Menu :* " +
    menu +
    "%0a" +
    "*Size :* " +
    size +
    "%0a" +
    "*Price :* " +
    input_select1 +
    "%0a" +
    "*Quantity :* " +
    quantity +
    "%0a" +
    "*Time :* " +
    time +
    "%0a%0a" +
    "Have a nice day";

  window.open(url, "_blank").focus();
}

document.getElementById("quantity8").defaultValue = 1;
document.getElementById("total8").innerHTML = formatter.format(7000);
function mySummary8() {
  var radioBtn = document.getElementsByName("size8");
  var harga;
  for (i = 0; i < radioBtn.length; i++) {
    var a = document.getElementById("quantity8").value;
    if (radioBtn[0].checked) {
      harga = 7000;
      let subtotal = harga * a;
      document.getElementById("total8").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    } else {
      harga = 10000;
      let subtotal = harga * a;
      document.getElementById("total8").innerHTML = formatter.format(subtotal);
      return formatter.format(subtotal);
    }
  }
}
function sui() {
  var radioBtn = document.getElementsByName("size8");
  var c;
  for (i = 0; i < radioBtn.length; i++) {
    if (radioBtn[0].checked) {
      return "reguler";
    } else {
      return "big";
    }
  }

  var a = document.getElementById("quantity8").value;

  document.getElementById("total8").innerHTML = formatter.format(c * a);
}
function sendwhatsapp8() {
  var phonenumber = "+6285695879412";
  var input_select1 = mySummary8();
  var menu = "Ginger";
  var quantity = document.querySelector("#quantity8").value;
  var time = document.querySelector("#time8").value;
  var size = sui();

  var cek = document.getElementsByClassName("checked");

  if (time == "") {
    alert("Mohon isi jam pemesanan");
    return false;
  }

  var url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    "Hallo Kak," +
    "%0a" +
    "Saya ingin Memesan" +
    "%0a%0a" +
    "*Menu :* " +
    menu +
    "%0a" +
    "*Size :* " +
    size +
    "%0a" +
    "*Price :* " +
    input_select1 +
    "%0a" +
    "*Quantity :* " +
    quantity +
    "%0a" +
    "*Time :* " +
    time +
    "%0a%0a" +
    "Have a nice day";

  window.open(url, "_blank").focus();
}
