$(document).ready(init);
var cards = {};
var imgSelected;
var imgReplaced;
var win = false;
var hayCarta = false;
var correcta = 0;
var fallo=0;
var imagenCartaReverso= $('<img src="img/dorsoOW.png"/>');
function init() {

    posiciones_correctas = {
        casilla1: "img/img1.jpg",
        casilla2: "img/img4.jpg",
        casilla3: "img/img7.jpg",
        casilla4: "img/img2.jpg",
        casilla5: "img/img5.jpg",
        casilla6: "img/img8.jpg",
        casilla7: "img/img3.jpg",
        casilla8: "img/img6.jpg",
        casilla9: "img/img9.jpg",
    };
    $('#availableCards > div > div > img').click(moveCardToSelected);
    $('#tablero > div > div > img').click(moveToTable);
    $('#check').click(checkWin);
}

function moveCardToSelected() {
    if ($('#cardSelected').children().length == 0) {
        hayCarta = true;
        imgSelected = $(this);
        $('#cardSelected').append(this);
    } else {
        imgReplaced = imgSelected;
        imgSelected = $(this);
        var atrib = $("#cardSelected > img").attr('nCard');
        $(atrib).append(imgReplaced);
        $('#cardSelected').append(imgSelected);
        imgReplaced = "";
    }
}

function moveToTable() {
    //$(this).attr('src', imgSelected.attr('src'));
    //$('#cardSelected > img').remove();
    //imgSelected = "";
    var padre=$(this).parent();
    $(this).remove();
    padre.append(imgSelected);
}

function checkWin() {
    $('#tablero > div > div > img').each(function (index) {
        var src=$(this).attr('src');
        var src2=posiciones_correctas["casilla"+(index+1)];
        if (src == src2) {
            correcta += 1;
        } else {
            fallo+=1;
        }
    });
    if (correcta == 9) {
        victory();
    }
    else{
        defeat();
    }
}

function victory() {
    alert('Has colocado todas las cartas correctamente. ¡Eres el Rey de los puzles!');
    correcta = 0;
    fallo=0;
    //reset();
}
function defeat() {
    alert('Eres malisimo haciendo puzles. Dedícate a otra cosa.');
    fallo = 0;
    correcta=0;
    //reset();
}

/*function reset(){
    $('#tablero > div > div').each(function(index){
        var padre = $(this).parent();
        $(this).remove();
        $(padre).append(imagenCartaReverso);
    });
    $('#availableCards >').each(function (index){
        
    });
    //$('#availableCards ').attr();
}*/