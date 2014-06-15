function searchWord()
{
//document.getElementById("demo").innerHTML="Hello World";

var word = document.getElementById("searchBar").value;
var url = "http://cdict.net/?q="+word;
document.getElementById("cdit").setAttribute("src",url); 

var ox = "http://www.oxforddictionaries.com/definition/english/"+word+"?q="+word;
document.getElementById("oxfordDic_iframe").setAttribute("src",ox); 

var googleTansUrl = "http://translate.reference.com/translate?query="+word+"&src=en&dst=zh-TW";
document.getElementById("googleTrans").setAttribute("src",googleTansUrl); 

}

function onLoadSearchWord()
{
var wordArray = ["demean", "abhorrent", "capricious",'fickle,','discernible','harbinger','incorrupt'
				,'anthrax','capacious',' conspicuous'];

var x = Math.floor((Math.random() * 10) + 1) -1;
var word = wordArray[x];

var url = "http://cdict.net/?q="+word;
document.getElementById("cdit").setAttribute("src",url); 

var ox = "http://www.oxforddictionaries.com/definition/english/"+word+"?q="+word;
document.getElementById("oxfordDic_iframe").setAttribute("src",ox); 

var googleTansUrl = "http://translate.reference.com/translate?query="+word+"&src=en&dst=zh-TW";
document.getElementById("googleTrans").setAttribute("src",googleTansUrl); 

}

function extract()
{


document.getElementById("status_bar").innerHTML=document.getElementById("cdit").getAttribute("src"); 

document.getElementById("ads_header").setAttribute('style', 'display:none');
//document.getElementById("google_image_div").setAttribute('style', 'width:330px; float:left');




}

function noAd()
{
//var numberRandom = Math.floor((Math.random() * 10) ;
//var x = document.getElementById("oxfordDic_iframe");
//var y = x.contentWindow.document;
document.getElementById("status_bar").innerHTML =  Math.floor((Math.random() * 10) + 1);


}

function openInTab()
{
  var win = window.open('http://localhost/greweb/gre.html', '_blank');
  win.focus();


}