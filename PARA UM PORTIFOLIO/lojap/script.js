document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-secundario');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Produto adicionado ao carrinho!');
        });
    });
});

 

