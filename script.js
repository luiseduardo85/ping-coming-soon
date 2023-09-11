var formEmail = document.getElementById('form-email');
var formulario = document.getElementById('form-content');
var invalido = document.getElementById('invalid');

formulario.addEventListener('submit',  function () {

    if(formEmail.value === ''){
        formEmail.classList.add("msg");
        formEmail.classList.add("invalid-space")
        invalido.innerHTML = 'Whoops! It looks like you forgot to add your email';
    }
    else if (formEmail.value.indexOf("@") < 0) {
            formEmail.classList.add('msg')
            formEmail.classList.add("invalid-space")
            invalido.innerHTML = 'Please provide a valid email address'
    }
    else if (formEmail.value.indexOf(".com") < 0) {
        formEmail.classList.add('msg')
        formEmail.classList.add("invalid-space")
        invalido.innerHTML = 'Please provide a valid email address'
    }
    else{
        formEmail.classList.remove("msg");
        formEmail.classList.add("invalid-space")
        invalido.style.color = 'hsl(223, 87%, 63%)'
        invalido.innerHTML = 'This is a valid email'
        formEmail.value = ''
    }
})