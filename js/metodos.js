$(function () {

    $('a[href*=#]').click(function () {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({scrollTop: targetOffset}, 1000);

                return false;

            }

        }

    });

});


function efectoMail(y) {

    var elemento = document.getElementById("emailEfecto");

    if (y == 0) {
        if (elemento.value.length == 0) {
            document.getElementById("emailEfecto").style.backgroundColor = 'rgba(0, 0, 0, 0)';

        } else {
            document.getElementById("emailEfecto").style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
        }
    } else if (y == 1) {
        document.getElementById("emailEfecto").style.backgroundColor = 'rgba(0, 0, 0, 0.25)';

    } else {
        if (elemento.value.length == 0) {
            document.getElementById("emailEfecto").style.backgroundColor = 'rgba(0, 0, 0, 0)';
        } else {
            document.getElementById("emailEfecto").style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
        }
    }
}


function efectoAsunto(x) {

    var elemento2 = document.getElementById("asuntoEfecto");

    if (x == 0) {
        if (elemento2.value.length == 0) {
            document.getElementById("asuntoEfecto").style.backgroundColor = 'rgba(0, 0, 0, 0)';
        } else {
            document.getElementById("asuntoEfecto").style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
        }
    } else if (x == 1) {
        document.getElementById("asuntoEfecto").style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
    } else {
        if (elemento2.value.length == 0) {
            document.getElementById("asuntoEfecto").style.backgroundColor = 'rgba(0, 0, 0, 0)';
        } else {
            document.getElementById("asuntoEfecto").style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
        }
    }
}









