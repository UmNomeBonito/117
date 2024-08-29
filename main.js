// Código Adicionado

// Variável para armazenar o número aleatório
let randomNumber = Math.floor(Math.random() * quickDrawDataset.length);

// Exibir o nome do esboço aleatório no console
console.log(quickDrawDataset[randomNumber]);

// Armazena o nome do esboço aleatório na variável sketch
let sketch = quickDrawDataset[randomNumber];

// Atualiza o texto da tag com o id "esboco_a_ser_desenhado"
document.getElementById("esboco_a_ser_desenhado").innerHTML = "Esboço a Ser Desenhado: " + sketch;

// Variáveis iniciais
let timerCounter = 0;
let timerCheck = "";
let drawSketch = "";
let answerHolder = "";
let score = 0;

// Mais funcionalidades serão adicionadas em projetos futuros
