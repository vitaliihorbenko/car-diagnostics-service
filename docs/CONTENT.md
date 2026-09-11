# Content specification — Car Diagnostics MVP

Draft marketing and SEO copy for review before implementation.  
Architecture and build sequence: [IMPLEMENTATION.md](./IMPLEMENTATION.md).

When building, map these strings into `src/content/{pt,uk,en}/` and shared UI message files. Do not hardcode copy in components.

---

## Conventions

| Token | Meaning |
|---|---|
| **Diagnóstico Alto Minho** | Provisional brand name — replace before launch |
| `[WhatsApp]` | E.164 WhatsApp number (config) |
| `[phone]` | Public phone if published (config) |
| `[email]` | Public email if published (config) |
| **from €30 / €45 / €50 / €70** | Basic / Full / Mobile / Pre-purchase — from `pricing.ts` |

**Language rules**

- `pt` = European Portuguese (not Brazilian)
- `uk` = natural Ukrainian
- `en` = clear international English for residents/expats in Northern Portugal

**Honesty rules**

- Never claim “all brands”, “always available”, “guaranteed fix”, “best”, “expert”, “#1”
- Always keep the capability disclaimer where diagnostics scope is described
- Prefer “from” pricing; final price may vary

**Primary CTAs (logical keys)**

- `cta.book` → Contact / book flow
- `cta.whatsapp` → WhatsApp deep link

---

## Shared UI strings

### Navigation

| Key | pt | uk | en |
|---|---|---|---|
| `nav.home` | Início | Головна | Home |
| `nav.services` | Serviços | Послуги | Services |
| `nav.pricing` | Preços | Ціни | Pricing |
| `nav.serviceArea` | Área de serviço | Зона обслуговування | Service area |
| `nav.about` | Sobre | Про нас | About |
| `nav.contact` | Contacto | Контакт | Contact |
| `nav.faq` | FAQ | Питання | FAQ |
| `nav.blog` | Blog | Блог | Blog |

### CTAs and sticky bar

| Key | pt | uk | en |
|---|---|---|---|
| `cta.book` | Marcar diagnóstico | Записатися на діагностику | Book a diagnostic |
| `cta.whatsapp` | WhatsApp | WhatsApp | WhatsApp |
| `cta.seePricing` | Ver preços | Переглянути ціни | See pricing |
| `cta.seeServices` | Ver serviços | Переглянути послуги | See services |
| `cta.contactUs` | Falar connosco | Зв’язатися з нами | Contact us |
| `sticky.book` | Marcar | Запис | Book |
| `sticky.whatsapp` | WhatsApp | WhatsApp | WhatsApp |

### Footer

**pt**

- Blurb: Diagnóstico automóvel móvel no Alto Minho. Base em Vila Praia de Âncora. Atendimento em português, ucraniano e inglês.
- Area line: Vila Praia de Âncora, Caminha, Viana do Castelo e arredores.
- Rights: © {year} Diagnóstico Alto Minho

**uk**

- Blurb: Мобільна комп’ютерна діагностика авто в регіоні Алту Мінью. База — Віла Прая де Анкора. Спілкуємося португальською, українською та англійською.
- Area line: Віла Прая де Анкора, Камінья, Віана-ду-Каштелу та околиці.
- Rights: © {year} Diagnóstico Alto Minho

**en**

- Blurb: Mobile car diagnostics in Alto Minho, Northern Portugal. Based in Vila Praia de Âncora. We communicate in Portuguese, Ukrainian and English.
- Area line: Vila Praia de Âncora, Caminha, Viana do Castelo and surrounding areas.
- Rights: © {year} Diagnóstico Alto Minho

### Shared capability disclaimer

**pt:** As funções disponíveis dependem da marca, modelo, ano do veículo e do equipamento de diagnóstico.

**uk:** Доступні функції залежать від марки, моделі, року автомобіля та діагностичного обладнання.

**en:** Available functions depend on the vehicle make, model, year and diagnostic equipment.

### Shared pricing disclaimer

**pt:** O preço final pode depender do veículo, da localização e da complexidade do diagnóstico.

**uk:** Остаточна ціна може залежати від автомобіля, локації та складності діагностики.

**en:** The final price may depend on the vehicle, location and diagnostic complexity.

### Locale switcher labels

| Locale | Short label |
|---|---|
| pt | PT |
| uk | UK |
| en | EN |

---

## Page: Home

Route: `/[locale]`

### Metadata

**pt**

- Title: Diagnóstico Automóvel no Alto Minho | Diagnóstico Alto Minho
- Description: Diagnóstico computorizado ao domicílio em Vila Praia de Âncora e Alto Minho. Motor, ABS, airbag e sistemas electrónicos. Desde €30. Marque por WhatsApp.

**uk**

- Title: Комп’ютерна діагностика авто в Португалії (Алту Мінью) | Diagnóstico Alto Minho
- Description: Мобільна діагностика авто у Віла Прая де Анкора та регіоні Алту Мінью. Check Engine, ABS, airbag та електроніка. Від €30. Запис у WhatsApp.

**en**

- Title: Car Diagnostics in Northern Portugal | Diagnóstico Alto Minho
- Description: Mobile computer diagnostics in Vila Praia de Âncora and Alto Minho. Engine, ABS, airbag and electronics. From €30. Book via WhatsApp.

---

### 1. Hero

**pt**

- Brand: Diagnóstico Alto Minho
- H1: Diagnóstico automóvel no Alto Minho
- Lead: Diagnóstico computorizado para ajudar a identificar falhas no motor, ABS, airbag, transmissão e sistemas electrónicos — no local, com explicação clara.
- Location line: Vila Praia de Âncora e arredores
- Price line: Desde €30
- Primary CTA: Marcar diagnóstico
- Secondary CTA: WhatsApp

**uk**

- Brand: Diagnóstico Alto Minho
- H1: Комп’ютерна діагностика авто в Алту Мінью
- Lead: Діагностика електронних систем автомобіля, щоб зрозуміти причину несправності двигуна, ABS, airbag, КПП та іншої електроніки — з виїздом і зрозумілим поясненням.
- Location line: Віла Прая де Анкора та околиці
- Price line: Від €30
- Primary CTA: Записатися на діагностику
- Secondary CTA: WhatsApp

**en**

