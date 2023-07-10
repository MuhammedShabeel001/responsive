const box = document.getElementById('movie');

// 👇️ Change text color on mouseover
box.addEventListener('mouseover', function handleMouseOver() {
  movie.style.color = 'red';
});

// 👇️ Change text color back on mouseout
box.addEventListener('mouseout', function handleMouseOut() {
  movie.style.color = 'black';
});