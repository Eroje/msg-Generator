const adjectives = [
    "Amazing", "Brilliant", "Courageous", "Determined", "Empowering",
    "Fierce", "Grateful", "Hopeful", "Inspiring", "Joyful"
  ];
  
  const nouns = [
    "Dream", "Journey", "Adventure", "Opportunity", "Destiny",
    "Purpose", "Success", "Miracle", "Triumph", "Voyage"
  ];
  
  const phrases = [
    "You have the power within you to achieve greatness.",
    "Embrace challenges as stepping stones to success.",
    "Believe in yourself and your dreams.",
    "Your journey is unique and beautiful.",
    "You are capable of achieving your wildest dreams.",
    "Keep moving forward with unwavering determination.",
    "Every day is a new chance to make a difference.",
    "Your potential is limitless, keep pushing forward."
  ];
  
  function generateRandomMessage() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  
    const message = `${randomAdjective} ${randomNoun}: ${randomPhrase}`;
    return message;
  }
  
  const messageElement = document.getElementById('message');
  const generateButton = document.getElementById('generateBtn');
  
  generateButton.addEventListener('click', () => {
    const randomMessage = generateRandomMessage();
    messageElement.textContent = randomMessage;
  });
  
  const initialMessage = generateRandomMessage();
  messageElement.textContent = initialMessage;
  