- Brand: Diagnóstico Alto Minho
- H1: Car diagnostics in Alto Minho
- Lead: Computer diagnostics to help identify issues in the engine, ABS, airbag, transmission and electronic systems — on-site, with a clear explanation.
- Location line: Vila Praia de Âncora and surrounding areas
- Price line: From €30
- Primary CTA: Book a diagnostic
- Secondary CTA: WhatsApp

---

### 2. Value proposition

**pt**

- H2: Perceber o problema antes de gastar em peças
- Body: Uma luz no painel ou um comportamento estranho no carro não significa automaticamente uma reparação cara. O diagnóstico ajuda a orientar a decisão com informação concreta — códigos de erro, dados em tempo real e uma leitura honesta do que é (e não é) possível verificar no seu veículo.

**uk**

- H2: Спочатку зрозуміти проблему — потім витрачати на запчастини
- Body: Індикатор на панелі чи дивна поведінка авто не завжди означають дорогий ремонт. Діагностика допомагає прийняти рішення на основі фактів: коди помилок, дані в реальному часі та чесне пояснення, що саме можна перевірити на вашому авто.

**en**

- H2: Understand the problem before spending on parts
- Body: A warning light or unusual behaviour does not automatically mean an expensive repair. Diagnostics help you decide with clearer information — fault codes, live data and an honest explanation of what can (and cannot) be checked on your vehicle.

---

### 3. Diagnostic services teaser

**pt**

- H2: O que podemos diagnosticar
- Intro: Foco inicial em diagnóstico por computador e sistemas electrónicos. As capacidades variam consoante o veículo e o equipamento.
- Items (short):
  - Diagnóstico computorizado / OBD
  - Luz do motor (Check Engine)
  - ABS e airbag / SRS
  - Transmissão e eléctrica automóvel
  - Análise de códigos e dados em directo
  - Diagnóstico antes da compra
  - Diagnóstico móvel / ao domicílio
- CTA: Ver serviços
- Disclaimer: (shared capability disclaimer)

**uk**

- H2: Що ми діагностуємо
- Intro: Основний фокус — комп’ютерна діагностика та електронні системи. Можливості залежать від автомобіля та обладнання.
- Items (short):
  - Комп’ютерна діагностика / OBD
  - Check Engine
  - ABS та airbag / SRS
  - КПП та автоелектрика
  - Аналіз кодів і live data
  - Діагностика перед купівлею
  - Виїзна діагностика
- CTA: Переглянути послуги
- Disclaimer: (shared)

**en**

- H2: What we can diagnose
- Intro: Initial focus on computer diagnostics and electronic systems. Capabilities vary by vehicle and equipment.
- Items (short):
  - Computer / OBD diagnostics
  - Check Engine light
  - ABS and airbag / SRS
  - Transmission and auto electrical
  - Fault code and live data analysis
  - Pre-purchase diagnostics
  - Mobile / on-site diagnostics
- CTA: See services
- Disclaimer: (shared)

---

### 4. Common problems

**pt**

- H2: Situações frequentes
- Items:
  - Luz do motor acesa
  - Luz ABS ou airbag no painel
  - Perda de potência ou consumo anormal
  - Falhas intermitentes difíceis de reproduzir
  - Carro usado — quer uma segunda opinião antes de comprar
- Closing: Se não tiver a certeza se o diagnóstico ajuda no seu caso, envie uma mensagem com a marca, modelo, ano e o sintoma.

**uk**

- H2: Типові ситуації
- Items:
  - Загорівся Check Engine
  - Індикатор ABS або airbag
  - Втрата потужності чи підвищена витрата
  - «Плаваючі» несправності, які важко повторити
  - Авто з пробігом — потрібна друга думка перед купівлею
- Closing: Якщо не впевнені, чи допоможе діагностика у вашому випадку — напишіть марку, модель, рік і симптом.

**en**

- H2: Common situations
- Items:
  - Check Engine light on
  - ABS or airbag warning light
  - Loss of power or unusual fuel use
  - Intermittent faults that are hard to reproduce
  - Used car — you want a second opinion before buying
- Closing: If you are unsure whether diagnostics can help, send a message with the make, model, year and symptom.

---

### 5. How it works

**pt**

- H2: Como funciona
- Steps:
  1. Contacto — descreva o problema por WhatsApp ou pelo formulário.
  2. Agendamento — combinamos local e horário (em casa, no trabalho ou no local do veículo).
  3. Diagnóstico — leitura de sistemas disponíveis, códigos e dados relevantes.
  4. Explicação — resume do que foi encontrado e próximos passos possíveis (sem pressão para reparações que não fazemos neste momento).

**uk**

- H2: Як це працює
- Steps:
  1. Зв’язок — опишіть проблему в WhatsApp або через форму.
  2. Запис — узгоджуємо місце й час (вдома, на роботі чи там, де стоїть авто).
  3. Діагностика — зчитування доступних систем, кодів і релевантних даних.
  4. Пояснення — короткий підсумок знахідок і можливих наступних кроків (без тиску щодо ремонтів, які ми зараз не виконуємо).

**en**

- H2: How it works
- Steps:
  1. Get in touch — describe the issue on WhatsApp or via the form.
  2. Schedule — we agree on place and time (home, work or where the car is).
  3. Diagnostics — read available systems, codes and relevant data.
  4. Explanation — a clear summary of findings and possible next steps (no pressure for repairs we do not offer yet).

---

### 6. Service area teaser

**pt**

- H2: Área de serviço
- Body: Base em Vila Praia de Âncora, com deslocações no Alto Minho — incluindo Caminha, Viana do Castelo, Vila Nova de Cerveira, Valença, Ponte de Lima e zonas próximas.
- Note: A disponibilidade móvel depende da distância e da agenda.
- CTA: Ver área de serviço

**uk**

- H2: Зона обслуговування
- Body: База у Віла Прая де Анкора, виїзди регіоном Алту Мінью — зокрема Камінья, Віана-ду-Каштелу, Віла Нова де Сервейра, Валенса, Понте-де-Ліма та найближчі райони.
- Note: Виїзд залежить від відстані та розкладу.
- CTA: Переглянути зону обслуговування

**en**

- H2: Service area
- Body: Based in Vila Praia de Âncora, covering Alto Minho — including Caminha, Viana do Castelo, Vila Nova de Cerveira, Valença, Ponte de Lima and nearby areas.
- Note: On-site availability depends on distance and schedule.
- CTA: See service area

---

