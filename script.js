function criptografar() {
    const textoDigitado = document.getElementById('textoDigitado').value;

    if (!textoDigitado) {
        alert('Digite um texto para criptografar.');
        return;
    }

    const chaveAleatoria = gerarChaveAleatoria();
    const textoCriptografado = criptografarTexto(textoDigitado, chaveAleatoria);
    document.getElementById('resulTexto').value = textoCriptografado;
}

function descriptografar() {
    const textoDigitado = document.getElementById('textoDigitado').value;

    if (!textoDigitado) {
        alert('Digite um texto para descriptografar.');
        return;
    }

    const chaveAleatoria = gerarChaveAleatoria();
    const textoDescriptografado = descriptografarTexto(textoDigitado, chaveAleatoria);
    document.getElementById('resulTexto').value = textoDescriptografado;
}

function criptografarTexto(texto, chave) {
    // Adicione a lógica de criptografia aqui
    // Exemplo simples: inverte o texto
    return texto.split('').reverse().join('');
}

function descriptografarTexto(criptografado, chave) {
    // Adicione a lógica de descriptografia aqui
    // Exemplo simples: inverte o texto novamente
    return criptografado.split('').reverse().join('');
}


function gerarChaveAleatoria() {
    const comprimentoChave = 16;
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let chave = '';

    for (let i = 0; i < comprimentoChave; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        chave += caracteres.charAt(indice);
    }

    return chave;
}


function copiarTexto() {
    const textarea = document.getElementById('resulTexto');

    if (!textarea.value) {
        alert('Nenhum texto para copiar.');
        return;
    }

    const inputElement = document.createElement('input');
    inputElement.value = textarea.value;
    document.body.appendChild(inputElement);

    
    inputElement.select();
    inputElement.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(inputElement);

    alert('Texto copiado para a área de transferência.');
}


function limparTexto() {
    document.getElementById('textoDigitado').value = ''; 
    document.getElementById('resulTexto').value = ''; 

}