$(document).ready(function(){
    let komentari = [];
    let ponude = [];
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
    $("#potvrdi").click(function(){
        let korime = $("#korime").val();
        $("#korime").val("");
        if(korime==""){
            $("#porukaGreske").html("Морате унети корисничко име како бисте се пријавили!");
            return;
        }
        localStorage.setItem("korisnik", korime);
        init();
        $("#logovanje").css("display", "none");
        $("#nakonLogovanja").css("display", "");
        
    });
    $("#odjava").click(function(){
        localStorage.removeItem("korisnik");
        $("#nakonLogovanja").css("display","none");
        $("#logovanje").css("display", "");
        $("#komentari").html('');
        $("#ponude").html('');
    }) 
    korisnik = localStorage.getItem("korisnik");
    if(korisnik==null){
        $("#nakonLogovanja").css("display","none");
        $("#logovanje").css("display", "");
    }
    else{
        $("#logovanje").css("display", "none");
        $("#nakonLogovanja").css("display","");   
    }
    $("#komentari").css("display", "");
    $("#ponude").css("display", "none");
    
    $("#porukaGreske").html("");

    function init(){
        document.getElementById('komentari').innerHTML="";
        document.getElementById('ponude').innerHTML="";
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
            if(komentar.korisnik == localStorage.getItem("korisnik")){
                let komentarDiv = document.createElement('div');
                komentarDiv.classList.add('komentar');
    
                var h4Element = document.createElement('h4');
                h4Element.textContent = "Дело: " + komentar.delo;
    
                let pElement = document.createElement('p');
                pElement.textContent = komentar.sadrzaj;
                pElement.style.display = "inline";
    
                let bElement = document.createElement('button');
                bElement.classList.add("btn");
                bElement.classList.add("btn-outline-custom");
                bElement.classList.add("kartica-dugme");
                bElement.innerHTML = "Обриши";
                bElement.style.display = "inline";
                bElement.style.marginLeft = "90%";

                bElement.addEventListener("click",function(){
                    alert("tu sam");
                    document.getElementById(localStorage.getItem("korisnik")+komentar.delo+komentar.sadrzaj).remove();
                    let index=-1;
                    for(let i=0; i<komentari.length;i++){
                        if(komentari[i].delo == komentar.delo && komentari[i].korisnik == komentar.korisnik && komentari[i].sadrzaj==komentar.sadrzaj){
                            index=i;
                            break;
                        }
                    }
                    komentari.splice(index,1);
                    localStorage.setItem("komentari", JSON.stringify(komentari));
                    
                });

                komentarDiv.appendChild(h4Element);
                komentarDiv.appendChild(pElement);
                komentarDiv.appendChild(bElement);
                komentarDiv.id = localStorage.getItem("korisnik")+komentar.delo + komentar.sadrzaj;
                var parentElement = document.getElementById('komentari');
                parentElement.appendChild(komentarDiv);
            }
        });
    
        ponude.forEach(ponuda => {
            if(ponuda.korisnik == localStorage.getItem("korisnik")) {
            
                let komentarDiv = document.createElement('div');
                komentarDiv.classList.add('komentar');
    
                var h4Element = document.createElement('h4');
                h4Element.textContent = "Дело: " + ponuda.delo;
    
                let pElement = document.createElement('p');
                pElement.textContent = ponuda.vrednost;
                pElement.style.display = "inline";
    
                let bElement = document.createElement('button');
                bElement.classList.add("btn");
                bElement.classList.add("btn-outline-custom");
                bElement.classList.add("kartica-dugme");
                bElement.innerHTML = "Обриши";
                bElement.style.display = "inline";
                bElement.style.marginLeft = "90%";
                bElement.addEventListener("click",function(){
                    alert("tu sam");
                    document.getElementById(localStorage.getItem("korisnik")+ponuda.delo+ponuda.vrednost).remove();
                    let index=-1;
                    for(let i=0; i<ponude.length;i++){
                        if(ponude[i].delo == ponuda.delo && ponude[i].korisnik == ponuda.korisnik && ponude[i].vrednost==ponuda.vrednost){
                            index=i;
                            break;
                        }
                    }
                    ponude.splice(index,1);
                    localStorage.setItem("ponude", JSON.stringify(ponude));
                    
                });

                komentarDiv.appendChild(h4Element);
                komentarDiv.appendChild(pElement);
                komentarDiv.appendChild(bElement);

                komentarDiv.id = localStorage.getItem("korisnik")+ponuda.delo+ponuda.vrednost;
    
                var parentElement = document.getElementById('ponude');
                parentElement.appendChild(komentarDiv);
            }
        });
    }

    init();
   


});