### 7. Pricing teaser

**pt**

- H2: Preços orientativos
- Rows:
  - Diagnóstico básico — desde €30
  - Diagnóstico completo — desde €45
  - Diagnóstico móvel — desde €50
  - Diagnóstico pré-compra — desde €70
- Disclaimer: (shared pricing disclaimer)
- CTA: Ver preços · WhatsApp

**uk**

- H2: Орієнтовні ціни
- Rows:
  - Базова діагностика — від €30
  - Повна діагностика — від €45
  - Виїзна діагностика — від €50
  - Діагностика перед купівлею — від €70
- Disclaimer: (shared)
- CTA: Переглянути ціни · WhatsApp

**en**

- H2: Guide prices
- Rows:
  - Basic diagnostics — from €30
  - Full diagnostics — from €45
  - Mobile diagnostics — from €50
  - Pre-purchase diagnostics — from €70
- Disclaimer: (shared)
- CTA: See pricing · WhatsApp

---

### 8. Why choose this service

**pt**

- H2: Porque marcar connosco
- Points:
  - Explicação clara, em linguagem acessível
  - Atendimento em português, ucraniano e inglês
  - Serviço móvel no Alto Minho
  - Abordagem transparente: o que foi lido, o que não foi possível verificar
  - Sem promessas exageradas sobre reparações ou “soluções milagre”

**uk**

- H2: Чому звертаються до нас
- Points:
  - Зрозуміле пояснення звичайною мовою
  - Спілкування португальською, українською та англійською
  - Виїзд у регіоні Алту Мінью
  - Прозорий підхід: що зчитали, а що перевірити не вдалося
  - Без перебільшених обіцянок щодо ремонту чи «чарівних рішень»

**en**

- H2: Why book with us
- Points:
  - Clear explanation in plain language
  - Communication in Portuguese, Ukrainian and English
  - Mobile service across Alto Minho
  - Transparent approach: what was read, and what could not be checked
  - No exaggerated promises about repairs or “miracle fixes”

---

### 9. FAQ teaser (home)

Show 4 items; link to full FAQ page.

**pt**

- H2: Perguntas frequentes
- Q1: O que é um diagnóstico computorizado?  
  A1: É a leitura dos sistemas electrónicos do veículo para identificar códigos de erro e dados que ajudam a perceber a origem de uma falha ou luz de aviso.
- Q2: Podem ir a minha casa ou ao local do carro?  
  A2: Sim, sempre que a distância e a agenda o permitam. O diagnóstico móvel tem preço a partir de €50.
- Q3: Diagnosticam ABS e airbag?  
  A3: Em muitos veículos é possível aceder a esses módulos. A disponibilidade depende da marca, modelo, ano e equipamento.
- Q4: Quanto custa?  
  A4: Os preços orientativos começam em €30. O valor final pode variar com o veículo, local e complexidade.
- CTA: Ver todas as perguntas

**uk**

- H2: Часті запитання
- Q1: Що таке комп’ютерна діагностика?  
  A1: Це зчитування електронних систем авто, щоб побачити коди помилок і дані, які допомагають зрозуміти причину несправності чи індикатора.
- Q2: Чи можете приїхати до мене?  
  A2: Так, якщо дозволяє відстань і розклад. Виїзна діагностика — від €50.
- Q3: Чи діагностуєте ABS і airbag?  
  A3: На багатьох авто можна отримати доступ до цих модулів. Можливість залежить від марки, моделі, року та обладнання.
- Q4: Скільки коштує?  
  A4: Орієнтовні ціни починаються від €30. Остаточна сума може змінюватися залежно від авто, місця та складності.
- CTA: Усі запитання

**en**

- H2: Frequently asked questions
- Q1: What is computer car diagnostics?  
  A1: It is reading the vehicle’s electronic systems to identify fault codes and data that help explain a fault or warning light.
- Q2: Can you come to my location?  
  A2: Yes, when distance and schedule allow. Mobile diagnostics start from €50.
- Q3: Can you diagnose ABS and airbag systems?  
  A3: On many vehicles those modules can be accessed. Availability depends on make, model, year and equipment.
- Q4: How much does it cost?  
  A4: Guide prices start from €30. The final amount may vary with vehicle, location and complexity.
- CTA: See all FAQs

---

### 10. Final CTA

**pt**

- H2: Pronto para marcar um diagnóstico?
- Body: Descreva o veículo e o problema. Respondemos por WhatsApp para combinar o próximo passo.
- Primary: Marcar diagnóstico
- Secondary: WhatsApp

**uk**

- H2: Готові записатися на діагностику?
- Body: Опишіть авто та проблему. Відповімо в WhatsApp і узгодимо наступний крок.
- Primary: Записатися на діагностику
- Secondary: WhatsApp

**en**

- H2: Ready to book a diagnostic?
- Body: Describe the vehicle and the issue. We will reply on WhatsApp to agree the next step.
- Primary: Book a diagnostic
- Secondary: WhatsApp

---

## Page: Services

Route: `/[locale]/services`

### Metadata

**pt**

- Title: Serviços de Diagnóstico Automóvel | Diagnóstico Alto Minho
- Description: Diagnóstico computorizado, ABS, airbag, transmissão, eléctrica e pré-compra no Alto Minho. Funções disponíveis conforme o veículo e o equipamento.

**uk**

- Title: Послуги комп’ютерної діагностики авто | Diagnóstico Alto Minho
- Description: Діагностика Check Engine, ABS, airbag, КПП, автоелектрики та перевірка перед купівлею в Алту Мінью. Можливості залежать від авто й обладнання.

**en**

- Title: Car Diagnostic Services | Diagnóstico Alto Minho
- Description: Computer diagnostics, ABS, airbag, transmission, electrical and pre-purchase checks in Alto Minho. Capabilities depend on vehicle and equipment.

### Page body

**pt**

- H1: Serviços de diagnóstico
- Intro: Ajudo a identificar falhas electrónicas e códigos de erro com diagnóstico por computador. Este serviço é móvel e orientado para clareza — não substitui uma oficina completa de mecânica.
- Disclaimer block: (shared capability disclaimer)

Service blocks:

