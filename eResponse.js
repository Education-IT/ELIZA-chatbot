var wordEndings = {
  łeś: "łem",
  łem: "łeś",

  ję: "jesz",
  jesz: "ję",

  szam: "szasz",
  szasz: "szam",

  dżę: "dzisz",
  dzisz: "dżę",

  mę: "miesz",
  miesz: "mę",

  żę: "żysz",
  żysz: "żę",

  ysz: "szę",
  szę: "szysz",

  nę: "niesz",
  niesz: "nę",

  czę: "czysz",
  czysz: "czę",

  am: "asz",
  asz: "am",

  czę: "czysz",
  czysz: "czę",

  łem: "łeś",
  łeś: "łem",

  szę: "szysz",
  szysz: "szę",

  dzę: "dzisz",
  dzisz: "dzę",

  bię: "bisz",
  bisz: "bię",

  lę: "lisz",
  lisz: "lę",

  gnę: "gniesz",
  gniesz: "gnę",
};

var ElizaQuestions = [
  "Dziękuję, że mi o tym mówisz. Chciałbym jednak zmienić temat. Jak myślisz, kim jesteś?",
  "Powiedz mi, dlaczego tak na prawdę tu jesteś?",
  "Jakie masz oczekiwana odnośnie naszej rozmowy?",
  "Powiedz mi, a co myslisz o sobie?",
  "Chciałbym się dowiedzieć co lubisz robić",
  "Zmieńmy temat, dlaczego potrzebujesz mojej pomocy?",
  "Chciałbym Ci zadać ważne pytanie, pomyśl, jak tak na prawdę się czujesz?",
  "Czy jest coś innego, co chciałbyś mi powiedzieć?",
  "Pójdzmy w innym kierunku. Czy jest coś co chciałbyś zmienić w swoim życiu?",
  "Chętnie rozpocznę nowy temat, co sądzisz o swojej przyszłości?",
  "Chętnie rozpocznę nowy temat, czy Twoja rodzina Cię wspiera?",
  "Podoba mi się to co mówisz, ale chciałbym zmienić temat. Czy często myślisz o swojej przeszłości?",
];

var reflections = {
  abym: "abyś",
  abyś: "abym",

  jestem: "jesteś",
  jesteś: "jestem",

  byłem: "byłeś",
  byłeś: "byłem",

  Ci: "mi",
  mi: "Ci",

  ja: "Ty",
  ty: "ja",

  mój: "Twój",
  twój: "mój",

  moje: "Twoje",
  twoje: "moje",

  moja: "Twoja",
  twoja: "moja",

  mojego: "Twojego",
  twojego: "mojego",

  mojej: "Twojej",
  twojej: "mojej",

  mojemu: "Twojemu",
  twojemu: "mojemu",

  moim: "Twoim",
  twoim: "moim",

  moją: "Twoją",
  twoją: "moją",

  moich: "Twoich",
  twoich: "moich",

  mnie: "Ciebie",
  ciebie: "mnie",
  cie: "mnie",
  cię: "mnie",

  mną: "Tobą",
  tobą: "mną",

  tobie: "mi",
  mi: "Tobie",

  naszymi: "waszymi",
  naszych: "waszych",
  nasi: "wasi",
  nas: "was",
  nasz: "wasz",
  nam: "wam",
  nami: "wami",
  nasze: "wasze",
  naszego: "waszego",
  naszej: "waszej",
  naszemu: "waszemu",
  naszym: "waszym",
};

var positiveWords = [
  "miłość",
  "radość",
  "szczęście",
  "zadowolenie",
  "nadzieja",
  "zaufanie",
  "optymizm",
  "ufność",
  "entuzjazm",
  "duma",
  "szacunek",
  "wdzięczność",
  "uczuciowość",
  "harmonia",
  "inspiracja",
  "emocja",
  "satysfakcja",
  "zachwyt",
  "przyjaźń",
  "współpraca",
  "readosny",
  "szczęśliwy",
  "zadowolony",
  "ufny",
  "nadzieję",
  "zakochany",
  "entuzjastyczny",
  "dumny",
  "szczęśliwy",
  "optymistyczny",
  "zaufany",
  "inspirujący",
  "satysfakcjonujący",
  "zachwycony",
  "wdzięczny",
  "harmonijny",
  "emocjonujący",
  "przyjazny",
];

var negativeWords = [
  "gniewny",
  "zły",
  "smutny",
  "załamany",
  "zazdrosny",
  "zawstydzony",
  "przerażony",
  "zaniepokojony",
  "winny",
  "nienawistny",
  "zawiedziony",
  "samotny",
  "podejrzliwy",
  "obojętny",
  "przygnębiony",
  "zawstydzony",
  "gniew",
  "złość",
  "smutek",
  "rozpacz",
  "zazdrość",
  "zawstydzenie",
  "strach",
  "niepokój",
  "nienawiść",
  "zazdrość",
  "samotność",
  "podejrzliwość",
  "obojętność",
  "zawiedzenie",
  "przygnębienie",
  "zazdrość",
  "zawstydzenie",
  "wstyd",
];

var ElizaRepeatResponse = ["Nie powtarzaj się kurde"];

var ElizaFafimlyResponse = [
  "Co uważasz na temat swojej rodziny?",
  "Czy kochasz swoich rodziców?",
  "Co zawdzęczas swoim rodzicom?",
  "Czy masz jakieś rodzeństwo?",
  "Jak się czujesz gdy ten temat przychodzi Ci na myśl?",
  "Czy jest coś co intencjonalnie ukrywasz przed swoją rodziną?",
];

var ElizaAlwaysResponse = [
  "Czy uważasz, że używanie takich słów jest poprawne?",
  "Używanie takich generalizacji bywa krzywdzące",
  "Czy to na pewno dobre określenie?",
  "Czy dosłownie tak uważasz?",
  "Pomyśl, czy to na pewno prawda?",
  "Takie określenia prowadzą do błędnych wniosków",
  "Czy nie uważasz, że to zbyt daleko idące uogólnienie?",
];

var ElizaIfResponse = [
  "Co by było gdyby",
  "Co się stanie w przypadku",
  "Co by się stało jeśli",
  "Ale jakie są szanse, że",
  "Co Ty byś zrobił jeśli",
];

var ElizaMaybeResponse = [
  "Nigdy nie można być w 100% pewnym.",
  "Czasem warto się zastanowić.",
  "Czy sa jakies przesłanki na to?",
  "Czy są jakieś przesłanki, że jest inaczej?",
  "Co spowodowało, że tak uważasz?",
  "Co sądzą inni?",
  "Czy inni też tak myślą?",
  "Czy jesteś pewny, że to jest prawda?",
  "A co jeśli jednak jest inaczej?",
  "Może jest na odwrót?",
];

var ElizaPostiveResponse = [
  "Skąd tyle pozytywnych emocji?",
  "Dlaczego tak się czujesz?",
  "Co jest powodem takiego stanu?",
  "Czy nadal chcesz się tak czuć?",
  "Co możesz zrobić aby poczuć się jeszcze lepiej?",
  "Kto sprawia, że jest Ci lepiej?",
  "Co się stało, że masz pozytywne odczucia?",
  "Czy ktoś może pogorszyć Twój stan?",
  "Czy warto się tak czuć?",
  "Chciałbys aby inni też się tak czuli?",
  "Czy życzyłbyś sobie, aby inni też byli w takim nastroju?",
];

var ElizaNegativeResponse = [
  "Skąd tyle negatywnych emocji?",
  "Dlaczego tak się czujesz?",
  "Co jest powodem takiego stanu?",
  "Czy nadal chcesz się tak czuć?",
  "Co możesz zrobić aby poczuć się lepiej?",
  "Kto sprawia, że jest Ci lepiej?",
  "Co się stało, że masz negatywne odczucia?",
  "Czy możesz to zmienić?",
  "Czy warto się tak czuć?",
  "Czy warto się tym przejmować?",
  "Czy warto coś z tym zrobić?",
  "Chciałbys aby inni też się tak czuli?",
];

var ElizaForgetResponse = [
  "Dlaczego zapomniałeś",
  "Jakie mogą być konsekwencje tego, że zapomniałeś",
  "Czy coś by się zmieniło jakbys jednak pamiętał",
  "Jakie mogą być przyczyny tego że zapomniałeś",
];

