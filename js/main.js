document.addEventListener('DOMContentLoaded', function () {
    const searchBox = document.getElementById('searchBox');
    const itemList = document.getElementById('itemList');
    const items = itemList.getElementsByClassName('item');

    searchBox.addEventListener('keyup', function () {
        const query = searchBox.value.toLowerCase();

        for (let i = 0; i < items.length; i++) {
            const itemName = items[i].textContent.toLowerCase();
            if (itemName.includes(query)) {
                items[i].classList.remove('hidden');
            } else {
                items[i].classList.add('hidden');
            }
        }
    });
});

// Dados das receitas para cada dia
const receitas = {
    segunda: [
        { nome: 'Frango Frito', imagem: 'imgs/frango.jpg', descricao: 'Frango, molho especial e legumes cuzidos', preco: 'R$16,00' },
        { nome: 'Linguiça', imagem: 'imgs/linguica.jpg', descricao: 'Linguica feita na brasa', preco: 'R$11,00' },
        { nome: 'Figado Cozido', imagem: 'imgs/figado.jpg', descricao: 'Figado de gado, molho, tempero especial', preco: 'R$10,00' },
        { nome: 'Calabresa Acebolada', imagem: 'imgs/calabresa.jpg', descricao: 'Calabresa, cebolas e pimentao', preco: 'R$18,00' },
        { nome: 'Frango ao molho', imagem: 'imgs/frangom.jpg', descricao: 'Frango cozido com batatas e legumas', preco: 'R$16,00' }
    ],
    terca: [
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' }
    ],
    quarta: [
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' }
    ],
    quinta: [
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' }
    ],
    sexta: [
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' },
        { nome: 'Sarrabulho', imagem: 'imgs/sarrabulho.jpg', descricao: 'Carneiro, legumes cozidos e molho especial', preco: 'R$15,00' }
    ]
};

function showItems(dia) {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Limpar a lista existente

    const items = receitas[dia];
    items.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('item');

        li.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" class="img-js">
            <div>
                <strong>${item.nome}</strong>
                <p style="color: black;">${item.descricao}</p>
                <div class="buy-comida">
                    <h4 style="color: black;">${item.preco}</h4>
                    <div class="stars-comida">
                        <span class="emojione--star">&#9733;</span>
                        <span class="emojione--star">&#9733;</span>
                        <span class="emojione--star">&#9733;</span>
                        <span class="emojione--star">&#9733;</span>
                        <span class="emojione--star">&#9733;</span>
                    </div>
                </div>
            </div>
        `;

        itemList.appendChild(li);
    });
}
/*const receitas = {
    segunda: [
        {
            nome: 'Macarronada',
            imagem: 'imgs/macarronada.png',
            descricao: 'macarrao, molho, carne moida e ovos',
            preco: 'R$15,00'
        }
    ],
    terca: [
        {
            nome: 'Feijoada',
            imagem: 'imgs/feijoada.jpg',
            descricao: 'fejao preto, calabresa, bacon e molho especial',
            preco: 'R$20,00'
        }
    ],
    quarta: [
        {
            nome: 'Lasanha',
            imagem: 'imgs/lasanha.png',
            descricao: 'massa, carne moída, molho e queijo',
            preco: 'R$18,00'
        }
    ],
    quinta: [
        {
            nome: 'Pizza',
            imagem: 'imgs/pizza.png',
            descricao: 'massa de pizza com vários recheios',
            preco: 'R$25,00'
        }
    ],
    sexta: [
        {
            nome: 'Churrasco',
            imagem: 'imgs/churrasco.png',
            descricao: 'carne assada com acompanhamentos',
            preco: 'R$30,00'
        }
    ]
};

function showItems(dia) {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Limpar a lista existente

    const items = receitas[dia];
    items.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('item');
        
        li.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}">
            <div>
                <strong>${item.nome}</strong>
                <p style="color: black;">${item.descricao}</p>
                <div class="buy-comida">
                    <h4 style="color: black;">${item.preco}</h4>
                    <div class="stars-comida">
                        <span class="emojione--star">&#9733;</span>
                        <span class="emojione--star">&#9733;</span>
                        <span class="emojione--star">&#9733;</span>
                        <span class="emojione--star">&#9733;</span>
                        <span class="emojione--star">&#9733;</span>
                    </div>
                </div>
            </div>
        `;
        
        itemList.appendChild(li);
    });
}*/

