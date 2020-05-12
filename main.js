/** get access to DOM elements */
var inputText = document.querySelector(".myText");
var fields = document.querySelectorAll(".field");

/** go around all checkboxes */
for (var i in fields) {

    /** click event handling for checkbox */
    fields[i].onclick = function () {

        if (this.name === "Block") {
            inputText.disabled = true;
            inputText.readOnly = false;
            inputText.type = "text";

        } else if (this.name === "Only for reading") {
            inputText.readOnly = true;
            inputText.disabled = false;
            inputText.type = "text";

        } else if (this.name === "Number input only") {
            inputText.type = "number";
            inputText.disabled = false;
            inputText.readOnly = false;

        } else if (this.name === "Hidden input") {
            inputText.setAttribute("type", "password");
            inputText.disabled = false;
            inputText.readOnly = false;
        }
        /** checking pressed checkboxes */
        if (this.checked == true) {
            for (checkbox of fields) {
                /** all checkbox attribute "checked" change to false*/
                checkbox.checked = false;
            }
        }
        /** set attribute "checked" for the current checkbox */
        this.checked = true;
    }
}


