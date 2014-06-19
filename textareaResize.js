(function($)
{
    

    $.fn.elas = function(cssoftextarea)
    {
        //This $(this) refers to $('.elastic'), an array of DOM Elements
        $(this).each(
            function(){

            var random = Math.floor((Math.random() * 10000000) + 1);

                //Add textarea tag
                //This $(this) refers to jQuery object of $('.elastic')[0]
                $(this).attr('elascode', 'ui_'+random );
                $(this).attr('elasticItem', 'yes' );

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
                para.css('-moz-box-sizing','border-box');
                para.css('-webkit-box-sizing','border-box');
                para.css('box-sizing','border-box');
                para.css('border','1px solid red');

                $(this).after( para );

                $(this).keyup(function() {
                                        
                    adjustHeight($(this));
                   
                });





                $(this).on('paste', function () {
                  var _this = this;

                    setTimeout( function() {
                        var textt = $(_this).val();
                        
                        adjustHeight($(_this));
                    }, 100);

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




function adjustHeight(textarea) {


                    var text = textarea.val()
                    //var text = $(this).html();                    

                    console.log('text: '+ text);

                    text = text.replace(/ /g, " ");
                    text = text.replace(/</g, "a");
                    text = text.replace(/>/g, "a");
                    text = text.replace(/\r?\n/g, '<br />i');

                    console.log('modified text: '+ text);

                    var imitating = $("p[elascode='"+ textarea.attr( 'elascode' ) +"']");
                    imitating.html( text );

                    var lineH = textarea.css('line-height').replace('px','');
                    var lines = (imitating.height())/lineH;
                    if (lines == 0) {
                    }else{
                        textarea.attr('rows', lines );

                        //textarea.css('height',imitating.height());
                    };

                   
                     if (window.console) console.log('height: '+ imitating.height() + 'line-height: '+ lineH +"   lines:"+lines);


}


$(window).on('resize', function(){

    var elass = $("textarea[elasticItem='yes']");
    elass.each( function() {
      adjustHeight($(this));
    });

}); 



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