1. **Diagnóstico computorizado** — Ligação ao veículo para leitura de sistemas suportados e visão geral do estado electrónico.
2. **Motor / Check Engine** — Análise da luz do motor e códigos relacionados com gestão do motor, quando o acesso estiver disponível.
3. **Diagnóstico ABS** — Leitura do módulo ABS/ESP (quando suportado) para perceber avisos e códigos associados.
4. **Airbag / SRS** — Consulta do sistema de retenção (quando acessível) para códigos e estado do aviso no painel.
5. **Transmissão** — Diagnóstico de caixas automáticas/robotizadas quando o protocolo e o equipamento o permitirem.
6. **Eléctrica automóvel** — Apoio na identificação de falhas relacionadas com sensores, comunicação entre módulos e avisos eléctricos (âmbito diagnóstico, não reparação completa).
7. **Análise de dados em directo (live data)** — Observação de parâmetros relevantes com o motor a trabalhar, para contextualizar códigos ou sintomas.
8. **Análise de códigos de erro** — Interpretação dos códigos encontrados e distinção entre pistas úteis e informação incompleta.
9. **Diagnóstico pré-compra** — Verificação orientada antes de comprar um usado: avisos activos, códigos e pontos de atenção electrónicos.
10. **Diagnóstico móvel / ao domicílio** — Deslocação ao local do veículo no Alto Minho, sujeita a agenda e distância.

- Closing CTA: Tem dúvidas se o seu caso se enquadra? Contacte por WhatsApp com marca, modelo, ano e sintoma.
- Buttons: Marcar diagnóstico · WhatsApp

**uk**

- H1: Послуги діагностики
- Intro: Допомагаю виявити електронні несправності та коди помилок за допомогою комп’ютерної діагностики. Це виїзний сервіс із акцентом на зрозумілість — він не замінює повний механічний автосервіс.
- Disclaimer: (shared)

Service blocks:

1. **Комп’ютерна діагностика** — Підключення до авто для зчитування підтримуваних систем і загальної картини електроніки.
2. **Двигун / Check Engine** — Аналіз індикатора Check Engine та кодів, пов’язаних із керуванням двигуном (коли є доступ).
3. **Діагностика ABS** — Зчитування модуля ABS/ESP (якщо підтримується) для розуміння попереджень і кодів.
4. **Airbag / SRS** — Перевірка системи безпеки (за наявності доступу) щодо кодів і стану індикатора.
5. **КПП** — Діагностика АКПП/роботизованих коробок, коли протокол і обладнання це дозволяють.
6. **Автоелектрика** — Допомога у пошуку несправностей датчиків, зв’язку між блоками та електричних попереджень (діагностика, не повний ремонт).
7. **Live data** — Перегляд параметрів на працюючому двигуні, щоб краще зрозуміти коди чи симптоми.
8. **Аналіз кодів помилок** — Пояснення знайдених кодів і розрізнення корисних підказок і неповної інформації.
9. **Діагностика перед купівлею** — Перевірка перед купівлею вживаного авто: активні попередження, коди та електронні ризики.
10. **Виїзна діагностика** — Приїзд до авто в Алту Мінью залежно від розкладу та відстані.

- Closing CTA: Не впевнені, чи ваш випадок підходить? Напишіть у WhatsApp марку, модель, рік і симптом.
- Buttons: Записатися · WhatsApp

**en**

- H1: Diagnostic services
- Intro: I help identify electronic faults and error codes with computer diagnostics. This is a mobile, clarity-first service — it does not replace a full mechanical workshop.
- Disclaimer: (shared)

Service blocks:

1. **Computer diagnostics** — Connect to the vehicle to read supported systems and get an overview of electronic status.
2. **Engine / Check Engine** — Analyse the Check Engine light and related powertrain codes when access is available.
3. **ABS diagnostics** — Read the ABS/ESP module (when supported) to understand warnings and related codes.
4. **Airbag / SRS** — Query the restraint system (when accessible) for codes and warning-light status.
5. **Transmission** — Diagnose automatic/robotised gearboxes when protocol and equipment allow.
6. **Automotive electrical** — Help identify issues related to sensors, module communication and electrical warnings (diagnostic scope, not full repair).
7. **Live data analysis** — Watch relevant parameters with the engine running to put codes or symptoms in context.
8. **Fault code analysis** — Interpret stored codes and separate useful leads from incomplete information.
9. **Pre-purchase diagnostics** — A focused check before buying a used car: active warnings, codes and electronic attention points.
10. **Mobile / on-site diagnostics** — Travel to the vehicle in Alto Minho, subject to schedule and distance.

- Closing CTA: Not sure if your case fits? Message on WhatsApp with make, model, year and symptom.
- Buttons: Book a diagnostic · WhatsApp

---

## Page: Pricing

Route: `/[locale]/pricing`

### Metadata

**pt**

- Title: Preços de Diagnóstico Automóvel | Diagnóstico Alto Minho
- Description: Preços orientativos: básico desde €30, completo desde €45, móvel desde €50, pré-compra desde €70. Alto Minho.

**uk**

- Title: Ціни на діагностику авто | Diagnóstico Alto Minho
- Description: Орієнтовні ціни: базова від €30, повна від €45, виїзна від €50, перед купівлею від €70. Алту Мінью, Португалія.

**en**

- Title: Car Diagnostics Pricing | Diagnóstico Alto Minho
- Description: Guide prices: basic from €30, full from €45, mobile from €50, pre-purchase from €70. Alto Minho, Northern Portugal.

### Page body

**pt**

- H1: Preços
- Intro: Valores orientativos para planear o serviço. Confirme sempre o valor final ao marcar.
- Tiers:
  1. **Diagnóstico básico** — desde €30 — Leitura essencial de códigos e verificação inicial da luz de aviso / sintoma principal.
  2. **Diagnóstico completo** — desde €45 — Análise mais alargada dos sistemas acessíveis, códigos e dados relevantes.
  3. **Diagnóstico móvel** — desde €50 — Deslocação ao local do veículo no Alto Minho (pode somar-se ao tipo de diagnóstico).
  4. **Diagnóstico pré-compra** — desde €70 — Sessão orientada à compra de um usado, com foco em avisos e códigos electrónicos.
- Disclaimer: (shared pricing disclaimer)
- Note: Em deslocações mais longas ou casos mais complexos, o valor pode ser ajustado antes de confirmar.
- CTA: Marcar diagnóstico · WhatsApp

**uk**

