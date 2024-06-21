document.getElementById('product-func')?.addEventListener('submit', addFuncionario);

let funcionarios = [];

function addFuncionario(e) {
    e.preventDefault();

    const nome = document.getElementById('funcionario-name').value.trim();
    const cargo = document.getElementById('cargo-funcionario').value.trim();

    const nomeValido = /^[a-zA-Z\s]+$/.test(nome);
    const cargoValido = /^[a-zA-Z\s]+$/.test(cargo);

    if (nomeValido && cargoValido) {
        const funcionario = {
            id: Date.now(),
            nome: nome,
            cargo: cargo
        };

        funcionarios.push(funcionario);
        displayFunc();
        document.getElementById('product-func').reset();
    } else {
        alert('Nome e cargo devem conter apenas letras e espaços.');
    }
}

function displayFunc() {
    const funcList = document.getElementById('listaFuncionarios');
    funcList.innerHTML = '';

    funcionarios.forEach(funcionario => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${funcionario.nome} - ${funcionario.cargo} 
            <div>
                <button class="update" onclick="updateFunc(${funcionario.id})">Atualizar</button>
                <button onclick="removeFunc(${funcionario.id})">Remover</button>
            </div>
        `;
        funcList.appendChild(li);
    });
}

function removeFunc(id) {
    funcionarios = funcionarios.filter(funcionario => funcionario.id !== id);
    displayFunc();
}


function updateFunc(id) {
    const newCargo = prompt('Digite o novo cargo:');
        if(newCargo  !== null && /^[a-zA-Z\s]+$/.test(newCargo.trim())) { // Verificar se contém apenas letras e espaços
        funcionarios = funcionarios.map(funcionario => {
            if (funcionario.id === id) {
                return { ...funcionario, cargo: newCargo };
            }
            return funcionario;
        });
        displayFunc();
    } else {
        alert('Cargo inválido. Por favor, insira um texto.');
    };
}

