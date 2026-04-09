// Chatbot functionality
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');

chatbotToggle.addEventListener('click', () => {
    const isVisible = chatbotWindow.style.display === 'block';
    chatbotWindow.style.display = isVisible ? 'none' : 'block';
});

// Form submission functionality
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(orderForm);
    const payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        order: formData.get('order'),
    };

    try {
        await fetch('https://formsubmit.co/Ashu.xyz.in@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        alert('Order submitted successfully!');
        orderForm.reset();
    } catch (error) {
        alert('Failed to submit order. Please try again.');
    }
});