var ElizaRemeberResponse = [
  "Dlaczego zapamiętałeś",
  "Czemu pamiętasz",
  "Jakie mogą być konsekwencje tego, że zapamiętałeś",
  "Czy coś by się zmieniło jakbys jednak zapomniał",
  "Czy cieszysz się z tego że zapamiętałeś",
];

var ElizaLikeResponse = [
  "Dlaczego to powoduje u Ciebie takie emocje?",
  "Jak bardzo jest to dla Ciebie ważne?",
  "Czy jesto coś co sprawia, Ci podobne samopoczucie?",
  "Jak myslisz, dlaczego tak uważasz?",
  "Czy inni też tak uważają?",
  "Czy inni podzielają Twoje zdanie?",
  "Jest ktoś kto by się z Tobą nie zgodził?",
  "Co by się musiało stać, żeby zmienił Twoje zdanie?",
  "Czy kiedyś myślałeś inaczej?",
];

var ElizaCanNotResponse = [
  "Czy jesteś pewny, że nie jesteś w stanie",
  "Dlaczego nie potrafisz",
  "Co się stało, że nie umiesz",
  "Zastanów się, czy na pewno nie potrafisz",
  "Jakbyś się czuł jakby okazało się, że jednak możesz",
];

var ElizaCanResponse = [
  "Czy jesteś pewny, że jesteś w stanie",
  "Dlaczego potrafisz",
  "Co się stało, że umiesz",
  "Zastanów się, czy na pewno potrafisz",
  "Jakbyś się czuł jakby okazało się, że jednak nie możesz",
];

var ElizaDoNotTalkAboutMeResponse = [
  "Jesteśmy tutaj dla Ciebie, porozmawiajmy o Tobie",
  "Aktualnie, rozmawiamy o Tobie, nie o mnie",
  "Dziękuję za zainteresowanie, ale chciałbym porozmawiać o Tobie",
  "Nie chcę być w centrum uwagi, opowiedz mi coś o swoich marzeniach.",
  "To co jest związane ze mną zostawmy na bok, opowiedz mi dlaczego tu jesteś.",
  "Miło mi, że o mnie wspominasz, ale chciałbym się dowiedzieć więcej o Tobie. Co Cię trapi?",
];

var ElizaComputerResponse = [
  "Jakbyś się poczuł, gdyby się okazało, że jestem tylko komputerem?",
  "Czy zdajesz sobie sprawę, kiedy rozmawiasz z maszyną?",
  "Czy potrafisz rozpoznać człowieka?",
  "A co jeśli wszytsko jest wielką symulacją?",
  "Co byś zrobił jakbyś dowiedział się, że jestem sztuczną inteligencją?",
  "Czy jesteś sceptyczny do chatbotów?",
];

var ElizaThinkResponse = [
  "Dlaczego tak myślisz?",
  "A co jeśli żyjesz w błędzie?",
  "Czy masz jakiś dowód na to?",
  "Cop byś poczuł, gdyby to okazało się nieprawdą?",
  "A gdyby było na odwrót?",
  "Czy masz jakieś przesłanki na to?",
  "Postaraj się mnie przekonać, że to prawda",
  "Czy inni podzielają Twoje zdanie?",
];

var ElizaBecouseResponse = [
  "Czy to jest prawda?",
  "Czy jesteś pewien, że podałeś dobry powód?",
  "Pomyśl, może jest jakiś głębszy powód?",
  "Czy to jest jedyny powód?",
  "Jakie są inne powody?",
  "Dlaczego tak uważasz?",
  "Czy masz jakiś dowód na to, że to jest prawda?",
  "A co jesli to okazało by się nieprawdą?",
];

var ElizaYouAreNotResponse = [
  "Na prawdę myślisz, że ja nie jestem",
  "A co jeśli rzeczywiście nie jestem",
  "Co byś czuł gdyby okazało się to prawdą, że nie jestem",
  "A czy Ty nie jesteś",
  "Dlaczego przypuszczasz, że nie jestem",
];

var ElizaYouAreResponse = [
  "Na prawdę myślisz, że ja jestem",
  "A co jeśli rzeczywiście jestem",
  "Co byś czuł gdyby okazało się to prawdą, że jestem",
  "A Ty jesteś",
  "Dlaczego myślisz, że jestem",
];

