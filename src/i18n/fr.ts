import type { MessageKey } from './en'

// Traduction française de l’interface. Clés et règles — voir en.ts : une phrase
// complète par clé, aucun balisage dans la valeur, aucun nom comptable à côté d’un
// nombre.
//
// `Partial` est volontaire : une clé manquante retombe silencieusement sur
// l’anglais, une traduction incomplète est donc sans danger.
//
// Vouvoiement partout, et typographie française : espace avant les deux-points et
// le point d’exclamation, guillemets « … », apostrophe typographique.
export const fr: Partial<Record<MessageKey, string>> = {
  // Paramètres — structure de la page
  'settings.menu': 'Menu des paramètres',
  'settings.brand': 'Paramètres',
  'settings.tab.main': 'Paramètres principaux',
  'settings.tab.smart': 'Phrases intelligentes',
  'settings.tab.patchNotes': 'Nouveautés',

  // Paramètres principaux — Général
  'group.general': 'Général',

  'lang.title': 'Langue de traduction',
  'lang.description': 'La langue vers laquelle les mots et les phrases sont traduits.',
  'lang.select': 'Choisir la langue de traduction',

  'shortcuts.title': 'Raccourcis de sites',
  'shortcuts.description': 'Afficher vos favoris dans une barre à gauche du nouvel onglet.',

  'background.title': 'Arrière-plan',
  'background.description': 'Image d’arrière-plan du nouvel onglet.',
  'background.none': 'Aucun',
  'background.custom': 'Image personnalisée',
  'background.urlPlaceholder': 'Adresse de l’image',
  'background.or': 'ou',
  'background.chooseFile': 'Choisir un fichier sur l’ordinateur',

  'interface.title': 'Langue de l’interface',
  'interface.description': 'La langue des boutons et des libellés de LingoTab. « Auto » suit votre langue de traduction.',
  'interface.select': 'Choisir la langue de l’interface',
  'interface.auto': 'Auto',

  'theme.title': 'Thème',
  'theme.description': 'Apparence claire ou sombre.',
  'theme.switch': 'Changer de thème',
  'theme.dark': 'Sombre',
  'theme.light': 'Clair',

  'dictionary.title': 'Source du dictionnaire',
  'dictionary.description': 'D’où viennent les définitions et la prononciation. « Automatique » essaie la source principale et bascule discrètement sur l’autre si elle ne répond pas.',
  'dictionary.select': 'Choisir la source du dictionnaire',
  'dictionary.auto': 'Automatique',

  // Paramètres principaux — Vocabulaire
  'group.vocabulary': 'Vocabulaire',
  'vocab.title': 'Listes de vocabulaire',
  'vocab.description': 'Les listes d’où viennent vos nouveaux mots.',
  'vocab.learningOnly': 'Uniquement les mots en cours',
  'vocab.learningOnlyHint': '(n’afficher que les mots enregistrés)',

  // Paramètres principaux — Traduction et révision
  'group.translationReview': 'Traduction et révision',

  'translation.title': 'Masquer la traduction',
  'translation.description': 'La traduction reste cachée derrière un bouton « Afficher », pour vous tester d’abord.',

  'repetition.title': 'Révision des mots appris',
  'repetition.description': 'Affiche de temps en temps un mot déjà appris pour ne pas l’oublier.',
  'repetition.select': 'Choisir la fréquence de révision',
  'repetition.off': 'Désactivé',
  // Le français n’a que deux formes, comme l’anglais. Les clés restent séparées
  // parce que les langues slaves en ont trois.
  'repetition.every1': 'Chaque mot',
  'repetition.every2': 'Tous les 2 mots',
  'repetition.every3': 'Tous les 3 mots',
  'repetition.every4': 'Tous les 4 mots',
  'repetition.every5': 'Tous les 5 mots',
  'repetition.every10': 'Tous les 10 mots',
  'repetition.every20': 'Tous les 20 mots',

  // Paramètres principaux — Vos listes
  'group.yourWordLists': 'Vos listes',
  'wordLists.title': 'Import et export',
  'wordLists.description': 'Enregistrer vos listes de mots dans un fichier ou les recharger depuis un fichier.',
  'wordLists.learning': 'En cours',
  'wordLists.learned': 'Appris',
  'wordLists.export': 'Exporter',
  'wordLists.import': 'Importer',

  // Paramètres principaux — Mots masqués
  'group.ignoredWords': 'Mots masqués',
  'group.supportMe': 'Me soutenir',
  'supportMe.description': 'Si l’extension vous a été utile, vous aurez peut-être envie de me soutenir. Je compte continuer à l’améliorer, et votre soutien y contribuera beaucoup. Merci.',
  'supportMe.button': 'Me soutenir sur Ko-fi',
  'ignored.description': 'Les mots masqués n’apparaissent plus dans le nouvel onglet. Retirez un mot de la liste pour le faire revenir.',
  'ignored.empty': 'Cliquez sur cette icône près d’un mot pour le masquer des nouveaux onglets.',

  // Liste de mots commune
  'list.search': 'Rechercher',
  'list.empty': 'Rien pour l’instant',
  'list.noMatch': 'Aucun résultat',
  'list.remove': 'Retirer de la liste',
  'list.sort.oldest': 'Tri : les plus anciens d’abord',
  'list.sort.newest': 'Tri : les plus récents d’abord',
  // Les mots sont anglais, les lettres restent donc latines.
  'list.sort.aToZ': 'Tri : de A à Z',
  'list.sort.zToA': 'Tri : de Z à A',

  // Fenêtres d’import
  'import.ignored.title': 'Importer des mots masqués',
  'import.ignored.subtitle': 'Ajouter des mots à la liste des mots masqués depuis un fichier texte.',
  'import.learning.title': 'Importer des mots en cours',
  'import.learning.subtitle': 'Ajouter des mots à la liste « En cours » depuis un fichier texte.',
  'import.learned.title': 'Importer des mots appris',
  'import.learned.subtitle': 'Ajouter des mots à la liste « Appris » depuis un fichier texte.',
  'import.requirements': 'Conditions du fichier',
  'import.req.matching': 'Correspondance : uniquement les mots présents dans les listes de vocabulaire de LingoTab',
  'import.req.separators': 'Séparateurs : espace, tabulation, virgule ou saut de ligne',
  'import.req.length': 'Longueur du mot : jusqu’à 30 caractères',
  'import.req.lowercase': 'Tous les mots sont convertis en minuscules',
  'import.req.format': 'Format du fichier : texte brut (.txt)',
  'import.found': 'Mots trouvés :',
  'import.none': 'Aucun mot trouvé dans ce fichier. Essayez-en un autre.',
  'import.readError': 'Impossible de lire ce fichier. Vérifiez qu’il s’agit bien d’un fichier texte brut, puis réessayez.',
  'import.cancel': 'Annuler',
  'import.confirm': 'Importer',
  'wordLists.importJson': 'Importer avec traduction (JSON)',
  'wordLists.exportJson': 'Exporter avec traduction (JSON)',
  'import.json.title': 'Importer des mots avec traduction',
  'import.json.subtitle': 'Ajoutez à « En cours » des mots avec vos propres traductions depuis un fichier .json. Une traduction du fichier remplace celle que vous avez déjà.',
  'import.json.invalid': 'Ce n’est pas un fichier de mots LingoTab valide. Vérifiez qu’il s’agit de JSON au bon format.',
  'import.json.newWords': 'Nouveaux mots :',
  'import.json.translations': 'Traductions :',
  'import.json.replaced': 'Remplaceront les vôtres :',
  'import.json.skipped': 'Ignorés (pas un seul mot) :',
  'aiPrompt.title': 'Traduire vos mots avec l’IA',
  'aiPrompt.description': 'Copiez un prompt prêt à l’emploi contenant déjà vos mots « En cours » sans traduction personnelle. Collez-le dans ChatGPT, Claude ou un autre chat IA, enregistrez la réponse en fichier .json et importez-la avec « Importer avec traduction (JSON) » ci-dessus.',
  'aiPrompt.wordsCount': 'Mots sans votre traduction :',
  'aiPrompt.copy': 'Copier le prompt',
  'aiPrompt.copied': 'Copié !',
  'file.select': 'Choisir un fichier',

  // Phrases intelligentes — Général
  'smart.enable.title': 'Phrases intelligentes',
  'smart.enable.description': 'S’entraîner à construire des phrases dans le nouvel onglet au lieu d’apprendre des mots isolés.',
  'smart.hints.title': 'Indices',
  'smart.hints.description': 'Ajouter à chaque phrase une question de grammaire à choix multiples.',
  'smart.mix.title': 'Alterner mots et phrases',
  'smart.mix.description': 'Alterner entre mots isolés et exercices de phrases.',
  'smart.wordsPer.title': 'Mots par phrase',
  'smart.wordsPer.description': 'Combien de mots afficher avant la phrase suivante.',

  // Phrases intelligentes — Jeu de phrases
  'group.sentencePack': 'Jeu de phrases',
  'smart.builtIn.title': 'Jeu intégré',
  'smart.builtIn.description': 'Le jeu de phrases fourni avec LingoTab, déjà traduit dans votre langue.',
  'smart.create.title': 'Créer le vôtre',
  'smart.create.description': 'Copiez un prompt tout prêt dans n’importe quel chat IA. Il vous posera quelques questions et renverra un fichier à importer ci-dessous.',
  'smart.create.copy': 'Copier le prompt',
  'smart.create.copied': 'Copié !',
  'smart.import.title': 'Importer un jeu',
  'smart.import.description': 'Charger un jeu de phrases depuis un fichier.',
  'smart.import.choose': 'Choisir un fichier',
  'smart.import.change': 'Changer de fichier',
  'smart.preview.title': 'Aperçu',
  'smart.preview.description': 'Vérifiez les phrases ci-dessous. Acceptez pour utiliser ce jeu, ou rejetez-le.',
  'smart.preview.accept': 'Accepter',
  'smart.preview.discard': 'Rejeter',

  // Nouvel onglet — boutons d’affichage
  'word.showWord': 'Afficher le mot',
  'word.showTranslation': 'Afficher la traduction',

  // Nouvel onglet — écrans vides et erreurs
  'common.settings': 'Paramètres',
  'empty.noLists.title': 'Aucune liste sélectionnée',
  'empty.noLists.description': 'Choisissez au moins une liste de vocabulaire pour commencer.',
  'empty.wordError.message': 'Aucune définition trouvée pour ce mot.',
  'empty.wordError.ignore': 'Masquer le mot',
  'empty.wordError.newWord': 'Autre mot',
  'empty.offline.title': 'Vous êtes hors ligne',
  'empty.offline.description': 'Connectez-vous à Internet pour charger les définitions.',
  'empty.learnedAll.title': 'Bravo !',
  'empty.learnedAll.description': 'Vous avez appris tous les mots de vos listes. Beau travail !',
  'empty.noPack': 'Aucun jeu de phrases pour l’instant. Activez le jeu intégré dans les paramètres ou importez le vôtre.',
  'empty.learningTitle': 'Vos mots apparaîtront ici',
  'empty.learning': 'Ajoutez-les avec l’icône de marque-page sur une carte de mot ou avec le bouton « Ajouter un mot » ci-dessous.',
  'learningOnlyTip.text': 'Pour n’étudier que ces mots, activez « Uniquement les mots en cours » dans Paramètres → Listes de vocabulaire.',
  'learningOnlyTip.openSettings': 'Ouvrir les paramètres',
  'empty.learned': 'Cliquez sur cette icône près d’un mot « En cours » pour le déplacer ici.',

  // Nouvel onglet — barre supérieure
  'nav.search': 'Rechercher un mot',
  'nav.options': 'Paramètres',
  'nav.inventory': 'Tous les mots',
  'nav.inventorySubtitle': 'Parcourir tous les mots des listes',
  'nav.history': 'Historique',
  'nav.historySubtitle': 'Derniers mots affichés',
  'nav.markedWords': 'Mots marqués',
  'nav.close': 'Fermer',

  // Nouvel onglet — actions sur un mot
  'action.ignore': 'Masquer le mot',
  'action.markLearning': 'Vers la liste « En cours »',
  'action.markLearned': 'Vers la liste « Appris »',
  'action.listen': 'Écouter',
  'action.next': 'Suivant',
  'repetitionBlock.title': 'Révision d’un mot appris',

  // Nouvel onglet — raccourcis de sites
  'shortcut.add': 'Ajouter un raccourci',
  'shortcut.edit': 'Modifier le raccourci',
  'shortcut.remove': 'Supprimer',
  'shortcut.name': 'Nom',
  'shortcut.url': 'Adresse',
  'shortcut.nameDuplicated': 'Ce nom existe déjà.',
  'shortcut.cancel': 'Annuler',
  'shortcut.done': 'Terminé',
  'action.editTranslation': 'Modifier la traduction',
  'editWord.title': 'Modifier le mot',
  'editWord.word': 'Mot',
  'editWord.translation': 'Traduction',
  'editWord.translationPlaceholder': 'Laissez vide pour utiliser la traduction automatique',
  'editWord.invalidWord': 'Un seul mot, sans espaces ni virgules.',
  'editWord.duplicateWord': 'Ce mot est déjà dans la liste.',
  'editWord.addTitle': 'Ajouter un mot',
  'editWord.translate': 'Traduire automatiquement',
  'editWord.translateFailed': 'Traduction automatique indisponible — saisissez-la manuellement.',
  'editWord.movedFromLearned': 'Ce mot sera déplacé de « Appris » vers « En cours ».',
  'editWord.movedFromIgnored': 'Ce mot sera déplacé des mots ignorés vers « En cours ».',
  'list.sort.ownFirst': 'Tri : mes traductions d’abord',
  'word.ownTranslation': 'Votre traduction',

  // Nouvel onglet — problèmes de traduction
  'translateFailure.quota.label': 'Limite quotidienne atteinte',
  'translateFailure.quota.message': 'Le service de traduction gratuit a épuisé sa limite quotidienne. Les mots déjà ouverts affichent toujours leurs traductions enregistrées ; les nouvelles reprendront demain.',
  'translateFailure.unavailable.label': 'Traduction indisponible',
  'translateFailure.unavailable.message': 'Aucun service de traduction n’est joignable pour le moment. Les mots déjà ouverts affichent toujours leurs traductions enregistrées.',
  'translateFailure.dismiss': 'Fermer',
  'translateFailure.translating': 'traduction…',
  'translateFailure.tooltipQuota': 'Limite quotidienne de traductions atteinte',
  'translateFailure.tooltipUnavailable': 'Traduction indisponible',

  // Nouvel onglet — exercices de phrases
  'practice.translatePrompt': 'Traduisez en anglais :',
  'practice.inputPlaceholder': 'Saisissez la phrase en anglais',
  'practice.inputLabel': 'Saisir la phrase en anglais',
  'practice.check': 'Vérifier',
  'practice.grammarReference': 'Référence grammaticale',
}
