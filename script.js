document.addEventListener('DOMContentLoaded', function () {
        function adicionarNovoPerfil() {
        var novoPerfil = prompt('Digite o nome do novo perfil:');

        if (novoPerfil) {
            var novoPerfilLi = document.createElement('li');
            var novoPerfilContent = `
                <a href="#">
                    <div class="usuario-foto">
                        <img id="foto${novoPerfil}" class="perfil-img" src="/ProjetoCSSFLIX2023/img/images.png" alt="${novoPerfil}">
                    </div>
                    <p id="nome${novoPerfil}">${novoPerfil}</p>
                </a>
            `;
            novoPerfilLi.innerHTML = novoPerfilContent;

            var primeiroUsuario = document.querySelector('.usuario li');
            document.querySelector('.usuario').insertBefore(novoPerfilLi, primeiroUsuario);

            document.getElementById(`foto${novoPerfil}`).addEventListener('click', function () {
                document.getElementById('inputFoto').addEventListener('change', function (event) {
                    var fotoSelecionada = event.target.files[0];
                    if (fotoSelecionada) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            document.getElementById(`foto${novoPerfil}`).src = e.target.result;
                        };
                        reader.readAsDataURL(fotoSelecionada);
                    }
                });
                document.getElementById('inputFoto').click();
            });
           
            document.getElementById(`nome${novoPerfil}`).addEventListener('click', function () {
                var novoNome = prompt('Digite o novo nome:');
                if (novoNome) {
                    document.getElementById(`nome${novoPerfil}`).textContent = novoNome;
                }
            });

            alert('Parabéns! Novo perfil adicionado: ' + novoPerfil);
        }
    }
    
    document.getElementById('adicionarPerfil').addEventListener('click', adicionarNovoPerfil);
});
