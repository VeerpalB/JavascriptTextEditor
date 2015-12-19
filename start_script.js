function Info(number, title, editor, code) {
    "use strict";
    this.number = number;
    this.title = title;
    this.editor = editor;
    this.code = code;
};
window.addEventListener("load", function() {
    BehaveHooks.add(['init:after'], function(data) {
        base_obj = new Info(0, "Untitled", "enter", "enter");
        all_text = {
            0: base_obj
        };
        current = 0;
        var local_exists = false;
      
        for (var i = 0; i < localStorage.length; i++) {
            local_exists = true;
            var obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
            all_text[obj.number] = obj;
            $(".column").append("<div  class='list " + obj.number.toString() + "' id=" + obj.number.toString() + " onclick='Switch(this)'>" + obj.title + "</div><button type'button' class='list " + obj.number.toString() + "' id=" + obj.number.toString() + " onclick='Delete(this)'>X</button>");
        }

        if (local_exists===false) {
            $(".column").append("<div  class='list " + base_obj.number.toString() + "' id=" + base_obj.number.toString() + " onclick='Switch(this)'>" + base_obj.title + "</div><button type'button' class='list " + base_obj.number.toString() + "' id=" + base_obj.number.toString() + " onclick='Delete(this)'>X</button>");
        }
        document.getElementById('code').value = all_text[current].code;
        document.getElementById('title').value = all_text[current].title;
    });

    var editor = new Behave({

        textarea: document.getElementById('code'),
        replaceTab: true,
        softTabs: true,
        tabSize: 4,
        autoOpen: true,
        overwrite: true,
        autoStrip: true,
        autoIndent: true,
        fence: false
    });
    iFrameOn();
    // localStorage.clear();
});

function New() {
    Save();
    var find=0
    while(true){
      if(find in all_text){
        find++
      }else{
        break;
      }
    }
    var obj = new Info(find, "Untitled", "enter text", "enter");
    all_text[obj.number] = obj;
    editor.document.open('text/html');
    editor.document.write(all_text[obj.number].editor);
    editor.document.close();
    document.getElementById('code').value = all_text[obj.number].code;
    document.getElementById('title').value = all_text[current].title;
    $(".column").append("<div  class='list " + obj.number.toString() + "' id=" + obj.number.toString() + " onclick='Switch(this)'>" + obj.title + "</div><button type'button' class='list " + obj.number.toString() + "' id=" + obj.number.toString() + " onclick='Delete(this)'>X</button>");
    current = obj.number
}

function Switch(element) {
    Save()
    var id = element.id;
    var num = parseInt(id);
    current = all_text[num].number;
    document.getElementById('code').value = all_text[current].code;
    document.getElementById('title').value = all_text[current].title;
    editor.document.open('text/html');
    editor.document.write(all_text[current].editor);
    editor.document.close();

}

function Delete(element) {
    var id = element.id;
    var num = parseInt(id);
    if (num === current & Object.keys(all_text).length>1) {
      var find=1
      while(true){
        if(find in all_text & find!=num){
          break;
        }else{
          find++;
        }
      }
      current = all_text[find].number;
      document.getElementById('code').value = all_text[current].code;
      document.getElementById('title').value = all_text[current].title;
      editor.document.open('text/html');
      editor.document.write(all_text[current].editor);
      editor.document.close();
    }
    delete all_text[num];
    $("." + id).remove();
    localStorage.removeItem(num);
    if (num === current & Object.keys(all_text).length<=1) {
      base_obj = new Info(0, "Untitled", "enter", "enter");
      current = base_obj.number;
      all_text[current]=base_obj;
      $(".column").append("<div  class='list " + base_obj.number.toString() + "' id=" + base_obj.number.toString() + " onclick='Switch(this)'>" + base_obj.title + "</div><button type'button' class='list " + base_obj.number.toString() + "' id=" + base_obj.number.toString() + " onclick='Delete(this)'>X</button>");
      document.getElementById('code').value = all_text[current].code;
      document.getElementById('title').value = all_text[current].title;
      editor.document.open('text/html');
      editor.document.write(all_text[current].editor);
      editor.document.close();
    }

}

function Save() {
    var text = document.getElementById('code').value;
    all_text[current].code = text;
    var iframe = $("#editor")[0];
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var val = iframeDoc.body.innerHTML;
    all_text[current].title = document.getElementById('title').value
    document.getElementById(all_text[current].number).innerHTML = all_text[current].title;
    all_text[current].editor = val;
    window.localStorage.setItem(all_text[current].number, JSON.stringify(all_text[current]));
}

function iBold() {
    editor.document.execCommand('bold', false, null);
    editor.focus();
}

function iFrameOn() {
    editor.document.designMode = 'On';
    editor.document.open('text/html');
    editor.document.write(all_text[current].editor);
    editor.document.close();
    editor.focus();
}

function iUnderline() {
    editor.document.execCommand('underline', false, null);
    editor.focus();
}

function iItalic() {
    editor.document.execCommand('italic', false, null);
    editor.focus();
}

function iSave() {
    // return document object or window object
    var iframe = $("#editor")[0];
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var val = iframeDoc.body.innerHTML;
    window.localStorage.setItem("editor", val);
    editor.focus();
}
