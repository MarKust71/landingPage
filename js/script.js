function onoff() {
    let t; 
    let e;
    t = document.getElementById('tooltip').innerHTML;
    e = document.getElementById('myHome');
    console.log(t);
    if (t === 'click it!') {
        document.getElementById('tooltip').innerHTML = 'and again!';
        e.style.visibility = 'hidden';
    } else {
        document.getElementById('tooltip').innerHTML = 'click it!';
        e.style.visibility = 'visible';
    }
}