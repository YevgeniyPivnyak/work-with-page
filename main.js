/** get access to page elements */
var subscribeBtn = document.querySelector("#subscribeBtn");
var backID = document.querySelector("#backgroundID");
var popupContainer = document.querySelector("#popup_container");
var closeBtn = document.querySelector("#close_btn");
var sendBtn = document.querySelector("#send_btn");
var inputName = document.querySelector("#input_name");
var inputAge = document.querySelector("#input_age");

/** by click the class changes and show pupUp*/
subscribeBtn.onclick = function () {
    popupContainer.className = "openPupup";
    backID.className = "bg";
}
/** function changes the class to close and clear input value*/
var clear = function () {
    popupContainer.className = "closePupup";
    backID.className = "closePupup";
    inputName.value = null;
    inputAge.value = null;
}

closeBtn.onclick = clear;
sendBtn.onclick = clear;