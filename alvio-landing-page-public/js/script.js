document.getElementById('navigation__burger').onclick = function() {
    document.getElementById('navigation').classList.toggle('active');
    document.getElementById('navigation__burger').classList.toggle('active');
    document.getElementById('nav').classList.toggle('active');
    document.getElementById('body').classList.toggle('lock');
}