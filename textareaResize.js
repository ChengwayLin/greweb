(function($)
{
    

    $.fn.elas = function(cssoftextarea)
    {
        //This $(this) refers to $('.elastic'), an array of DOM Elements
        $(this).each(
            function(){

            var random = Math.floor((Math.random() * 100) + 1);

                //Add textarea tag
                //This $(this) refers to jQuery object of $('.elastic')[0]
                $(this).attr('elascode', 'ui_'+random );

                //Add Imitating <p> to
                
                var para = $("<p class='imitating' >test</p>");
                para.attr('elascode',  'ui_'+random  );
                

                for (var key in cssoftextarea) {
                    console.log(key+':'+cssoftextarea[key]);
                    $(this).css( key, cssoftextarea[key] );
                    para.css( key, cssoftextarea[key] );
                }
                

                para.css('position','absolute');
                para.css('visibility','hidden');

                $(this).after( para );

                $(this).keyup(function() {
                                        
                    var text = $(this).val()
                    //var text = $(this).html();                    

                    console.log('text: '+ text);

                    text = text.replace(/ /g, "i ");
                    text = text.replace(/</g, "a");
                    text = text.replace(/>/g, "a");
                    text = text.replace(/\r?\n/g, '<br />i');

                    var imitating = $("p[elascode='"+ $(this).attr( 'elascode' ) +"']");
                    imitating.html( text );

                    var lineH = $(this).css('line-height').replace('px','');

                    var lines = (imitating.height())/lineH;
                    if (lines == 0) {
                    }else{
                        $(this).attr('rows', lines );
                    };

                   
                     if (window.console) console.log('height: '+ imitating.height() + 'line-height: '+ lineH +"   lines:"+lines);

                   
                });


                $(this).keydown(function(e) {
                    if(e.keyCode === 9) { // tab was pressed
                        // get caret position/selection
                        var start = this.selectionStart;
                        var end = this.selectionEnd;

                        var $this = $(this);
                        var value = $this.val();

                        // set textarea value to: text before caret + tab + text after caret
                        $this.val(value.substring(0, start)
                                    + "    "
                                    + value.substring(end));

                        // put caret at right position again (add one for the tab)
                        this.selectionStart = this.selectionEnd = start + 4;

                        // prevent the focus lose
                        e.preventDefault();
                    }
                });






            }
        );


    };

})(jQuery);



function css(a) {
    var sheets = document.styleSheets, o = {};
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if (a.is(rules[r].selectorText)) {
                o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
            }
        }
    }
    return o;
}

function css2json(css) {
    var s = {};
    if (!css) return s;
    if (css instanceof CSSStyleDeclaration) {
        for (var i in css) {
            if ((css[i]).toLowerCase) {
                s[(css[i]).toLowerCase()] = (css[css[i]]);
            }
        }
    } else if (typeof css == "string") {
        css = css.split("; ");
        for (var i in css) {
            var l = css[i].split(": ");
            s[l[0].toLowerCase()] = (l[1]);
        }
    }
    return s;
}