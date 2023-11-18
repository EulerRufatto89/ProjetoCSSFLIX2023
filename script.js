document.addEventListener('DOMContentLoaded', function () {
    function obterPerfisSalvos() {

        var perfisSalvos = localStorage.getItem('perfis');
        return perfisSalvos ? JSON.parse(perfisSalvos) : [];
    }

    function salvarPerfis(perfis) {

        localStorage.setItem('perfis', JSON.stringify(perfis));
    }

    function adicionarNovoPerfil() {
        var novoPerfil = prompt('Digite o nome do novo perfil:');

        if (novoPerfil) {

            var perfis = obterPerfisSalvos();

            perfis.push({
                nome: novoPerfil,
                fotoUrl: '/img/images.png' 
            });

            salvarPerfis(perfis);

            var novoPerfilLi = document.createElement('li');
            var novoPerfilContent = `
                <a href="#">
                    <div class="usuario-foto">
                        <img id="foto${novoPerfil}" class="perfil-img" src="${perfis[perfis.length - 1].fotoUrl}" alt="${novoPerfil}">
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

                            var perfilAtualizado = perfis.find(p => p.nome === novoPerfil);
                            if (perfilAtualizado) {
                                perfilAtualizado.fotoUrl = e.target.result;
                                salvarPerfis(perfis);
                            }
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
                    var perfilAtualizado = perfis.find(p => p.nome === novoPerfil);
                    if (perfilAtualizado) {
                        perfilAtualizado.nome = novoNome;
                        salvarPerfis(perfis);
                    }
                }
            });

            alert('Parabéns! Novo perfil adicionado: ' + novoPerfil);
        }
    }

    document.getElementById('adicionarPerfil').addEventListener('click', adicionarNovoPerfil);
});
