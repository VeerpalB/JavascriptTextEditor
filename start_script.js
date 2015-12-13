function Info(number, title, editor, code) {
    "use strict";
    this.number = number;
    this.title = title;
    this.editor = editor;
    this.code = code;
};
var obj = new Info(0,"joe", "hi", "hi");
all_text = {0:obj};
current=0;
window.addEventListener("load", function () {
  BehaveHooks.add(['init:after'], function (data) {
    for(var i=0; i<localStorage.length;i++){
      var obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
      all_text[obj.number]=obj;
      $(".column").append("<div class='list' id="+obj.number.toString()+" onclick='Switch(this)'>"+obj.title+"</div>");
      current=obj.number
    }
    document.getElementById('code').value = all_text[current].code;
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
    // localStorage.clear();
});



// if (localStorage["code"] !== null) {
//   document.getElementById('code').value =localStorage[localStorage.key(localStorage.length-1)];
//   for(var i=0; i<localStorage.length;i++){
//    $(".column").append("<div id="+i.toString()+">"+localStorage.key(i)+"</div>")
//   };
// };
// });
// iFrameOn();

function New(){
  Save();
  var obj = new Info(Object.keys(all_text).length,"Untitled", "enter text", "enter");
  all_text[obj.number]=obj;
  editor.document.open('text/html');
  editor.document.write(all_text[obj.number].editor);
  editor.document.close();
  document.getElementById('code').value = all_text[obj.number].code;
  $(".column").append("<div id="+obj.number.toString()+">"+obj.title+"</div>");
  current = obj.number
}

function Switch(element){
  Save()
  var id = element.id;
  var num = parseInt(id);
  current=num;
  document.getElementById('code').value = all_text[current].code;
  editor.document.open('text/html');
  editor.document.write(all_text[current].editor);
  editor.document.close();

}

function Save(){
    var text = document.getElementById('code').value;
    all_text[current].code=text;
    var iframe = $("#editor")[0];
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var val = iframeDoc.body.innerHTML;
    all_text[current].title = val.substring(0,4);
    all_text[current].editor=val;
    window.localStorage.setItem(all_text[current].number,JSON.stringify(all_text[current]));

}

// function Save(){
//     var text = document.getElementById('code').value;
//
//     window.localStorage.setItem("code",text);
//     var iframe = $("#editor")[0];
//     var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
//     var val = iframeDoc.body.innerHTML;
//     window.localStorage.setItem("editor",val);
// }

function iBold(){
  editor.document.execCommand('bold',false,null);
  editor.focus();}

function iFrameOn(){
    editor.document.designMode = 'On';
    editor.document.open('text/html');
    editor.document.write(all_text[current].editor);
    editor.document.close();
    editor.focus();
}

// function iFrameOn(){
//     editor.document.designMode = 'On';
//     if (localStorage["editor"] !== null) {
//       editor.document.open('text/html');
//       editor.document.write(localStorage["editor"]);
//       editor.document.close();};
//     editor.focus();
// }

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

// window.addEventListener("load", function() {
//   BehaveHooks.add(['init:after'], function(data){
//      if (localStorage["code"] !== null) {
//        document.getElementById('code').value =localStorage["code"];
//      };
//      });
// var editor = new Behave({
//
//   textarea: 		document.getElementById('code'),
//   replaceTab: 	true,
//     softTabs: 		true,
//     tabSize: 		4,
//     autoOpen: 		true,
//     overwrite: 		true,
//     autoStrip: 		true,
//     autoIndent: 	true,
//     fence: false
// });
//
//   iFrameOn();
//
//
// });
