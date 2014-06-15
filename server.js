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


        var vars = "vocabulary="+V+"&pronunciation="+P;
 
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
 
var s = "<p>Definition:</p><input type='text' placeholder='中文解釋' value=''><input type='text' placeholder='English Explanation'  value=''><p>Example Sentance</p><textarea  class='elastic' placeholder='Example Sentence 1' rows='1'></textarea><textarea  class='elastic' placeholder='Example Sentence 2' rows='1'></textarea><textarea  class='elastic' placeholder='Example Sentence 3' rows='1'></textarea><p>Synonyms</p><ul class='myTags'></ul>";
var node = document.createElement('div');
node.setAttribute("class","explanation_item");
node.innerHTML = s;

document.getElementById("explanation_block").appendChild(node);

$('.elastic').elas({
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