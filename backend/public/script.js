document.addEventListener('DOMContentLoaded', function() {
    console.log('Backend Server Home Page Loaded');
    
    // You can add any client-side interactivity here if needed
    // For example, you could add click event listeners to the links
    // to show loading indicators or perform AJAX requests
    
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            console.log(`Clicked on: ${this.textContent}`);
            // You could add more functionality here if needed
        });
    });
});

