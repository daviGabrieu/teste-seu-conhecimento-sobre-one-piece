const perguntas = [
    {
      pergunta: "quem e o protagonista de one piece?",
      respostas: [
        "Monkey D. Luffy",
        "Roronoa Zoro",
        "Nami"
      ],
      correta: 0 // A resposta correta é "const myVar;"
    },
    {
      pergunta: "Qual é o nome do navio dos Chapéu de Palha?",
      respostas: [
        "Going Merry",
        "Thousand Sunny",
        "Blackbeard"
      ],
      correta: 1 // A resposta correta é "console.log()"
    },
    {
       pergunta: "Qual é o nome do navio de guerra da Marinha que persegue os Chapéus de Palha durante a saga Enies Lobby?",
    respostas: [
      "Kuja",
      "Buster Call",
      "Ark Maxim"
    ],
    correta: 1 // A resposta correta é "Buster Call"
    },
    {
      pergunta: "Qual é o nome do irmão de Luffy?",
      respostas: [
        "Ace",
        "sanji",
        "Garp"
      ],
      correta: 0 // A resposta correta é "Ace"
    },
    {
  
      pergunta: "Qual é a fruta do diabo original de Luffy?",
      respostas: [
        "gomu gomu no mi",
        "Zou Zou no Mi",
        "hito hito no mi modelo:nika"
      ],
      correta: 2 // A resposta correta é "nika nika no mi modelo:nika"
    },
    {
     pergunta: "Qual é o nome do país governado pela Yonkou Big Mom?",
    respostas: [
      "Wano",
      "Elbaf",
      "Whole Cake Island"
    ],
    correta: 2 // A resposta correta é "Whole Cake Island"
    },
    {
    pergunta: "Quem é o capitão dos Piratas do Barba Branca?",
      respostas: [
        "Shanks",
        "Kaido",
        "Edward Newgate"
      ],
      correta: 2 // A resposta correta é "Edward Newgate"
    },
    {
      pergunta: "Qual é o nome da espada de Zoro?",
      respostas: [
        "Sandai Kitetsu",
        "Wado Ichimonji",
        "Shusui"
      ],
      correta: 1 // A resposta correta é "Wado Ichimonji"
    },
    {
  
      pergunta: "Quem é o líder do Governo Mundial em One Piece?",
      respostas: [
        "Akainu",
        "Sengoku",
        "Im"
      ],
      correta: 2 // A resposta correta é "Im"
    },
    {
       pergunta: "Qual é o nome do arco em que Luffy enfrenta o vilão Crocodile pela primeira vez?",
    respostas: [
      "Arco Enies Lobby",
      "Arco Marineford",
      "Arco Alabasta"
    ],
    correta: 2 // A resposta correta é "Arco Alabasta"
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    } 
    
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  //fazer aparecer a resposta
  quizItem.querySelector('dl dt').remove()
  
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }