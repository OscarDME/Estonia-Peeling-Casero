// src/lib/copy.js
// Kogu maandumislehe tekstisisu on siin. Komponendid ainult loevad seda.
// Keel: Eesti (et-EE) - Transkreatsioon otseturunduse stiilis, kohandatud Eesti turule.

export const copy = {
  // Reklaamide ja lisapakkumiste tekstid
  campaign: {
    adText: {
      headline: "Ava saladus 🔓",
      body: "💫 Kodune näokoorimine professionaalsete tulemustega!\nKas tead seda säravat ja sametpehmet nahka, mis on tavaliselt vaid ilukliiniku protseduuride tulemus? 😍 Nüüd saad selle saavutada kodus, kulutades vaid sente!\nSee kodune koorimishooldus:\n✨ Ahendab poore\n✨ Kontrollib rasueritust\n✨ Helendab pigmendilaike\n✨ Stimuleerib kollageeni tootmist\n✨ Muudab naha nooruslikuks ja säravaks\n👉 Klõpsa alloleval nupul „Uuri lähemalt“ ja avasta, kuidas muuta oma nahk veatuks ilma tervet varandust kulutamata."
    },
    upsells: [
      {
        title: "👁️ Tumedate silmaaluste kustutaja: Salanipp kottide ja kortsude vastu",
        description: "Suurepärane valik! Sul on juba näonaha uuendamiseks vajalik koorija olemas, aga... silmaümbruse nahk on selle jaoks liiga õhuke ja õrn. Täiuslikust näonahast pole kasu, kui tumedad silmaalused lisavad sulle 10 aastat. Lisa oma tellimusele see salajane juhend 15 lifting-efektiga mikroretseptiga, mis alandavad turseid, kaotavad tumedad laigud ja siluvad „varesejalgu“ vaid 5 minutiga. Noorenda oma ilmet silmapilkselt, ilma igasuguste süstideta!"
      },
      {
        title: "💆‍♀️ „Lifting“ efekt: 5-minutiline pinguldav automassaaž",
        description: "Sinu nahk saab uskumatu salongiväärilise sära, aga... koorimine parandab vaid naha tekstuuri, see ei pingulda lõtvunud lihaseid ega kaota topeltlõuga. Ära lase gravitatsioonil oma välimust rikkuda. Lisa tellimusele see visuaalne juhend Aasia lümfidrenaaži ja näomassaaži saladustega, mis pinguldavad lihaseid ja vormivad lõuajoont. Saavuta visuaalne näoringtõstuse efekt, ilma et peaksid operatsioonisaali astuma!"
      },
      {
        title: "💧 Looduslik „Botox“: Seerum sügavate kortsude täitmiseks",
        description: "Sul on juba olemas valem pooride ahendamiseks ja pindmiste laikude eemaldamiseks, aga... mis saab nendest sügavatest miimikakortsudest otsaesisel ja suu ümber? Koorija uuendab, kuid ei täida. Lisa see salajane retsept ülikontsentreeritud koduse seerumi valmistamiseks, mis jäljendab hüaluroonhappe täitesüstide efekti. Täida kortsud seestpoolt väljapoole ja lukusta niiskus oma uude nahka!"
      },
      {
        title: "✋ Ajamasin: Salajane protokoll kaelale ja kätele",
        description: "Koorija muudab su näo, aga... 95% naistest teeb ühe saatusliku vea: nad unustavad oma kaela ja käed – kaks piirkonda, mis reedavad koheselt sinu tegeliku vanuse. Ära lase tekkida olukorral, kus sul on 30-aastase nägu ja 50-aastase käed. Lisa oma tellimusele see spetsiaalselt välja töötatud valem, mis tihendab, pinguldab ja eemaldab pigmendilaigud dekoltee ja käeselgade õrnalt nahalt. Noorenda oma üldist välimust!"
      }
    ]
  },

  hero: {
    banner: "EKSKLUSIIVSELT NAISTELE, KES SOOVIVAD TAASTADA OMA NAHA KOLLAGEENI",
    timerLabels: { days: "Päeva", hours: "Tundi", minutes: "Minutit", seconds: "Sekundit" },
    timerNote: "Pakkumine aegub",
    eyebrow: "KODUNE VANANEMISVASTANE KOORIMINE",
    headline: {
      line1: "Kodune koorimishooldus",
      highlight: "professionaalsete tulemustega",
      line2: "ilma kodust lahkumata.",
    },
    subheadline:
      "Säästa aega ja raha järeleproovitud ja täiesti ohutu retseptiga. Uuenenud, pingul ja särav nahk kuni 28 päevaga — juba esimesest kasutuskorrast.",
    bullets: [
      "Võtab aega vähem kui 20 minutit ja on lihtne peale kanda",
      "Sisaldab soodsaid ja täiesti ohutuid koostisosi",
      "Garanteerib nähtavad tulemused juba esimesel nädalal",
    ],
    cta: "JAH, SOOVIN TAASTADA OMA NAHA KOLLAGEENI",
    secondaryNote: "14-päevane tingimusteta garantii",
    imageAlt: "Koduse vananemisvastase koorimiskursuse näidis",
  },

  story: {
    eyebrow: "MIDA SINU EEST VARJATAKSE",
    headline: "Dermatoloogid ei taha, et sa seda saladust teaksid.",
    paragraphs: [
      "Aktiivaine, mille eest ilukliinikud kasseerivad sadu eurosid, on seesama, mille saad kodus paari minutiga ise kokku segada, kulutades selleks vaid sente.",
      "See kuulub salitsüülhapete perekonda — tõestatult efektiivne rakkude uuendamisel, kollageeni stimuleerimisel ning kortsude, pigmendilaikude ja naha lõtvuse vähendamisel.",
      "Just seetõttu ei ringle see valem YouTube'is ega sotsiaalmeedias. Tööstus eelistab, et jätkaksid iga kuu kallite konsultatsioonide eest maksmist."
    ],
    highlights: [
      { value: "Alla 1 €", label: "ühe koduse protseduuri hind" },
      { value: "28 päeva", label: "täieliku muutumiseni" },
      { value: "1. kord", label: "et tunda nahka siledamana" },
    ],
    cta: "SOOVIN OMA KOORIJAT KOHE",
    industryImageAlt: "Kosmeetikatööstuse saladus on paljastatud",
    scienceImageAlt: "Salitsüülhappega koorimise teaduslikult tõestatud mõju",
  },

  benefits: {
    eyebrow: "MIDA SU NAHK TUNNEB",
    headline: "Tulemused, mida näed peeglist koheselt.",
    subheadline:
      "Lihtne rutiin, mis on loodud naistele, kes soovivad tervet ja ilusat välimust, ilma kallitest protseduuridest sõltumata.",
    items: [
      {
        title: "Silub nii peeneid kui sügavaid kortse",
        desc: "Stimuleerib loomulikku kollageeni tootmist, et täita naha ebatasasusi.",
      },
      {
        title: "Pinguldab nahka ja taastab sära",
        desc: "Noorendab üldist ilmet, jättes naha sametpehmeks ja säravaks.",
      },
      {
        title: "Helendab pigmendilaike",
        desc: "Kiirendab rakkude uuenemist, et ühtlustada sinu näonaha jumet.",
      },
      {
        title: "Ahendab märgatavalt laienenud poore",
        desc: "Muudab naha puudutamisel täiuslikult siledaks ja puhtaks.",
      },
    ],
  },

  features: {
    eyebrow: "MIDA SA ÕPID",
    headline: "6 moodulit, mis muudavad su nahka 28 päevaga.",
    subheadline: "Konkreetne ja praktiline teave, ilma tühja jututa. Vaatad, rakendad ja näed tulemust.",
    items: [
      {
        n: "01",
        title: "Nende inimeste saladus, kes ei vanane",
        desc: "Kaunilt ja väärikalt vananevate naiste mõtteviis, harjumused ja rutiin.",
      },
      {
        n: "02",
        title: "Professionaalne koorimine sentide eest",
        desc: "Salajane valem kolme kättesaadava koostisosaga: aspiriin, äädikas ja looduslik õli.",
      },
      {
        n: "03",
        title: "Vananemisvastane šott tugeva kollageenilaengu jaoks",
        desc: "Detoks-retsept, mis stimuleerib kollageeni tootmist seestpoolt väljapoole.",
      },
      {
        n: "04",
        title: "„Draakonivere“ protokoll",
        desc: "Kuidas kasutada seda võimsat vaiku kiireks taastumiseks pärast koorimist.",
      },
      {
        n: "05",
        title: "Professionaalsed pealekandmistehnikad",
        desc: "Samm-sammult: kuidas valmistada ja kanda koorijat peale steriilse marliga.",
      },
      {
        n: "06",
        title: "Nähtavad tulemused ja ohutus",
        desc: "Pealekandmise graafik: siledam nahk 7 päevaga, täielik muutus 28 päevaga.",
      },
    ],
  },

  targetAudience: {
    eyebrow: "SEE KURSUS ON SULLE, KUI...",
    headline: "Kas tunned end ära mõnes neist olukordadest?",
    items: [
      {
        title: "Sinu nahk on tuhm, kare ja säratu",
        desc: "Isegi kallite kreemidega näeb su nägu endiselt väsinud ja elutu välja.",
        imageAlt: "Naine tuhmi ja väsinud nahaga",
      },
      {
        title: "Sinu kortsud muutuvad üha sügavamaks",
        desc: "Miimikajooned hakkavad süvenema ja see tekitab sinus ebamugavust.",
        imageAlt: "Sügavate kortsudega nahk",
      },
      {
        title: "Pärast 35. eluaastat on näokontuur lõtvunud",
        desc: "Pinguldus on kadunud ja gravitatsioon hakkab oma tööd tegema.",
        imageAlt: "Lõtvunud näonahk",
      },
      {
        title: "Kallis kosmeetika lihtsalt ei toimi",
        desc: "Oled juba raisanud sadu eurosid toodetele, mis lubavad imesid, aga ei tee midagi.",
        imageAlt: "Kallid, kuid ebaefektiivsed kosmeetikatooted",
      },
    ],
  },

  howItWorks: {
    eyebrow: "SAMM-SAMMULT",
    headline: "Lihtne ja ohutu kodune kasutamine.",
    subheadline:
      "Vajad vaid 20 minutit ja kolme koostisosa, mis on sul tõenäoliselt juba köögikapis olemas.",
    steps: [
      {
        n: "01",
        title: "Valmista segu",
        desc: "Sega koostisosad täpselt sellistes vahekordades nagu videos näidatud. Kõik on kodune ja kättesaadav.",
      },
      {
        n: "02",
        title: "Kanna peale steriilse marliga",
        desc: "Tee näol õrnu liigutusi, järgides professionaalset tehnikat. Ilma valu ja kipituseta.",
      },
      {
        n: "03",
        title: "Naudi tulemusi",
        desc: "Siledam nahk vaid 7 päeva pärast. Ja 28 päeva pärast – täielik muutus: värskus, pinguldus ja sära.",
      },
    ],
    leftImageAlt: "Naine kannab marliga peale kodust koorijat",
    rightImageAlt: "Tulemus enne ja pärast kodust koorimist",
  },

  carouselSection: {
    eyebrow: "TÕELISED TULEMUSED",
    headline: "Päris naised. Päris muutused.",
    subheadline: "Vaata enne-ja-pärast pilte naistest, kes rakendasid seda protokolli kodus.",
    cta: "SOOVIN SAMASUGUSEID TULEMUSI",
  },

  bonuses: {
    badge: "KÕIK HINNAS",
    headline: "Mida saad, kui tellid täna",
    subheadline: "Eluaegne juurdepääs kogu kursusele + eksklusiivsed boonused.",
    items: [
      {
        title: "Juurdepääs ES Video platvormile",
        desc: "Suurim tervise- ja esteetikaplatvorm – hinna sees.",
      },
      {
        title: "Video koorija salajase retseptiga",
        desc: "Täielik valem täpsete proportsioonide ja praktilise demonstratsiooniga.",
      },
      {
        title: "Vananemisvastane kollageenišott",
        desc: "Detoks-joogi retsept, mis tugevdab efekti seestpoolt väljapoole.",
      },
      {
        title: "„Draakonivere“ protokoll",
        desc: "Samm-sammuline video taastumiseks pärast koorimist, kasutades võimsat vaiku.",
      },
      {
        title: "Samm-sammuline juhend (PDF)",
        desc: "Mugav prinditav PDF-materjal, et järgida ohutult iga pealekandmist.",
      },
    ],
  },

  testimonials: {
    eyebrow: "TAGASISIDE",
    headline: "Sa ei pea mind uskuma. Usu neid naisi.",
    items: [
      {
        name: "Maarja",
        role: "Tallinn",
        quote:
          "Kartsin oma nägu ise kodus töödelda. Aga järgisin samme ja erinevus oli nähtav juba esimesel nädalal. Täna olen peeglisse vaadates hoopis teine inimene.",
      },
      {
        name: "Tiina",
        role: "Tartu",
        quote:
          "Viskasin meeletult raha kliinikutesse ja ei suutnud seda enam endale lubada. Kodus teen seda rahulikult, ilma valuta, ja hind on tulemuste kõrval lihtsalt naeruväärne.",
      },
      {
        name: "Sirje",
        role: "Pärnu",
        quote:
          "Sõbrannad küsivad, mida ma oma näoga teinud olen. Laigud on hajunud ja mu nahk on pehme nagu siid. Soovitan kahe käega.",
      },
    ],
    socialBadge: "TÕELINE TAGASISIDE SOTSIAALMEEDIAST",
    socialHeadline: "Päris kommentaarid meie kursusel osalejatelt",
    socialAlt: "Kursusel osalejate tagasiside Instagramis",
  },

  finalCta: {
    badge: "PIIRATUD AJA PAKKUMINE",
    headline: "Alusta täna. 14-päevane garantii.",
    guaranteeText:
      "Kui sa 14 päeva jooksul tulemustesse ei armu, tagastame 100% sinu rahast. Ilma liigsete küsimuste ja bürokraatiata. Kogu risk on minu kanda.",
    bundleHeadline: "Mida saad, kui klõpsad kohe",
    bundleList: [
      "Täielik kursus „Kodune vananemisvastane koorimine“",
      "Vananemisvastane šott tugeva kollageenilaengu jaoks",
      "Taastumisprotokoll „Draakoniveri“",
      "Samm-sammuline juhend PDF-formaadis",
      "Eluaegne juurdepääs ES Video platvormile",
    ],
    regularPriceLabel: "Tavahind",
    regularPrice: "19,90 €",
    offerLabel: "Ainult",
    offerPrice: "9,90 €",
    installments: "Ühekordne makse",
    economy: "Säästad 50%",
    urgencyText: "Pakkumine kehtib ainult täna",
    button: "SOOVIN TAASTADA OMA KOLLAGEENI KOHE",
    secureNote: "100% turvaline makse · Töötleb OrioPay",
    imageAlt: "Koduse vananemisvastase koorimiskursuse näidis",
    guaranteeImageAlt: "14-päevase garantii märk",
  },

  about: {
    eyebrow: "KES SELLE TAGA SEISAB",
    title: "Tunnustatud näohoolduse ja esteetika ekspert",
    name: "Kadri Kask",
    paragraphs: [
      "Kadri Kask on Eesti tunnustatud ekspert näo esteetika ja nahahoolduse alal. Ta on välja töötanud looduslikud protokollid pigmendilaikude, melasma, akne ja juuste väljalangemise raviks, mis on aidanud juba tuhandetel naistel enesekindlust tagasi võita.",
      "Ta on isikliku kliiniku ja dermakosmeetika brändi asutaja. Lisaks juhib ta üht Eesti suurimat tervise- ja ilukanalit sotsiaalmeedias, jõudes sadade tuhandete naisteni.",
      "Tema filosoofia on lihtne: tõelised tulemused rohke hoole ja teaduse abil — ilma et oleksid sõltuvuses ülikallitest protseduuridest või importtoodetest."
    ],
    stats: [
      { value: "Sajad tuhanded", label: "Jälgijad sotsiaalmeedias" },
      { value: "+1 000", label: "Aigatud naist" },
      { value: "Eesti", label: "Nahahoolduse teerajaja" },
    ],
    photoAlt: "Kadri Kask, juhtiv esteetikaekspert Eestis",
  },

  faq: {
    eyebrow: "KORDUMA KIPPUVAD KÜSIMUSED",
    headline: "Kõik, mida pead enne tellimist teadma.",
    items: [
      {
        q: "Mida ma täpsemalt ostan?",
        a: "Sa ostad digitaalse minikursuse „Kodune vananemisvastane koorimine“ koos juurdepääsuga ES Video platvormile. Sisu õpetab sulle täpset valemit, õiget pealekandmist, vananemisvastase šoti retsepti ja ohutusprotokolli.",
      },
      {
        q: "Mis on hinna sees?",
        a: "Video salajase valemiga, üksikasjalik PDF-juhend ja juurdepääs ES Video platvormile, kus leidub lisakursuseid ja materjale.",
      },
      {
        q: "Kuidas ma sisu kätte saan?",
        a: "Kohe pärast edukat makset saad meili lingiga platvormile, kus asuvad video ja PDF-juhend. Kontrolli kindlasti ka rämpsposti (Spam) kausta. Kohaletoimetamine võtab tavaliselt vaid mõne minuti.",
      },
      {
        q: "Kui kaua pärast ostu ma juurdepääsu saan?",
        a: "Kohaletoimetamine on automaatne ja kohene pärast makse kinnitamist — enamasti vähem kui minutiga.",
      },
      {
        q: "Kes tohivad seda kodust koorimist teha?",
        a: "See sobib üle 35-aastastele naistele ja meestele, kes soovivad stimuleerida kollageeni tootmist ning vähendada kortse, laike ja naha tuhmust. Ei soovitata inimestele, kellel on aspiriiniallergia, äärmiselt tundlik nahk või lahtised haavad. Allergia test on enne esimest kasutamist kohustuslik.",
      },
      {
        q: "Kas see tõesti toimib?",
        a: "Jah. Aktiivaine (atsetüülsalitsüülhape) kuulub samasse hapete perekonda, mida kasutatakse kliinikutes rakkude uuendamiseks: see eemaldab surnud naharakkude kihi ja stimuleerib kollageeni. Tulemus on võrreldav pindmise keemilise koorimisega, kuid minimaalse hinna eest.",
      },
      {
        q: "Kuidas on õppetükid esitatud?",
        a: "Videotundide ja informatiivsete tekstide kombinatsioonina, äärmiselt lihtsalt mõistetavas ja otseses formaadis.",
      },
      {
        q: "Kas on olemas rahulolugarantii?",
        a: "Jah. Sul on 14 päeva meetodi testimiseks. Kui sa ei ole rahul, võta lihtsalt ühendust meie klienditoega ja me tagastame 100% summast, ilma ühegi küsimuseta.",
      },
    ],
  },

  closing: {
    eyebrow: "PIIRATUD AJA JOOKSUL",
    headline: "Sinu nahk võib 28 päeva pärast välja näha täiesti teistsugune.",
    body: "Valik on lihtne: jätka raha raiskamist kreemidele, mis ei toimi, või investeeri ühekordselt looduslikku ja praktilisse meetodisse, millel on tingimusteta garantii.",
    cta: "SOOVIN KOHE ALUSTADA",
    timerNote: "Pakkumine aegub",
    timerLabels: { days: "Päeva", hours: "Tundi", minutes: "Minutit", seconds: "Sekundit" },
  },

  footer: {
    brand: "Kadri Kask",
    tagline: "Ilu, mis on loodud teaduse ja hoolega.",
    rights: "Kõik õigused kaitstud.",
    legalLinks: [
      { label: "Privaatsuspoliitika", href: "#" },
      { label: "Kasutustingimused", href: "#" },
    ],
    disclaimer:
      "See sait ei ole seotud Facebooki ega Metaga. Tulemused võivad individuaalselt varieeruda sõltuvalt organismist.",
  },

  pixel: {
    id: "2099946003917342",
  },

  a11y: {
    skipToContent: "Mine sisu juurde",
    faqExpand: "Laienda vastust",
    faqCollapse: "Peida vastus",
    carouselPrev: "Eelmine pilt",
    carouselNext: "Järgmine pilt",
  },

  metadata: {
    title: "Kodune vananemisvastane koorimine | Kadri Kask",
    description:
      "Õpi, kuidas teha kodust koorimist professionaalsete tulemustega. Uuenenud, pingul ja särav nahk kuni 28 päevaga. 14-päevane garantii.",
  },
};