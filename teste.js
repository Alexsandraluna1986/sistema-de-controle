// Login System
document.getElementById('login')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    // Simple client-side authentication
    if (username === 'admin' && password === 'ale123') {
        window.location.href = 'cadastro.html';
    } else {
        alert('Nome de usuário ou senha incorretos.')
    }
});
document.getElementById('product-form')?.addEventListener('submit', addProduct);

let products = [];

function addProduct(e) {
    e.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;

    const product = {
        id: Date.now(),
        name: productName,
        quantity: parseInt(productQuantity)
    };

    products.push(product);
    displayProducts();
    document.getElementById('product-form').reset();
}

function displayProducts() {
    const productList = document.getElementById('products');
    productList.innerHTML = '';

    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${product.name} - ${product.quantity} unidades
            <div>
                <button class="update" onclick="updateProduct(${product.id})">Atualizar</button>
                <button onclick="removeProduct(${product.id})">Remover</button>
            </div>
        `;
        productList.appendChild(li);
    });
}

function removeProduct(id) {
    products = products.filter(product => product.id !== id);
    displayProducts();
}

function updateProduct(id) {
    const newQuantity = prompt('Digite a nova quantidade:');
    if (newQuantity !== null && !isNaN(newQuantity)) {
        products = products.map(product => {
            if (product.id === id) {
                return { ...product, quantity: parseInt(newQuantity) };
            }
            return product;
        });
        displayProducts();
    }
}

document.querySelector('.contato-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nomepessoa = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nomepessoa === '' || email === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    alert('Mensagem enviada com sucesso!');

    // Limpar o formulário após o envio
    document.querySelector('.formularioContato').reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

