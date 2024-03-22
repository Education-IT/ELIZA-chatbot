let elizaKeywords = [
  [[""], 0, [[".", ElizaResponse]]],
  [["!"], 1, [[".", ElizaExclemation]]],

  [
    ["kto", "kiedy", "gdzie", "czemu", "dlaczego", "jak", "co", "?"],
    4,
    [[".", ElizaQuestionResponse]],
  ],

  [["przepraszam", "sory", "sorki", "wybacz"], 2, [[".", ElizaSorryResponse]]],

  [positiveWords, 3, [[".", ElizaPostiveResponse]]],

  [negativeWords, 3, [[".", ElizaNegativeResponse]]],

  [
    [
      "cześć",
      "hej",
      "witaj",
      "witam",
      "czołem",
      "hejka",
      "elo",
      "siema",
      "siemanko",
      "hi",
      "hello",
      "hey",
      "yo",
      "helol",
      "bry",
    ],
    1,
    [[".", ElizaHelloResponse]],
  ],
  [
    [
      "papa",
      "zobaczenia",
      "widzenia",
      "usłyszenia",
      "jutra",
      "pa",
      "wychodzę",
      "kończę",
      "koniec",
      "trzymaj",
      "idę",
      "nara",
      "spadam",
      "wyłączam",
      "zamykam",
      "dobranoc",
      "bye",
      "goodbye",
      "see you",
    ],
    1,
    [[".", ElizaEndResponse]],
  ],

  [
    ["czuję", "czuje"],
    4,
    [
      ["nie czuję *>", ElizaNotFeelResponse],
      ["czuję *>", ElizaFeelResponse],
      [
        ".",
        [
          "Czy to ważne?",
          "Jaki jest tego powód?",
          "Co o Tym sądzisz?",
          "Co powiedział by Twój przjaciel?",
        ],
      ],
    ],
  ],

  [
    ["potrzebuję", "chcę", "pragnę", "marzę", "marzy", "oczekuję", "rządam"],
    4,
    [
      ["nie potrzebuję*>", ElizaNotWantDreamResponse],
      ["nie chcę*>", ElizaNotWantDreamResponse],
      ["nie pragnę*>", ElizaNotWantDreamResponse],
      ["nie marzę*>", ElizaNotWantDreamResponse],
      ["nie oczekuję*>", ElizaWantDreamResponse],
      ["marzę *>", ElizaWantDreamResponse],
      ["oczekuję *>", ElizaWantDreamResponse],
      ["marzy mi *>", ElizaWantDreamResponse],
      ["potrzebuję *>", ElizaWantDreamResponse],
      ["chcę *>", ElizaWantDreamResponse],
      ["pragnę *>", ElizaWantDreamResponse],
      [".", ElizaWantDreamResponse],
    ],
  ],

  [
    ["mam", "posiadam"],
    2,
    [
      ["nie mam *>", ElizaNotHaveResponse],
      ["nie posiadam *>", ElizaNotHaveResponse],
      ["mam *>", ElizaHaveResponse],
      ["posiadam *>", ElizaHaveResponse],
      [".", ["I co Ci to daje?", "Czy to ważne?", "Czy to Cię uszczęśliwia?"]],
    ],
  ],

  [
    ["jestem"],
    3,
    [
      ["nie jestem *>", ElizaNotBeResponse],
      ["jestem *>", ElizaBeResponse],
      [
        ".",
        [
          "Co Cię na to naprowadza?",
          "Czy to ważne?",
          "Co to znaczy 'być'?",
          "Czy to Cię uszczęśliwia?",
        ],
      ],
    ],
  ],

  [
    ["wiem"],
    2,
    [
      ["nie wiem *>", ElizaNotKnowResponse],
      ["wiem *>", ElizaKnowResponse],
      [
        ".",
        [
          "Jesteś tego pewny?",
          "Czy jest szansa, że się mylisz?",
          "Co jeśli się mylisz?",
          "Jak się przez to czujesz?",
        ],
      ],
    ],
  ],

  [
    ["jesteś"],
    2,
    [
      ["jesteś *>", ElizaYouAreResponse],
      ["nie jesteś *>", ElizaYouAreNotResponse],
      [
        ".",
        [
          "A co jeśli nie istieję?",
          "Czy to dobrze?",
          "Czy to źle?",
          "Może to nie ma znaczenia?",
          "Myślisz, że to na mnie wpływa?",
        ],
      ],
    ],
  ],

  [
    ["tak", "no", "oczywiście", "jasne", "pewnie"],
    1,
    [[".", ElizaYesResponse]],
  ],

  [
    ["nie"],
    1,
    [
      ["nie *>", ElizaNoResponse],
      [
        ".",
        [
          "Jesteś pewien?",
          "A co jeśli jednak tak?",
          "Jakbyś się czuł, gdyby okazało się inaczej?",
          "Czemu zaprzeczasz?",
        ],
      ],
    ],
  ],

  [
    [
      "ty",
      "twój",
      "twoje",
      "możesz",
      "czujesz",
      "twoja",
      "umiesz",
      "lubisz",
      "kochasz",
      "ciebie",
      "cie",
      "cię",
    ],
    2,
    [[".", ElizaDoNotTalkAboutMeResponse]],
  ],

  [["ponieważ", "bo", "dlatego", "gdyż"], 3, [[".", ElizaBecouseResponse]]],

  [
    ["myślę", "uważam", "sądzę", "twierdzę", "wierzę"],
    4,
    [[".", ElizaThinkResponse]],
  ],

  [
    ["mogę", "umiem", "potrafię", "zrobię"],
    3,
    [
      ["nie mogę*>", ElizaCanNotResponse],
      ["nie umiem*>", ElizaCanNotResponse],
      ["nie potrafię*>", ElizaCanNotResponse],
      ["nie zrobię*>", ElizaCanNotResponse],
      ["mogę *>", ElizaCanResponse],
      ["umiem *>", ElizaCanResponse],
      ["potrafię *>", ElizaCanResponse],
      ["zrobię *>", ElizaCanResponse],
      [
        ".",
        [
          "Czy jesteś pewien?",
          "Jakie to ma znaczenie?",
          "Jakie to generuje emocje?",
        ],
      ],
    ],
  ],

  [
    [
      "komputer",
      "ai",
      "si",
      "maszyna",
      "robot",
      "robotem",
      "komputerem",
      "czatbotem",
      "chatbotem",
      "komputerem",
      "maszyną",
    ],
    2,
    [[".", ElizaComputerResponse]],
  ],

  [
    ["zawsze", "nigdy", "nikt", "każdy", "wszyscy"],
    4,
    [[".", ElizaAlwaysResponse]],
  ],

  [
    ["pamiętam"],
    5,
    [
      ["pamiętam *>", ElizaRemeberResponse],
      [".", ElizaRemeberResponse],
    ],
  ],

  [
    ["zapomniałem"],
    5,
    [
      ["zapomniałem *>", ElizaForgetResponse],
      [".", ElizaForgetResponse],
    ],
  ],

  [
    ["lubię", "podoba", "kocham", "uwielbiam", "cieszy"],
    5,
    [[".", ElizaLikeResponse]],
  ],

  [["może"], 2, [[".", ElizaMaybeResponse]]],

  [
    ["jeśli"],
    3,
    [
      ["jeśli *>", ElizaIfResponse],
      [
        ".",
        [
          "Jeśli co?",
          "Co jeśli?",
          "Mój dalej.",
          "Opowiedz mi więcej.",
          "Proszę kontynuj.",
        ],
      ],
    ],
  ],

  [
    [
      "mama",
      "matka",
      "matula",
      "mami",
      "mamusia",
      "srodzina",
      "familja",
      "rordzeństwo",
      "siosra",
      "siostrzyczka",
      "brat",
      "braciszek",
      "tata",
      "ojciec",
      "ojczulek",
      "tatko",
      "papcio",
    ],
    3,
    [[".", ElizaFafimlyResponse]],
  ],
];
