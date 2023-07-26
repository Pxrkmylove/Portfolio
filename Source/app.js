let button = document.getElementsByClassName('box-click');
let contents = document.getElementsByClassName('allpage')

Array.from(button).forEach(elm => elm.addEventListener('click', (e) => {
    let self = e.currentTarget;
    let targetId = self.getAttribute('data-target');

    Array.from(contents).forEach(elm => elm.classList.add('show'));
    document.getElementById(targetId).classList.remove('show')
    if (targetId != 1) {
        const lineHalfElements = document.querySelectorAll(".line-half");
        lineHalfElements.forEach((element) => {
            element.style.display = "none";
        });
    } else if (targetId == 1) {
        const lineHalfElements = document.querySelectorAll(".line-half");
        lineHalfElements.forEach((element) => {
            element.style.display = "block";
        });
    }

}))

const boxClickElements = document.querySelectorAll('.box-click');
boxClickElements.forEach((boxClickElement) => {
    boxClickElement.addEventListener('click', function() {
        this.classList.add('active');
        const siblings = getSiblings(this);
        siblings.forEach((sibling) => {
            sibling.classList.remove('active');
        });
    });
});

function getSiblings(element) {
    const siblings = Array.from(element.parentNode.children);
    return siblings.filter((sibling) => sibling !== element);
}

document.getElementById('openMailBtn').addEventListener('click', function() {
    window.open('mailto:prem.premsri@gmail.com');
});

function createExperienceHTML(value) {
    return `
        <div class="box-show-experience">
        <span id="topic">
            <h2 style="color: antiquewhite;">${value.Topic_EN}</h2><p>(${value.Topic_TH})</p>
        </span>
        <div class="box-link">
            <a href="${value.IMAGE}" target="_blank">
            <p><i class="fa-regular fa-image"></i> Image</p>
            </a>
        </div>
        <div class="box-link">
            <a href="${value.GITHUB}" target="_blank">
            <p><i class="fa-brands fa-github" style="color: #000000;"></i> Github</p>
            </a>
        </div>
        <div class="box-link">
            <a href="${value.YOUTUBE}" target="_blank">
            <p><i class="fa-brands fa-youtube" style="color: #ff0000;"></i> Youtube</p>
            </a>
        </div>
        <div class="box-link">
            <a href="Source/files/${value.FILE}.rar" download target="_blank">
            <p><i class="fa-duotone fa-file" style="--fa-primary-color: #52cbff; --fa-primary-opacity: 0.4; --fa-secondary-color: #43a6d0; --fa-secondary-opacity: 1;"></i> File</p>
            </a>
        </div>
        </div>
    `;
}

let htmlContent = '';

experiences.forEach((value) => {
    htmlContent += createExperienceHTML(value);
});

const experiencePage = document.querySelector('.experience-page');
experiencePage.innerHTML = htmlContent;