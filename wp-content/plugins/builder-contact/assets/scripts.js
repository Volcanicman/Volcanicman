(function ($) {

    function send_form(form) {
        var data = {
            action: 'builder_contact_send',
            'contact-name': $('[name="contact-name"]', form).val(),
            'contact-email': $('[name="contact-email"]', form).val(),
            'contact-subject': $('[name="contact-subject"]', form).val(),
            'contact-message': $('[name="contact-message"]', form).val(),
            'contact-sendcopy': $('[name="send-copy"]', form).val(),
            'contact-settings': $('.builder-contact-form-data', form).html()
        };
        if (form.find('[name="g-recaptcha-response"]').length > 0) {
            data['contact-recaptcha'] = form.find('[name="g-recaptcha-response"]').val();
        }

        window.location = 'mailto:volcanicint@gmail.com' +
            '?subject=Volcanic International' +
            '&body=' + data["contact-message"];

        form.find('.contact-message').html("Email app launch requested.").fadeIn();
        setInterval(function() {
            form.find('.contact-message').fadeOut();
        }, 5000);
        form.removeClass('sending');
        $('body').trigger('builder_contact_message_sent', [form, data.themify_message]);
        form[0].reset();
        if ( typeof grecaptcha === 'object' ) {
            grecaptcha.reset();
        }
    }
    $(document).ready(function(){
        if($('form.builder-contact').length>0){
            function callback(){
                $('body').on('submit', '.builder-contact', function (e) {
                    e.preventDefault();
                    if ($(this).hasClass('sending')) {
                        return false;
                    }
                    $(this).addClass('sending').find('.contact-message').fadeOut();
                    send_form($(this));
                });
            }
            if($('.builder-contact-field-captcha').length>0){
                if(typeof grecaptcha==='undefined'){
                    Themify.LoadAsync('//www.google.com/recaptcha/api.js',callback,'',true,function(){
                        return typeof grecaptcha!=='undefined';
                    });
                }
                else{
                    callback();
                }
            }
            else{
                callback();
            }
           
       }
    });
}(jQuery));