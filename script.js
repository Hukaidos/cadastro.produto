const produto = document.querySelector('#produto')
const quantidade = document.querySelector('#quantidade')
const cadastrar = document.querySelector('#cadastrar')
const resultado = document.querySelector('#resultado')

cadastrar.addEventListener('click',()=>{
    const novo_elemento =document.createElement('div')
    if(Number(quantidade.value)>=50){
        novo_elemento.innerHTML = `<h2>Produto: ${produto.value}</h2> <p>Quantidade em estoque: ${quantidade.value}</p>`
        novo_elemento.style.color="green"
    }
    else{
        novo_elemento.innerHTML = `<h2>Produto: ${produto.value}</h2> <p>Quantidade em estoque: ${quantidade.value}</p>`
        novo_elemento.style.color="red"

    }
    resultado.append(novo_elemento)

    produto.value = ""
    quantidade.value = ""
    produto.focus()

})



