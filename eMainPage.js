
document.addEventListener('DOMContentLoaded', function() {
 

    const inputElement = document.getElementById('message');
    const messageContainer = document.getElementById('message-container');
    const resetButton = document.getElementById('reset-conversation');
    resetButton.addEventListener('click', resetMessages);
    var isInputDisabled = false;
    resetMessages()
              
    inputElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && !isInputDisabled) {
            const userInput = inputElement.value.trim();
            if (userInput !== '') {
                appendUserMessage(userInput);
                isInputDisabled = true;
                inputElement.value = '';
                scrollToBottom();
                setTimeout(() => {
                    appendElizaTiping();
                    scrollToBottom();
                setTimeout(() => {
                    elizaProcessing(userInput);
                    scrollToBottom();
                    isInputDisabled = false;
                },1500);
            },1000);
            }
        }
    });

    function elizaProcessing(userInput){
        const words = userInput.replace(/[,.?!]/g,'').split(' ');
        
        for (let i = 0; i < words.length; i++) {
            const word = words[i].toLowerCase();
            console.log(word);
            if (word in elizaKeywords){
                console.log(x);
            }
        }
        appendElizaMessage("What the hell are you talking about?");
    }


    function appendElizaTiping() {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'system-message fade-in';
        userMessageDiv.innerHTML = `
            <p><span>...</span></p>
        `;
        messageContainer.appendChild(userMessageDiv);
        setTimeout(() => {
            messageContainer.removeChild(userMessageDiv)
        },1500);
        
    }

    function appendUserMessage(message) {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'user-message fade-in';
        userMessageDiv.innerHTML = `
            <p><span>Ty: </span>${message}</p>
        `;
        messageContainer.appendChild(userMessageDiv);
    }
    
    function appendElizaMessage(message) {
        const elizaMessageDiv = document.createElement('div');
        elizaMessageDiv.className = 'system-message fade-in';
        elizaMessageDiv.innerHTML = `
            <p><span>Eliza: </span>${message}</p>
        `;
        messageContainer.appendChild(elizaMessageDiv);
    }

    function scrollToBottom() {
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }

    function resetMessages() {
        messageContainer.innerHTML = '';
        appendElizaMessage(ElizaHallo[Math.floor(Math.random() * ElizaHallo.length)] + ', ' +elizaStart[Math.floor(Math.random() * elizaStart.length)]);
      
    }
    
    
});
