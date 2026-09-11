import type { ServicesContent } from "../types";

export const services = {
  meta: {
    title: "Serviços de Diagnóstico Automóvel | Diagnóstico Alto Minho",
    description:
      "Diagnóstico computorizado, ABS, airbag, transmissão, eléctrica e pré-compra no Alto Minho. Funções disponíveis conforme o veículo e o equipamento.",
  },
  h1: "Serviços de diagnóstico",
  intro:
    "Ajudo a identificar falhas electrónicas e códigos de erro com diagnóstico por computador. Este serviço é móvel e orientado para clareza — não substitui uma oficina completa de mecânica.",
  items: [
    {
      id: "computer",
      name: "Diagnóstico computorizado",
      description:
        "Ligação ao veículo para leitura de sistemas suportados e visão geral do estado electrónico.",
    },
    {
      id: "engine",
      name: "Motor / Check Engine",
      description:
        "Análise da luz do motor e códigos relacionados com gestão do motor, quando o acesso estiver disponível.",
    },
    {
      id: "abs",
      name: "Diagnóstico ABS",
      description:
        "Leitura do módulo ABS/ESP (quando suportado) para perceber avisos e códigos associados.",
    },
    {
      id: "airbag",
      name: "Airbag / SRS",
      description:
        "Consulta do sistema de retenção (quando acessível) para códigos e estado do aviso no painel.",
    },
    {
      id: "transmission",
      name: "Transmissão",
      description:
        "Diagnóstico de caixas automáticas/robotizadas quando o protocolo e o equipamento o permitirem.",
    },
    {
      id: "electrical",
      name: "Eléctrica automóvel",
      description:
        "Apoio na identificação de falhas relacionadas com sensores, comunicação entre módulos e avisos eléctricos (âmbito diagnóstico, não reparação completa).",
    },
    {
      id: "liveData",
      name: "Análise de dados em directo (live data)",
      description:
        "Observação de parâmetros relevantes com o motor a trabalhar, para contextualizar códigos ou sintomas.",
    },
    {
      id: "faultCodes",
      name: "Análise de códigos de erro",
      description:
        "Interpretação dos códigos encontrados e distinção entre pistas úteis e informação incompleta.",
    },
    {
      id: "prePurchase",
      name: "Diagnóstico pré-compra",
      description:
        "Verificação orientada antes de comprar um usado: avisos activos, códigos e pontos de atenção electrónicos.",
    },
    {
      id: "mobile",
      name: "Diagnóstico móvel / ao domicílio",
      description:
        "Deslocação ao local do veículo no Alto Minho, sujeita a agenda e distância.",
    },
  ],
  closing:
    "Tem dúvidas se o seu caso se enquadra? Contacte por WhatsApp com marca, modelo, ano e sintoma.",
  primaryCta: "Marcar diagnóstico",
  secondaryCta: "WhatsApp",
} as const satisfies ServicesContent;
