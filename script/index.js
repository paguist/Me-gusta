function aumentarLikes (button){ //el parametro es button para que la funcion sepa a qué debe afectar
    let contador = button.previousElementSibling.querySelector('.cantidad-likes');
                //button.previousElementSibling para seleccionar el hermano anterior al boton de like
                // .querySelector(.cantidad-likes) para indicar que se selecciona al span
    let numero = Number(contador.innerText); // para convertir el texto del span a un numero
    numero++; // le suma 1 al recibir el click
    contador.innerText = numero; // devuelve al texto del span el nuevo nuevo
}