- H1: Ціни
- Intro: Орієнтовні суми, щоб спланувати послугу. Остаточну ціну завжди уточнюємо при записі.
- Tiers:
  1. **Базова діагностика** — від €30 — Основне зчитування кодів і первинна перевірка індикатора / головного симптому.
  2. **Повна діагностика** — від €45 — Ширший аналіз доступних систем, кодів і релевантних даних.
  3. **Виїзна діагностика** — від €50 — Приїзд до авто в Алту Мінью (може додаватися до типу діагностики).
  4. **Діагностика перед купівлею** — від €70 — Перевірка перед купівлею вживаного авто з фокусом на попередження та електронні коди.
- Disclaimer: (shared)
- Note: За більшої відстані або складніших випадків суму можемо узгодити до підтвердження.
- CTA: Записатися · WhatsApp

**en**

- H1: Pricing
- Intro: Guide amounts to help you plan. We always confirm the final price when booking.
- Tiers:
  1. **Basic diagnostics** — from €30 — Essential code reading and an initial check of the main warning light / symptom.
  2. **Full diagnostics** — from €45 — Broader analysis of accessible systems, codes and relevant data.
  3. **Mobile diagnostics** — from €50 — Travel to the vehicle in Alto Minho (may be added to the diagnostic type).
  4. **Pre-purchase diagnostics** — from €70 — A used-car focused session centred on warnings and electronic codes.
- Disclaimer: (shared)
- Note: For longer travel or more complex cases, the amount may be adjusted before confirmation.
- CTA: Book a diagnostic · WhatsApp

---

## Page: Service area

Route: `/[locale]/service-area`

### Metadata

**pt**

- Title: Área de Serviço — Alto Minho | Diagnóstico Alto Minho
- Description: Diagnóstico automóvel móvel em Vila Praia de Âncora, Caminha, Viana do Castelo, Vila Nova de Cerveira, Valença, Ponte de Lima e arredores.

**uk**

- Title: Зона обслуговування — Алту Мінью | Diagnóstico Alto Minho
- Description: Виїзна діагностика авто у Віла Прая де Анкора, Камінья, Віана-ду-Каштелу, Віла Нова де Сервейра, Валенса, Понте-де-Ліма та околицях.

**en**

- Title: Service Area — Alto Minho | Diagnóstico Alto Minho
- Description: Mobile car diagnostics in Vila Praia de Âncora, Caminha, Viana do Castelo, Vila Nova de Cerveira, Valença, Ponte de Lima and nearby areas.

### Page body

**pt**

- H1: Área de serviço
- Lead: O serviço está baseado em Vila Praia de Âncora e cobre o Alto Minho com diagnóstico móvel.
- Body: Atendo pedidos em Caminha, Viana do Castelo, Vila Nova de Cerveira, Valença, Ponte de Lima e localidades próximas. O objectivo é facilitar o diagnóstico sem precisar de deixar o carro numa oficina só para uma leitura inicial.
- Towns list label: Localidades principais
- Towns: Vila Praia de Âncora · Caminha · Viana do Castelo · Vila Nova de Cerveira · Valença · Ponte de Lima · outras zonas do Alto Minho
- Caveat: A disponibilidade ao domicílio depende da distância e da agenda do dia. Em caso de dúvida, pergunte por WhatsApp antes de marcar.
- CTA: Marcar diagnóstico · WhatsApp

**uk**

- H1: Зона обслуговування
- Lead: Сервіс базується у Віла Прая де Анкора і працює виїздом у регіоні Алту Мінью.
- Body: Приймаю запити з Каміньї, Віана-ду-Каштелу, Віла Нова де Сервейра, Валенси, Понте-де-Ліма та найближчих населених пунктів. Мета — зробити первинну діагностику зручнішою, без обов’язкового візиту в сервіс лише заради зчитування помилок.
- Towns list label: Основні населені пункти
- Towns: Віла Прая де Анкора · Камінья · Віана-ду-Каштелу · Віла Нова де Сервейра · Валенса · Понте-де-Ліма · інші райони Алту Мінью
- Caveat: Виїзд залежить від відстані та розкладу. Якщо сумніваєтеся — напишіть у WhatsApp перед записом.
- CTA: Записатися · WhatsApp

**en**

- H1: Service area
- Lead: The service is based in Vila Praia de Âncora and covers Alto Minho with mobile diagnostics.
- Body: Requests are welcome from Caminha, Viana do Castelo, Vila Nova de Cerveira, Valença, Ponte de Lima and nearby places. The aim is to make an initial diagnostic easier without needing a workshop visit only for a code read.
- Towns list label: Main locations
- Towns: Vila Praia de Âncora · Caminha · Viana do Castelo · Vila Nova de Cerveira · Valença · Ponte de Lima · other Alto Minho areas
- Caveat: On-site availability depends on distance and the day’s schedule. If unsure, ask on WhatsApp before booking.
- CTA: Book a diagnostic · WhatsApp

---

## Page: About

Route: `/[locale]/about`

### Metadata

**pt**

- Title: Sobre o Serviço | Diagnóstico Alto Minho
- Description: Serviço de diagnóstico automóvel móvel em Vila Praia de Âncora. Atendimento em português, ucraniano e inglês, com explicações transparentes.

**uk**

- Title: Про сервіс | Diagnóstico Alto Minho
- Description: Виїзна комп’ютерна діагностика авто у Віла Прая де Анкора. Спілкування португальською, українською та англійською, з прозорим поясненням.

**en**

- Title: About the Service | Diagnóstico Alto Minho
- Description: Mobile car diagnostics based in Vila Praia de Âncora. Communication in Portuguese, Ukrainian and English, with transparent explanations.

### Page body

**pt**

- H1: Sobre
- Body 1: Diagnóstico Alto Minho é um serviço local de diagnóstico automóvel móvel, operado por uma pessoa, com base em Vila Praia de Âncora.
- Body 2: Combino interesse prático por automóveis com formação técnica em desenvolvimento de software. O objectivo do MVP é validar procura real: diagnósticos claros, comunicação directa e deslocação no Alto Minho.
- Body 3: Não apresento o serviço como uma oficina completa. Nesta fase o foco é diagnóstico por computador e sistemas electrónicos — com honestidade sobre limites de equipamento e de cada veículo.
- Body 4: Posso comunicar em português, ucraniano e inglês, o que ajuda residentes e comunidades locais a explicar o problema sem barreira de idioma.
- Values heading: Como trabalho
- Values:
  - Transparência sobre o que foi possível verificar
  - Linguagem simples, sem jargão desnecessário
  - Sem pressão para serviços que ainda não ofereço
