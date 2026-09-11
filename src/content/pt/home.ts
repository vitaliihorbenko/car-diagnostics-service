import type { HomeContent } from "../types";

export const home = {
  meta: {
    title: "Diagnóstico Automóvel no Alto Minho | Diagnóstico Alto Minho",
    description:
      "Diagnóstico computorizado ao domicílio em Vila Praia de Âncora e Alto Minho. Motor, ABS, airbag e sistemas electrónicos. Desde €30. Marque por WhatsApp.",
  },
  hero: {
    brand: "Diagnóstico Alto Minho",
    h1: "Diagnóstico automóvel no Alto Minho",
    lead: "Diagnóstico computorizado para ajudar a identificar falhas no motor, ABS, airbag, transmissão e sistemas electrónicos — no local, com explicação clara.",
    locationLine: "Vila Praia de Âncora e arredores",
    priceLine: "Desde €30",
    primaryCta: "Marcar diagnóstico",
    secondaryCta: "WhatsApp",
    trustStrip: [
      "Vamos até si",
      "Explicação clara",
      "Cobertura no Alto Minho",
    ],
  },
  valueProp: {
    h2: "Perceber o problema antes de gastar em peças",
    body: "Uma luz no painel ou um comportamento estranho no carro não significa automaticamente uma reparação cara. O diagnóstico ajuda a orientar a decisão com informação concreta — códigos de erro, dados em tempo real e uma leitura honesta do que é (e não é) possível verificar no seu veículo.",
  },
  servicesTeaser: {
    h2: "O que podemos diagnosticar",
    intro:
      "Foco inicial em diagnóstico por computador e sistemas electrónicos. As capacidades variam consoante o veículo e o equipamento.",
    items: [
      "Diagnóstico computorizado / OBD",
      "Luz do motor (Check Engine)",
      "ABS e airbag / SRS",
      "Transmissão e eléctrica automóvel",
      "Análise de códigos e dados em directo",
      "Diagnóstico antes da compra",
      "Diagnóstico móvel / ao domicílio",
    ],
    cta: "Ver serviços",
  },
  commonProblems: {
    h2: "Situações frequentes",
    items: [
      "Luz do motor acesa",
      "Luz ABS ou airbag no painel",
      "Perda de potência ou consumo anormal",
      "Falhas intermitentes difíceis de reproduzir",
      "Carro usado — quer uma segunda opinião antes de comprar",
    ],
    closing:
      "Se não tiver a certeza se o diagnóstico ajuda no seu caso, envie uma mensagem com a marca, modelo, ano e o sintoma.",
  },
  howItWorks: {
    h2: "Como funciona",
    steps: [
      {
        title: "Contacto",
        body: "Descreva o problema por WhatsApp ou pelo formulário.",
      },
      {
        title: "Agendamento",
        body: "Combinamos local e horário (em casa, no trabalho ou no local do veículo).",
      },
      {
        title: "Diagnóstico",
        body: "Leitura de sistemas disponíveis, códigos e dados relevantes.",
      },
      {
        title: "Explicação",
        body: "Resume do que foi encontrado e próximos passos possíveis (sem pressão para reparações que não fazemos neste momento).",
      },
    ],
  },
  serviceAreaTeaser: {
    h2: "Área de serviço",
    body: "Base em Vila Praia de Âncora, com deslocações no Alto Minho — incluindo Caminha, Viana do Castelo, Vila Nova de Cerveira, Valença, Ponte de Lima e zonas próximas.",
    note: "A disponibilidade móvel depende da distância e da agenda.",
    cta: "Ver área de serviço",
  },
  pricingTeaser: {
    h2: "Preços orientativos",
    rows: [
      { id: "basic", name: "Diagnóstico básico" },
      { id: "full", name: "Diagnóstico completo" },
      { id: "mobile", name: "Diagnóstico móvel" },
      { id: "prePurchase", name: "Diagnóstico pré-compra" },
    ],
    popularLabel: "Mais pedido",
    ctaPricing: "Ver preços",
    ctaWhatsapp: "WhatsApp",
  },
  whyUs: {
    h2: "Porque marcar connosco",
    points: [
      "Explicação clara, em linguagem acessível",
      "Atendimento em português, ucraniano e inglês",
      "Serviço móvel no Alto Minho",
      "Abordagem transparente: o que foi lido, o que não foi possível verificar",
      "Sem promessas exageradas sobre reparações ou “soluções milagre”",
    ],
  },
  faqTeaser: {
    h2: "Perguntas frequentes",
    items: [
      {
        question: "O que é um diagnóstico computorizado?",
        answer:
          "É a leitura dos sistemas electrónicos do veículo para identificar códigos de erro e dados que ajudam a perceber a origem de uma falha ou luz de aviso.",
      },
      {
        question: "Podem ir a minha casa ou ao local do carro?",
        answer:
          "Sim, sempre que a distância e a agenda o permitam. O diagnóstico móvel tem preço a partir de €50.",
      },
      {
        question: "Diagnosticam ABS e airbag?",
        answer:
          "Em muitos veículos é possível aceder a esses módulos. A disponibilidade depende da marca, modelo, ano e equipamento.",
      },
      {
        question: "Quanto custa?",
        answer:
          "Os preços orientativos começam em €30. O valor final pode variar com o veículo, local e complexidade.",
      },
    ],
    cta: "Ver todas as perguntas",
  },
  finalCta: {
    h2: "Pronto para marcar um diagnóstico?",
    body: "Descreva o veículo e o problema. Respondemos por WhatsApp para combinar o próximo passo.",
    primaryCta: "Marcar diagnóstico",
    secondaryCta: "WhatsApp",
  },
} as const satisfies HomeContent;
