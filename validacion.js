const inputs=document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("blur",(input)=>{
        imp=input.target;
        validar(imp);
        console.log(imp);
        console.log(imp.dataset.tipo);
        console.log(imp.validity.valid);
    })
})


function validar(entrada){
    const tipo1 =entrada.dataset.tipo;
    if (entrada.validity.valid) {
        entrada.classList.remove("input-container--invalid");
        entrada.classList.add("input-container--valid");
        entrada.parentElement.querySelector(".message").innerHTML = "";
    }else{
        entrada.classList.add("input-container--invalid");
        entrada.classList.remove("input-container--valid");
        entrada.parentElement.querySelector(".message").innerHTML = mostrarMsError(tipo1,entrada);
    }
}
const tipoError=[
    "valueMissing", // si es required o no
    "typeMismatch", // tipo de entrada
    "patternMismatch",// cumple con pattern
]

const msError={
    nombre:{
        valueMissing: "este campo no deve ser vacio",
        patternMismatch: "no deve contener numero o caracteres especiales"
    },
    email:{
        valueMissing: "este campo no deve ser vacio",
        typeMismatch: "deves ingresar un formato de correo valido"
    },
    asunto:{
        valueMissing: "este campo no deve ser vacio",
        patternMismatch: "deve contener entre 5 y 50 caracteres"
    }
}

function mostrarMsError(tipo1,entrada){
    let mesaje="";
    tipoError.forEach(error => {
        if (entrada.validity[error]){
            mesaje=msError[tipo1][error];
        }
    })
    return mesaje;
}