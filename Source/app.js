$(document).ready(function() {

    let button = document.getElementsByClassName('box-click');
    let contents = document.getElementsByClassName('allpage')

    Array.from(button).forEach(elm => elm.addEventListener('click', (e) => {
        let self = e.currentTarget;
        let targetId = self.getAttribute('data-target');

        Array.from(contents).forEach(elm => elm.classList.add('show'));
        document.getElementById(targetId).classList.remove('show')
    }))

    $('.box-click').on('click', function() {
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    })
    document.getElementById('openMailBtn').addEventListener('click', function() {
        // เปิดโปรแกรมอีเมลหรือ Mailto URL โดยใช้ window.open()
        window.open('mailto:prem.premsri@gmail.com');
    });
});