- CTA: Falar connosco · WhatsApp

**uk**

- H1: Про нас
- Body 1: Diagnóstico Alto Minho — місцевий виїзний сервіс комп’ютерної діагностики авто, який веде одна людина. База — Віла Прая де Анкора.
- Body 2: Поєдную практичний інтерес до автомобілів із технічною підготовкою у розробці програмного забезпечення. Мета цього MVP — перевірити реальний попит: зрозуміла діагностика, прямий зв’язок і виїзд у Алту Мінью.
- Body 3: Це не повний автосервіс. На цьому етапі фокус — комп’ютерна діагностика та електронні системи, з чесним поясненням обмежень обладнання й конкретного авто.
- Body 4: Спілкуюся португальською, українською та англійською — зручно для місцевих жителів і спільнот, щоб описати проблему без мовного бар’єра.
- Values heading: Як працюю
- Values:
  - Прозорість щодо того, що вдалося перевірити
  - Проста мова, без зайвого жаргону
  - Без тиску щодо послуг, які я ще не пропоную
- CTA: Зв’язатися · WhatsApp

**en**

- H1: About
- Body 1: Diagnóstico Alto Minho is a local mobile car diagnostics service run by one person, based in Vila Praia de Âncora.
- Body 2: I combine a practical interest in cars with a technical background in software development. This MVP exists to validate real demand: clear diagnostics, direct communication and travel across Alto Minho.
- Body 3: This is not positioned as a full workshop. At this stage the focus is computer diagnostics and electronic systems — with honesty about equipment limits and each vehicle’s constraints.
- Body 4: I communicate in Portuguese, Ukrainian and English, which helps residents and local communities explain the issue without a language barrier.
- Values heading: How I work
- Values:
  - Transparency about what could be checked
  - Plain language, without unnecessary jargon
  - No pressure for services I do not offer yet
- CTA: Contact us · WhatsApp

---

## Page: Contact

Route: `/[locale]/contact`

### Metadata

**pt**

- Title: Contacto e Marcação | Diagnóstico Alto Minho
- Description: Marque um diagnóstico automóvel no Alto Minho por WhatsApp ou pelo formulário rápido. Base em Vila Praia de Âncora.

**uk**

- Title: Контакт і запис | Diagnóstico Alto Minho
- Description: Запишіться на діагностику авто в Алту Мінью через WhatsApp або коротку форму. База — Віла Прая де Анкора.

**en**

- Title: Contact and Booking | Diagnóstico Alto Minho
- Description: Book car diagnostics in Alto Minho via WhatsApp or a short form. Based in Vila Praia de Âncora.

### Page body

**pt**

- H1: Contacto
- Lead: O canal principal é o WhatsApp. Também pode enviar um pedido pelo formulário — abrimos uma conversa com os dados do veículo já preenchidos.
- WhatsApp card title: Contactar por WhatsApp
- WhatsApp card body: Resposta mais rápida para marcar horário e local.
- WhatsApp button: Abrir WhatsApp
- Form title: Pedido de diagnóstico
- Form intro: Campos curtos. Depois do envio, continua no WhatsApp.

**Form fields**

| Field key | Label (pt) | Placeholder (pt) |
|---|---|---|
| name | Nome | O seu nome |
| phone | WhatsApp / telefone | Ex.: +351 … |
| make | Marca | Ex.: Kia |
| model | Modelo | Ex.: Sportage |
| year | Ano | Ex.: 2019 |
| engine | Motor (opcional) | Ex.: 1.6 GDI |
| problem | Problema / luz de aviso | Descreva o sintoma |
| location | Localização | Ex.: Caminha |
| preferredAt | Data/hora preferida (opcional) | Ex.: sábado de manhã |
| website | (honeypot — hidden) | — |

| Field key | Label (uk) | Placeholder (uk) |
|---|---|---|
| name | Ім’я | Ваше ім’я |
| phone | WhatsApp / телефон | Напр.: +351 … |
| make | Марка | Напр.: Kia |
| model | Модель | Напр.: Sportage |
| year | Рік | Напр.: 2019 |
| engine | Двигун (необов’язково) | Напр.: 1.6 GDI |
| problem | Проблема / індикатор | Опишіть симптом |
| location | Локація | Напр.: Камінья |
| preferredAt | Бажані дата/час (необов’язково) | Напр.: субота вранці |

| Field key | Label (en) | Placeholder (en) |
|---|---|---|
| name | Name | Your name |
| phone | WhatsApp / phone | e.g. +351 … |
| make | Make | e.g. Kia |
| model | Model | e.g. Sportage |
| year | Year | e.g. 2019 |
| engine | Engine (optional) | e.g. 1.6 GDI |
| problem | Problem / warning light | Describe the symptom |
| location | Location | e.g. Caminha |
| preferredAt | Preferred date/time (optional) | e.g. Saturday morning |

**Form actions**

- Submit (pt): Enviar para WhatsApp
- Submit (uk): Надіслати в WhatsApp
- Submit (en): Send to WhatsApp
- Validation required (pt): Preencha os campos obrigatórios.
- Validation required (uk): Заповніть обов’язкові поля.
- Validation required (en): Please fill in the required fields.

### Prefill WhatsApp message templates

**pt**

```text
Olá! Gostaria de marcar um diagnóstico automóvel.
Nome: {name}
Telefone: {phone}
Veículo: {make} {model} {year} {engine}
Problema: {problem}
Localização: {location}
Data/hora preferida: {preferredAt}
```

**uk**

```text
Вітаю! Хочу записатися на діагностику авто.
Ім’я: {name}
Телефон: {phone}
Авто: {make} {model} {year} {engine}
Проблема: {problem}
Локація: {location}
Бажані дата/час: {preferredAt}
```

**en**

```text
Hello! I would like to book a car diagnostic.
Name: {name}
Phone: {phone}
Vehicle: {make} {model} {year} {engine}
Problem: {problem}
Location: {location}
Preferred date/time: {preferredAt}
```

Example filled (pt):  
`Olá! Gostaria de marcar um diagnóstico automóvel. O meu carro é um Kia Sportage 2019 1.6 GDI e tenho uma luz ABS acesa.`

---

## Page: FAQ

Route: `/[locale]/faq`  
JSON-LD FAQPage should use this full set (not the home teaser only).

