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

// function iCode(){
//       editor.document.open();
//       editor.write("<textarea id="demo"></textarea>");
//       // editor.write("var editor = new Behave({\
//       //
//       //   textarea: 		document.getElementById('demo'),\
//       //   replaceTab: 	true,\
//       //     softTabs: 		true,\
//       //     tabSize: 		4,\
//       //     autoOpen: 		true,\
//       //     overwrite: 		true,\
//       //     autoStrip: 		true,\
//       //     autoIndent: 	true\
//       // });");
//       // var editor = new Behave({
//       //
//       //   textarea: 		editor.document.getElementById('demo'),
//       //   replaceTab: 	true,
//       //     softTabs: 		true,
//       //     tabSize: 		4,
//       //     autoOpen: 		true,
//       //     overwrite: 		true,
//       //     autoStrip: 		true,
//       //     autoIndent: 	true
//       // });
//       editor.document.close();
//
//
//     }


//
// function iCodeUndo(){
//   var iframe = document.getElementById('editor');
//   var innerDoc = editor.contentDocument || iframe.contentWindow.document;
//   var code = innerDoc.createElement("code");
//   code.className = "inserted_code"
//
//   if (innerDoc.getSelection) {
//       var sel = innerDoc.getSelection();
//       if (sel.rangeCount) {
//           var range = sel.getRangeAt(0).cloneRange();
//           range= range.replace(/<code>/gi, "");
//           range= range.replace(/<\/code>/gi, "");
//           surround=False;
//           sel.removeAllRanges();
//           sel.addRange(range);
//
//       }
//   }
//   editor.focus()
// }
//
// function insertHTML() {
//   var iframe = document.getElementById('editor');
//   var innerDoc = editor.contentDocument || iframe.contentWindow.document;
//   var code = innerDoc.createElement("code");
//   code.className = "inserted_code"
//
//   if (innerDoc.getSelection) {
//       var sel = innerDoc.getSelection();
//       if (sel.rangeCount) {
//         range = sel.getRangeAt(0);
//         range.collapse(true);
//         var span = document.createElement("code");
//         span.id = "myId";
//         span.appendChild( document.createTextNode("insert code here") );
//         range.insertNode(span);
//
//         // Move the caret immediately after the inserted span
//         range.setStartAfter(span);
//         range.collapse(true);
//         sel.removeAllRanges();
//         sel.addRange(range);
//     }
// }
