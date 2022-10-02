document.querySelector('#pw-confirm').addEventListener('blur', checkPasswordMatch)

function checkPasswordMatch() {
    pw = document.getElementById('pw')
    pwConfirm = document.getElementById('pw-confirm')
    p = document.querySelector('.password p')

    if (pwConfirm.value) {
        if (pw.value !== pwConfirm.value) {
            pw.classList.add('error')
            pwConfirm.classList.add('error')
        } else {
            pw.classList.remove('error')
            pwConfirm.classList.remove('error')
        }
    } 
}