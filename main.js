let showSuccessBtn = document.querySelector('button.success');
let showWarningBtn = document.querySelector('button.warning');
let showErrorBtn = document.querySelector('button.error');

let messageBoard = document.querySelector('.toast-board')
showSuccessBtn.onclick = function() {
    let toast = createToast("this is toast message", 'success', 5000);
    showToast(toast)
}

showWarningBtn.onclick = function() {
    let toast = createToast("this is toast message", 'warning', 10000);
    showToast(toast)
}

showErrorBtn.onclick = function() {
    let toast = createToast("this is toast message", 'error', 7000);
    showToast(toast)
}

function showToast(toast) {
    toast.html.style.animation = `messageIn 1s ease, messageOut 1s ease ${toast.timeOut/1000}s forwards`;
    let line = toast.html.querySelector('.line');
    line.style.animation = `lineShrink ${toast.timeOut/1000}s linear 0.5s forwards`
    messageBoard.appendChild(toast.html);
    setTimeout(() => {
        toast.html.remove();
    }, toast.timeOut + 1000);
}

function createToast(mess, type, timeOut = 5000) {
    icon = {
        success: '<i class="fa fa-circle-check"></i>',
        warning: '<i class="fa-solid fa-triangle-exclamation"></i>',
        error: '<i class="fa-solid fa-circle-exclamation"></i>'
    }

    let toast = document.createElement('div');
    toast.classList.add('toast', type);
    toast.innerHTML = `
        ${icon[type]}
        <p class="text">${mess}</p>
        <div class="line"></div>
    `

    return {
        html: toast,
        timeOut: timeOut
    }

}

let message = document.querySelector('.message')