$(document).ready(iniciar);
var moviment = 1;
function iniciar() {
    $('#head').css("background-color", "blue");
    $('#setBlue').click(setBlueColor);
    $('#setRed').click(setRedColor);
    $('#setInvisible').click(setInv);
    $('#setVisible').click(setVis);
    $('#toggleVisible').click(toggleVis);
    $('#incSize').click(incSize);
    $('#decSize').click(decSize);
    $('#incRight').click(incRight);
    $('#decRight').click(decRight);
    $('#movContinu').click(choose);
}
function setBlueColor() {
    $('#head').css("background-color", "blue");
}
function setRedColor() {
    $('#head').css("background-color", "red");
}
function setInv() {
    $('#head').fadeOut();
}
function setVis() {
    $('#head').fadeIn();
}
function toggleVis() {
    $('#head').fadeToggle();
}
function incSize() {
    $('#head').animate({
        height: "+=50"
    },
            {
                duration: 1000
            }
    );
}
function decSize() {
    $('#head').animate({
        height: "-=50"
    },
            {
                duration: 1000
            }
    );
}
function incRight() {
    $('#divMobil').animate({
        right: "+=50"
    },
            {
                duration: 1500,
                step: function (now, fx) {
                    $('#divMobil').html(now);
                },
            }
    );
}
function decRight() {
    $('#divMobil').animate({
        right: "-=50"
    },
            {
                duration: 1500,
                step: function (now, fx) {
                    $('#divMobil').html(now);
                },
            }
    );
}
function choose(){
    if(moviment == 1){
        movimentContinu();
    }else{
        stopMoviment();
    }
}
function movimentContinu() {
        $('#divMobil').css("background-color", "orange");
        $('#divMobil').animate({
            right: "-=50"
        },
                {
                    duration: 1000,
                    complete: function () {
                        
                        $('#divMobil').animate({
                            right: "+=50"
                        },
                        {
                            duration: 1000,
                            complete: function(){
                                movimentContinu();
                            }
                        }
                        )

                    }
                }
        );
    
        moviment--;
}

function stopMoviment(){
        $('#divMobil').css("background-color", "green");
        $('#divMobil').stop();
        moviment++;
}