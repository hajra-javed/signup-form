const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const btn = document.querySelector('button');


btn.addEventListener('click', (e) => {
    // e.preventDefault();
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].required && inputs[i].value === '') {
            // console.log(inputs[i].type);
            inputs[i].classList.add('error');
            return;
        }
    }
    if (confirmPassword === ''){
        return;
    }
    if (password.value !== confirmPassword.value){
        confirmPassword.classList.add('error');
        confirmPassword.setCustomValidity('Passwords do not match');
    } else {
        confirmPassword.setCustomValidity('');
    }
});

confirmPassword.addEventListener('keydown', () => {
    confirmPassword.classList.remove('error');
    confirmPassword.setCustomValidity('');
})

// inputs.forEach((i) => {
//     i.addEventListener('keydown', () => {
//         console.log(i.value);
//         i.classList.remove('error');

//     })
// });

// confirmPassword.addEventListener('keyup', () => {
//     if (password.value !== confirmPassword.value) {
//         confirmPassword.classList.add('error');
//         // confirmPassword.setCustomValidity('Passwords do not match');
//     }
//     else {
//         p.classList.remove('error');
//     }
// });