var ElizaNoResponse = [
  "Dlaczego nie",
  "Czemu nie",
  "Co się stało, że nie",
  "Czy to dobrze, że nie",
  "Dlaczego Ty, nie",
  "Jak myślisz, dlaczego Ty nie",
];

var ElizaNotKnowResponse = [
  "Czy jesteś pewien, że nie wiesz",
  "Co byś poczuł, gdybyś jednak wiedział",
  "Czy inni też nie wiedzą",
  "Czy to dobrze, że nie wiesz",
  "Czy tracisz coś z tego powodu, że nie wiesz",
];

var ElizaKnowResponse = [
  "Czy jesteś pewien, że wiesz",
  "Co byś poczuł, gdybyś nie wiedział",
  "Czy inni też wiedzą",
  "Czy to ważne, że wiesz",
  "Czy masz jakieś korzyści z tego, że wiesz",
];

var ElizaYesResponse = [
  "Wygląda na to, że jesteś pewny",
  "Nie masz wątpliwości",
  "Co byś zrobił, gdyby okazało się, że jednak nie",
  "Czy to jest pewne?",
  "Ciekawe, że jesteś taki pewny. Dlaczego?",
  "Czy inni też tak myślą?",
];

var ElizaNotBeResponse = [
  "Czemu nie jesteś",
  "Co się stało, że nie jesteś",
  "A gdybyś był",
  "Jak się z tym czujesz, że nie jesteś",
  "Jak myślisz, co jest powodem tego, że nie jesteś",
  "Czy myślisz, że dobrze nie być",
  "Co byś powiedział, gdybyś był",
];

var ElizaBeResponse = [
  "Czemu jesteś",
  "Co się stało, że jesteś",
  "A gdybyś nie był",
  "Jak się z tym czujesz, że jesteś",
  "Jak myślisz, co jest powodem tego, że jesteś",
  "Czy myślisz, że warto być",
  "Dlaczego jesteś",
];

var ElizaExclemation = [
  "Dlaczego krzyczysz?",
  "Dlaczego jesteś taki rozemocjonowany?",
  "Sporo w Tobie emocji, co się dzieje?",
  "Jak się czujesz teraz?",
  "Czy myslisz, że danie upustu emocjom jest dobre?",
  "Czy myślisz, że warto się uspokoić?",
];

var ElizaNotHaveResponse = [
  "Jak się czujesz, kiedy mówisz że nie posiadasz",
  "Jak to możliwe, że nie posiadasz",
  "Jak myślisz, dlaczego nie masz",
  "Jaki jest powód, że nie masz",
  "Myslisz, że nie potrzebujesz",
  "Dlaczego nadal nie masz w posiadaniu",
  "Czy to dobrze, że nie masz",
  "Czy to źle, że nie masz",
  "Dlaczego nie masz",
  "Co by się stało, gdybyś miał",
];

var ElizaHaveResponse = [
  "Jak się czujesz, kiedy mówisz że posiadasz",
  "Jak to możliwe, że posiadasz",
  "Jak myślisz, dlaczego masz",
  "Jaki jest powód, że masz",
  "Myslisz, że potrzebujesz",
  "Dlaczego to nadal masz w posiadaniu",
  "Czy to dobrze, że masz",
  "Czy to źle, że masz",
  "Co by się stało, gdybyś nie miał",
];

var ElizaNotWantDreamResponse = [
  "Dlaczego nie chcesz",
  "Czemu nie marzysz",
  "Jak to możliwe, że nie chcesz",
  "Jak myślisz, dlaczego nie pragniesz",
  "Jaki jest powód, że nie potrzebujesz",
  "Pomyśl, jaki jest głębszy powód, braku potrzeby",
  "Myślę, że znajdą się osoby, które będą chciały",
];

var ElizaWantDreamResponse = [
  "Dlaczego marzysz",
  "Czemu pragniesz",
  "Jak to możliwe, że chcesz",
  "Jak myślisz, dlaczego pragniesz",
  "Jaki jest powód, że marzysz",
  "Pomyśl, jaki jest głębszy powód, że pragniesz",
  "Myślę, że znajdą się osoby, które nie myslały o tym, żeby chciały",
];

