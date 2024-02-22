$(document).ready(function(){
    let umetnine = [
        //остало
        {"naziv": "Биста Нефертити",
        "naziv1" : "Bista Nefertiti",
        "autor": "непознат",
        "autor1" : "nepoznat",
        "tip" : "остало",
        "putanja" : "../../images/artworks/others/nefertitiBuste.jpg",
        "link" : "../serbian/nefertitiBust.html"
        },
        {"naziv": "Тутанкамонова маска",
        "naziv1" : "Tutankamonova maska",
        "autor": "непознат",
        "autor1" : "nepoznat",
        "tip" : "остало",
        "putanja" : "../../images/artworks/others/tutankhamunMask.jpg",
        "link" : "../serbian/tutankhamunMask.html"
        },
        {"naziv": "Фигура из Лепенског Вира",
        "naziv1" : "Figura iz Lepenskog Vira",
        "autor": "непознат",
        "autor1" : "nepoznat",
        "tip" : "остало",
        "putanja" : "../../images/artworks/others/lepenskiVir.jpg",
        "link" : "../serbian/lepenskiVir.html"
        }
    ];
    $("#pretraga").click(function(){
        let naziv = $("#naziv").val();
        naziv = naziv.toLowerCase();
        $("#dela").html("");
        let dela = [];
        umetnine.forEach(umetnina => {
            if(umetnina.naziv.toLowerCase().includes(naziv) || umetnina.naziv1.toLowerCase().includes(naziv)){
                dela.push(umetnina);
            }
        });
        if(dela.length==0){
            var p = $('<p>').css({"color" : "red", "font-family" : "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-size": "22px"}).html("Не постоји уметнина која одговара претрази.");
            $('#dela').append(p);
        }
        else{
            dela.forEach(delo => {
            var div = $('<div>').addClass('card kartica border-dark');
            var img = $('<img>').addClass('card-img-top').attr('src', delo.putanja);
            var divCardBody = $('<div>').addClass('card-body telo-kartice');
            var a;
            a = $('<a>').attr('href', delo.link).html('<h4 class="card-title">' + delo.naziv + '</h4>');
            
            // if(delo.tip=="слика") a = $('<a>').attr('href', 'cafeTeraceAtNight.html').html('<h4 class="card-title">' + delo.naziv + '</h4>');
            // else if(delo.tip=="скулптура") a = $('<a>').attr('href', 'michelangeloDavid.html').html('<h4 class="card-title">' + delo.naziv + '</h4>');
            // else a = $('<a>').attr('href', 'tutankhamunMask.html').html('<h4 class="card-title">' + delo.naziv + '</h4>');
            divCardBody.append(a);
            div.append(img, divCardBody);
            $('#dela').append(div);
            });
        }

    });
    $("#sortiraj").click(function(){
        $('#dela').html("");
        let tip = $("#select").val();
        if(tip==2){
            for(let i=0; i<umetnine.length;i++){
                for(let j=0; j<umetnine.length;j++){
                    if(i==j) continue;
                    if(umetnine[i].naziv1 > umetnine[j].naziv1){
                        let tmp = umetnine[i];
                        umetnine[i] = umetnine[j];
                        umetnine[j] = tmp;
                    }
                }
            }
        }
        else if(tip==1){
            for(let i=0; i<umetnine.length;i++){
                for(let j=0; j<umetnine.length;j++){
                    if(i==j) continue;
                    if(umetnine[i].naziv1 < umetnine[j].naziv1){
                        let tmp = umetnine[i];
                        umetnine[i] = umetnine[j];
                        umetnine[j] = tmp;
                    }
                }
            }
        }
        else if(tip==4){
            for(let i=0; i<umetnine.length;i++){
                for(let j=0; j<umetnine.length;j++){
                    if(i==j) continue;
                    if(umetnine[i].autor1 > umetnine[j].autor1){
                        let tmp = umetnine[i];
                        umetnine[i] = umetnine[j];
                        umetnine[j] = tmp;
                    }
                }
            }
        }
        else if(tip==3){
            for(let i=0; i<umetnine.length;i++){
                for(let j=0; j<umetnine.length;j++){
                    if(i==j) continue;
                    if(umetnine[i].autor1 < umetnine[j].autor1){
                        let tmp = umetnine[i];
                        umetnine[i] = umetnine[j];
                        umetnine[j] = tmp;
                    }
                }
            }
        }
        umetnine.forEach(umetnina => {
            var div = $('<div>').addClass('card kartica border-dark');
            var img = $('<img>').addClass('card-img-top').attr('src', umetnina.putanja);
            var divCardBody = $('<div>').addClass('card-body telo-kartice');
            var a;
            a = $('<a>').attr('href', umetnina.link).html('<h4 class="card-title">' + umetnina.naziv + '</h4>');
            divCardBody.append(a);
            div.append(img, divCardBody);
            $('#dela').append(div);
        });
    })
    umetnine.forEach(umetnina => {
        var div = $('<div>').addClass('card kartica border-dark');
        var img = $('<img>').addClass('card-img-top').attr('src', umetnina.putanja);
        var divCardBody = $('<div>').addClass('card-body telo-kartice');
        var a;
        a = $('<a>').attr('href', umetnina.link).html('<h4 class="card-title">' + umetnina.naziv + '</h4>');
        divCardBody.append(a);
        div.append(img, divCardBody);
        $('#dela').append(div);
    });
});