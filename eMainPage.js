document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.getElementById("message");
  const messageContainer = document.getElementById("message-container");
  const resetButton = document.getElementById("reset-conversation");
  resetButton.addEventListener("click", resetMessages);
  var isInputDisabled = false;
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

  var keyIndex = 0;

  function elizaProcessing(userInput) {
    const words = userInput.replace(/[,.!?]/g, "").split(" ");
    let priority = -1;
    //let keyIndex = 0;
    let triggerWord = "";
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      //0 | [["przepraszam", "sory", "sorki", "wybacz"],
      //1 | 0,
      //2 |  [
      //  |    [
      //  |     "*",
      //  |     ElizaSorryResponse
      //  |    ]
      //  |  ],
      //  |],

      for (let keywordRecord in elizaKeywords) {
        for (let keyword in elizaKeywords[keywordRecord][0]) {
          if (elizaKeywords[keywordRecord][0][keyword] == word) {
            if (elizaKeywords[keywordRecord][1] > priority) {
              priority = elizaKeywords[keywordRecord][1];
              keyIndex = keywordRecord;
              triggerWord = elizaKeywords[keywordRecord][0][keyword];
            }
          }
        }
      }
    }

    let x = elizaKeywords[keyIndex][2].length;

    if (x == 1) {
      //Change reflections in response message
      appendElizaMessage(randomResponse(0));
    } else {
      for (let i in elizaKeywords[keyIndex][2]) {
        const str = elizaKeywords[keyIndex][2][i][0];
        const words = str.split("*");

        if (words[0] == ".") {
          appendElizaMessage(randomResponse(i));
          break;
        }

        const index = userInput.toLowerCase().indexOf(words[0]);

        if (index == -1) {
          continue;
        }

        if (words[1] == ">") {
          var slicedText = userInput.slice(index + words[0].length + 1);
          appendElizaMessage(randomResponse(i) + " " + slicedText);
        } else if (words[1] == "<") {
          var slicedText = userInput.slice(0, index);
          appendElizaMessage(slicedText + " " + randomResponse(i));
        }

        break;
      }
    }
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
  }

  function appendElizaMessage(message) {
    message = pronounReflection(message);
    const elizaMessageDiv = document.createElement("div");
    elizaMessageDiv.className = "system-message fade-in";
    elizaMessageDiv.innerHTML = `
            <p><span>Eliza: </span>${message}</p>
        `;
    messageContainer.appendChild(elizaMessageDiv);
  }

  function scrollToBottom() {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }

  function resetMessages() {
    messageContainer.innerHTML = "";
    appendElizaMessage(
      ElizaHelloResponse[
        Math.floor(Math.random() * ElizaHelloResponse.length)
      ] +
        ", " +
        elizaStart[Math.floor(Math.random() * elizaStart.length)]
    );
  }
});
