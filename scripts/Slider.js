function SwitchTheme() {

    if (document.getElementById("toggleSwitch").checked == true){
        document.body.style.color = "white";
        document.body.style.background = "#2a2a30";
    } else {
        document.body.style.color = "black";
        document.body.style.background = "#f1fff2";
    }
}