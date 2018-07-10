'use strict';

$(document).ready(function () {

    //Resize

    const SCREEN = {
        'mobile': 575,
        'mobile_hd': 767,
        'tablet': 991,
        'desktop': 1289
    };

    function checkWidth() {
        if ($(window).width() <= SCREEN.mobile_hd) {
            if ($('.m-control').hasClass('is-active')) {
                $('.m-menu').css({'display': 'block'});
            } else {
                $('.m-menu').css({'display': 'none'});
            }
        } else {
            $('.m-menu').fadeIn(200);
        }
    }

    checkWidth();
    $(window).resize(checkWidth);


    // Mobile control btn

    $('.m-control').on('click', function (e) {
        if ($(this).hasClass('is-active')) {
            $('.m-menu').fadeOut(200);
            $(this).removeClass('is-active');
        } else {
            $('.m-menu').fadeIn(200);
            $(this).addClass('is-active');
        }
    });


    //Aside bar functional

    $('.fixed-aside').on('click', function () {
        $(this).addClass('is-active');
    });

    $('.slideout__btn').on('click', function () {
        $(this).parent('.slideout').toggleClass('is-active');
    });

    $(document).on('touchstart click', function (e) {
        const fixedAside = $('.fixed-aside');
        if (e.target !== fixedAside[0] && !fixedAside.has(e.target).length){
            $('.fixed-aside').removeClass('is-active');
            $('.slideout').removeClass('is-active');
        }
    });


    //Dropdown button

    $('.dropdown__button').on('click', function () {
        $(this).siblings('.dropdown__content').toggleClass('is-visible');
    });

    $(document).on('touchstart click', function (event) {
        if ($(event.target).closest('.dropdown__button').length)
            return;
        $('.dropdown__content').removeClass('is-visible');
        event.stopPropagation();
    });


    //Slick slider

    $('#slider-main').slick({
        adaptiveHeight: true,
        slidesToShow: 5,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: (SCREEN.desktop + 1),
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: (SCREEN.tablet + 1),
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: (SCREEN.mobile_hd + 1),
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: (SCREEN.mobile + 1),
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });
//slider for Language course photo
     $('#course-gallery').slick({
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '#course-nav',
        appendArrows: $('.arrows-slider'),
        nextArrow: '<button class="next" type="button"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="prev" type="button"><i class="fas fa-chevron-left"></i></button>'
        

    });

     $('#course-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '#course-gallery',
        centerMode: false,
        focusOnSelect: true,
        arrows:false,
        infinite: true,
        dots:false,
                responsive: [
            {
                breakpoint: (SCREEN.desktop + 1),
                settings: {
          
                }
            },
            {
                breakpoint: (SCREEN.tablet + 1),
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: (SCREEN.mobile_hd + 1),
                settings: {
                    slidesToShow: 5
                   
                }
            },
            {
                breakpoint: (SCREEN.mobile + 1),
                settings: {
                    slidesToShow: 4
                 
                }
            }
        ]

    });
       $('.arrows-view').on('click', function () {
        lightbox.option({
            'positionFromTop': 200
        })
    });


 
//end slider for Language course photo

    $('#slider-aside').slick({
        adaptiveHeight: true,
        slidesToShow: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: (SCREEN.mobile + 1),
                settings: {
                    dots: true
                }
            }
        ]
    });
    (function() {
    if (window.pluso)if (typeof window.pluso.start == "function") return;
    if (window.ifpluso==undefined) { window.ifpluso = 1;
        var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
        s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
        s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
        var h=d[g]('body')[0];
        h.appendChild(s);
    }})();

    // Datapicker
    $('#js-date-picker, .js-date-picker,.js-date-picker-reg').datepicker({
        changeYear: true,
        yearRange: "1950:2018",
        dateFormat: "dd/mm/yy"
    });


    $('.js-clear_date_field').click(function () {
        $(this).next().val('');
        return false
    });


// Date changer (Events page)
    $('.js-change_date_field').on('click', function () {
        var prevInput = $(this).prev();
        var nextInput = $(this).next();
        $(this).before(nextInput).after(prevInput);
    });
// Switch visibility
    $('.js_icon-switcher').click(function () {
        $('.select_icon_popup').slideToggle();

    });
    $('.close_popup_button').click(function () {
        $('.select_icon_popup').slideUp();
    });


    /*
        Поместил инициализацию плагинов в условие для того что бы не показывало ошибки на страницах где плагин не требуется
        там где объявлен клас таймпикера или tinymce добавляем свой класс для инициализации плагина
     */
    if($('.js-tinymce,.js-tinymce-reviews').length > 0 ){
        // tinymce
        tinymce.init({
            selector: '.js-tinymce , .js-tinymce-reviews',
            height: 80,
            verify_html: false,
            menubar: false,
            statusbar: false,
            font_formats:'HelveticaNeueCyr',
            plugins: [
                ' autolink lists link  anchor ',
            ],
            toolbar: 'bold | bullist numlist | italic | link',

        });

    };
    if($('.js-time-picker').length > 0){
        // Time picker (Setting event page)
        $('.js-time-picker').timepicker({ 'timeFormat': 'h:i A' });
    };

    $('.js-selected_icon').each(function () {
        $(this).on('click',function () {
            var getIconStyle = $(this).attr('class');
            $('.js_choice-icon').html('<i class="'  + getIconStyle + '"></i>' + ' Choice icon');
            $('.select_icon_popup').slideUp();
        })
    });


    $('.js-validateBtn').on('click',function () {
       var chekOnEmpty = tinyMCE.activeEditor.getContent();
       if(chekOnEmpty.length == 0){
           $('.forum_editable_field label #mce_0_ifr').css('borderColor','red')
       }});


// Radio btns (Setting event page)
    $('.radio-group .btn').on('click', function () {
        $(this).closest('.radio-group').find('.btn').removeClass('active');
        $(this).addClass('active')

    });
    /*
    Выпадающие окна для блока отзывов
    */

    $('.js-user-list').click(function () {
        $(this).children('ul').slideToggle();
        $('.js-complain_by-user').children('ul').slideUp(0)
    });
    $('.js-complain_by-user').click(function () {
        $(this).children('ul').slideToggle();
        $('.js-user-list').children('ul').slideUp(0)
    });
    $('.js-delete-user-post').click(function () {
        $(this).parent().parent().parent().hide().css('display','none');
    });

    /* Передаём текст комментария в текстовое поле что бы прокомментировать чей то отзыв */
    $('.js-comment-current-post').on('click',function () {
        var getReviewContent = $(this).parent().parent().next().children('p').text() + '<br/>' + '-----------------';
        var chekOnEmpty = tinyMCE.activeEditor.getContent();
        if(chekOnEmpty.length == 0){
            tinyMCE.activeEditor.execCommand('mceInsertContent', false, getReviewContent + '<br/>')
        }else{
            chekOnEmpty.appendTo(tinyMCE.activeEditor.execCommand('mceInsertContent', false, '<br/>' + getReviewContent + '<br/>'))
        }
    });
    $('.js-review_btn-send').click(function () {
        var chekOnEmpty = tinyMCE.activeEditor.getContent();

        if(chekOnEmpty.length == 0){

            $('.forum_editable_field label #mce_0_ifr').css('borderColor','red')
        }
    });
});



