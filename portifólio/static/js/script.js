
let nome = document.querySelector('#name')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let btn = document.getElementById("enviar")
let nomeOk = false
let emailOk = false
let msgOk = false
btn.disabled = true

nome.addEventListener('keyup', () => {
   nome.value.length < 2 ? nomeOk = false : nomeOk = true;
   nomeOk && emailOk && msgOk ? btnEnviar.disabled = false : btn.disabled = true;

})

email.addEventListener('keyup', () => {
   email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ?  emailOk = false :  emailOk = true;
   nomeOk && emailOk && msgOk ?  btn.disabled = false :  btn.disabled = true;
     
})

mensagem.addEventListener('keyup', () => {
   mensagem.value.length > 500 ?  msgOk = false : msgOk = true; 
   nomeOk && emailOk && msgOk ?  btn.disabled = false :  btn.disabled = true;
})


btn.addEventListener('click', () => {
   let carregamento = document.querySelector('#carregamento')
   carregamento.style.display = 'flex'

   let form = document.querySelector('form')
   form.style.display = 'none'

   btn.style.display = 'none'
})
