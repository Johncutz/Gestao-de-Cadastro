const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let cartao = document.getElementById('cartao').value
    let cep = document.getElementById('cep').value
    let endereco = document.getElementById('endereco').value

    let data = {
        name,
        email,
        cartao,
        cep,
        endereco
    };
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let form = document.getElementById('form');

    let pronto = `<p>Pronto! Compra realizada com Sucesso!<br><br><br>Clique em Produtos para voltar</p>`;


    setTimeout(() => {
        form.innerHTML = pronto;
    }, 1250)
});