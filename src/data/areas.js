import {
	IconTrabalhista,
	IconPrevidenciario,
	IconFamilia,
	IconCriminal,
} from '../icons/AreaIcons';

/*
  Fonte única de conteúdo do site. Cada área tem: identificação visual,
  situações de exemplo (usadas na home para o usuário se reconhecer),
  a seção "O Advogado" adaptada ao ramo, os temas mais comuns e as
  perguntas frequentes.
*/

const areas = [
	{
		slug: 'trabalhista',
		nome: 'Direito do Trabalho',
		nomeCurto: 'Trabalhista',
		Icon: IconTrabalhista,
		accent: '#5b8aa6',
		accentSoft: '#233642',
		resumo: 'Para quem foi demitido, não recebeu o que tinha direito, sofreu assédio no trabalho ou tem dúvidas sobre a carteira assinada.',
		exemplos: [
			'Fui demitido e não recebi todas as verbas',
			'Faço horas extras que nunca foram pagas',
			'Sofro assédio moral do meu chefe',
			'Meu FGTS não foi depositado corretamente',
		],
		heroTitulo: 'Direito do Trabalho',
		heroDestaque: 'Seus direitos como trabalhador, defendidos com técnica e agilidade.',
		heroTexto:
			'Relações de trabalho desequilibradas geram prejuízo financeiro e emocional. Atuo para que trabalhadores recebam exatamente o que a lei e o contrato garantem — da rescisão ao processo na Justiça do Trabalho.',
		sobreParagrafos: [
			'Atuo na defesa de trabalhadores em todas as fases da relação de emprego: da orientação preventiva antes da demissão até a Reclamação Trabalhista completa perante a Justiça do Trabalho.',
			'Estou concluindo pós-graduação em Direito Trabalhista, o que mantém minha atuação alinhada às atualizações constantes da CLT, das súmulas do TST e da jurisprudência dos Tribunais Regionais.',
			'Analiso cada caso com cálculos claros de verbas devidas, para que você saiba exatamente quanto tem a receber antes de decidir se aceita um acordo ou segue com a ação.',
			'O atendimento é feito com transparência sobre prazos, custos e chances reais do caso — sem promessas vazias, apenas estratégia jurídica séria.',
		],
		temas: [
			{
				titulo: 'Rescisão e verbas rescisórias',
				texto: 'Conferência de aviso prévio, saldo de salário, férias, 13º e multa de 40% do FGTS, com cobrança do que faltou pagar.',
			},
			{
				titulo: 'Horas extras e adicional noturno',
				texto: 'Cálculo e cobrança de horas extras, intervalos suprimidos, adicional noturno e trabalho aos domingos e feriados não pagos.',
			},
			{
				titulo: 'Assédio moral e sexual',
				texto: 'Reunião de provas, medidas urgentes e pedido de indenização por danos morais em casos de humilhação, perseguição ou constrangimento no ambiente de trabalho.',
			},
			{
				titulo: 'Justa causa indevida',
				texto: 'Análise da demissão por justa causa para reverter a penalidade e garantir o pagamento das verbas rescisórias integrais.',
			},
			{
				titulo: 'Equiparação salarial',
				texto: 'Cobrança de diferenças salariais quando há colegas exercendo a mesma função, com igual produtividade, recebendo salário maior.',
			},
			{
				titulo: 'Acidente de trabalho e estabilidade',
				texto: 'Orientação sobre CAT, estabilidade acidentária, benefício previdenciário e indenização por acidente ou doença ocupacional.',
			},
			{
				titulo: 'FGTS e seguro-desemprego',
				texto: 'Regularização de depósitos não realizados e suporte para liberação do FGTS e do seguro-desemprego negado indevidamente.',
			},
			{
				titulo: 'Reclamação Trabalhista',
				texto: 'Condução completa do processo na Justiça do Trabalho, da petição inicial até a execução da sentença ou do acordo homologado.',
			},
		],
		faqs: [
			{
				pergunta: 'Fui demitido sem justa causa. O que tenho direito a receber?',
				resposta: 'Em regra: saldo de salário, aviso prévio, 13º proporcional, férias vencidas e proporcionais com 1/3, além do saque do FGTS com multa de 40%. O valor exato depende do tempo de casa e do salário, por isso vale conferir o cálculo antes de assinar qualquer termo.',
			},
			{
				pergunta: 'Posso ser demitido por justa causa sem motivo grave?',
				resposta: 'Não. A justa causa exige uma falta grave prevista em lei (como ato de improbidade, indisciplina ou abandono de emprego) e deve ser proporcional. Demissões por justa causa aplicadas de forma abusiva podem ser revertidas na Justiça, com pagamento integral das verbas rescisórias.',
			},
			{
				pergunta: 'Trabalhei além do horário e nunca recebi hora extra. Posso cobrar mesmo tendo saído da empresa?',
				resposta: 'Sim. O trabalhador tem até 2 anos após o fim do contrato para cobrar direitos trabalhistas, e pode reclamar valores referentes aos últimos 5 anos trabalhados dentro desse período (prescrição quinquenal).',
			},
			{
				pergunta: 'O que caracteriza assédio moral no trabalho?',
				resposta: 'É a exposição repetida e prolongada a situações humilhantes, constrangedoras ou de perseguição, geralmente pelo superior hierárquico, que atingem a dignidade do trabalhador. Cobranças duras isoladas normalmente não configuram assédio; o padrão de repetição é o que importa.',
			},
			{
				pergunta: 'Posso ser mandado embora estando afastado por doença?',
				resposta: 'Durante o afastamento pelo INSS e nos 12 meses seguintes ao retorno (em caso de acidente de trabalho ou doença ocupacional), o empregado tem estabilidade e, em regra, não pode ser demitido sem justa causa.',
			},
			{
				pergunta: 'Minha empresa não depositou o FGTS. O que fazer?',
				resposta: 'É possível cobrar administrativamente ou judicialmente os depósitos em atraso, ainda que o contrato continue vigente. O FGTS não depositado corretamente é um dos itens mais recorrentes em reclamações trabalhistas.',
			},
			{
				pergunta: 'Preciso ter provas para entrar com uma ação trabalhista?',
				resposta: 'Provas fortalecem o caso, mas não são pré-requisito para ajuizar a ação. Muitas vezes as provas são produzidas durante o próprio processo, com testemunhas, documentos da empresa e perícias.',
			},
			{
				pergunta: 'Fazer acordo é sempre a melhor opção?',
				resposta: 'Depende do caso. Um acordo pode ser vantajoso para receber mais rápido, mas o valor costuma ser menor que o total devido. A decisão deve vir depois de um cálculo claro do que é efetivamente devido.',
			},
		],
	},
	{
		slug: 'previdenciario',
		nome: 'Direito Previdenciário',
		nomeCurto: 'Previdenciário',
		Icon: IconPrevidenciario,
		accent: '#b9924c',
		accentSoft: '#3a3120',
		resumo: 'Para quem quer se aposentar, teve benefício negado pelo INSS, está afastado por doença ou cuida de um familiar que precisa de auxílio.',
		exemplos: [
			'Meu benefício foi negado pelo INSS',
			'Quero saber se já posso me aposentar',
			'Estou afastado do trabalho por doença',
			'Preciso pedir pensão por morte ou BPC',
		],
		heroTitulo: 'Direito Previdenciário',
		heroDestaque: 'Planejamento e defesa dos seus direitos junto ao INSS.',
		heroTexto:
			'O INSS nega ou reduz benefícios com frequência — muitas vezes por erro de cálculo ou de análise. Estudo cada caso à luz das regras vigentes e das regras de transição para buscar o melhor benefício possível, dentro e fora da via administrativa.',
		sobreParagrafos: [
			'Sou pós-graduado em Direito Previdenciário, área em que atuo com foco em planejamento de aposentadoria e defesa de segurados contra negativas indevidas do INSS.',
			'Depois da Reforma da Previdência, entender qual regra de transição é mais vantajosa faz diferença real no valor do benefício e na data em que ele pode ser concedido — é exatamente esse cálculo que meu trabalho entrega antes de qualquer requerimento.',
			'Atuo tanto na via administrativa, junto ao INSS, quanto na Justiça Federal, quando o benefício é negado, cessado ou concedido com valor menor do que o devido.',
			'Cada segurado recebe uma análise baseada no seu CNIS real, evitando pedidos feitos "no escuro" que geram negativas e perda de tempo.',
		],
		temas: [
			{
				titulo: 'Aposentadoria por idade e por tempo de contribuição',
				texto: 'Simulação das regras de transição pós-reforma para identificar a aposentadoria mais vantajosa e o momento certo de requerer.',
			},
			{
				titulo: 'Aposentadoria especial',
				texto: 'Reconhecimento de tempo especial por exposição a agentes nocivos (ruído, calor, químicos) com base em PPP e laudos técnicos.',
			},
			{
				titulo: 'Auxílio por incapacidade (auxílio-doença)',
				texto: 'Pedido, recurso contra perícia negativa e prorrogação do benefício para quem está temporariamente incapaz de trabalhar.',
			},
			{
				titulo: 'Aposentadoria por invalidez',
				texto: 'Defesa técnica em casos de incapacidade permanente para o trabalho, incluindo contestação de perícias do INSS.',
			},
			{
				titulo: 'BPC/LOAS',
				texto: 'Benefício assistencial para idosos e pessoas com deficiência em situação de vulnerabilidade, mesmo sem tempo de contribuição.',
			},
			{
				titulo: 'Pensão por morte',
				texto: 'Requerimento para dependentes (cônjuge, filhos, companheiro) após o falecimento do segurado, incluindo casos de união estável não formalizada.',
			},
			{
				titulo: 'Revisão de benefícios',
				texto: 'Recálculo de benefícios já concedidos com valor abaixo do devido, incluindo revisão da vida toda e inclusão de períodos não computados.',
			},
			{
				titulo: 'Planejamento previdenciário',
				texto: 'Projeção de tempo de contribuição e simulação de cenários para decidir o momento ideal de pedir a aposentadoria.',
			},
		],
		faqs: [
			{
				pergunta: 'Como sei qual regra de aposentadoria se aplica a mim?',
				resposta: 'Depende de quando você começou a contribuir e do seu histórico no CNIS. Quem já contribuía antes da Reforma da Previdência (2019) pode ter direito a regras de transição mais vantajosas. O ideal é simular o CNIS completo antes de requerer.',
			},
			{
				pergunta: 'O INSS negou meu benefício. Ainda tenho chance?',
				resposta: 'Sim. É possível recorrer administrativamente na própria via do INSS ou ajuizar ação na Justiça Federal (ou Juizado Especial Federal, conforme o valor da causa) para reverter a negativa, inclusive com pedido de tutela de urgência quando há risco financeiro imediato.',
			},
			{
				pergunta: 'Qual a diferença entre auxílio-doença e aposentadoria por invalidez?',
				resposta: 'O auxílio por incapacidade temporária (antigo auxílio-doença) é concedido enquanto há previsão de recuperação. Já a aposentadoria por invalidez (hoje aposentadoria por incapacidade permanente) é devida quando a perícia constata que não há mais condições de retorno ao trabalho.',
			},
			{
				pergunta: 'Perdi a qualidade de segurado. Ainda posso me aposentar?',
				resposta: 'Para benefícios por incapacidade, sim é preciso qualidade de segurado. Já para aposentadoria por tempo de contribuição ou idade, mesmo quem parou de contribuir pode ter direito, pois o tempo já cumprido não se perde — é o chamado direito adquirido ou a regra de transição aplicável.',
			},
			{
				pergunta: 'O que é BPC/LOAS e quem pode receber?',
				resposta: 'É um benefício assistencial de um salário mínimo para idosos a partir de 65 anos ou pessoas com deficiência, em ambos os casos com renda familiar per capita baixa, independentemente de terem contribuído ao INSS.',
			},
			{
				pergunta: 'Companheiro(a) em união estável tem direito à pensão por morte?',
				resposta: 'Sim, desde que comprovada a união estável, mesmo sem registro formal em cartório. Provas como conta conjunta, dependência em plano de saúde e testemunhas ajudam a demonstrar o vínculo perante o INSS.',
			},
			{
				pergunta: 'Vale a pena pedir revisão de um benefício já concedido?',
				resposta: 'Em muitos casos sim. Erros de cálculo, períodos não computados ou a possibilidade de aplicar uma regra mais vantajosa (como a revisão da vida toda) podem aumentar o valor mensal do benefício, com pagamento retroativo dos últimos 5 anos.',
			},
			{
				pergunta: 'Quanto tempo demora um processo previdenciário na Justiça?',
				resposta: 'Varia conforme a região e a complexidade da prova (principalmente perícias). Em geral, processos em Juizados Especiais Federais tendem a ser mais rápidos que ações na Justiça Federal comum, mas cada caso tem seu próprio ritmo.',
			},
		],
	},
	{
		slug: 'familia',
		nome: 'Direito de Família',
		nomeCurto: 'Família',
		Icon: IconFamilia,
		accent: '#a8768a',
		accentSoft: '#332530',
		resumo: 'Para quem está passando por divórcio, disputa de guarda, pensão alimentícia, partilha de bens ou inventário.',
		exemplos: [
			'Quero me divorciar e dividir os bens',
			'Preciso resolver a guarda dos meus filhos',
			'O pai/mãe não paga a pensão alimentícia',
			'Preciso abrir um inventário',
		],
		heroTitulo: 'Direito de Família',
		heroDestaque: 'Cuidado técnico e humano nos momentos mais sensíveis da vida familiar.',
		heroTexto:
			'Separação, guarda de filhos, pensão e herança envolvem emoção e patrimônio ao mesmo tempo. Meu trabalho é buscar soluções rápidas quando é possível o consenso, e defesa firme quando o conflito exige a Justiça.',
		sobreParagrafos: [
			'Atuo em Direito de Família com atenção especial ao impacto emocional que esses processos causam — sem perder o rigor técnico necessário para proteger seu patrimônio e o bem-estar de quem você ama.',
			'Sempre que possível, busco soluções consensuais (divórcio e guarda amigáveis, acordos de pensão), o que costuma ser mais rápido, mais barato e menos desgastante para toda a família, especialmente quando há filhos envolvidos.',
			'Quando o consenso não é possível, atuo de forma firme perante o Judiciário para garantir guarda, pensão, partilha de bens ou reconhecimento de união estável de acordo com a lei.',
			'Também conduzo inventários judiciais e extrajudiciais, orientando os herdeiros sobre prazos, documentos e a forma mais eficiente de resolver a partilha.',
		],
		temas: [
			{
				titulo: 'Divórcio consensual e litigioso',
				texto: 'Condução do divórcio em cartório (quando não há filhos menores e há consenso) ou judicialmente, incluindo partilha de bens e definição de pensão.',
			},
			{
				titulo: 'Guarda e convivência',
				texto: 'Definição de guarda compartilhada ou unilateral e regime de visitas, sempre priorizando o melhor interesse da criança ou adolescente.',
			},
			{
				titulo: 'Pensão alimentícia',
				texto: 'Fixação, revisão, execução e cobrança de pensão alimentícia em atraso, incluindo pedido de prisão civil do devedor quando cabível.',
			},
			{
				titulo: 'Partilha de bens',
				texto: 'Levantamento e divisão do patrimônio do casal conforme o regime de bens adotado no casamento ou na união estável.',
			},
			{
				titulo: 'União estável',
				texto: 'Reconhecimento ou dissolução de união estável, com efeitos sobre partilha de bens, pensão e direitos sucessórios.',
			},
			{
				titulo: 'Inventário e partilha de herança',
				texto: 'Condução de inventário judicial ou extrajudicial (em cartório), orientação sobre herdeiros, testamento e impostos incidentes.',
			},
			{
				titulo: 'Reconhecimento e negatória de paternidade',
				texto: 'Ações para reconhecer ou contestar a paternidade, incluindo pedido de exame de DNA e seus efeitos registrais e patrimoniais.',
			},
			{
				titulo: 'Adoção',
				texto: 'Orientação e acompanhamento do processo de habilitação e adoção, judicial ou junto ao Cadastro Nacional de Adoção.',
			},
		],
		faqs: [
			{
				pergunta: 'Posso me divorciar sem passar pela Justiça?',
				resposta: 'Sim, quando o casal está de acordo com todos os termos (partilha, pensão, nome) e não há filhos menores ou incapazes, o divórcio pode ser feito diretamente em cartório, de forma mais rápida e barata.',
			},
			{
				pergunta: 'Guarda compartilhada significa que a criança mora com os dois pais?',
				resposta: 'Não necessariamente. A guarda compartilhada trata da divisão das responsabilidades e decisões sobre a vida do filho (saúde, educação, lazer). A residência da criança pode ser fixa com um dos pais, com convivência regulamentada com o outro.',
			},
			{
				pergunta: 'O pai pode deixar de pagar pensão se não vir os filhos?',
				resposta: 'Não. O direito de convivência e o dever de pensão alimentícia são independentes. Um não pode ser usado como justificativa para descumprir o outro — cada questão deve ser resolvida por seus próprios meios legais.',
			},
			{
				pergunta: 'Como funciona a prisão por falta de pagamento de pensão?',
				resposta: 'É a única forma de prisão civil admitida no Brasil. Diante do não pagamento de pensão, é possível pedir ao juiz a prisão do devedor (geralmente de 1 a 3 meses) até que a dívida seja quitada ou negociada.',
			},
			{
				pergunta: 'União estável precisa de contrato para valer legalmente?',
				resposta: 'Não é obrigatório, mas é recomendável. A união estável pode ser reconhecida mesmo sem contrato, desde comprovados os requisitos (convivência pública, contínua e com objetivo de constituir família), mas o contrato evita discussões futuras sobre bens.',
			},
			{
				pergunta: 'Quanto tempo tenho para abrir um inventário?',
				resposta: 'A lei prevê prazo de 60 dias após o falecimento para dar início ao inventário, sob pena de multa. Na prática, prazos maiores costumam ser tolerados, mas iniciar cedo evita complicações e custos adicionais.',
			},
			{
				pergunta: 'É possível fazer inventário em cartório?',
				resposta: 'Sim, quando todos os herdeiros são maiores, capazes e estão de acordo com a partilha, e não há testamento (em regra). O inventário extrajudicial costuma ser bem mais rápido do que o judicial.',
			},
			{
				pergunta: 'Posso contestar a paternidade registrada em cartório?',
				resposta: 'Sim, por meio de ação negatória de paternidade, especialmente quando há dúvida fundada sobre o vínculo biológico. O exame de DNA costuma ser a prova central desse tipo de ação.',
			},
		],
	},
	{
		slug: 'criminal',
		nome: 'Direito Criminal',
		nomeCurto: 'Criminal',
		Icon: IconCriminal,
		accent: '#a34b4b',
		accentSoft: '#3a2222',
		resumo: 'Para quem foi preso, está sendo investigado, precisa responder a um processo criminal ou foi vítima de um crime.',
		exemplos: [
			'Fui preso ou vou prestar depoimento',
			'Estou respondendo a um processo criminal',
			'Preciso de ajuda com progressão de regime',
			'Fui vítima de um crime e quero denunciar',
		],
		heroTitulo: 'Direito Criminal',
		heroDestaque: 'Defesa completa, da delegacia até a execução da pena.',
		heroTexto:
			'A atuação no Direito Criminal exige agilidade e conhecimento técnico em todas as fases — muitas vezes as primeiras horas definem o rumo de todo o processo.',
		sobreParagrafos: [
			'Sou advogado especialista em Direito Criminal, com atuação dedicada à defesa e à orientação de pessoas envolvidas em investigações e processos criminais — seja na condição de réu ou de vítima.',
			'Se você enfrenta uma situação de flagrante, busca e apreensão, mandado de prisão ou já cumpre pena, meu compromisso é oferecer uma defesa técnica, estratégica e incansável, utilizando todos os instrumentos legais possíveis para preservar sua liberdade e garantir a plena proteção dos seus direitos.',
			'Cada cliente é atendido com respeito, humanidade e absoluta discrição. Acompanho de perto todas as fases do processo — da delegacia ao tribunal — garantindo que você e sua família compreendam cada etapa e se sintam amparados em todas as decisões.',
			'No meu escritório, clareza, honestidade e dedicação não são apenas princípios — são compromissos reais com cada pessoa que me confia sua defesa. Estarei ao seu lado em cada passo, até o fim.',
		],
		temas: [
			{
				titulo: 'Prisão em flagrante e audiência de custódia',
				texto: 'Acompanhamento imediato desde a delegacia, com atuação decisiva na audiência de custódia e pedidos de liberdade provisória.',
			},
			{
				titulo: 'Habeas Corpus',
				texto: 'Medida urgente para trancar investigações ilegais, pedir a soltura de quem está preso indevidamente ou anular atos abusivos.',
			},
			{
				titulo: 'Defesa em processo criminal',
				texto: 'Resposta à acusação, atuação em audiências de instrução e defesa técnica em todas as fases da ação penal.',
			},
			{
				titulo: 'Tribunal do Júri',
				texto: 'Defesa especializada em crimes dolosos contra a vida, da fase de pronúncia até o julgamento em plenário.',
			},
			{
				titulo: 'Execução penal',
				texto: 'Progressão de regime, livramento condicional, remição de pena por trabalho ou estudo e defesa em faltas disciplinares.',
			},
			{
				titulo: 'Violência doméstica e medidas protetivas',
				texto: 'Atuação em casos da Lei Maria da Penha, tanto na defesa quanto na proteção de vítimas com pedido de medidas protetivas.',
			},
			{
				titulo: 'Crimes de trânsito e outras infrações',
				texto: 'Defesa técnica em delitos de trânsito, crimes contra o patrimônio, tráfico e demais infrações penais.',
			},
			{
				titulo: 'Assistência à vítima',
				texto: 'Orientação para vítimas de crimes sobre boletim de ocorrência, representação criminal e acompanhamento do inquérito.',
			},
		],
		faqs: [
			{
				id: 1,
				pergunta: 'Fui preso(a) em flagrante. O que acontece agora?',
				resposta: 'Você será levado(a) à delegacia para ser ouvido(a) e, em até 24 horas, será apresentado(a) a um juiz para a audiência de custódia. É fundamental entrar em contato com um advogado criminalista imediatamente para garantir que seus direitos sejam respeitados desde o início.',
			},
			{
				pergunta: 'O que é uma audiência de custódia?',
				resposta: 'É uma audiência rápida (feita em até 24h após a prisão) onde o juiz avalia a legalidade da sua prisão. O juiz decidirá se você poderá responder ao processo em liberdade (com ou sem medidas cautelares) ou se será necessário decretar sua prisão preventiva.',
			},
			{
				pergunta: 'Posso responder ao processo em liberdade?',
				resposta: 'Sim, esta é a regra no sistema legal brasileiro. A prisão durante o processo (prisão preventiva) é uma exceção. Um advogado de defesa atuará para demonstrar ao juiz que não existem motivos para a prisão, solicitando sua liberdade provisória.',
			},
			{
				pergunta: 'Fui intimado(a) a depor na delegacia. Preciso de um advogado?',
				resposta: 'Embora não seja obrigatório por lei para a pessoa que vai depor (seja como testemunha ou investigado), é altamente recomendável. Um advogado garante que você não se autoincrimine, entenda as perguntas e que todo o procedimento siga a lei, evitando abusos.',
			},
			{
				pergunta: 'Qual a diferença entre regime fechado, semiaberto e aberto?',
				resposta: 'São as formas de cumprir a pena. No fechado, a pena é cumprida integralmente em estabelecimento penal. No semiaberto, o condenado pode trabalhar ou estudar fora durante o dia e retorna à noite. No aberto, o condenado cumpre a pena em casa, devendo seguir certas condições.',
			},
			{
				pergunta: "O que é um 'Habeas Corpus' (HC)?",
				resposta: "O Habeas Corpus é uma ação constitucional usada para proteger o direito de 'ir e vir' (liberdade). Ele é utilizado para 'trancar' investigações ilegais, pedir a soltura de alguém preso indevidamente ou anular um ato judicial que ameace a liberdade de forma ilegal ou abusiva.",
			},
			{
				pergunta: 'O que é a Lei Maria da Penha e medidas protetivas?',
				resposta: "É uma lei criada para proteger mulheres contra violência doméstica e familiar. As 'medidas protetivas' são ordens judiciais (como afastamento do agressor) para garantir a segurança da vítima de forma imediata, antes mesmo do processo principal.",
			},
			{
				pergunta: 'Qual a diferença entre tráfico de drogas e posse para uso?',
				resposta: 'A posse é para consumo pessoal e tem penas mais brandas (advertência, prestação de serviços). O tráfico envolve vender, transportar ou fornecer drogas a terceiros, sendo um crime grave com penas de prisão. A lei não define uma quantidade; a diferença é analisada pela autoridade com base nas circunstâncias da apreensão.',
			},
			{
				pergunta: 'Posso ser preso por não pagar pensão alimentícia?',
				resposta: "Sim. Esta é a única forma de 'prisão civil' (prisão por dívida) permitida no Brasil. Se houver uma ordem judicial e o devedor não pagar ou justificar, o juiz pode decretar a prisão, que visa forçar o pagamento da dívida.",
			},
			{
				pergunta: 'Fui vítima de um crime. O que eu faço?',
				resposta: 'Você deve procurar a delegacia de polícia mais próxima para registrar um Boletim de Ocorrência (B.O.). Isso dá início formal à investigação policial. Se for um crime que depende de representação (como ameaça), você terá 6 meses para autorizar o Estado a processar o autor.',
			},
			{
				pergunta: "O que é transação penal ou 'sursis' processual?",
				resposta: "São benefícios da Lei 9.099 (Juizados Especiais Criminais) para crimes de menor potencial. A Transação Penal é um acordo para crimes de pena até 2 anos, onde o autor paga uma multa ou presta serviços e o processo é arquivado. O 'Sursis' (suspensão do processo) ocorre em crimes com pena mínima de 1 ano, onde o processo é suspenso por 2 a 4 anos sob certas condições.",
			},
			{
				pergunta: 'Um menor de idade pode ser preso?',
				resposta: "Não. Menores de 18 anos não cometem 'crimes', mas sim 'atos infracionais'. Eles não são 'presos', mas podem ser 'apreendidos'. O processo é diferente (ECA - Estatuto da Criança e do Adolescente) e as punições são 'medidas socioeducativas', que podem ir de uma advertência até a internação em uma fundação.",
			},
			{
				pergunta: 'O que é prescrição?',
				resposta: 'A prescrição é a perda do direito do Estado de punir alguém devido à passagem do tempo. Se o Estado demora muito para investigar, processar ou executar a pena, ele perde esse direito. O prazo varia conforme a pena máxima do crime.',
			},
			{
				pergunta: 'Fui condenado. Ainda posso recorrer?',
				resposta: 'Sim. Toda condenação em primeira instância (pelo juiz) dá direito a, no mínimo, um recurso (Apelação) para o Tribunal de Justiça. O seu advogado analisará a sentença em busca de erros ou injustiças para pedir a absolvição ou a redução da pena.',
			},
			{
				pergunta: 'O que faz um advogado na Execução Penal?',
				resposta: 'A execução penal começa depois da condenação final. O advogado atua para garantir os direitos do preso, como progressão de regime (do fechado para o semiaberto, por exemplo), saídas temporárias, remição de pena (desconto por trabalho ou estudo) e pedidos de liberdade condicional.',
			},
		],
	},
];

export default areas;

export const getArea = (slug) => areas.find((a) => a.slug === slug);
