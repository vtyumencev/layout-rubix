$(function () {

    let options =  {
        translation: {
            'Z': {
                pattern: /[+]/, optional: true
            }
        },
        onKeyPress: function(cep, e, field, options) {
            if(cep.length === 1 && cep[0] === '9') {
                field.val('+7 (9');
            }
            else if(cep.length === 1 && cep[0] === '3') {
                field.val('+7 (3');
            }
            else if(cep.length === 1 && cep[0] === '7') {
                field.val('+7 (');
            }
            else if(cep.length === 2 && cep[0] === '+' && cep[1] !== '7') {
                field.val('+');
            }
            else if(cep.length === 1 && cep[0] !== '8' && cep[0] !== '+') {
                field.val('');
            }
        }
    };
    $('input[type="tel"]').mask('Z0 (000) 000-00-00', options);

    // $("textarea").each(function () {
    //     this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
    // }).on("input", function () {
    //     this.style.height = "auto";
    //     this.style.height = (this.scrollHeight) + "px";
    // });

    // $('.mobile-bar__menu-button').on('click', function () {
    //     $('header.header').toggleClass('show-mobile-menu')
    // });

    // $('.ajax-form').on('submit', function (e) {
    //    e.preventDefault();
    //    let formEl = $(this);
    //
    //    $.ajax({
    //        type: formEl.attr('method'),
    //        url: formEl.attr('action'),
    //        data: formEl.serialize(),
    //        complete: function (response) {
    //            formEl.find('input').val('');
    //            $('.modal').modal('hide');
    //            $('#modal-inform').modal('show');
    //        }
    //    });
    //
    // });
    //
    // if($(document).outerWidth() <= 1000) {
    //
    //     $('.main-menu li.has-sub-menu > .main-menu__item-link').on('click', function (e) {
    //         e.preventDefault();
    //
    //         let el = $(this).parent();
    //         el.toggleClass('show');
    //
    //         if(el.hasClass('show')) {
    //             el.find('.sub-menu').slideDown(200);
    //         }
    //         else {
    //             el.find('.sub-menu').slideUp(200);
    //         }
    //     });
    //
    // }
})