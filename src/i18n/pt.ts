import type { MessageKey } from './en'

// Tradução da interface para português. Chaves e regras — ver en.ts: uma frase
// completa por chave, sem marcação dentro do valor e sem substantivos contáveis ao
// lado de um número.
//
// `Partial` é intencional: uma chave que falte volta silenciosamente para o inglês,
// então uma tradução incompleta não quebra nada.
//
// Escrito em português brasileiro — «aba», «arquivo», «tela» —, que é a variante da
// maior parte dos usuários. Tratamento por «você».
export const pt: Partial<Record<MessageKey, string>> = {
  // Configurações — estrutura da página
  'settings.menu': 'Menu de configurações',
  'settings.brand': 'Configurações',
  'settings.tab.main': 'Configurações principais',
  'settings.tab.smart': 'Frases inteligentes',
  'settings.tab.patchNotes': 'Novidades',

  // Configurações principais — Geral
  'group.general': 'Geral',

  'lang.title': 'Idioma da tradução',
  'lang.description': 'O idioma para o qual as palavras e frases são traduzidas.',
  'lang.select': 'Escolher o idioma da tradução',

  'shortcuts.title': 'Atalhos de sites',
  'shortcuts.description': 'Mostrar seus favoritos em uma barra à esquerda da nova aba.',

  'background.title': 'Plano de fundo',
  'background.description': 'Imagem de fundo da nova aba.',
  'background.none': 'Nenhum',
  'background.custom': 'Imagem própria',
  'background.urlPlaceholder': 'Endereço da imagem',
  'background.or': 'ou',
  'background.chooseFile': 'Escolher um arquivo do computador',

  'interface.title': 'Idioma da interface',
  'interface.description': 'O idioma dos botões e rótulos do próprio LingoTab. “Automático” acompanha o idioma da tradução.',
  'interface.select': 'Escolher o idioma da interface',
  'interface.auto': 'Automático',

  'theme.title': 'Tema',
  'theme.description': 'Aparência clara ou escura.',
  'theme.switch': 'Mudar de tema',
  'theme.dark': 'Escuro',
  'theme.light': 'Claro',

  'dictionary.title': 'Fonte do dicionário',
  'dictionary.description': 'De onde vêm os significados e a pronúncia. “Automático” tenta a fonte principal e troca discretamente pela outra se ela não responder.',
  'dictionary.select': 'Escolher a fonte do dicionário',
  'dictionary.auto': 'Automático',

  // Configurações principais — Vocabulário
  'group.vocabulary': 'Vocabulário',
  'vocab.title': 'Listas de vocabulário',
  'vocab.description': 'De quais listas vêm suas palavras novas.',
  'vocab.learningOnly': 'Somente palavras em aprendizado',
  'vocab.learningOnlyHint': '(mostrar apenas as palavras salvas)',

  // Configurações principais — Tradução e revisão
  'group.translationReview': 'Tradução e revisão',

  'translation.title': 'Ocultar a tradução',
  'translation.description': 'A tradução fica atrás de um botão “Mostrar”, para você se testar antes.',

  'repetition.title': 'Revisão de palavras aprendidas',
  'repetition.description': 'De vez em quando mostra uma palavra que você já aprendeu, para não esquecer.',
  'repetition.select': 'Escolher a frequência da revisão',
  'repetition.off': 'Desativado',
  // O português tem duas formas, como o inglês. As chaves continuam separadas
  // porque as línguas eslavas têm três.
  'repetition.every1': 'A cada palavra',
  'repetition.every2': 'A cada 2 palavras',
  'repetition.every3': 'A cada 3 palavras',
  'repetition.every4': 'A cada 4 palavras',
  'repetition.every5': 'A cada 5 palavras',
  'repetition.every10': 'A cada 10 palavras',
  'repetition.every20': 'A cada 20 palavras',

  // Configurações principais — Suas listas
  'group.yourWordLists': 'Suas listas',
  'wordLists.title': 'Importar e exportar',
  'wordLists.description': 'Salve suas listas de palavras em um arquivo ou carregue-as de volta.',
  'wordLists.learning': 'Aprendendo',
  'wordLists.learned': 'Aprendidas',
  'wordLists.export': 'Exportar',
  'wordLists.import': 'Importar',

  // Configurações principais — Palavras ocultas
  'group.ignoredWords': 'Palavras ocultas',
  'ignored.description': 'Palavras ocultas não aparecem mais na nova aba. Remova uma palavra da lista para trazê-la de volta.',
  'ignored.empty': 'Clique neste ícone em uma palavra para ocultá-la das novas abas.',

  // Lista de palavras compartilhada
  'list.search': 'Buscar',
  'list.empty': 'Ainda não há nada',
  'list.noMatch': 'Nada encontrado',
  'list.remove': 'Remover da lista',
  'list.sort.oldest': 'Ordem: mais antigas primeiro',
  'list.sort.newest': 'Ordem: mais recentes primeiro',
  // As palavras são inglesas, então as letras continuam latinas.
  'list.sort.aToZ': 'Ordem: de A a Z',
  'list.sort.zToA': 'Ordem: de Z a A',

  // Janelas de importação
  'import.ignored.title': 'Importar palavras ocultas',
  'import.ignored.subtitle': 'Adicione palavras à lista de ocultas a partir de um arquivo de texto.',
  'import.learning.title': 'Importar palavras em aprendizado',
  'import.learning.subtitle': 'Adicione palavras à lista “Aprendendo” a partir de um arquivo de texto.',
  'import.learned.title': 'Importar palavras aprendidas',
  'import.learned.subtitle': 'Adicione palavras à lista “Aprendidas” a partir de um arquivo de texto.',
  'import.requirements': 'Requisitos do arquivo',
  'import.req.matching': 'Correspondência: apenas palavras que estejam nas listas de vocabulário do LingoTab',
  'import.req.separators': 'Separadores: espaço, tabulação, vírgula ou quebra de linha',
  'import.req.length': 'Tamanho da palavra: até 30 caracteres',
  'import.req.lowercase': 'Todas as palavras são convertidas para minúsculas',
  'import.req.format': 'Formato do arquivo: texto simples (.txt)',
  'import.found': 'Palavras encontradas:',
  'import.none': 'Nenhuma palavra encontrada neste arquivo. Tente outro.',
  'import.readError': 'Não foi possível ler o arquivo. Verifique se é um arquivo de texto simples e tente de novo.',
  'import.cancel': 'Cancelar',
  'import.confirm': 'Importar',
  'wordLists.importJson': 'Importar com tradução (JSON)',
  'wordLists.exportJson': 'Exportar com tradução (JSON)',
  'import.json.title': 'Importar palavras com tradução',
  'import.json.subtitle': 'Adicione a "Aprendendo" palavras com suas próprias traduções a partir de um arquivo .json. A tradução do arquivo substitui a que você já tem.',
  'import.json.invalid': 'Este não é um arquivo de palavras do LingoTab válido. Verifique se é JSON no formato esperado.',
  'import.json.newWords': 'Palavras novas:',
  'import.json.translations': 'Traduções:',
  'import.json.replaced': 'Vão substituir as suas:',
  'import.json.skipped': 'Ignoradas (não é uma só palavra):',
  'aiPrompt.title': 'Traduza suas palavras com IA',
  'aiPrompt.description': 'Copie um prompt pronto que já contém suas palavras de "Aprendendo" sem tradução própria. Cole no ChatGPT, Claude ou outro chat de IA, salve a resposta como arquivo .json e importe com "Importar com tradução (JSON)" acima.',
  'aiPrompt.wordsCount': 'Palavras sem sua tradução:',
  'aiPrompt.copy': 'Copiar prompt',
  'aiPrompt.copied': 'Copiado!',
  'file.select': 'Escolher arquivo',

  // Frases inteligentes — Geral
  'smart.enable.title': 'Frases inteligentes',
  'smart.enable.description': 'Pratique montar frases na nova aba em vez de estudar palavras soltas.',
  'smart.hints.title': 'Dicas',
  'smart.hints.description': 'Acrescentar a cada frase uma questão de gramática com alternativas.',
  'smart.mix.title': 'Alternar palavras e frases',
  'smart.mix.description': 'Alternar entre palavras soltas e exercícios de frases.',
  'smart.wordsPer.title': 'Palavras por frase',
  'smart.wordsPer.description': 'Quantas palavras mostrar antes da próxima frase.',

  // Frases inteligentes — Pacote de frases
  'group.sentencePack': 'Pacote de frases',
  'smart.builtIn.title': 'Pacote integrado',
  'smart.builtIn.description': 'O pacote de frases que vem com o LingoTab, já traduzido para o seu idioma.',
  'smart.create.title': 'Criar o seu',
  'smart.create.description': 'Copie um prompt pronto em qualquer chat de IA. Ele vai fazer algumas perguntas e devolver um arquivo que você pode importar abaixo.',
  'smart.create.copy': 'Copiar prompt',
  'smart.create.copied': 'Copiado!',
  'smart.import.title': 'Importar um pacote',
  'smart.import.description': 'Carregar um pacote de frases de um arquivo.',
  'smart.import.choose': 'Escolher arquivo',
  'smart.import.change': 'Trocar arquivo',
  'smart.preview.title': 'Prévia',
  'smart.preview.description': 'Confira as frases abaixo. Aceite para usar este pacote ou descarte-o.',
  'smart.preview.accept': 'Aceitar',
  'smart.preview.discard': 'Descartar',

  // Nova aba — botões para revelar
  'word.showWord': 'Mostrar palavra',
  'word.showTranslation': 'Mostrar tradução',

  // Nova aba — telas vazias e erros
  'common.settings': 'Configurações',
  'empty.noLists.title': 'Nenhuma lista selecionada',
  'empty.noLists.description': 'Escolha pelo menos uma lista de vocabulário para começar.',
  'empty.wordError.message': 'Nenhum significado encontrado para esta palavra.',
  'empty.wordError.ignore': 'Ocultar palavra',
  'empty.wordError.newWord': 'Outra palavra',
  'empty.offline.title': 'Você está sem conexão',
  'empty.offline.description': 'Conecte-se à internet para carregar os significados.',
  'empty.learnedAll.title': 'Parabéns!',
  'empty.learnedAll.description': 'Você aprendeu todas as palavras das suas listas. Muito bem!',
  'empty.noPack': 'Ainda não há nenhum pacote de frases. Ative o pacote integrado nas configurações ou importe o seu.',
  'empty.learning': 'Clique neste ícone em uma palavra para adicioná-la aqui.',
  'empty.learned': 'Clique neste ícone em uma palavra de “Aprendendo” para movê-la para cá.',

  // Nova aba — barra superior
  'nav.search': 'Buscar palavra',
  'nav.options': 'Configurações',
  'nav.inventory': 'Todas as palavras',
  'nav.inventorySubtitle': 'Ver todas as palavras das listas',
  'nav.history': 'Histórico',
  'nav.historySubtitle': 'Últimas palavras exibidas',
  'nav.markedWords': 'Palavras marcadas',
  'nav.close': 'Fechar',

  // Nova aba — ações sobre uma palavra
  'action.ignore': 'Ocultar palavra',
  'action.markLearning': 'Para a lista “Aprendendo”',
  'action.markLearned': 'Para a lista “Aprendidas”',
  'action.listen': 'Ouvir',
  'action.next': 'Próxima',
  'repetitionBlock.title': 'Revisão de uma palavra aprendida',

  // Nova aba — atalhos de sites
  'shortcut.add': 'Adicionar atalho',
  'shortcut.edit': 'Editar atalho',
  'shortcut.remove': 'Remover',
  'shortcut.name': 'Nome',
  'shortcut.url': 'Endereço',
  'shortcut.nameDuplicated': 'Esse nome já existe.',
  'shortcut.cancel': 'Cancelar',
  'shortcut.done': 'Concluir',
  'action.editTranslation': 'Editar tradução',
  'editWord.title': 'Editar palavra',
  'editWord.word': 'Palavra',
  'editWord.translation': 'Tradução',
  'editWord.translationPlaceholder': 'Deixe vazio para usar a tradução automática',
  'editWord.invalidWord': 'Uma só palavra, sem espaços nem vírgulas.',
  'editWord.duplicateWord': 'Esta palavra já está na lista.',
  'editWord.addTitle': 'Adicionar palavra',
  'editWord.translate': 'Traduzir automaticamente',
  'editWord.translateFailed': 'Tradução automática indisponível — digite manualmente.',
  'editWord.movedFromLearned': 'A palavra será movida de "Aprendidas" para "Aprendendo".',
  'editWord.movedFromIgnored': 'A palavra será movida das ignoradas para "Aprendendo".',
  'list.sort.ownFirst': 'Ordenar: minhas traduções primeiro',
  'word.ownTranslation': 'Sua tradução',

  // Nova aba — problemas de tradução
  'translateFailure.quota.label': 'Limite diário atingido',
  'translateFailure.quota.message': 'O serviço de tradução gratuito esgotou o limite de hoje. As palavras que você já abriu continuam mostrando as traduções salvas; as novas voltam amanhã.',
  'translateFailure.unavailable.label': 'Tradução indisponível',
  'translateFailure.unavailable.message': 'No momento não é possível acessar nenhum serviço de tradução. As palavras que você já abriu continuam mostrando as traduções salvas.',
  'translateFailure.dismiss': 'Fechar',
  'translateFailure.translating': 'traduzindo…',
  'translateFailure.tooltipQuota': 'Limite diário de traduções atingido',
  'translateFailure.tooltipUnavailable': 'Tradução indisponível',

  // Nova aba — exercícios de frases
  'practice.translatePrompt': 'Traduza para o inglês:',
  'practice.inputPlaceholder': 'Digite aqui a frase em inglês',
  'practice.inputLabel': 'Digitar a frase em inglês',
  'practice.check': 'Verificar',
  'practice.grammarReference': 'Referência gramatical',
}
