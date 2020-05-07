/** this function starts when the user selects a bank */
selectForm.onchange = function () {

    /** this description will appear on the screen after selecting the bank */
    var banksDescription = {
        PrivatBank: "Приватбанк — крупнейший банк Украины. Занимает лидирующие позиции по всем финансовым показателям в отрасли. Составляет около четверти всей банковской системы страны, являясь системно важным и крупнейшим сберегательным специализированным банком, обслуживающим треть вкладов населения страны. Главный офис расположен в г. Днепр (бывший Днепропетровск). Имеет представительства за пределами Украины. Бренд «ПриватБанк» объединяет банки: ПриватБанк (Украина), AS PrivatBank (Латвия) и его филиалы в Португалии и Италии. Есть филиал на Кипре, а также представительства в Пекине и Алма-Ате. Владеет платёжным сервисом LiqPay.",
        MonoBank: "monobank — розничный продукт АО «Универсал Банк», который возник в рамках сотрудничества с командой Fintech Band. В рамках monobank выпускаются кредитные карты для клиентов, есть возможность разместить депозиты и получить другие услуги, а лучшее мобильное приложение сделает управление финансами максимально удобным. monobank работает только на мобильных устройствах.",
        AlfaBank: "Альфа-Банк — крупнейший частный банк в России, входящий в пятерку крупнейших банков России по объему активов по данным рейтингов РБК и Forbes. По данным рейтинга Коммерсантъ пятый в России банк по объёму активов (среди частных банков — первый). Имеет около 800 отделений и офисов более чем в 100 городах России. Главный офис — в Москве.",
    }
    var output = document.querySelector(".outputInform");
    var newDiv = document.createElement("div");

    if (this.value === "Privat Bank") {
        newDiv.innerHTML = `${banksDescription.PrivatBank}`;
        newDiv.className = "aboutPrivat";
    } else if (this.value === "Mono Bank") {
        newDiv.innerHTML = `${banksDescription.MonoBank}`;
        newDiv.className = "aboutMono";
    } else if (this.value === "Alfa Bank") {
        newDiv.innerHTML = `${banksDescription.AlfaBank}`;
        newDiv.className = "aboutAlfa";
    }

    /** adding a new element to the page */
    output.appendChild(newDiv);

    /** delete previous description. */
    if (output.childNodes.length > 2) {
        output.removeChild(output.firstElementChild);
    }

}
/** This is a start of application. */
function start() {
    var selectForm = document.querySelector("#selectForm");
}
start();