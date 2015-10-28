function iBold(){
  editor.document.execCommand('bold',false,null);
  editor.focus()
}
function iFrameOn(){
    editor.document.designMode = 'On';
    editor.focus()
}

function iUnderline(){
    editor.document.execCommand('underline', false, null);
    editor.focus()
}
function iItalic(){
    editor.document.execCommand('italic', false, null);
    editor.focus()
}

function iCode(){
  var iframe = document.getElementById('editor');
var innerDoc = editor.contentDocument || iframe.contentWindow.document;
  var code = innerDoc.createElement("code");

  if (innerDoc.getSelection) {
      var sel = innerDoc.getSelection();
      if (sel.rangeCount) {
          var range = sel.getRangeAt(0).cloneRange();
          range.surroundContents(code);
          sel.removeAllRanges();
          sel.addRange(range);
      }
  }
  editor.focus()
}
