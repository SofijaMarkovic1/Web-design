$(document).ready(function(){
    let umetnine = [
        //скулптуре
        {"naziv": "Ника са Самотраке",
        "naziv1" : "Nika sa Samotrake",
        "autor": "непознат",
        "autor1" : "nepoznat",
        "tip" : "скулптура",
        "putanja" : "../../images/artworks/sculptures/wingedVictory.jpg",
        "link" : "../serbian/wingedVictory.html"
        },
        {"naziv": "Давид",
        "naziv1" : "David",
        "autor": "Микеланђело Буонароти",
        "autor1" : "Mikelandjelo Buonaroti",
        "tip" : "скулптура",
        "putanja" : "../../images/artworks/sculptures/michelangeloDavid.jpg",
        "link" : "../serbian/michelangeloDavid.html"
        },
        {"naziv": "Пољубац",
        "naziv1" : "Poljubac",
        "autor": "Огист Роден",
        "autor1" : "Ogist Roden",
        "tip" : "скулптура",
        "putanja" : "../../images/artworks/sculptures/rodinTheKiss.jpg",
        "link" : "../serbian/rodinTheKiss.html"
        }
    ]
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
    });
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