let form = document.getElementById('form');

let userData = {};

form.addEventListener('submit',function(event){
    event.preventDefault();
    [...this.elements].forEach(element=>{
        if(element.value != 'submit'){
            if(isValid(element)){
                userData[element.name] = element.value;
            }else{
                element.classList.add('is-invalid');
            }
        }
    })
    this.reset();
    console.log(userData);
})

function isValid(element){
    if(!element.value){
        return false;
    }

    return true;
}
