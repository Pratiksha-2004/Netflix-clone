document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');

    // Dummy movie images
    const movies = [
        'https://source.unsplash.com/150x200/?movie,action',
        'https://source.unsplash.com/150x200/?movie,romance',
        'https://source.unsplash.com/150x200/?movie,comedy',
        'https://source.unsplash.com/150x200/?movie,thriller',
        'https://source.unsplash.com/150x200/?movie,drama',
        'https://source.unsplash.com/150x200/?movie,adventure',
    ];

    // Add movie images to the carousel
    movies.forEach(movie => {
        const img = document.createElement('img');
        img.src = movie;
        img.alt = 'Movie Thumbnail';
        carousel.appendChild(img);
    });
});