### Metadata

**pt**

- Title: Perguntas Frequentes — Diagnóstico Automóvel | Diagnóstico Alto Minho
- Description: Respostas sobre diagnóstico computorizado, ABS, airbag, preços, serviço móvel e diagnóstico antes de comprar no Alto Minho.

**uk**

- Title: Часті запитання — діагностика авто | Diagnóstico Alto Minho
- Description: Відповіді про комп’ютерну діагностику, ABS, airbag, ціни, виїзд і перевірку перед купівлею в Алту Мінью.

**en**

- Title: FAQ — Car Diagnostics | Diagnóstico Alto Minho
- Description: Answers about computer diagnostics, ABS, airbag, pricing, mobile visits and pre-purchase checks in Alto Minho.

### Page intro

**pt** — H1: Perguntas frequentes · Lead: Respostas directas, sem prometer funções que dependem do veículo e do equipamento.

**uk** — H1: Часті запитання · Lead: Прямі відповіді без обіцянок функцій, які залежать від авто та обладнання.

**en** — H1: Frequently asked questions · Lead: Direct answers — without promising functions that depend on the vehicle and equipment.

### Full Q&A

#### 1. What is computer car diagnostics?

**pt**  
Q: O que é um diagnóstico computorizado do carro?  
A: É o processo de ligar equipamento de diagnóstico ao veículo para ler códigos de erro e dados dos sistemas electrónicos. Ajuda a perceber porque uma luz acendeu ou porque o carro se comporta de forma estranha — não é, por si só, a reparação.

**uk**  
Q: Що таке комп’ютерна діагностика автомобіля?  
A: Це підключення діагностичного обладнання до авто для зчитування кодів помилок і даних електронних систем. Допомагає зрозуміти, чому загорівся індикатор або чому авто поводиться дивно — але саме по собі це ще не ремонт.

**en**  
Q: What is computer car diagnostics?  
A: It means connecting diagnostic equipment to the vehicle to read fault codes and electronic system data. It helps explain why a light came on or why the car behaves oddly — it is not, by itself, the repair.

#### 2. What problems can you diagnose?

**pt**  
Q: Que problemas podem ser diagnosticados?  
A: Tipicamente avisos no painel, códigos de motor, ABS, airbag, comunicação entre módulos e alguns sintomas eléctricos. A lista exacta depende do veículo e do equipamento. Problemas puramente mecânicos (ex.: ruídos de suspensão sem código) podem precisar de inspecção noutra especialidade.

**uk**  
Q: Які проблеми можна діагностувати?  
A: Зазвичай — індикатори на панелі, коди двигуна, ABS, airbag, зв’язок між блоками та частину електричних симптомів. Точний перелік залежить від авто й обладнання. Суто механічні проблеми (наприклад, стук підвіски без коду) можуть потребувати іншої спеціалізації.

**en**  
Q: What problems can you diagnose?  
A: Typically dashboard warnings, engine codes, ABS, airbag, module communication and some electrical symptoms. The exact scope depends on the vehicle and equipment. Purely mechanical issues (for example suspension noise with no code) may need a different specialty.

#### 3. Can you diagnose ABS?

**pt**  
Q: Conseguem diagnosticar ABS?  
A: Em muitos veículos sim — quando o módulo ABS/ESP é acessível com o equipamento disponível. Nem todos os modelos expõem a mesma informação.

**uk**  
Q: Чи можна діагностувати ABS?  
A: На багатьох авто — так, якщо модуль ABS/ESP доступний з наявним обладнанням. Не всі моделі віддають однаковий обсяг даних.

**en**  
Q: Can you diagnose ABS?  
A: On many vehicles yes — when the ABS/ESP module is accessible with the available equipment. Not every model exposes the same information.

#### 4. Can you diagnose Airbag / SRS?

**pt**  
Q: Conseguem diagnosticar airbag / SRS?  
A: Em muitos casos é possível ler o sistema de airbags quando o acesso está disponível. Códigos de SRS exigem cuidado: limpar avisos sem corrigir a causa não é boa prática.

**uk**  
Q: Чи діагностуєте airbag / SRS?  
A: У багатьох випадках систему подушок безпеки можна зчитати за наявності доступу. Коди SRS потребують обережності: гасити індикатор без усунення причини — погана практика.

**en**  
Q: Can you diagnose Airbag / SRS?  
A: In many cases the airbag system can be read when access is available. SRS codes need care: clearing warnings without fixing the cause is not good practice.

#### 5. Can you diagnose automatic transmissions?

**pt**  
Q: Diagnosticam caixas automáticas?  
A: Quando o protocolo e o equipamento o permitem, sim — leitura de códigos e dados do módulo de transmissão. Nem todas as caixas têm o mesmo nível de acesso.

**uk**  
Q: Чи діагностуєте АКПП?  
A: Якщо протокол і обладнання дозволяють — так: коди та дані модуля КПП. Рівень доступу відрізняється між моделями.

**en**  
Q: Can you diagnose automatic transmissions?  
A: When protocol and equipment allow, yes — reading transmission-module codes and data. Access depth varies by model.

#### 6. Can you come to my location?

**pt**  
Q: Podem deslocar-se ao meu local?  
A: Sim, no Alto Minho, quando a agenda e a distância o permitirem. O diagnóstico móvel tem preço orientativo a partir de €50.

**uk**  
Q: Чи можете приїхати до мене?  
A: Так, у регіоні Алту Мінью, якщо дозволяє розклад і відстань. Виїзна діагностика орієнтовно від €50.

**en**  
Q: Can you come to my location?  
A: Yes, across Alto Minho when schedule and distance allow. Mobile diagnostics are guided from €50.

#### 7. How much does diagnostics cost?

**pt**  
Q: Quanto custa o diagnóstico?  
A: Preços orientativos: básico desde €30, completo desde €45, móvel desde €50, pré-compra desde €70. O valor final depende do veículo, local e complexidade.

**uk**  
Q: Скільки коштує діагностика?  
A: Орієнтовно: базова від €30, повна від €45, виїзна від €50, перед купівлею від €70. Остаточна сума залежить від авто, місця та складності.

**en**  
Q: How much does diagnostics cost?  
A: Guide prices: basic from €30, full from €45, mobile from €50, pre-purchase from €70. The final amount depends on vehicle, location and complexity.

#### 8. Do I need to bring the car to a workshop?

