(function () {
    var $showButton = $('.showButton');
    var size = 80;
    var $window = $(window);

    $window.on('scroll', function () {
        var $windowScrollTop = $window.scrollTop();
        var $height = $window.innerHeight();
        var distance = $height - $windowScrollTop;
        var $navbar = $('.main-nav');
        if (distance > size) {
            $navbar.removeClass('fixedNav');
            $showButton.removeClass('fixedButton');
        }
        else {
            if (!$navbar.hasClass('fixedNav')) {
                $navbar.addClass('fixedNav');
                $showButton.addClass('fixedButton');
            }
        }
    });

    $window.on('load', function () {
        var $brandText = $('.brandText');
        $.getJSON('brands.json')
            .always(function (data) {
                $brandText.text(data[0].description);
            });
        if ($('.showButton').css('display') !== 'none') {
            size /= 2;
        }
    });

    $('a').on('click', function (e) {
        e.preventDefault();
    });

    $('a img').on('click', function () {
        var $brandText = $('.brandText');
        var $t = $(this);
        $('a img').closest('li').removeClass('active');
        $t.closest('li').addClass('active');
        $.getJSON('brands.json')
            .always(function (data) {
                switch ($t.closest('li').attr('id')) {
                    case 'nike':
                        $brandText.text(data[0].description);
                        break;
                    case 'gucci':
                        $brandText.text(data[1].description);
                        break;
                    case 'adidas':
                        $brandText.text(data[2].description);
                        break;
                    default:
                        break;
                }
            });
    });

    //$()

    $showButton.on('click', function () {
        var $ul = $('.main-nav ul');
        //if ($ul.css('display') == 'block') {
        //    $ul.css('display', 'none');
        //}
        //else {
        //    $ul.css('display', 'block');
        //}
        if ($ul.hasClass('special')) {
            $ul.removeClass('special');
        }
        else {
            $ul.addClass('special');
        }
    });

    $('.copyright').text('\u00A9 ' + new Date().getFullYear() + ', London Tube');
})();