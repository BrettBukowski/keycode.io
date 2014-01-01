(function (doc) {

  function displayCode (code) {
    displayCode.element || (displayCode.element = doc.getElementById('main_content'));

    displayCode.element.innerHTML = '<h2>' + code + '</h2>';
  }

  function displayAdditionalInfo (e) {
    var info = {},
        specials = {
        'shiftKey': 'shift',
        'ctrlKey': 'ctrl',
        'altKey': 'alt'
      };

    for (var i in specials) {
      info[specials[i]] = e[i] ? 1 : 0;
    }

    for (i in info) {
      var el = document.getElementById(i);
      el.style.opacity = info[i];
      el.setAttribute('aria-hidden', info[i] ? 'true' : 'false');
    }

  }

  function onKeyDown (e) {
    displayCode(e.keyCode);
    displayAdditionalInfo(e);
  }

  doc.addEventListener('keydown', onKeyDown);
  doc.addEventListener('keyup', displayAdditionalInfo);

})(document);
