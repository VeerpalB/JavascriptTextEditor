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


});

function Save(){
    var text = document.getElementById('code').value;
    window.localStorage.setItem("code",text);
    editor.focus();
}
