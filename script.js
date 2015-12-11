function iBold(){
  editor.document.execCommand('bold',false,null);
  editor.focus();}
function iFrameOn(){
    editor.document.designMode = 'On';
    if (localStorage["editor"] !== null) {
      editor.document.open('text/html');
      editor.document.write(localStorage["editor"]);
      editor.document.close();};
    editor.focus();
}

function iUnderline(){
    editor.document.execCommand('underline', false, null);
    editor.focus();
}
function iItalic(){
    editor.document.execCommand('italic', false, null);
    editor.focus();
}
function iSave(){
    // return document object or window object
    var iframe = $("#editor")[0];
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var val = iframeDoc.body.innerHTML;
    window.localStorage.setItem("editor",val);
    editor.focus();
}
