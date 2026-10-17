import type { MessageKey } from './en'

// इंटरफ़ेस का हिंदी अनुवाद। कुंजियाँ और नियम en.ts में देखें: एक कुंजी यानी एक पूरा
// वाक्य, मान के अंदर कोई मार्कअप नहीं, और संख्या के साथ गिने जाने वाली संज्ञा नहीं।
//
// `Partial` जान-बूझकर है: छूटी हुई कुंजी चुपचाप अंग्रेज़ी पर लौट जाती है, इसलिए
// अधूरा अनुवाद भी सुरक्षित है।
//
// शैली: सम्मानसूचक «आप», वाक्य के अंत में दंड (।), उद्धरण “ ”। तकनीकी शब्दों में वही
// उधार लिए शब्द रखे गए हैं जो हिंदी सॉफ़्टवेयर में आम हैं (सेटिंग्स, टैब, फ़ाइल)।
export const hi: Partial<Record<MessageKey, string>> = {
  // सेटिंग्स — पेज का ढाँचा
  'settings.menu': 'सेटिंग्स मेन्यू',
  'settings.brand': 'सेटिंग्स',
  'settings.tab.main': 'मुख्य सेटिंग्स',
  'settings.tab.smart': 'स्मार्ट वाक्य',
  'settings.tab.patchNotes': 'नया क्या है',

  // मुख्य सेटिंग्स — सामान्य
  'group.general': 'सामान्य',

  'lang.title': 'अनुवाद की भाषा',
  'lang.description': 'शब्दों और वाक्यों का अनुवाद इसी भाषा में होगा।',
  'lang.select': 'अनुवाद की भाषा चुनें',

  'shortcuts.title': 'साइट शॉर्टकट',
  'shortcuts.description': 'नए टैब में बाईं ओर एक पट्टी में आपके बुकमार्क दिखाएँ।',

  'background.title': 'पृष्ठभूमि',
  'background.description': 'नए टैब की पृष्ठभूमि की तस्वीर।',
  'background.none': 'कोई नहीं',
  'background.custom': 'अपनी तस्वीर',
  'background.urlPlaceholder': 'तस्वीर का पता डालें',
  'background.or': 'या',
  'background.chooseFile': 'कंप्यूटर से फ़ाइल चुनें',

  'interface.title': 'इंटरफ़ेस की भाषा',
  'interface.description': 'LingoTab के अपने बटनों और लेबल की भाषा। “स्वतः” चुनने पर यह अनुवाद की भाषा के साथ चलती है।',
  'interface.select': 'इंटरफ़ेस की भाषा चुनें',
  'interface.auto': 'स्वतः',

  'theme.title': 'थीम',
  'theme.description': 'हल्का या गहरा रूप।',
  'theme.switch': 'थीम बदलें',
  'theme.dark': 'गहरा',
  'theme.light': 'हल्का',

  'dictionary.title': 'शब्दकोश का स्रोत',
  'dictionary.description': 'शब्दों के अर्थ और उच्चारण कहाँ से आते हैं। “स्वतः” पहले मुख्य स्रोत आज़माता है और वह न मिलने पर चुपचाप दूसरे पर चला जाता है।',
  'dictionary.select': 'शब्दकोश का स्रोत चुनें',
  'dictionary.auto': 'स्वतः',

  // मुख्य सेटिंग्स — शब्दावली
  'group.vocabulary': 'शब्दावली',
  'vocab.title': 'शब्दावली सूचियाँ',
  'vocab.description': 'नए शब्द किन सूचियों से लिए जाएँ।',
  'vocab.learningOnly': 'सिर्फ़ वे शब्द जो सीख रहे हैं',
  'vocab.learningOnlyHint': '(सिर्फ़ सहेजे गए शब्द दिखाएँ)',

  // मुख्य सेटिंग्स — अनुवाद और दोहराव
  'group.translationReview': 'अनुवाद और दोहराव',

  'translation.title': 'अनुवाद छिपाएँ',
  'translation.description': 'अनुवाद “दिखाएँ” बटन के पीछे छिपा रहेगा, ताकि आप पहले खुद को परख सकें।',

  'repetition.title': 'सीखे हुए शब्दों का दोहराव',
  'repetition.description': 'बीच-बीच में कोई ऐसा शब्द दिखाता है जो आप पहले सीख चुके हैं, ताकि वह भूले नहीं।',
  'repetition.select': 'दोहराव की दर चुनें',
  'repetition.off': 'बंद',
  // हिंदी में यहाँ संज्ञा का रूप नहीं बदलता। कुंजियाँ फिर भी अलग-अलग हैं, क्योंकि
  // स्लाव भाषाओं को इनकी ज़रूरत है।
  'repetition.every1': 'हर शब्द के बाद',
  'repetition.every2': 'हर 2 शब्द के बाद',
  'repetition.every3': 'हर 3 शब्द के बाद',
  'repetition.every4': 'हर 4 शब्द के बाद',
  'repetition.every5': 'हर 5 शब्द के बाद',
  'repetition.every10': 'हर 10 शब्द के बाद',
  'repetition.every20': 'हर 20 शब्द के बाद',

  // मुख्य सेटिंग्स — आपकी सूचियाँ
  'group.yourWordLists': 'आपकी सूचियाँ',
  'wordLists.title': 'इंपोर्ट और एक्सपोर्ट',
  'wordLists.description': 'अपनी शब्द सूचियाँ फ़ाइल में सहेजें या फ़ाइल से वापस लाएँ।',
  'wordLists.learning': 'सीख रहे',
  'wordLists.learned': 'सीखे हुए',
  'wordLists.export': 'एक्सपोर्ट',
  'wordLists.import': 'इंपोर्ट',

  // मुख्य सेटिंग्स — छिपाए गए शब्द
  'group.ignoredWords': 'छिपाए गए शब्द',
  'ignored.description': 'छिपाए गए शब्द नए टैब पर नहीं आते। सूची से हटाने पर वे वापस आ जाएँगे।',
  'ignored.empty': 'किसी शब्द पर यह आइकन दबाएँ, ताकि वह नए टैब पर न दिखे।',

  // साझा शब्द सूची
  'list.search': 'खोजें',
  'list.empty': 'अभी कुछ नहीं है',
  'list.noMatch': 'कुछ नहीं मिला',
  'list.remove': 'सूची से हटाएँ',
  'list.sort.oldest': 'क्रम: पहले पुराने',
  'list.sort.newest': 'क्रम: पहले नए',
  // शब्द अंग्रेज़ी के हैं, इसलिए अक्षर रोमन ही रहते हैं।
  'list.sort.aToZ': 'क्रम: A से Z',
  'list.sort.zToA': 'क्रम: Z से A',

  // इंपोर्ट विंडो
  'import.ignored.title': 'छिपाए गए शब्द इंपोर्ट करें',
  'import.ignored.subtitle': 'टेक्स्ट फ़ाइल से छिपाए गए शब्दों की सूची में शब्द जोड़ें।',
  'import.learning.title': 'सीखे जा रहे शब्द इंपोर्ट करें',
  'import.learning.subtitle': 'टेक्स्ट फ़ाइल से “सीख रहे” सूची में शब्द जोड़ें।',
  'import.learned.title': 'सीखे हुए शब्द इंपोर्ट करें',
  'import.learned.subtitle': 'टेक्स्ट फ़ाइल से “सीखे हुए” सूची में शब्द जोड़ें।',
  'import.requirements': 'फ़ाइल की शर्तें',
  'import.req.matching': 'मिलान: सिर्फ़ वही शब्द जो LingoTab की शब्दावली सूचियों में हैं',
  'import.req.separators': 'विभाजक: स्पेस, टैब, कॉमा या नई पंक्ति',
  'import.req.length': 'शब्द की लंबाई: 30 अक्षर तक',
  'import.req.lowercase': 'सभी शब्द छोटे अक्षरों में बदल दिए जाते हैं',
  'import.req.format': 'फ़ाइल का प्रारूप: सादा टेक्स्ट (.txt)',
  'import.found': 'मिले शब्द:',
  'import.none': 'इस फ़ाइल में कोई शब्द नहीं मिला। कोई दूसरी आज़माएँ।',
  'import.readError': 'यह फ़ाइल पढ़ी नहीं जा सकी। देख लें कि यह सादा टेक्स्ट फ़ाइल है, फिर दोबारा कोशिश करें।',
  'import.cancel': 'रद्द करें',
  'import.confirm': 'इंपोर्ट करें',
  'wordLists.importJson': 'अनुवाद के साथ इम्पोर्ट (JSON)',
  'wordLists.exportJson': 'अनुवाद के साथ एक्सपोर्ट (JSON)',
  'import.json.title': 'अनुवाद के साथ शब्द इम्पोर्ट करें',
  'import.json.subtitle': '.json फ़ाइल से अपने अनुवाद वाले शब्द "सीख रहे" में जोड़ें। फ़ाइल का अनुवाद आपके मौजूदा अनुवाद की जगह लेगा।',
  'import.json.invalid': 'यह मान्य LingoTab शब्द फ़ाइल नहीं है। जाँचें कि यह सही फ़ॉर्मैट में JSON है।',
  'import.json.newWords': 'नए शब्द:',
  'import.json.translations': 'अनुवाद:',
  'import.json.replaced': 'आपके अनुवाद बदलेंगे:',
  'import.json.skipped': 'छोड़े गए (एक शब्द नहीं):',
  'aiPrompt.title': 'AI से अपने शब्दों का अनुवाद करें',
  'aiPrompt.description': 'एक तैयार प्रॉम्प्ट कॉपी करें, जिसमें "सीख रहे" के वे शब्द पहले से हैं जिनका आपका अपना अनुवाद नहीं है। इसे ChatGPT, Claude या किसी अन्य AI चैट में पेस्ट करें, जवाब को .json फ़ाइल के रूप में सहेजें और ऊपर "अनुवाद के साथ इम्पोर्ट (JSON)" से इम्पोर्ट करें।',
  'aiPrompt.wordsCount': 'आपके अनुवाद के बिना शब्द:',
  'aiPrompt.copy': 'प्रॉम्प्ट कॉपी करें',
  'aiPrompt.copied': 'कॉपी हो गया!',
  'file.select': 'फ़ाइल चुनें',

  // स्मार्ट वाक्य — सामान्य
  'smart.enable.title': 'स्मार्ट वाक्य',
  'smart.enable.description': 'अलग-अलग शब्द रटने के बजाय नए टैब पर वाक्य बनाने का अभ्यास करें।',
  'smart.hints.title': 'संकेत',
  'smart.hints.description': 'हर वाक्य के साथ विकल्पों वाला एक व्याकरण प्रश्न जोड़ें।',
  'smart.mix.title': 'शब्द और वाक्य बारी-बारी से',
  'smart.mix.description': 'अकेले शब्द और वाक्य अभ्यास बारी-बारी से दिखाएँ।',
  'smart.wordsPer.title': 'हर वाक्य पर शब्द',
  'smart.wordsPer.description': 'अगला वाक्य आने से पहले कितने शब्द दिखाए जाएँ।',

  // स्मार्ट वाक्य — वाक्य सेट
  'group.sentencePack': 'वाक्य सेट',
  'smart.builtIn.title': 'अंतर्निहित सेट',
  'smart.builtIn.description': 'LingoTab के साथ आने वाला वाक्य सेट, जो पहले से आपकी भाषा में अनूदित है।',
  'smart.create.title': 'अपना बनाएँ',
  'smart.create.description': 'तैयार प्रॉम्प्ट कॉपी करके किसी भी AI चैट में डालें। वह कुछ सवाल पूछेगा और एक फ़ाइल देगा, जिसे नीचे इंपोर्ट किया जा सकता है।',
  'smart.create.copy': 'प्रॉम्प्ट कॉपी करें',
  'smart.create.copied': 'कॉपी हो गया',
  'smart.import.title': 'सेट इंपोर्ट करें',
  'smart.import.description': 'फ़ाइल से वाक्य सेट लोड करें।',
  'smart.import.choose': 'फ़ाइल चुनें',
  'smart.import.change': 'फ़ाइल बदलें',
  'smart.preview.title': 'झलक',
  'smart.preview.description': 'नीचे दिए वाक्य देख लें। इस सेट का इस्तेमाल शुरू करने के लिए स्वीकार करें, या इसे छोड़ दें।',
  'smart.preview.accept': 'स्वीकार करें',
  'smart.preview.discard': 'छोड़ दें',

  // नया टैब — दिखाने वाले बटन
  'word.showWord': 'शब्द दिखाएँ',
  'word.showTranslation': 'अनुवाद दिखाएँ',

  // नया टैब — खाली स्क्रीन और त्रुटियाँ
  'common.settings': 'सेटिंग्स',
  'empty.noLists.title': 'कोई सूची नहीं चुनी गई',
  'empty.noLists.description': 'शुरू करने के लिए कम से कम एक शब्दावली सूची चुनें।',
  'empty.wordError.message': 'इस शब्द के अर्थ नहीं मिले।',
  'empty.wordError.ignore': 'शब्द छिपाएँ',
  'empty.wordError.newWord': 'दूसरा शब्द',
  'empty.offline.title': 'आप ऑफ़लाइन हैं',
  'empty.offline.description': 'शब्दों के अर्थ लाने के लिए इंटरनेट से जुड़ें।',
  'empty.learnedAll.title': 'वाह!',
  'empty.learnedAll.description': 'आपने अपनी सूचियों के सारे शब्द सीख लिए। बहुत बढ़िया!',
  'empty.noPack': 'अभी कोई वाक्य सेट नहीं है। सेटिंग्स में अंतर्निहित सेट चालू करें या अपना इंपोर्ट करें।',
  'empty.learning': 'किसी शब्द पर यह आइकन दबाएँ, वह यहाँ जुड़ जाएगा।',
  'empty.learned': '“सीख रहे” सूची के किसी शब्द पर यह आइकन दबाएँ, वह यहाँ आ जाएगा।',

  // नया टैब — ऊपर की पट्टी
  'nav.search': 'शब्द खोजें',
  'nav.options': 'सेटिंग्स',
  'nav.inventory': 'सभी शब्द',
  'nav.inventorySubtitle': 'सूचियों के सभी शब्द देखें',
  'nav.history': 'इतिहास',
  'nav.historySubtitle': 'हाल में दिखाए गए शब्द',
  'nav.markedWords': 'चिह्नित शब्द',
  'nav.close': 'बंद करें',

  // नया टैब — शब्द पर कार्रवाई
  'action.ignore': 'शब्द छिपाएँ',
  'action.markLearning': '“सीख रहे” सूची में डालें',
  'action.markLearned': '“सीखे हुए” सूची में डालें',
  'action.listen': 'सुनें',
  'action.next': 'आगे',
  'repetitionBlock.title': 'सीखे हुए शब्द का दोहराव',

  // नया टैब — साइट शॉर्टकट
  'shortcut.add': 'शॉर्टकट जोड़ें',
  'shortcut.edit': 'शॉर्टकट बदलें',
  'shortcut.remove': 'हटाएँ',
  'shortcut.name': 'नाम',
  'shortcut.url': 'पता',
  'shortcut.nameDuplicated': 'यह नाम पहले से मौजूद है।',
  'shortcut.cancel': 'रद्द करें',
  'shortcut.done': 'हो गया',
  'action.editTranslation': 'अनुवाद बदलें',
  'editWord.title': 'शब्द बदलें',
  'editWord.word': 'शब्द',
  'editWord.translation': 'अनुवाद',
  'editWord.translationPlaceholder': 'स्वचालित अनुवाद के लिए खाली छोड़ें',
  'editWord.invalidWord': 'एक ही शब्द, बिना स्पेस या कॉमा के।',
  'editWord.duplicateWord': 'यह शब्द पहले से सूची में है।',
  'editWord.addTitle': 'शब्द जोड़ें',
  'editWord.translate': 'स्वचालित अनुवाद करें',
  'editWord.translateFailed': 'स्वचालित अनुवाद उपलब्ध नहीं है — कृपया खुद लिखें।',
  'editWord.movedFromLearned': 'यह शब्द "सीखे हुए" से "सीख रहे" में चला जाएगा।',
  'editWord.movedFromIgnored': 'यह शब्द अनदेखे शब्दों से "सीख रहे" में चला जाएगा।',
  'list.sort.ownFirst': 'क्रम: पहले मेरे अनुवाद वाले',
  'word.ownTranslation': 'आपका अनुवाद',

  // नया टैब — अनुवाद की गड़बड़ी
  'translateFailure.quota.label': 'आज की सीमा पूरी हो गई',
  'translateFailure.quota.message': 'मुफ़्त अनुवाद सेवा की आज की सीमा पूरी हो गई है। जो शब्द पहले खोले जा चुके हैं, उनके सहेजे गए अनुवाद दिखते रहेंगे; नए कल से फिर शुरू होंगे।',
  'translateFailure.unavailable.label': 'अनुवाद उपलब्ध नहीं',
  'translateFailure.unavailable.message': 'अभी किसी भी अनुवाद सेवा से संपर्क नहीं हो पा रहा। जो शब्द पहले खोले जा चुके हैं, उनके सहेजे गए अनुवाद दिखते रहेंगे।',
  'translateFailure.dismiss': 'बंद करें',
  'translateFailure.translating': 'अनुवाद हो रहा है…',
  'translateFailure.tooltipQuota': 'आज की अनुवाद सीमा पूरी हो गई',
  'translateFailure.tooltipUnavailable': 'अनुवाद उपलब्ध नहीं',

  // नया टैब — वाक्य अभ्यास
  'practice.translatePrompt': 'अंग्रेज़ी में अनुवाद करें:',
  'practice.inputPlaceholder': 'यहाँ अंग्रेज़ी वाक्य लिखें',
  'practice.inputLabel': 'अंग्रेज़ी वाक्य लिखें',
  'practice.check': 'जाँचें',
  'practice.grammarReference': 'व्याकरण संदर्भ',
}
