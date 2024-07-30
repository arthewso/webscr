document.addEventListener('DOMContentLoaded', () => {
    const app = new Dino();

    app.component('loginForm', {
        template: '#loginForm',
        methods: {
            submitForm(event) {
                event.preventDefault(); // Prevent the default form submission

                // Retrieve the form data
                const email = document.getElementById('email').value;
                const pin = document.getElementById('pin').value;

                // Simple validation (you can expand this)
                if (email && pin) {
                    // Change This As Needed 
                    window.location.href = 'https://www.reddit.com';
                } else {
                    alert('Please fill in all fields.');
                }
            }
        },
        mounted() {
            // Attach the submit event listener
            this.$el.addEventListener('submit', this.submitForm);
        }
    });

    app.mount('#app');
});
