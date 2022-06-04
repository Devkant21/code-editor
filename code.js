const htmlEditor = CodeMirror(document.querySelector(".editor .code .html-code"), {
    lineNumbers:true,
    tabSize:4,
    mode:"xml"
});
const cssEditor = CodeMirror(document.querySelector(".editor .code .html-code"), {
    lineNumbers:true,
    tabSize:4,
    mode:"css"
});
const jsEditor = CodeMirror(document.querySelector(".editor .code .html-code"), {
    lineNumbers:true,
    tabSize:4,
    mode:"javascript"
});
