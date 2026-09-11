import type { FaqContent } from "../types";

export const faq = {
  meta: {
    title:
      "Perguntas Frequentes — Diagnóstico Automóvel | Diagnóstico Alto Minho",
    description:
      "Respostas sobre diagnóstico computorizado, ABS, airbag, preços, serviço móvel e diagnóstico antes de comprar no Alto Minho.",
  },
  h1: "Perguntas frequentes",
  lead:
    "Respostas directas, sem prometer funções que dependem do veículo e do equipamento.",
  items: [
    {
      question: "O que é um diagnóstico computorizado do carro?",
      answer:
        "É o processo de ligar equipamento de diagnóstico ao veículo para ler códigos de erro e dados dos sistemas electrónicos. Ajuda a perceber porque uma luz acendeu ou porque o carro se comporta de forma estranha — não é, por si só, a reparação.",
    },
    {
      question: "Que problemas podem ser diagnosticados?",
      answer:
        "Tipicamente avisos no painel, códigos de motor, ABS, airbag, comunicação entre módulos e alguns sintomas eléctricos. A lista exacta depende do veículo e do equipamento. Problemas puramente mecânicos (ex.: ruídos de suspensão sem código) podem precisar de inspecção noutra especialidade.",
    },
    {
      question: "Conseguem diagnosticar ABS?",
      answer:
        "Em muitos veículos sim — quando o módulo ABS/ESP é acessível com o equipamento disponível. Nem todos os modelos expõem a mesma informação.",
    },
    {
      question: "Conseguem diagnosticar airbag / SRS?",
      answer:
        "Em muitos casos é possível ler o sistema de airbags quando o acesso está disponível. Códigos de SRS exigem cuidado: limpar avisos sem corrigir a causa não é boa prática.",
    },
    {
      question: "Diagnosticam caixas automáticas?",
      answer:
        "Quando o protocolo e o equipamento o permitem, sim — leitura de códigos e dados do módulo de transmissão. Nem todas as caixas têm o mesmo nível de acesso.",
    },
    {
      question: "Podem deslocar-se ao meu local?",
      answer:
        "Sim, no Alto Minho, quando a agenda e a distância o permitirem. O diagnóstico móvel tem preço orientativo a partir de €50.",
    },
    {
      question: "Quanto custa o diagnóstico?",
      answer:
        "Preços orientativos: básico desde €30, completo desde €45, móvel desde €50, pré-compra desde €70. O valor final depende do veículo, local e complexidade.",
    },
    {
      question: "Preciso de levar o carro a uma oficina?",
      answer:
        "Nem sempre. Em muitos casos o diagnóstico pode ser feito no local do veículo. Se for necessária reparação mecânica ou eléctrica mais profunda, posso indicar que o passo seguinte é uma oficina especializada.",
    },
    {
      question: "Podem apagar erros / luzes de aviso?",
      answer:
        "Em alguns casos é possível limpar códigos após a leitura. Só faz sentido quando a causa foi compreendida ou quando se testa se o aviso regressa. Apagar códigos sem diagnóstico não resolve o problema e pode esconder informação útil.",
    },
    {
      question: "Fazem diagnóstico antes de comprar um carro usado?",
      answer:
        "Sim — é um dos serviços previstos (desde €70). Ajuda a ver avisos activos e códigos electrónicos antes de decidir. Não substitui uma inspecção mecânica completa nem garante o estado futuro do veículo.",
    },
    {
      question: "Que marcas de carro são suportadas?",
      answer:
        "O acesso varia por marca, modelo, ano e equipamento. Não afirmo suporte universal. Envie os dados do veículo e o sintoma — indico com honestidade o que é realista verificar.",
    },
  ],
} as const satisfies FaqContent;
