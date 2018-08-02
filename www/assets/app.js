$(document).on('submit','#contact',function(e){
    e.preventDeafult();
    alert('your message has been sent');
    $('#contact-form')[0].reset();
});