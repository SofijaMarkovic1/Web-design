$(document).ready(function(){
    let umetnine = [
        //слике
        {"naziv": "Cafe Terace at night",
        "autor": "Vincent Van Gogh",
        "tip" : "painting",
        "putanja" : "../../images/artworks/paintings/cafeTeraceAtNight.JPG",
        "link" : "../english/cafeTeraceAtNight.html"
        },
        {"naziv": "Sunflowers",
        "autor": "Vincent Van Gogh",
        "tip" : "painting",
        "putanja" : "../../images/artworks/paintings/sunflowers.jpg",
        "link" : "../english/sunflowers.html"
        },
        {"naziv": "Living on the moon",
        "autor": "Vincent Van Gogh",
        "tip" : "painting",
        "putanja" : "../../images/artworks/paintings/livingOnTheMoon.jpeg",
        "link" : "../english/livingOnTheMoon.html"
        },
        {"naziv": "A girl before a mirror",
        "autor": "Pablo Picasso",
        "tip" : "painting",
        "putanja" : "../../images/artworks/paintings/girlBeforeAMirror.jpeg",
        "link" : "../english/girlBeforeAMirror.html"
        }
    ];
    $("#pretraga").click(function(){
        let naziv = $("#naziv").val();
        naziv = naziv.toLowerCase();
        $("#dela").html("");
        let dela = [];
        umetnine.forEach(umetnina => {
            if(umetnina.naziv.toLowerCase().includes(naziv)){
                dela.push(umetnina);
            }
        });
        if(dela.length==0){
            var p = $('<p>').css({"color" : "red", "font-family" : "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-size": "22px"}).html("No matching artworks.");
            $('#dela').append(p);
        }
        else{
            dela.forEach(delo => {
            var div = $('<div>').addClass('card kartica border-dark');
            var img = $('<img>').addClass('card-img-top').attr('src', delo.putanja);
            var divCardBody = $('<div>').addClass('card-body telo-kartice');
            var a;
            a = $('<a>').attr('href', delo.link).html('<h4 class="card-title">' + delo.naziv + '</h4>');
            
            // if(delo.tip=="painting") a = $('<a>').attr('href', 'cafeTeraceAtNight.html').html('<h4 class="card-title">' + delo.naziv + '</h4>');
            // else if(delo.tip=="sculpture") a = $('<a>').attr('href', 'michelangeloDavid.html').html('<h4 class="card-title">' + delo.naziv + '</h4>');
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
                    if(umetnine[i].naziv > umetnine[j].naziv){
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
                    if(umetnine[i].naziv < umetnine[j].naziv){
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
                    if(umetnine[i].autor > umetnine[j].autor){
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
                    if(umetnine[i].autor < umetnine[j].autor){
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
            
            // if(umetnina.tip=="painting") a = $('<a>').attr('href', 'cafeTeraceAtNight.html').html('<h4 class="card-title">' + umetnina.naziv + '</h4>');
            // else if(umetnina.tip=="sculpture") a = $('<a>').attr('href', 'michelangeloDavid.html').html('<h4 class="card-title">' + umetnina.naziv + '</h4>');
            // else a = $('<a>').attr('href', 'tutankhamunMask.html').html('<h4 class="card-title">' + umetnina.naziv + '</h4>');
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
            
        // if(umetnina.tip=="painting") a = $('<a>').attr('href', 'cafeTeraceAtNight.html').html('<h4 class="card-title">' + umetnina.naziv + '</h4>');
        // else if(umetnina.tip=="sculpture") a = $('<a>').attr('href', 'michelangeloDavid.html').html('<h4 class="card-title">' + umetnina.naziv + '</h4>');
        // else a = $('<a>').attr('href', 'tutankhamunMask.html').html('<h4 class="card-title">' + umetnina.naziv + '</h4>');
        divCardBody.append(a);
        div.append(img, divCardBody);
        $('#dela').append(div);
    });
});