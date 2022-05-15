var form = document.forms.valid_form;
var inputsTypeText = document.querySelectorAll('input[type=text]')
var windowError = document.createElement('p')
windowError.innerHTML = 'Обязательное поле ввода!'
windowError.classList.add('allError')


for(var i = 0; i < inputsTypeText.length; i++){
    inputsTypeText[i].addEventListener('click', function(event){
        var definedInput = event.target;
        definedInput.addEventListener('focusout', function(){
            if(definedInput.value === ''){
                definedInput.after(windowError)
                windowError.style.display = 'block'
            }
            else{
                windowError.style.display = 'none'
            }
        })
    })
}
    // for(var i = 0; i < inputsTypeText.length; i++){
    //     console.log(inputsTypeText[i])
        // inputsTypeText[i].addEventListener('focusout', ad(i))
        // inputsTypeText[i].addEventListener('focusout', function(){
        //     console.log(inputsTypeText[i])
            // if(inputsTypeText[i].value === ''){
            //     inputsTypeText[i].focus()
            //     inputsTypeText[i].after(windowError)
            //     windowError.classList.add('allErrorBlock')
            // }
            // else{
            //     windowError.classList.remove('allErrorBlock')
            // }
    // }
// function getInfInputText(i){
//    return function(e){
//        console.log(i)
//    }
// }


// var inputDevelopers = form.elements.developers;
// var developersError = document.getElementById('developersError')


// inputDevelopers.addEventListener('focusout', function(){
//     if(inputDevelopers.value === ''){
//         inputDevelopers.focus()
//         developersError.classList.add('allErrorBlock')
//     }
//     else{
//         developersError.classList.remove('allErrorBlock')
//     }
// })

// var nameSiteError = document.getElementById('nameSite')
// var nameSiteEr

