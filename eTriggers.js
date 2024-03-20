let elizaKeywords = [
  [[""], 0, [[".", ElizaResponse]]],
  [["przepraszam", "sory", "sorki", "wybacz"], 0, [[".", ElizaSorryResponse]]],
  [
    ["cześć", "hej", "witaj", "witam", "czołem", "hejka"],
    0,
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
    ],
    0,
    [[".", ElizaEndResponse]],
  ],

  [
    ["czuję", "czuje"],
    1,
    [
      ["nie czuję*>", ["Dlaczego nie czujesz", "Czemu nie czujesz"]],
      ["czuję*>", ["Dlaczego czujesz", "Czemu czujesz"]],
      [".", ["co czujesz", "jak się czujesz"]],
    ],
  ],
];
