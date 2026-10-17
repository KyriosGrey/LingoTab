import type { MessageKey } from './en'

// Traducción al español de la interfaz. Claves y reglas — ver en.ts: una frase
// completa por clave, sin marcado dentro del valor y sin sustantivos contables
// junto a un número.
//
// `Partial` es intencionado: una clave que falte recurre en silencio al inglés,
// así que una traducción incompleta no rompe nada.
//
// Se tutea, como en cualquier app de aprendizaje. Español neutro: se evitan
// «ordenador» y «computadora» a favor de «equipo». Signos de apertura ¡ ¿ donde
// corresponde y comillas angulares « … ».
export const es: Partial<Record<MessageKey, string>> = {
  // Ajustes — estructura de la página
  'settings.menu': 'Menú de ajustes',
  'settings.brand': 'Ajustes',
  'settings.tab.main': 'Ajustes principales',
  'settings.tab.smart': 'Frases inteligentes',
  'settings.tab.patchNotes': 'Novedades',

  // Ajustes principales — General
  'group.general': 'General',

  'lang.title': 'Idioma de traducción',
  'lang.description': 'El idioma al que se traducen las palabras y las frases.',
  'lang.select': 'Elegir idioma de traducción',

  'shortcuts.title': 'Accesos directos',
  'shortcuts.description': 'Mostrar tus marcadores en una barra a la izquierda de la nueva pestaña.',

  'background.title': 'Fondo',
  'background.description': 'Imagen de fondo de la nueva pestaña.',
  'background.none': 'Ninguno',
  'background.custom': 'Imagen propia',
  'background.urlPlaceholder': 'Dirección de la imagen',
  'background.or': 'o',
  'background.chooseFile': 'Elegir un archivo del equipo',

  'interface.title': 'Idioma de la interfaz',
  'interface.description': 'El idioma de los botones y las etiquetas de LingoTab. «Auto» sigue tu idioma de traducción.',
  'interface.select': 'Elegir idioma de la interfaz',
  'interface.auto': 'Auto',

  'theme.title': 'Tema',
  'theme.description': 'Apariencia clara u oscura.',
  'theme.switch': 'Cambiar de tema',
  'theme.dark': 'Oscuro',
  'theme.light': 'Claro',

  'dictionary.title': 'Fuente del diccionario',
  'dictionary.description': 'De dónde vienen los significados y la pronunciación. «Automático» prueba la fuente principal y cambia sin avisar a la otra si no responde.',
  'dictionary.select': 'Elegir fuente del diccionario',
  'dictionary.auto': 'Automático',

  // Ajustes principales — Vocabulario
  'group.vocabulary': 'Vocabulario',
  'vocab.title': 'Listas de vocabulario',
  'vocab.description': 'De qué listas salen tus palabras nuevas.',
  'vocab.learningOnly': 'Solo palabras en aprendizaje',
  'vocab.learningOnlyHint': '(mostrar solo las palabras guardadas)',

  // Ajustes principales — Traducción y repaso
  'group.translationReview': 'Traducción y repaso',

  'translation.title': 'Ocultar la traducción',
  'translation.description': 'La traducción queda detrás de un botón «Mostrar», para que puedas ponerte a prueba antes.',

  'repetition.title': 'Repaso de palabras aprendidas',
  'repetition.description': 'De vez en cuando muestra una palabra que ya aprendiste para que no se te olvide.',
  'repetition.select': 'Elegir la frecuencia de repaso',
  'repetition.off': 'Desactivado',
  // El español tiene dos formas, como el inglés. Las claves siguen separadas
  // porque las lenguas eslavas tienen tres.
  'repetition.every1': 'Cada palabra',
  'repetition.every2': 'Cada 2 palabras',
  'repetition.every3': 'Cada 3 palabras',
  'repetition.every4': 'Cada 4 palabras',
  'repetition.every5': 'Cada 5 palabras',
  'repetition.every10': 'Cada 10 palabras',
  'repetition.every20': 'Cada 20 palabras',

  // Ajustes principales — Tus listas
  'group.yourWordLists': 'Tus listas',
  'wordLists.title': 'Importar y exportar',
  'wordLists.description': 'Guarda tus listas de palabras en un archivo o vuelve a cargarlas desde uno.',
  'wordLists.learning': 'Aprendiendo',
  'wordLists.learned': 'Aprendidas',
  'wordLists.export': 'Exportar',
  'wordLists.import': 'Importar',

  // Ajustes principales — Palabras ocultas
  'group.ignoredWords': 'Palabras ocultas',
  'ignored.description': 'Las palabras ocultas ya no aparecen en la nueva pestaña. Quita una palabra de la lista para recuperarla.',
  'ignored.empty': 'Pulsa este icono en una palabra para ocultarla de las nuevas pestañas.',

  // Lista de palabras común
  'list.search': 'Buscar',
  'list.empty': 'Aún no hay nada',
  'list.noMatch': 'No se encontró nada',
  'list.remove': 'Quitar de la lista',
  'list.sort.oldest': 'Orden: más antiguas primero',
  'list.sort.newest': 'Orden: más recientes primero',
  // Las palabras son inglesas, así que las letras siguen siendo latinas.
  'list.sort.aToZ': 'Orden: de la A a la Z',
  'list.sort.zToA': 'Orden: de la Z a la A',

  // Ventanas de importación
  'import.ignored.title': 'Importar palabras ocultas',
  'import.ignored.subtitle': 'Añade palabras a la lista de ocultas desde un archivo de texto.',
  'import.learning.title': 'Importar palabras en aprendizaje',
  'import.learning.subtitle': 'Añade palabras a la lista «Aprendiendo» desde un archivo de texto.',
  'import.learned.title': 'Importar palabras aprendidas',
  'import.learned.subtitle': 'Añade palabras a la lista «Aprendidas» desde un archivo de texto.',
  'import.requirements': 'Requisitos del archivo',
  'import.req.matching': 'Coincidencias: solo palabras que estén en las listas de vocabulario de LingoTab',
  'import.req.separators': 'Separadores: espacio, tabulación, coma o salto de línea',
  'import.req.length': 'Longitud de la palabra: hasta 30 caracteres',
  'import.req.lowercase': 'Todas las palabras se convierten a minúsculas',
  'import.req.format': 'Formato del archivo: texto plano (.txt)',
  'import.found': 'Palabras encontradas:',
  'import.none': 'No se encontraron palabras en este archivo. Prueba con otro.',
  'import.readError': 'No se pudo leer el archivo. Comprueba que sea un archivo de texto plano e inténtalo de nuevo.',
  'import.cancel': 'Cancelar',
  'import.confirm': 'Importar',
  'wordLists.importJson': 'Importar con traducción (JSON)',
  'wordLists.exportJson': 'Exportar con traducción (JSON)',
  'import.json.title': 'Importar palabras con traducción',
  'import.json.subtitle': 'Añade a «Aprendiendo» palabras con tus propias traducciones desde un archivo .json. La traducción del archivo reemplaza la que ya tienes.',
  'import.json.invalid': 'Este no es un archivo de palabras de LingoTab válido. Comprueba que sea JSON con el formato esperado.',
  'import.json.newWords': 'Palabras nuevas:',
  'import.json.translations': 'Traducciones:',
  'import.json.replaced': 'Reemplazarán las tuyas:',
  'import.json.skipped': 'Omitidas (no es una sola palabra):',
  'aiPrompt.title': 'Traduce tus palabras con IA',
  'aiPrompt.description': 'Copia un prompt listo que ya incluye tus palabras de «Aprendiendo» sin traducción propia. Pégalo en ChatGPT, Claude u otro chat de IA, guarda la respuesta como archivo .json e impórtala con «Importar con traducción (JSON)» arriba.',
  'aiPrompt.wordsCount': 'Palabras sin tu traducción:',
  'aiPrompt.copy': 'Copiar prompt',
  'aiPrompt.copied': '¡Copiado!',
  'file.select': 'Elegir archivo',

  // Frases inteligentes — General
  'smart.enable.title': 'Frases inteligentes',
  'smart.enable.description': 'Practica cómo construir frases en la nueva pestaña en vez de estudiar palabras sueltas.',
  'smart.hints.title': 'Pistas',
  'smart.hints.description': 'Añadir a cada frase una pregunta de gramática con varias opciones.',
  'smart.mix.title': 'Alternar palabras y frases',
  'smart.mix.description': 'Alternar entre palabras sueltas y ejercicios de frases.',
  'smart.wordsPer.title': 'Palabras por frase',
  'smart.wordsPer.description': 'Cuántas palabras mostrar antes de la siguiente frase.',

  // Frases inteligentes — Paquete de frases
  'group.sentencePack': 'Paquete de frases',
  'smart.builtIn.title': 'Paquete integrado',
  'smart.builtIn.description': 'El paquete de frases que viene con LingoTab, ya traducido a tu idioma.',
  'smart.create.title': 'Crear el tuyo',
  'smart.create.description': 'Copia un prompt ya preparado en cualquier chat de IA. Te hará unas preguntas y devolverá un archivo que podrás importar abajo.',
  'smart.create.copy': 'Copiar prompt',
  'smart.create.copied': '¡Copiado!',
  'smart.import.title': 'Importar un paquete',
  'smart.import.description': 'Cargar un paquete de frases desde un archivo.',
  'smart.import.choose': 'Elegir archivo',
  'smart.import.change': 'Cambiar archivo',
  'smart.preview.title': 'Vista previa',
  'smart.preview.description': 'Revisa las frases de abajo. Acéptalas para usar este paquete o descártalo.',
  'smart.preview.accept': 'Aceptar',
  'smart.preview.discard': 'Descartar',

  // Nueva pestaña — botones para mostrar
  'word.showWord': 'Mostrar palabra',
  'word.showTranslation': 'Mostrar traducción',

  // Nueva pestaña — pantallas vacías y errores
  'common.settings': 'Ajustes',
  'empty.noLists.title': 'No hay ninguna lista seleccionada',
  'empty.noLists.description': 'Elige al menos una lista de vocabulario para empezar.',
  'empty.wordError.message': 'No se encontraron significados para esta palabra.',
  'empty.wordError.ignore': 'Ocultar palabra',
  'empty.wordError.newWord': 'Otra palabra',
  'empty.offline.title': 'Estás sin conexión',
  'empty.offline.description': 'Conéctate a internet para cargar los significados.',
  'empty.learnedAll.title': '¡Bravo!',
  'empty.learnedAll.description': 'Has aprendido todas las palabras de tus listas. ¡Bien hecho!',
  'empty.noPack': 'Todavía no hay ningún paquete de frases. Activa el integrado en los ajustes o importa el tuyo.',
  'empty.learning': 'Pulsa este icono en una palabra para añadirla aquí.',
  'empty.learned': 'Pulsa este icono en una palabra de «Aprendiendo» para moverla aquí.',

  // Nueva pestaña — barra superior
  'nav.search': 'Buscar palabra',
  'nav.options': 'Ajustes',
  'nav.inventory': 'Todas las palabras',
  'nav.inventorySubtitle': 'Ver todas las palabras de las listas',
  'nav.history': 'Historial',
  'nav.historySubtitle': 'Últimas palabras mostradas',
  'nav.markedWords': 'Palabras marcadas',
  'nav.close': 'Cerrar',

  // Nueva pestaña — acciones sobre una palabra
  'action.ignore': 'Ocultar palabra',
  'action.markLearning': 'A la lista «Aprendiendo»',
  'action.markLearned': 'A la lista «Aprendidas»',
  'action.listen': 'Escuchar',
  'action.next': 'Siguiente',
  'repetitionBlock.title': 'Repaso de una palabra aprendida',

  // Nueva pestaña — accesos directos
  'shortcut.add': 'Añadir acceso directo',
  'shortcut.edit': 'Editar acceso directo',
  'shortcut.remove': 'Eliminar',
  'shortcut.name': 'Nombre',
  'shortcut.url': 'Dirección',
  'shortcut.nameDuplicated': 'Ese nombre ya existe.',
  'shortcut.cancel': 'Cancelar',
  'shortcut.done': 'Listo',
  'action.editTranslation': 'Editar traducción',
  'editWord.title': 'Editar palabra',
  'editWord.word': 'Palabra',
  'editWord.translation': 'Traducción',
  'editWord.translationPlaceholder': 'Déjalo vacío para usar la traducción automática',
  'editWord.invalidWord': 'Una sola palabra, sin espacios ni comas.',
  'editWord.duplicateWord': 'Esta palabra ya está en la lista.',
  'editWord.addTitle': 'Añadir palabra',
  'editWord.translate': 'Traducir automáticamente',
  'editWord.translateFailed': 'Traducción automática no disponible: escríbela manualmente.',
  'editWord.movedFromLearned': 'La palabra se moverá de «Aprendidas» a «Aprendiendo».',
  'editWord.movedFromIgnored': 'La palabra se moverá de las ignoradas a «Aprendiendo».',
  'list.sort.ownFirst': 'Ordenar: primero con mi traducción',
  'word.ownTranslation': 'Tu traducción',

  // Nueva pestaña — problemas de traducción
  'translateFailure.quota.label': 'Límite diario alcanzado',
  'translateFailure.quota.message': 'El servicio de traducción gratuito ha agotado su límite diario. Las palabras que ya abriste siguen mostrando sus traducciones guardadas; las nuevas se reanudarán mañana.',
  'translateFailure.unavailable.label': 'Traducción no disponible',
  'translateFailure.unavailable.message': 'Ahora mismo no se puede conectar con ningún servicio de traducción. Las palabras que ya abriste siguen mostrando sus traducciones guardadas.',
  'translateFailure.dismiss': 'Cerrar',
  'translateFailure.translating': 'traduciendo…',
  'translateFailure.tooltipQuota': 'Límite diario de traducciones alcanzado',
  'translateFailure.tooltipUnavailable': 'Traducción no disponible',

  // Nueva pestaña — ejercicios de frases
  'practice.translatePrompt': 'Traduce al inglés:',
  'practice.inputPlaceholder': 'Escribe aquí la frase en inglés',
  'practice.inputLabel': 'Escribir la frase en inglés',
  'practice.check': 'Comprobar',
  'practice.grammarReference': 'Referencia gramatical',
}
