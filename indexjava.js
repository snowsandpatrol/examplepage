

$(document).ready(function() {

  
   $('div').mouseenter(function() {
        $('div').fadeTo('fast',1);
    });
   $('div').mouseenter(function() {
        $('div').fadeTo('fast',0.5);


 });

if (mobile == true) {

    $('div.three').insertBefore($('div.two'));
}
