document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');

            // Close all other FAQ items
            faqItems.forEach(el => {
                if (el !== item) {
                    el.querySelector('.faq-answer').style.display = 'none';
                    el.querySelector('.faq-question').classList.remove('active');
                }
            });

            // Toggle the display of the answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                question.classList.remove('active');
            } else {
                answer.style.display = 'block';
                question.classList.add('active');

                // Scroll the item into view smoothly
                item.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
