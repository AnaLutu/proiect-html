function showSidebar() {
    document.getElementById("sidebar").style.width = "300px";
    $(".havbarLinkElement").css("left", "50%");
}
function hideSidebar() {
    document.getElementById("sidebar").style.width = "0";
    $(".havbarLinkElement").css("left", "-150px");
}

$("#form-input").on("click", function () {
    var deClonat = $("#deClonat"),
        input = $("#input-text").val();
    clona = deClonat.clone();
    clona.find(".paragraf")[0].innerText = input;
    clona.find(".cancel")[0].innerText = 'x';
    $(".cancel").on("click", function () {
        $("#deClonat").remove();
    });
    //clona[0].appendChild(p);
    clona.appendTo($("#lista"));
});

