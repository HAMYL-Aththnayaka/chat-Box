function sendMessage() {
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');
    
    if (input.value.trim() !== '') {
        const message = document.createElement('div');
        message.textContent = input.value;
        messages.appendChild(message);
        input.value = '';
        messages.scrollTop = messages.scrollHeight;
    }
}
