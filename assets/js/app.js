const soatEl = document.querySelector(".soat_btn");
const minutEl = document.querySelector(".minut_btn");
const sekundEl = document.querySelector(".sekund_btn");
// const nuqtaEl = document.querySelector(".nuqta_btn");

function time() {
    let data = new Date();
    let soat = data.getHours();
    let minut = data.getMinutes();
    let sekund = data.getSeconds();

    soatEl.innerHTML = `${soat}`.padStart(2, "0");
    minutEl.innerHTML = `${minut}`.padStart(2, "0");
    sekundEl.innerHTML = `${sekund}`.padStart(2, "0");
    console.log(soatEl);

    setTimeout(time, 1);

}
time();