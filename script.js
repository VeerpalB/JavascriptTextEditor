
function doRichEditCommand(aName, aArg){
  getIFrameDocument('editor').execCommand(aName,false, aArg);
  document.getElementById('editor').contentWindow.focus()
}

function makeEditable(divName) {
      window[divName + '_msg'].document.designMode = 'On';
  }

  function doRich(){
    var iframe = document.getElementById('my-editable');
    var iframeDoc = iframe.contentWindow.document;
    var iframeBody=iframeDoc.body

    // type and select some text into iframe
    // For making selected text to be bold, just execute the following command
    document.getElementById("editor").contentWindow.document.body.execCommand("bold", false, null);
  }

function iBold(){
  editor.document.execCommand('bold',false,null);
}
function iFrameOn(){
    editor.document.designMode = 'On';
}

function iUnderline(){
    editor.document.execCommand('underline', false, null);
}
function iItalic(){
    editor.document.execCommand('italic', false, null);
}

function code(){
    editor.document.execCommand('insertHTML', false, '<div><code> insert code here </code></div>');
}
