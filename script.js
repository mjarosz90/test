var req = new XMLHttpRequest();
req.open('GET', '/request', true); /* Argument trzeci, wartość true, określa, że żądanie ma być asynchroniczne */
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200)
      dump(req.responseText);
     else
      dump("Błąd podczas ładowania strony\n");
  }
};
req.send(null); 