**pt**  
Q: Preciso de levar o carro a uma oficina?  
A: Nem sempre. Em muitos casos o diagnóstico pode ser feito no local do veículo. Se for necessária reparação mecânica ou eléctrica mais profunda, posso indicar que o passo seguinte é uma oficina especializada.

**uk**  
Q: Чи потрібно везти авто в сервіс?  
A: Не завжди. Часто діагностику можна зробити там, де стоїть авто. Якщо потрібен глибший механічний чи електричний ремонт, можу пояснити, що наступний крок — профільний сервіс.

**en**  
Q: Do I need to bring the car to a workshop?  
A: Not always. In many cases diagnostics can be done where the car is. If deeper mechanical or electrical repair is needed, I can explain that the next step is a specialised workshop.

#### 9. Can you clear diagnostic errors?

**pt**  
Q: Podem apagar erros / luzes de aviso?  
A: Em alguns casos é possível limpar códigos após a leitura. Só faz sentido quando a causa foi compreendida ou quando se testa se o aviso regressa. Apagar códigos sem diagnóstico não resolve o problema e pode esconder informação útil.

**uk**  
Q: Чи можете стерти помилки / погасити індикатори?  
A: Іноді коди можна очистити після зчитування. Це доречно, коли причину зрозуміли або перевіряють, чи повернеться попередження. Стирати коди без діагностики проблему не вирішує й може приховати корисну інформацію.

**en**  
Q: Can you clear diagnostic errors?  
A: In some cases codes can be cleared after reading them. That only makes sense when the cause is understood or when testing whether the warning returns. Clearing codes without diagnosis does not fix the issue and can hide useful information.

#### 10. Can you diagnose a car before purchase?

**pt**  
Q: Fazem diagnóstico antes de comprar um carro usado?  
A: Sim — é um dos serviços previstos (desde €70). Ajuda a ver avisos activos e códigos electrónicos antes de decidir. Não substitui uma inspecção mecânica completa nem garante o estado futuro do veículo.

**uk**  
Q: Чи робите діагностику перед купівлею вживаного авто?  
A: Так — це одна з послуг (від €70). Допомагає побачити активні попередження та електронні коди перед рішенням. Не замінює повний механічний огляд і не гарантує майбутній стан авто.

**en**  
Q: Can you diagnose a car before purchase?  
A: Yes — it is one of the listed services (from €70). It helps reveal active warnings and electronic codes before you decide. It does not replace a full mechanical inspection or guarantee the car’s future condition.

#### 11. Which car brands do you support?

**pt**  
Q: Que marcas de carro são suportadas?  
A: O acesso varia por marca, modelo, ano e equipamento. Não afirmo suporte universal. Envie os dados do veículo e o sintoma — indico com honestidade o que é realista verificar.

**uk**  
Q: Які марки авто підтримуються?  
A: Доступ відрізняється залежно від марки, моделі, року та обладнання. Універсальної підтримки не обіцяю. Надішліть дані авто й симптом — чесно скажу, що реально перевірити.

**en**  
Q: Which car brands do you support?  
A: Access varies by make, model, year and equipment. Universal support is not claimed. Send the vehicle details and symptom — I will say honestly what is realistic to check.

---

## Page: Blog stub

Route: `/[locale]/blog`  
No posts at launch.

### Metadata

**pt** — Title: Blog | Diagnóstico Alto Minho · Description: Artigos futuros sobre diagnóstico automóvel, luzes de aviso e compra de usados no Alto Minho.

**uk** — Title: Блог | Diagnóstico Alto Minho · Description: Майбутні статті про діагностику авто, індикатори та купівлю вживаних авто в Алту Мінью.

**en** — Title: Blog | Diagnóstico Alto Minho · Description: Future articles on car diagnostics, warning lights and buying used cars in Alto Minho.

### Stub body

**pt**

- H1: Blog
- Body: Em breve: guias úteis sobre diagnóstico automóvel e problemas frequentes no Alto Minho. Entretanto, marque um diagnóstico ou consulte as perguntas frequentes.
- Planned titles:
  - Luz ABS acesa: o que significa?
  - Luz do motor acesa: posso continuar a conduzir?
  - Diagnóstico automóvel antes de comprar um carro usado
- CTAs: Marcar diagnóstico · FAQ

**uk**

- H1: Блог
- Body: Незабаром: корисні матеріали про діагностику авто та типові проблеми в Алту Мінью. Поки що запишіться на діагностику або перегляньте FAQ.
- Planned titles:
  - Загорівся ABS: що це означає?
  - Загорівся Check Engine: чи можна їхати?
  - Діагностика авто перед купівлею в Португалії
- CTAs: Записатися · FAQ

**en**

- H1: Blog
- Body: Coming soon: practical guides on car diagnostics and common issues in Alto Minho. Meanwhile, book a diagnostic or read the FAQ.
- Planned titles:
  - ABS light on: what does it mean?
  - Check Engine light on: can I keep driving?
  - Car diagnostics before buying a used car in Portugal
- CTAs: Book a diagnostic · FAQ

---

## Open content decisions (before launch)

Confirm or replace:

1. Final legal / display business name (currently **Diagnóstico Alto Minho**)
2. WhatsApp number `[WhatsApp]` and whether phone/`[email]` are public
3. Whether to publish address, coordinates, or opening hours (affects About + JSON-LD)
4. Owner bio details on About (name, years of hands-on experience — only if true)
5. Exact “from” prices if they differ from €30 / €45 / €50 / €70
6. Native speaker review of `pt` (European) and `uk` copy before paid ads

---

## Mapping to code (when building)

| Doc section | Suggested files |
|---|---|
| Shared UI | `src/content/{locale}/common.ts` or `messages/{locale}.json` |
| Home | `src/content/{locale}/home.ts` |
| Services | `src/content/{locale}/services.ts` |
| Pricing | `src/content/{locale}/pricing.ts` (+ amounts from `src/config/pricing.ts`) |
| Service area | `src/content/{locale}/serviceArea.ts` (+ towns from `src/config/locations.ts`) |
| About | `src/content/{locale}/about.ts` |
| Contact | `src/content/{locale}/contact.ts` |
| FAQ | `src/content/{locale}/faq.ts` |
| Blog stub | `src/content/{locale}/blog.ts` |
| Metadata | page-level fields in each content file or `seo.ts` per locale |
