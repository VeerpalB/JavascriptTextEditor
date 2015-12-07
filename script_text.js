window.addEventListener("load", function() {
var editor = new Behave({

  textarea: 		document.getElementById('demo'),
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
