function display(value){
    document.getElementById('textarea').value += value
}

function calculate(){
    var p = document.getElementById('textarea').value
    var ans = eval(p)
    document.getElementById('textarea').value = ans
}

function clr(){
    document.getElementById('textarea').value = ""
}
function del(){
    var p = document.getElementById('textarea').value
    p = p.slice(0,-1)
    document.getElementById('textarea').value = p
}