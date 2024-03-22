document.addEventListener("DOMContentLoaded", function () {
  var ChatHistory = [];
  var interactions = 1;
  const inputElement = document.getElementById("message");
  const messageContainer = document.getElementById("message-container");
  const resetButton = document.getElementById("reset-conversation");
  resetButton.addEventListener("click", resetMessages);
  var isInputDisabled = false;
  var downloadButton = document.getElementById("print-conversation");
  downloadButton.addEventListener("click", downloadChatHistory);
  resetMessages();

  inputElement.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && !isInputDisabled) {
      const userInput = inputElement.value.trim();
      if (userInput !== "") {
        appendUserMessage(userInput);
        isInputDisabled = true;
        inputElement.value = "";
        scrollToBottom();
        setTimeout(() => {
          appendElizaTiping();
          scrollToBottom();
          setTimeout(() => {
            elizaProcessing(userInput);
            scrollToBottom();
            isInputDisabled = false;
          }, 1500);
        }, 1000);
      }
    }
  });

  var KeyWordHistory = [];
  var keyIndex = 0;

  function elizaProcessing(userInput) {
    keyIndex = 0;
    //const words = userInput.replace(/[,.]/g, "").split(" ");
    //const words = userInput.replace(/[,.!?]/g, "").split(" ");
    const words = userInput.match(/[\węóąśłżźćń]+|[!?]+/g);
    let priority = -1;
    let triggerWord = "";
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();

      for (let keywordRecord in elizaKeywords) {
        for (let keyword in elizaKeywords[keywordRecord][0]) {
          if (elizaKeywords[keywordRecord][0][keyword] == word) {
            if (elizaKeywords[keywordRecord][1] > priority) {
              priority = elizaKeywords[keywordRecord][1];
              keyIndex = keywordRecord;
              triggerWord = elizaKeywords[keywordRecord][0][keyword];
              console.log(interactions + ". Trigger word: " + triggerWord);
            }
          }
        }
      }
    }

    for (let i in elizaKeywords[keyIndex][2]) {
      const str = elizaKeywords[keyIndex][2][i][0];
      const words = str.split("*");
      const ListLen = KeyWordHistory.length;
      if (
        ListLen >= 2 &&
        KeyWordHistory[ListLen - 1] == KeyWordHistory[ListLen - 2] &&
        KeyWordHistory[ListLen - 2] == triggerWord
      ) {
        let randomizer = Math.floor(Math.random() * ElizaQuestions.length);
        appendElizaMessage(ElizaQuestions[randomizer]);
        break;
      }

      if (words[0] == ".") {
        appendElizaMessage(Response(i));
        break;
      }

      const index = userInput
        .replace(/[,.]/g, "")
        .toLowerCase()
        .indexOf(words[0]);

      if (index == -1) {
        continue;
      }

      if (words[1] === ">") {
        const index = userInput.toLowerCase().indexOf(words[0]);
        const startIndex = index + words[0].length;
        const endIndex = userInput.slice(startIndex).search(/[.!?]/);
        const slicedText =
          endIndex === -1
            ? userInput.slice(startIndex)
            : userInput.slice(startIndex, startIndex + endIndex);
        appendElizaMessage(Response(i, 1, slicedText.trim() + "?"));
        break;
      }
    }
    lastUserInput = userInput;
    interactions++;
    KeyWordHistory.push(triggerWord);
  }

  function pronounReflection(input) {
    var words = input.split(" ");

    for (let i in words) {
      if (reflections.hasOwnProperty(words[i])) {
        words[i] = reflections[words[i]];
      }
    }
    return words.join(" ");
  }

  function transformWords(inputString) {
    let words = inputString.split(" ");
    let transformedWords = [];

    for (let word of words) {
      let transformedWord = word;
      for (let ending in wordEndings) {
        if (word.endsWith(ending)) {
          transformedWord = word.slice(0, -ending.length) + wordEndings[ending];
          break;
        }
      }
      transformedWords.push(transformedWord);
    }

    return transformedWords.join(" ");
  }

  function Response(i, mode = 0, userInput = "") {
    var x = randomResponse(i);
    if (mode == 1) {
      x += " " + pronounReflection(transformWords(userInput));
    }
    return x;
  }

  function randomResponse(i) {
    let randomizer = Math.floor(
      Math.random() * elizaKeywords[keyIndex][2][i][1].length
    );
    return elizaKeywords[keyIndex][2][i][1][randomizer];
  }

  function appendElizaTiping() {
    const userMessageDiv = document.createElement("div");
    userMessageDiv.className = "system-message fade-in";
    userMessageDiv.innerHTML = `
            <p><span>...</span></p>
        `;
    messageContainer.appendChild(userMessageDiv);
    setTimeout(() => {
      messageContainer.removeChild(userMessageDiv);
    }, 1500);
  }

  function appendUserMessage(message) {
    const userMessageDiv = document.createElement("div");
    userMessageDiv.className = "user-message fade-in";
    userMessageDiv.innerHTML = `
            <p><span>Ty: </span>${message}</p>
        `;
    messageContainer.appendChild(userMessageDiv);
    ChatHistory.push("User: " + message + "\n");
  }

  function appendElizaMessage(message) {
    const elizaMessageDiv = document.createElement("div");
    elizaMessageDiv.className = "system-message fade-in";
    elizaMessageDiv.innerHTML = `
            <p><span>Eliza: </span>${message}</p>
        `;
    messageContainer.appendChild(elizaMessageDiv);
    ChatHistory.push("Eliza: " + message + "\n");
  }

  function scrollToBottom() {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }

  function resetMessages() {
    lastUserInput = "";
    KeyWordHistory = [];
    messageContainer.innerHTML = "";
    let message =
      ElizaHelloResponse[
        Math.floor(Math.random() * ElizaHelloResponse.length)
      ] +
      ", " +
      elizaStart[Math.floor(Math.random() * elizaStart.length)];
    appendElizaMessage(message);
    ChatHistory = ["Eliza: " + message + "\n"];
  }

  function downloadChatHistory() {
    var chatContent = ChatHistory.join("\n");
    var blob = new Blob([chatContent], { type: "text/plain" });
    var downloadLink = document.createElement("a");
    downloadLink.download = "chat_history.txt";
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);

    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
});
