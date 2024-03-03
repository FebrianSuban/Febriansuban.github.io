
async function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  const chatBox = document.getElementById('chat-box');

  // Append user message to chat box
  const userMessageElement = document.createElement('div');
  userMessageElement.classList.add('chat-message', 'sent');
  userMessageElement.innerHTML = `<p>${userInput}</p>`;
  chatBox.appendChild(userMessageElement);

  // Send user message to ChatGPT API
  const response = await fetch('YOUR_CHATGPT_API_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: userInput })
  });

  const responseData = await response.json();

  // Wait for the response to be received before appending to chat box
  await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second

  // Append ChatGPT response to chat box
  const botMessageElement = document.createElement('div');
  botMessageElement.classList.add('chat-message', 'received');
  botMessageElement.innerHTML = `<p>${responseData.message}</p>`;
  chatBox.appendChild(botMessageElement);
}
