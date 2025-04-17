const emojis = ['🍕', '🎮', '🐶', '🚀', '🎧', '👾', '⚽', '🌟'];
    let cards = [...emojis, ...emojis];

    cards = cards.sort(() => Math.random() - 0.5);

    const gameBoard = document.getElementById('gameBoard');
    let flippedCards = [];
    let matched = 0;

    cards.forEach((emoji, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.emoji = emoji;
      card.dataset.index = index;

      card.addEventListener('click', () => flipCard(card));
      gameBoard.appendChild(card);
    });

    function flipCard(card) {
      if (flippedCards.length === 2 || card.classList.contains('flipped')) return;

      card.textContent = card.dataset.emoji;
      card.classList.add('flipped');
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        const [first, second] = flippedCards;
        if (first.dataset.emoji === second.dataset.emoji) {
          flippedCards = [];
          matched++;
          if (matched === emojis.length) {
            setTimeout(() => alert("🎉 You win!"), 300);
          }
        } else {
          setTimeout(() => {
            first.textContent = '';
            second.textContent = '';
            first.classList.remove('flipped');
            second.classList.remove('flipped');
            flippedCards = [];
          }, 800);
        }
      }
    }