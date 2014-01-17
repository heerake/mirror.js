$(document).ready(function(){
    $('.outworldparagraphs').each(function() {
        var outp = $(this);
		alert(outp.html());
        var outa = outp.html().split('');
        var outlength = outa.length;
        var inp = $(this).next('.inworldparagraphs');
        inp.hide();
        var ina = inp.html().split('');
        var inlength = ina.length;
        var outhtml = "";
        var delay = outp.attr('delay');
        if (delay == undefined) {
            delay = 5000;
        }
        for (var i = 0; i < outlength; i++) {
            if (i < inlength) {
            outhtml += ('<span outword="' + outa[i] + '" inword="' + ina[i] + '">' + outa[i] + '</span>');
			}else{
			outhtml+=outa[i];
			}
        }
        outp.html(outhtml);
		inp.remove();
        outp.children('span').each(function() {
            var span = $(this);
            span.mouseover(function () {
                span.html(span.attr('inword'));
            });
            span.mouseout(function() {
                setTimeout(function () {
                    span.html(span.attr('outword'));
                }, delay);
            });
        } );
    });
});
