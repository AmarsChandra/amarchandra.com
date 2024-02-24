function navigateTo(project) {
    console.log(`Navigating to ${project}...`);
  }
  
  function sendMessage(event) {
    event.preventDefault();
    const messageInput = document.getElementById('message-input').value.trim();
    
    if (messageInput !== '') {
      appendMessage('me', messageInput);
      document.getElementById('message-input').value = '';
    }
  }
  
  function appendMessage(sender, message) {
    const chatContainer = document.querySelector('.chat-container');
    const chat = document.createElement('div');
    chat.classList.add('chat', sender);
    const button = document.createElement('button');
    button.textContent = message;
    button.setAttribute('disabled', true);
    chat.appendChild(button);
    chatContainer.appendChild(chat);
    scrollToBottom();
  }
  
  function scrollToBottom() {
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

function navigateTo(link) {
    switch(link) {
        case 'project1':
            window.open('https://www.linkedin.com/in/amaramaramar/', '_blank');
            break;
        case 'project2':
            window.open('https://github.com/AmarsChandra', '_blank');
            break;
        case 'project3':
            window.open('mailto:amarchandra135@gmail.com', '_blank');
            break;
        default:
            break;
    }
}