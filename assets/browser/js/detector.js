function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");
  // If IE, return version number.
  if (Idx > 0)
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./))
    return 11;

  else
    return 0; //It is not IE

}
if ((GetIEVersion() > 0) || (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)){
  alert("U gebruikt Internet Explorer versie: " + GetIEVersion() + " \ndeze browser werkt niet optimaal met de startpagina\nomdat deze browser verouderd is raden wij aan om een nieuwere browser te gebruiken zoals:\nGoogle Chrome, Mozilla Firefox of Microsoft Edge");
}