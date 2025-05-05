class Generator {

    latim () {
        const words = [
            'condimentum', 'odio', 'labore', 'magnum', 
            'gravida', 'lux', 'fortuna', 'via', 'vincere', 
            'bellum', 'pacem', 'veritas', 'arbor', 'anima', 'vox', 
            'fides', 'gladius', 'caelum', 'sed', 'ad', 'ignis', 'orbis', 
            'corpus', 'oculus', 'sanguis', 'mare', 'natura', 'culex', 'avis',
            'saxum', 'lapis', 'arena', 'telum', 'lignum', 'homo', 'error', 'sonus',
            'somnum', 'oris', 'nasus', 'malum', 'pullum', 'caeruleum', 'album',
            'nero', 'felix', 'iratus', 'nihil'

        ];
        const wordsOutput = [];

        for(let i = 1; i <= 50; i++){
           wordsOutput.push(words[Math.floor(Math.random() * words.length)]);
        }

        return wordsOutput.join(" ");
    }

    greek () {
        const words = [
            "ἀγάπη", "ἄνθρωπος", "βασιλεύς", "βιβλίον", "χάρις", "κόσμος",
            "δῆμος", "δόξα", "δύναμις", "εἰρήνη", "ἐκκλησία", "ἐλπίς",
            "ἦθος", "γῆ", "γνῶσις", "γράφω", "ὁδός", "ἰδέα",
            "λόγος", "μακάριος", "μάρτυς", "μετάνοια", "νοῦς", "οἶκος",
            "ὄνομα", "παιδίον", "παῖς", "παράκλητος", "πάθος", "φιλέω",
            "φόβος", "πνεῦμα", "ποιέω", "ψυχή", "σάρξ", "σωτήρ",
            "σταυρός", "τέχνη", "θεός", "τιμή", "λόγος", "χαρά",
            "ζωή", "ῥῆμα", "κρίσις", "κελεύω", "ἔργον", "ἄρχω",
            "χώρα", "θέλημα"
          ];
          const wordsOutput = [];

          for(let i = 1; i <= 50; i++){
             wordsOutput.push(words[Math.floor(Math.random() * words.length)]);
          }
  
          return wordsOutput.join(" ");
    }

    hebraic () {
        const words = [
            "אָהֲבָה", "שָׁלוֹם", "אֱלֹהִים", "תּוֹרָה", "דָּבָר",
            "נְבִיא", "אֶרֶץ", "עַם", "מֶלֶךְ", "אֵשׁ",
            "עֵץ", "שָׁמַיִם", "יָד", "לֵב", "חַיִּים",
            "בַּיִת", "דֶּרֶךְ", "עֵין", "רוּחַ", "אֱמוּנָה",
            "תִּקְוָה", "אֹור", "אֶחָד", "כֹּהֵן", "נֶפֶשׁ",
            "אִישׁ", "אִשָּׁה", "תַּלְמִיד", "כֶּסֶף", "זָהָב",
            "חָכְמָה", "יִרְאָה", "צֶדֶק", "עָוֹן", "תְּשׁוּבָה",
            "בְּרִית", "מִצְוָה", "גְּבוּרָה", "גֶּפֶן", "עֲבוֹדָה",
            "שָׂפָה", "סֵפֶר", "מַלְאָךְ", "רַחֲמִים", "תְּפִלָּה",
            "שָׁנָה", "יוֹם", "לַיְלָה", "עוֹלָם", "קָדוֹשׁ"
          ];
          const wordsOutput = [];

          for(let i = 1; i <= 50; i++){
             wordsOutput.push(words[Math.floor(Math.random() * words.length)]);
          }
  
          return wordsOutput.join(" ");
    }

    arabic () {
        const words = [
            "عشق", "زندگی", "دوست", "کتاب", "دانش", 
            "مدرسه", "کار", "خانه", "زمان", "آینده",
            "آسمان", "دریا", "کوه", "گل", "درخت",
            "نور", "خورشید", "ماه", "ستاره", "قلب",
            "امید", "صبر", "آرامش", "خوشبختی", "لبخند",
            "پدر", "مادر", "فرزند", "دوستی", "سلام",
            "خداحافظ", "بله", "نه", "چرا", "زیبا",
            "سفید", "سیاه", "سبز", "آبی", "قرمز",
            "گرم", "سرد", "صبح", "شب", "رویا",
            "حقیقت", "عقل", "احساس", "کلمه", "صدا"
          ];
          const wordsOutput = [];

          for(let i = 1; i <= 50; i++){
             wordsOutput.push(words[Math.floor(Math.random() * words.length)]);
          }
  
          return wordsOutput.join(" ");
    }

    coptic () {
        const words = [
            "ⲙⲉⲣⲓⲧ",   // amor
            "ⲱⲛϩ",     // vida
            "ⲥⲟⲛ",     // irmão
            "ⲧⲉⲛⲟⲩ",   // nossa
            "ⲡⲉⲛⲧⲁⲧϣⲱⲡⲓ", // criador
            "ⲛⲟⲩⲧⲉ",   // Deus
            "ⲥⲟⲧⲉⲣ",   // salvador
            "ⲡⲓⲛⲓⲃ",   // ouro
            "ⲧⲉⲭⲛⲏ",   // arte
            "ⲙⲛⲧⲣⲉ",   // verdade
            "ⲡⲛⲉⲩⲙⲁ",  // espírito
            "ⲡⲟⲣⲛⲓⲁ",  // pecado
            "ⲥⲙⲟⲩ",    // paz
            "ⲧⲁⲓⲟⲩ",   // mãe
            "ⲁⲡⲟⲧⲉ",   // pai
            "ⲙⲁⲣⲓⲁ",   // Maria
            "ⲥⲁϩ",     // ensinamento
            "ⲛⲓⲃⲉⲛ",   // todos
            "ⲧⲁⲙⲓⲉ",   // conhecimento
            "ⲡⲁⲛⲧⲱⲕⲣⲁⲧⲱⲣ", // todo-poderoso
            "ⲉⲩⲣⲱⲙⲉ",  // homem
            "ⲉⲩⲥⲉⲛⲉ",  // mulher
            "ⲧⲙⲏ",     // cidade
            "ⲉⲓⲱⲧ",    // pai (alternativo)
            "ⲕⲁⲕⲉ",    // escuro
            "ⲟⲩⲱϣ",    // luz
            "ⲛⲁϩⲣⲉ",   // bom
            "ⲟⲩⲟⲉⲓⲛ",  // verdadeiro
            "ⲧⲁⲣⲥⲟⲥ",  // Társis
            "ⲫⲣⲁⲛ",    // nome
            "ⲧⲏⲣⲟ",    // porta
            "ⲟⲩⲟⲉⲓⲧ",  // caminho
            "ⲧⲃⲁⲗ",    // oração
            "ⲟⲩⲛⲟⲩϫ",  // céu
            "ⲡⲟⲧⲉ",    // tempo
            "ⲛⲟϭ",     // grande
            "ⲡⲓⲣⲉϥ",   // filho
            "ⲥⲛⲏⲩ",    // irmãos
            "ⲥⲙⲟⲩⲛ",   // bênção
            "ⲧⲱⲃ",     // bom
            "ⲧⲉϥⲥⲁⲃⲉ", // sua sabedoria
            "ⲥⲱⲧⲉⲙ",   // ouvir
            "ⲉⲓ",      // vir
            "ⲧⲁⲉⲓⲟ",   // meu nome
            "ⲛⲁⲓ",     // tenha misericórdia
            "ⲥⲉⲙⲛ",    // forte
            "ⲧⲟⲧⲉ",    // então
            "ⲧⲏ",      // terra
            "ⲟⲩⲟϫ",    // sagrado
            "ⲡⲁⲣⲁⲇⲓⲥⲟⲥ" // paraíso
          ];
          const wordsOutput = [];

          for(let i = 1; i <= 50; i++){
             wordsOutput.push(words[Math.floor(Math.random() * words.length)]);
          }
  
          return wordsOutput.join(" ");
    }

    cyrilic () {
        const words = [
            "любовь", "жизнь", "друг", "семья", "дом",
            "работа", "время", "надежда", "мир", "радость",
            "сердце", "правда", "свет", "тень", "мама",
            "папа", "ребёнок", "учитель", "школа", "книга",
            "город", "страна", "язык", "мысль", "вера",
            "мечта", "путь", "дорога", "небо", "земля",
            "вода", "огонь", "дождь", "снег", "лес",
            "цветок", "звезда", "луна", "солнце", "вопрос",
            "ответ", "глаз", "рука", "голова", "знание",
            "наука", "душа", "смех", "слово", "тишина"
          ];
          const wordsOutput = [];

          for(let i = 1; i <= 50; i++){
             wordsOutput.push(words[Math.floor(Math.random() * words.length)]);
          }
  
          return wordsOutput.join(" ");
    }
}

const generator = new Generator();
export { generator };
