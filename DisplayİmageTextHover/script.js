let A = document.querySelector('.wrapper');
let B = A.querySelector('.effect');

document.body.onmousemove = (e) => {
    let x = e.pageX;
    let y = e.pageY;
    B.style.top = y + 'px';
    B.style.left= x + 'px';
}

A.querySelectorAll('.box').forEach(text =>{
    text.onmousemove = () =>{
        B.src = text.getAttribute('data-src');

    }
})