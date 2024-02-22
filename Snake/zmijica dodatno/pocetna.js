$(document).ready(function(){
    $("#rezultati").click(function(){
        window.location.href="zmijica-rezultati.html";
        return;
    });
    $("#igra").click(function(){
        let velicina = 15;
        let v = document.getElementsByName('velicina');
        for (let i = 0; i < v.length; i++) {
            if (v[i].checked) {
                velicina = v[i].value;
            }
        }
        let brzina = 400;
        let n = document.getElementsByName('nivo');
        for (let i = 0; i < n.length; i++) {
            if (n[i].checked) {
                brzina = n[i].value;
            }
        }
        localStorage.setItem("velicina", velicina);
        localStorage.setItem("brzina", brzina);
        window.location.href="zmijica-igra.html";
        return;
    });
});
