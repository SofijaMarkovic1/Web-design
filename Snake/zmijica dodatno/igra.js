let zmija = [];
let levaIvica = [];
let desnaIvica = [];
let gornjaIvica = [];
let donjaIvica = [];
let dim=15;
let smer = null;
let kraj = false;
let interval = 400;
let now = 0;
let best;
let STRELICA_GORE = 38;
let STRELICA_DOLE = 40;
let STRELICA_LEVO = 37;
let STRELICA_DESNO = 39;
let x = null;
let hrana = null;
let igrac ="";
let top5 = [];
let superHrana = -1;
function dodajSuperHranu(){
    if(superHrana!=-1){
        $("#superHrana").remove();
    }
    superHrana = Math.floor(Math.random() * dim * dim);
    while(zmija.includes(superHrana) || hrana==superHrana){
        superHrana = Math.floor(Math.random() * dim * dim);
    }
    let img = document.createElement("img");
    img.src = "zmijica dodatno/superhrana.jpg";
    img.setAttribute("height", "27px");
    img.setAttribute("width", "27px");
    img.setAttribute("id", "superHrana");
    //$("#" + hrana).css("background-color", "red");
    $("#" + superHrana).append(img);
    setTimeout(function(){
        if(superHrana!=-1){
            $("#superHrana").remove();
            superHrana = -1;
        }
    }, 4000);
}
function dodajKorisnika(ime, rezultat){
    let korisnik = {
        "ime" : ime,
        "rezultat" : rezultat
    }
    if(top5.length<5){
        top5 = top5.concat([korisnik]);
        for(let i=0; i<top5.length; i++){
            for(let j=0; j<top5.length; j++){
                if(top5[i].rezultat>top5[j].rezultat){
                    let tmp = top5[i];
                    top5[i] = top5[j];
                    top5[j] = tmp;
                }
            }
        }
    }
    else if(rezultat>top5[4].rezultat){ //ako uopste treba da udje u listu
        top5.pop();
        top5 = top5.concat([korisnik]);
        for(let i=0; i<top5.length; i++){
            for(let j=0; j<top5.length; j++){
                if(top5[i].rezultat>top5[j].rezultat){
                    let tmp = top5[i];
                    top5[i] = top5[j];
                    top5[j] = tmp;
                }
            }
        }
    }
    localStorage.setItem("top5", JSON.stringify(top5));
}
function dodajUZmiju(clanak){
    if(zmija.includes(clanak)) return;
    zmija.push(clanak);
    $("#" + clanak).css("background-color", "green");
}
function dodajNoviClanak(){
    let noviClanak = zmija[zmija.length-1];
    if(smer=="levo"){
        if(desnaIvica.includes(zmija[zmija.length-1])){
            if(gornjaIvica.includes(zmija[zmija.length-1])){
                noviClanak+=dim;
            }
            else noviClanak-=dim;
        }
        else noviClanak+=1;
    }
    else if(smer=="desno"){
        if(levaIvica.includes(zmija[zmija.length-1])){
            if(gornjaIvica.includes(zmija[zmija.length-1])){
                noviClanak+=dim;
            }
            else noviClanak-=dim;
        }
        else noviClanak-=1;
    }
    else if(smer=="gore"){
        if(donjaIvica.includes(zmija[zmija.length-1])){
            if(levaIvica.includes(zmija[zmija.length-1])){
                noviClanak+=1;
            }
            else noviClanak-=1;
        }
        else noviClanak+=dim;
    }
    else{
        if(gornjaIvica.includes(zmija[zmija.length-1])){
            if(levaIvica.includes(zmija[zmija.length-1])){
                noviClanak+=1;
            }
            else noviClanak-=1;
        }
        else noviClanak-=dim;
    }
    zmija.push(noviClanak);
    $("#" + noviClanak).css("background-color", "green");

}
function dodajHranu(){
    hrana = Math.floor(Math.random() * dim * dim);
    while(zmija.includes(hrana) || superHrana==hrana){
        hrana = Math.floor(Math.random() * dim * dim);
    }
    let img = document.createElement("img");
    img.src = "zmijica dodatno/hrana2.png";
    img.setAttribute("height", "27px");
    img.setAttribute("width", "27px");
    img.setAttribute("id", "hrana");
    //$("#" + hrana).css("background-color", "red");
    $("#" + hrana).append(img);
    
}
function init(){
    let test = localStorage.getItem("top5");
    if(test==null){
        top5 = [];
        localStorage.setItem("top5", []);
    }
    else{
        top5 = JSON.parse(test);
    }

    test = localStorage.getItem("velicina");
    if(test!=null){
        dim = JSON.parse(test);
        localStorage.removeItem("velicina");
    }
    test = localStorage.getItem("brzina");
    if(test!=null){
        interval = JSON.parse(test);
        localStorage.removeItem("brzina");
    }

    //alert("brzina:" + interval + " velicina:" + dim);
    let tabela = $("#tabela");
    for(let i=0; i<dim; i++){
        let red = $("<tr></tr>");
        for(let j=0; j<dim;j++){
            if(i==0) gornjaIvica.push(i*dim+j);
            if(i==dim-1) donjaIvica.push(i*dim+j);
            if(j%dim==0) levaIvica.push(i*dim+j);
            if(j%dim==dim-1) desnaIvica.push(i*dim+j);
            
            let polje = $("<td></td>");
            let p = (i*dim+j)%2==0? "parno" : "neparno";
            polje.attr("id", i*dim+j).attr("class", p).attr("parnost", p);
            red.append(polje);
        }
        tabela.append(red);
    }
    best = localStorage.getItem("best");
    if(best==null) {
        localStorage.setItem("best", 0);
        best=0;
    }

    document.getElementById("now").innerHTML = now;
    document.getElementById("best").innerHTML = best;
    let z = Math.floor(Math.random() * dim * dim);
    while(levaIvica.includes(z) || desnaIvica.includes(z) || gornjaIvica.includes(z) || donjaIvica.includes(z)){
        z = Math.floor(Math.random() * dim * dim);
    }
    dodajUZmiju(z);
    dodajHranu();

    let x = Math.floor(Math.random() * 4);
    switch(x){
        case 0:
            smer="levo"
            break;
        case 1:
            smer = "desno";
            break;
        case 2:
            smer = "gore";
            break;
        case 3:
            smer = "dole";
            break;
    }
}
function dodajDogadjaje(){
    //na taster gore smer se menja na gore itd
    $(document).keydown(function(event){
        if (event.which === STRELICA_GORE) {
            smer = "gore";
          } else if (event.which === STRELICA_DOLE) {
            smer = "dole";
          } else if (event.which === STRELICA_LEVO) {
            smer = "levo";
          } else if (event.which === STRELICA_DESNO) {
            smer = "desno";
          }
    });
    $(document).keyup(function(event){
        if (event.which === STRELICA_GORE) {
            smer = "gore";
          } else if (event.which === STRELICA_DOLE) {
            smer = "dole";
          } else if (event.which === STRELICA_LEVO) {
            smer = "levo";
          } else if (event.which === STRELICA_DESNO) {
            smer = "desno";
          }
    });
}
function pomeri(){
    if((smer=="levo" && levaIvica.includes(zmija[0])) ||
    (smer == "desno" && desnaIvica.includes(zmija[0])) || 
    (smer == "gore" && gornjaIvica.includes(zmija[0])) ||
    (smer == "dole" && donjaIvica.includes(zmija[0]))) {
        clearInterval(x);
        clearInterval(y);
        kraj = true;
        igrac = prompt("Kraj igre! Unesite svoje ime");
        if(igrac==null){
            window.location.href="zmijica-uputstvo.html";
            return;
        }
        dodajKorisnika(igrac, now);
        localStorage.setItem("rezultat", now);
        localStorage.setItem("igrac", igrac);
        localStorage.setItem("best", best);
        window.location.href="zmijica-rezultati.html";
        return;
    }
    let staro = zmija[0];
    let novo = null;
    switch(smer){
        case "levo":
            novo = staro - 1;
            break;
        case "desno":
            novo = staro + 1;
            break;
        case "gore":
            novo = staro - dim;
            break;
        case "dole":
            novo = staro + dim;
            break;
    }
    if(zmija.includes(novo)){
        clearInterval(x);
        clearInterval(y);
        kraj = true;
        igrac = prompt("Kraj igre! Unesite svoje ime")
        if(igrac==null){
            window.location.href="zmijica-uputstvo.html";
            return;
        }
        dodajKorisnika(igrac, now);
        localStorage.setItem("rezultat", now);
        localStorage.setItem("igrac", igrac);
        localStorage.setItem("best", best);
        window.location.href="zmijica-rezultati.html";
        return;
    }
    for(let i=0; i<zmija.length; i++){
        staro = zmija[i];
        zmija[i] = novo;
        let boja;
        if($("#" + staro).attr("parnost")=="parno") boja = "#243755";
        else boja = "#1c2e4a";
        $("#" + staro).css("background-color", boja);
        $("#" + novo).css("background-color", "green");
        novo = staro;
    }
    if(zmija[0]==hrana){
        $("#hrana").remove();
        now+=1;
        document.getElementById("now").innerHTML = now;
        if(now>best) {
            best = now;
            document.getElementById("best").innerHTML = best;
        }
        dodajHranu();
        dodajNoviClanak();
    }
    if(zmija[0]==superHrana){
        $("#superHrana").remove();
        superHrana=-1;
        now+=10;
        document.getElementById("now").innerHTML = now;
        if(now>best) {
            best = now;
            document.getElementById("best").innerHTML = best;
        }
        dodajNoviClanak();
    }
}
function igra(){
    init();
    dodajDogadjaje();
    x = setInterval(pomeri, interval);
    y = setInterval(dodajSuperHranu, 10000);
}