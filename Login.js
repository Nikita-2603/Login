 function colour(e)
{
    console.log('font ==> ', e);
    var f = e.target;
    f.style.fontSize = "20px";
    f.style.color = 'brown';
}
function bgclr(e) {
    var t = e.target;
    t.style.backgroundColor = 'blue';
}