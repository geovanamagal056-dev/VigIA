const telaInicial = document.body.innerHTML;

const botoes = document.querySelectorAll("button");

botoes.forEach(function(botao){

    botao.addEventListener("click", function(){

        if(botao.innerText == "CADASTRE-SE"){

            document.body.innerHTML = `

            <div class="cadastro">

                <h1>Cadastro VigIA</h1>

                <p>Crie sua conta para começar!</p>

                <input type="text" placeholder="Nome completo">

                <input type="email" placeholder="E-mail">

                <input type="password" placeholder="Senha">

                <button class="entrar">ENTRAR</button>

                <button class="voltar">VOLTAR</button>

            </div>

            `;

            const entrar = document.querySelector(".entrar");

            entrar.addEventListener("click", function(){

                alert("Cadastro realizado com sucesso!");

            });

            const voltar = document.querySelector(".voltar");

            voltar.addEventListener("click", function(){

                document.body.innerHTML = telaInicial;

                location.reload();

            });

        }

        else if(botao.innerText == "FALE CONOSCO"){

            document.body.innerHTML = `

            <div class="cadastro">

                <h1>Fale com o VigIA!</h1>

                <p>Envie sua dúvida ou sugestão e nós te responderemos pelo e-mail.</p>

                <input type="text" placeholder="Seu nome">

                <input type="email" placeholder="Seu e-mail">

                <input type="text" placeholder="Digite sua mensagem">

                <button class="enviar">ENVIAR</button>

                <button class="voltar">VOLTAR</button>

            </div>

            `;

            const enviar = document.querySelector(".enviar");

            enviar.addEventListener("click", function(){

                alert("Sua dúvida foi enviada! Responderemos pelo e-mail informado.");

            });

            const voltar = document.querySelector(".voltar");

            voltar.addEventListener("click", function(){

                document.body.innerHTML = telaInicial;

                location.reload();

            });

        }

        else{

            alert("Bem-vindo ao VigIA!");

        }

    });

});
