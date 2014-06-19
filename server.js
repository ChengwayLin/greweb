function ajax_post(){
 
        //XMLHttpRequest object
        var ajax;
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            ajax=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            ajax=new ActiveXObject("Microsoft.XMLHTTP");
        }
 
        //POST data
        var url = "server.php";
        var V = document.getElementById("Vocabulary").value;
        var P = document.getElementById("Pronunciation").value;

        //Make Json
        var vocabularyJson = {  };

                  //Vocabulary
                  vocabularyJson['vocabulary'] = document.getElementById("Vocabulary").value;
                  
                  //Pronunciation
                  vocabularyJson['pronunciation'] = document.getElementById("Pronunciation").value;

                  //Definitions
                  var defArray = [];
                  $(".explanation_item").each(function(){

                      var json = { };
                      json['defChinese'] = $(this).find( "input[name='defChinese']").val();
                      json['defEnglish'] = $(this).find( "input[name='defEnglish']").val();
                      json['setence1'] = $(this).find( "textarea[name='setence1']").val();
                      json['setence2'] = $(this).find( "textarea[name='setence2']").val();
                      json['setence3'] = $(this).find( "textarea[name='setence3']").val();

                      //synonyms
                      var synonyms = [];
                      $(this).find("li.tagit-choice").each(function(){
                          var test = $(this).find("span.tagit-label").html();
                          synonyms.push(test);
                      });
                      json['synonyms'] = synonyms

                    defArray.push(json);

                  });
                  vocabularyJson['definitions'] = defArray;

                  //Derivatives
                  var derivatives = [];
                  $("ul[name='derivatives']").find("li.tagit-choice").each(function(){
                      var test = $(this).find("span.tagit-label").html();
                      derivatives.push(test);
                  });
                  vocabularyJson['derivatives'] = derivatives;


                  //Tags
                  var tags = [];
                  $("ul[name='tags']").find("li.tagit-choice").each(function(){
                      var test = $(this).find("span.tagit-label").html();
                      tags.push(test);
                  });
                  vocabularyJson['tags'] = tags;


                  //Etymology
                  vocabularyJson['etymology'] = $( "textarea[name='etymology']").val();


        console.log(JSON.stringify(vocabularyJson));

        //var vars = "vocabulary="+V+"&pronunciation="+P;
        var vars = "vocabulary="+V+"&pronunciation="+P+"&vocabularyData="+JSON.stringify(vocabularyJson);
        

        //Set Ajax and Send
        ajax.open("POST", url, true);
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax.send(vars); // Actually execute the request
 
        //Call back
        ajax.onreadystatechange = function() {
            if(ajax.readyState == 4 && ajax.status == 200) {
                    //var return_data = hr.responseText;
                        document.getElementById("status").innerHTML = ajax.responseText;
            }
        }
 
}


function addExplanation(){
 
var s = "<p>Definition:</p> \
<input name='defChinese' type='text' placeholder='中文解釋'value=''> \
<input name='defEnglish' type='text' placeholder='English Explanation'  value=''> \
<p>Example Sentance</p> \
    <textarea   name='setence1'  class='elastic' placeholder='Example Sentence 1' rows='1'></textarea> \
    <textarea   name='setence2'  class='elastic' placeholder='Example Sentence 2' rows='1'></textarea> \
    <textarea   name='setence3'  class='elastic' placeholder='Example Sentence 3' rows='1'></textarea> \
<p>Synonyms</p> \
<ul class='myTags'></ul>  \
";
var node = document.createElement('div');
node.setAttribute("class","explanation_item");
node.innerHTML = s;

document.getElementById("explanation_block").appendChild(node);

$(node).find( "textarea.elastic" ).elas({
      "width" : "96%",
      "margin-left" : "2%",
      "font-size" : "16px",
      "font-family" : "'georgia'",
      "font-weight" : "normal",
      "padding" : "10px",
      "line-height" : "24px",
});

$('.myTags').tagit();
 
}



function pasteToTextarea(){
 


var s = "1) it just simply happens next, 2) one thing just leads to another, 3) it happens as easy as that, 4) the next thing you know, 5) its as simple as that < ‘Come on. We won’t be long. We just pick it up, have a quick lunch, bond a few, and badabing badaboom, we’ll be back in no time.>";

document.getElementById('test_textarea').innerHTML=s; //should change to setValue

adjustHeight($("#test_textarea"));

 
}