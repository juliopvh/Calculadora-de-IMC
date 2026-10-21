/* ===== 1. Captura dos elementos do HTML usando o DOM ===== */
const form = document.getElementById('form-imc');
const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const resultado = document.getElementById('resultado');

/* ===== 2. Função principal: calcula e exibe o IMC ===== */
function calcularIMC() {
    /* Conversão: parseFloat transforma o texto do input em número decimal.
       Se o campo estiver vazio ou tiver texto, o resultado é NaN. */
    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value);

    /* 3. Validação: não aceita campos vazios, textos ou valores menores/iguais a zero */
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        exibirErro('Por favor, informe o peso e a altura com valores numéricos maiores que zero.');
        return; // encerra a função sem quebrar o sistema
    }

    /* 4. Cálculo do IMC: peso dividido pela altura ao quadrado */
    const imc = peso / (altura * altura);

    /* 5. Classificação de acordo com a tabela da OMS */
    let classificacao;
    let classe; // classe CSS que muda a cor do resultado (Desafio Extra)

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        classe = 'peso-abaixo';
    } else if (imc < 25) {
        classificacao = 'Peso normal';
        classe = 'peso-normal';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
        classe = 'sobrepeso';
    } else {
        classificacao = 'Obesidade';
        classe = 'obesidade';
    }

    /* 6. Exibição: insere o resultado na área reservada do HTML,
          com o IMC formatado em duas casas decimais (.toFixed(2)) */
    resultado.className = 'ativo ' + classe; // troca a cor de fundo (Desafio Extra)
    resultado.innerHTML =
        '<p class="imc-rotulo">Seu IMC</p>' +
        '<p class="imc-valor">' + imc.toFixed(2) + '</p>' +
        '<p class="imc-classificacao">' + classificacao + '</p>';
}

/* ===== Função auxiliar: exibe a mensagem de erro na área do resultado ===== */
function exibirErro(mensagem) {
    resultado.className = 'ativo erro';
    resultado.innerHTML = '<p class="imc-classificacao">' + mensagem + '</p>';
}

/* ===== Evento: dispara o cálculo ao clicar no botão ===== */
form.addEventListener('submit', function (evento) {
    evento.preventDefault(); // impede que a página recarregue
    calcularIMC();
});
