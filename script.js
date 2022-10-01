document.querySelector('#pw-confirm').addEventListener('blur', checkPasswordMatch)

function checkPasswordMatch() {
    pw = document.getElementById('pw')
    pwConfirm = document.getElementById('pw-confirm')
    p = document.querySelector('.password p')

    if (pwConfirm.value) {
        if (pw.value !== pwConfirm.value) {
            invalid = 'border: 1px solid red;'
            pw.style.cssText = invalid;
            pwConfirm.style.cssText = invalid;
    
            if (!document.querySelector('.password p span')) {
                span = document.createElement('SPAN')
                span.textContent = 'Passwords do not match'
                span.style.cssText = 'color: red; font-size: 0.7rem;'
                p.appendChild(span)
            }
        } else {
            try {
                document.querySelector('.password span').remove()
            } catch {} finally {
                pw.style.cssText = ''
                pwConfirm.style.cssText = ''
            }
        }
    } 
}