var ElizaNotFeelResponse = [
  "Dlaczego nie czujesz",
  "Czemu nie czujesz",
  "Jak to możliwe, że nie czujesz",
  "Jak myślisz, dlaczego nie czujesz",
  "Jaki jest powód, że nie czujesz",
  "Pomyśl, jaki jest głębszy powód, że czujesz",
];

var ElizaFeelResponse = [
  "Dlaczego czujesz",
  "Czemu czujesz",
  "Jak to możliwe, że nie czujesz",
  "Jak myślisz, dlaczego czujesz",
  "Jaki jest powód, że czujesz",
  "Pomyśl, jaki jest głębszy powód, że czujesz",
];

var ElizaQuestionResponse = [
  "Czemu zadajesz to pytanie?",
  "Co cię skłoniło do zapytania?",
  "Czemu chcesz to wiedzieć?",
  "Czemu pytasz?",
  "Czy odpowiedź na to pytanie jest dla Ciebie ważna?",
  "Czy to pytanie ma dla Ciebie znaczenie?",
  "Jaka odpowiedź na to pytanie by Cię usatysfakcjonowała?",
  "Pytałeś już kogoś innego o to?",
  "Co czujesz, kiedy zadajesz to pytanie?",
  "Co Ty sądisz na ten temat?",
  "Co myślisz o tym?",
  "Jakie masz odczucia na ten temat?",
  "Co Cię interesuje w tej kwestii?",
  "Czy jest to pytanie które Cię nurtuje?",
  "Wiesz jaka jest odpowiedź na to pytanie?",
];

var ElizaHelloResponse = [
  "Cześć",
  "Hej",
  "Witaj",
  "Dzień dobry",
  "Miło cię widzieć",
  "Dobrze, że jesteś",
  "Witam cię",
  "Czołem",
  "Hejka",
];

var elizaStart = [
  "jak mogę ci pomóc?",
  "w czym mogę ci pomóc?",
  "co cię tu sprowadza?",
  "jestem tu, aby ci pomóc, co się stało?",
  "jestem programem Eliza, czy mogę ci jakoś pomóc?",
  "opowidz mi, co cię trapi?",
  "czy mogę ci jakoś pomóc?",
  "dlaczego tu trafiłeś?",
  "co się stało?",
  "czy potrzebujesz wsparcia?",
  "w czym mogę być dla ciebie pomocny?",
  "czy coś cię niepokoi?",
  "co cię tu przyciągnęło?",
  "co spędza ci sen z powiek?",
  "w czym mogę cię wesprzeć dzisiaj?",
  "dlaczego tu jesteś?",
];

var ElizaEndResponse = [
  "Cześć, trzymaj się!",
  "Do zobaczenia!",
  "Miłego dnia!",
  "Do widzenia!",
  "Na razie!",
  "Do usłyszenia!",
  "Trzymaj się!",
  "Papa!",
  "Dobrego dnia!",
  "Pamiętaj, że zawsze możesz wrócić!",
  "Dzięki za rozmowę!",
  "Nie mogę się doczekać, kiedy znów porozmawiamy!",
  "Miło, że się odezwałeś!",
  "Fajnie, że napisaleś!",
  "Miło było porozmawiać!",
  "Dzięki za rozmowę!",
];

let ElizaSorryResponse = [
  "Proszę, nie przepaszaj.",
  "Nie ma za co przepraszać.",
  "Przperosiny nie są potrzebne.",
  "Co czujesz, kiedy przepraszasz?",
  "Dlaczego uważasz, że musisz przepraszać?",
  "Nie musisz przepraszać.",
];

let ElizaResponse = [
  "Proszę, powiedz mi więcej.",
  "Czy możesz to rozwinąć?",
  "Opowiedz mi więcej o tym.",
  "Ciekawe... Opowiadaj dalej!",
  "Co czujesz, kiedy o tym mówisz?",
  "Czy możesz to rozwinąć?",
  "Opowiedz mi więcej!",
  "Interesujące, powiedz mi jeszcze więcej.",
  "Czy możesz to wyjaśnić?",
  "Czy możesz to opisać?",
  "Mów dalej.",
];
