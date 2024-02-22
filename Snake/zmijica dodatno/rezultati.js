$(document).ready(function(){
    $("#pocetna").click(function(){
        window.location.href = "zmijica-uputstvo.html";
        }
    );
    let best = localStorage.getItem("best");
    let now = localStorage.getItem("rezultat");
    let ime = localStorage.getItem("igrac");
    if(ime!=null){
        $("#rezultat").html(now);
        $("#naslov").html("Čestitamo " + ime + "! Vaš rezultat je:")
        $("#rezultat").css("display", "block");
        $("#linija").css("display", "block");
        $("#naslov").css("display", "block");
        localStorage.removeItem("igrac");
        localStorage.removeItem("ime");
        localStorage.removeItem("rezultat");
    }
    let top5=[];
    let test = localStorage.getItem("top5");
    if(test==null){
        alert("tu sam");
        localStorage.setItem("top5", []);
    }
    else top5 = JSON.parse(test);
    for(let i=0; i<top5.length; i++){
        $("#ime" + i).html(top5[i].ime);
        $("#rez" + i).html(top5[i].rezultat);
    }
});