document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('adicionarPerfil').addEventListener('click', function () {
        var novoPerfil = prompt('Digite o nome do novo perfil:');

        if (novoPerfil) {
            var novoPerfilLi = document.createElement('li');

            var novoPerfilContent = `
                <a href="#">
                    <div class="usuario-foto">
                        <img src="/ProjetoCSSFLIX2023/img/collado.png" alt="${novoPerfil}">
                    </div>
                    <p>${novoPerfil}</p>
                </a>
            `;

            novoPerfilLi.innerHTML = novoPerfilContent;

          
            var primeiroUsuario = document.querySelector('.usuario li');

           
            document.querySelector('.usuario').insertBefore(novoPerfilLi, primeiroUsuario);

            alert('Parabéns! Novo perfil adicionado: ' + novoPerfil);
        }
    });
});
