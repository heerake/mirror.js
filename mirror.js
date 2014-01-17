$(document).ready(function(){
    $('.outworldparagraphs').each(function() {
        var outp = $(this);
        var spanlength = outp.attr('spanlength');
        if(spanlength == undefined){
            spanlength = 1;
        }
        var delay = outp.attr('delay');
        if (delay == undefined) {
            delay = 5000;
        }

        var outa = outp.html().split('');
        outa = joinarray(outa,spanlength);
        var outlength = outa.length;
        var inp = $(this).next('.inworldparagraphs');
        inp.hide();
        var ina = inp.html().split('');
        ina = joinarray(ina,spanlength)
        var inlength = ina.length;
        var outhtml = "";

        for (var i = 0; i < outlength; i++) {
            if (i < inlength) {
                if(outa[i].indexOf("'")>-1&&outa[i].indexOf('"')>-1){
                    for(var j=0,length=outa[i].length;j<length;j++){
                        if(outa[i][j]=="'"){
                            outhtml += ('<span outword="' + outa[i][j] + '" inword="' + ina[i][j] + '">' + outa[i][j] + '</span>');        
                        }else{
                            outhtml += ("<span outword='" + outa[i][j] + "' inword='" + ina[i][j] + "'>" + outa[i][j] + "</span>");
                        }
                    }
                }else if(outa[i].indexOf("'")>-1){
                    outhtml += ('<span outword="' + outa[i] + '" inword="' + ina[i] + '">' + outa[i] + '</span>');
                }else{
                    outhtml += ("<span outword='" + outa[i] + "' inword='" + ina[i] + "'>" + outa[i] + "</span>");
                }
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

function joinarray(array,bit){
    if(bit<=1){
        return array;
    }
    var length =  array.length;   
    var joinlength = parseInt(length/bit);
    var joinarray = new Array();
    var tail = length%bit;
    for(var i=0; i < joinlength; i++){
        joinarray[i] = "";
    }

    for(var i=0; i<joinlength;i++){
        for(var j=0;j<bit;j++){
            joinarray[i] += array[j+i*bit];
        }
    }
    if(tail!=0){
        joinarray[joinlength]="";
        for(var i=0 ;i<tail;i++){
            joinarray[joinlength]+=array[length-(tail+i)];
        }
    }

    return joinarray; 
}