function show() {
    var hot=document.getElementById('hot');
    var form=document.getElementById('form');
    if (hot.style.display=="block"){
        hot.style.display="none";
        form.className="";
    }
    else{
        hot.style.display="block";
        form.className="active";
    }

}