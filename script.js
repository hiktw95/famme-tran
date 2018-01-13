function setTranslate() {
  var text = document.querySelector('.original-text').value
  var changedText = translate(text);
  document.querySelector('.result-text').innerText = changedText;
}

function translate(text) {
  return text.split('').map(char => {
        var d = Hangul.disassemble(char);
        if(d[3] && Hangul.isVowel(d[1]) && Hangul.isVowel(d[2])) {
            var tmp = d[3];
            d[3] = d[2];
            d[2] = tmp;
        }
        return Hangul.assemble(d);
    }).join('');
}
