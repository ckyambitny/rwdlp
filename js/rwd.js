jQuery(document).ready(function($) {
    var
        watch_el = $('body'),
        el_height = watch_el.innerHeight();


    // Plusik dropdown
    $('ul.navmenu li a span').click(function(event) {

        event.preventDefault();

        // dostac sie do schowanego menu
        var child_menu = $(this).parent().parent().children('ul');

        // link w ktorym byl '+'
        var parent_link = $(this).parent();

        // sprawdzamy czy dropdown otwarty czy nie
        if (child_menu.hasClass('childopen')) {
            // jesli otwarty, trzeba go zamknac

            // usunac klase active z parenta(linku)
            $(parent_link).removeClass('active');
            // schowac dropdowna
            $(child_menu).removeClass('childopen');
            // zmienic ikonke na +
            $(this).html('+');

        } else {
            // jesli zamkniety trzeba go otworzyc

            // do linku dodajemy klase active
            $(parent_link).addClass('active');
            // pokaz dropdowna
            $(child_menu).addClass('childopen');
            // zmiana ikonki na - do zwiniecia
            $(this).html('-');

            

        }

    });
    //burger menu
    $('.navicon').click(function() {
        //jesli navi zamkniete
        if ($('.navmenu').css('display') == 'none') {
            //trzeba je otworzyc
            $('.navmenu').addClass('show');
            // burger zmiana klasy,
            $('.navicon').removeClass('closed').addClass('open');
            //zmiana favicona
            $('.navicon').children('.fa').removeClass('fa-navicon').addClass('fa-close');

        } else {
            //jesli navi otwarte to zakmnac
            $('.navmenu').removeClass('show');
            $('.navicon').removeClass('open').addClass('closed');
            $('.navicon').children('.fa').removeClass('fa-close').addClass('fa-navicon');

        }

    });

    // Responsywne iframeý, zachowane proporcje
    function responsiveIframe() {
        $('iframe').each(function() {
            var
                iw = $(this).width(),
                ih = $(this).height(),
                ip = $(this).parent().width(),
                ipw = ip / iw,
                ipwh = Math.round(ih * ipw);
            $(this).css({
                'width': ip,
                'height': ipwh,
            });
        });
    }

    //Zmiana rozmiaru iframe'a gdy zmiana rozmiaru okna
    $(window).resize(function() {
        responsiveIframe();
    });

    // Przy zmianie fontsize(ctrl+, ctrl scroll) zmien rozmiar 
    window.setInterval(function() {
        var new_height = watch_el.innerHeight();
        if (new_height != el_height) {
            el_height = new_height;
            responsiveIframe();
        }
    }, 200);


    //pierwsze liczenie iframe
    responsiveIframe();
});
