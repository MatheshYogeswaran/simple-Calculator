var text=" ";
var result;
function set(value){
    text=text+value;
    document.getElementById("view").value=text;
}
function calculate(){
 
 
        result=eval(document.getElementById("view").value);
        document.getElementById("view").value=result;
        text=" ";

}
function reset(){
    text=" ";
    console.log(text);
    document.getElementById("view").value=text;
}
