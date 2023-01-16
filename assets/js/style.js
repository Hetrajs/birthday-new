let text = document.getElementById('text');
let img = document.getElementById('img-1');

window.addEventListener('scroll', function() {
    let value = this.window.scrollY;

    text.style.top = value * -0.1 + '%';
})