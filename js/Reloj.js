
//Aplicacion Reloj

//Aplicacion Reloj

function agregoCero(cero){
    if (cero < 10){
        cero = '0' + cero;
    } 
    return cero;
}

function reloj(){

    //variables

    var fechaHora = new Date ();
    var dia = fechaHora.getDate() < 10 ? "0" + fechaHora.getDate(): fechaHora.getDate();

    h = fechaHora.getHours();
    m = fechaHora.getMinutes();
    s = fechaHora.getSeconds();

    h = agregoCero(h);
    m = agregoCero(m);
    s = agregoCero(s);

    var divReloj = document.getElementById("reloj");
    divReloj.innerHTML = `${h}:${m}:${s}`;

    //Reloj Vivo
    setTimeout('reloj()',500);


}

reloj();

//Hasta aqui funciona el scritp

///////////////////////////////////////////////////////////


//Londres

function relojlondon({
    var fechaHoraLondon = new Date ();
    var diaLondon = fechaHoraLondon.getDate() < 10 ? "0" + fechaHoraLondon.getDate(): fechaHoraLondon.getDate();

function resta(fechaHoraLondon,1){
        var resultado = fechaHoraLondon-1;
        return resultadoLondres;
    }

    h = agregoCero(h);
    m = agregoCero(m);
    s = agregoCero(s);

    h = resultadoLondres.getHours();
    m = fechaHoraLondon.getMinutes();
    s = fechaHoraLondon.getSeconds();

})





var divrelojlondon = document.getElementById("relojlondon");
divrelojlondon.innerHTML = `${h}:${m}:${s}`;

//Reloj Vivo
setTimeout('relojlondon()',500);


}

relojlondon();




//este tampoco me funciona

//LOS ANGELES

function losAngeles({
    var fechaHoraLA = new Date ();
    var diaLondon = fechaHoraLA.getDate() < 10 ? "0" + fechaHoraLA.getDate(): fechaHoraLA.getDate();

    function resta(fechaHoraLA,7){
        var resultado = fechaHoraLA-1;
        return resultadoLA;
    }



    h = resultadoLA.getHours();
    m = fechaHoraLA.getMinutes();
    s = fechaHoraLA.getSeconds();

    h = agregoCero(h);
    m = agregoCero(m);
    s = agregoCero(s);
})




var divrelojLA = document.getElementById("relojLA");
divrelojLA.innerHTML = `${h}:${m}:${s}`;

//Reloj Vivo
setTimeout('relojLA()',500);


}

relojLA();


