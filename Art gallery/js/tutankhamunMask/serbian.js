$(document).ready(function(){
    $("#komentar").click(function(){
        $("#komentar").addClass("active");
        $("#komentari").css("display", "");
        $("#ponuda").removeClass("active");
        $("#ponude").css("display", "none");
       
    });
    $("#ponuda").click(function(){
        $("#ponuda").addClass("active");
        $("#ponude").css("display", "");
        $("#komentar").removeClass("active");
        $("#komentari").css("display", "none");
    });
    $("#objaviKomentar").click(function(){
        korisnik = localStorage.getItem("korisnik");
        if(korisnik == null || korisnik == ""){
            $("#porukaGreske").css("display", "");
            return;
        }
        sadrzaj = $("#sadrzajKomentara").val();
        delo = $("#delo").val();
        
        komentar = {
            "korisnik" : korisnik,
            "delo" : delo,
            "sadrzaj" : sadrzaj
        };
        
        komentari.push(komentar);

        localStorage.setItem("komentari", JSON.stringify(komentari));

        document.location.reload();
    });

    $("#potvrdiPonudu").click(function(){
        korisnik = localStorage.getItem("korisnik");
        if(korisnik == null || korisnik == ""){
            $("#porukaGreske").css("display", "");
            return;
        }
        vrednost = $("#sadrzajPonude").val();
        delo = $("#delo").val();
        
        ponuda = {
            "korisnik" : korisnik,
            "delo" : delo ,
            "vrednost" : vrednost + "$"
        };
        
        ponude.push(ponuda);

        localStorage.setItem("ponude", JSON.stringify(ponude));

        document.location.reload();
    });

    $("#porukaGreske").css("display", "none");
    $("#komentari").css("display", "");
    $("#ponude").css("display", "none");


    komentari = localStorage.getItem("komentari");
    if(komentari == null || komentari == ""){
        komentari = [];
        localStorage.setItem("komentari", komentari);
    }
    else{
        komentari = JSON.parse(komentari);
    }

    ponude = localStorage.getItem("ponude");
    if(ponude == null || ponude == ""){
        ponude = [];
        localStorage.setItem("ponude", ponude);
    }
    else{
        ponude = JSON.parse(ponude);
    }

    komentari.forEach(komentar => {
        if(komentar.delo == $("#delo").val()){
            let komentarDiv = document.createElement('div');
            komentarDiv.classList.add('komentar');

            var h4Element = document.createElement('h4');
            h4Element.textContent = komentar.korisnik;

            let pElement = document.createElement('p');
            pElement.textContent = komentar.sadrzaj;

            komentarDiv.appendChild(h4Element);
            komentarDiv.appendChild(pElement);

            var parentElement = document.getElementById('komentari');
            parentElement.appendChild(komentarDiv);
        }
    });

    ponude.forEach(ponuda => {
        if(ponuda.delo == $("#delo").val()){
            let komentarDiv = document.createElement('div');
            komentarDiv.classList.add('komentar');

            var h4Element = document.createElement('h4');
            h4Element.textContent = ponuda.korisnik;

            let pElement = document.createElement('p');
            pElement.textContent = ponuda.vrednost;

            komentarDiv.appendChild(h4Element);
            komentarDiv.appendChild(pElement);

            var parentElement = document.getElementById('ponude');
            parentElement.appendChild(komentarDiv);
        }
    })
    
});

