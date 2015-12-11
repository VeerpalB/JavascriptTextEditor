window.addEventListener("load", function() {
  BehaveHooks.add(['init:after'], function(data){
     if (localStorage["code"] !== null) {
       document.getElementById('code').value =localStorage["code"];
     };
     });
var editor = new Behave({

  textarea: 		document.getElementById('code'),
  replaceTab: 	true,
    softTabs: 		true,
    tabSize: 		4,
    autoOpen: 		true,
    overwrite: 		true,
    autoStrip: 		true,
    autoIndent: 	true,
    fence: false
});

  iFrameOn();


});

function Save(){
    var text = document.getElementById('code').value;
    window.localStorage.setItem("code",text);
    var iframe = $("#editor")[0];
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var val = iframeDoc.body.innerHTML;
    window.localStorage.setItem("editor",val);
}

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
