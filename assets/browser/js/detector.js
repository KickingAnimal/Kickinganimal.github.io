function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");
  // If IE, return version number.
  if (Idx > 1)
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./))
    return 11;

  else
    return -1; //It is not IE

}
if (GetIEVersion() > 6){
    alert("U gebruikt Internet Explorer versie: " + GetIEVersion() + " \ndeze browser verouderd en is daarom niet meer veilig \nomdat deze browser verouderd is werken sommige pagina's ook niet goed, dus raden wij u aan om een nieuwere browser te gebruiken zoals:\nGoogle Chrome, Mozilla Firefox of Microsoft Edge\n\n\nHeeft u vragen over dit bericht neem dan contact op met de 'ICTcrew'");
 }