function addComment() {
  const commentInput = document.getElementById('commentInput');
  const commentText = commentInput.value;
  
  if (commentText !== '') {
      const commentList = document.getElementById('commentList');
      const newComment = document.createElement('li');
      newComment.innerText = commentText;
      commentList.appendChild(newComment);
      
      saveComment(commentText);
      
      commentInput.value = '';
  } else {
      alert('Введите комментарий');
  }
}

function saveComment(comment) {
  const comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
  comments.push(comment);
  localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
  const comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
  const commentList = document.getElementById('commentList');
  
  comments.forEach(function(comment) {
      const newComment = document.createElement('li');
      newComment.innerText = comment;
      commentList.appendChild(newComment);
  });
}

window.onload = function() {
  loadComments();
}






let currentSlide = 1;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    currentSlide++;
    if (currentSlide > slides.length) {
        currentSlide = 1;
    }
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 1) {
        currentSlide = slides.length;
    }
    showSlide(currentSlide);
}

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[n - 1].style.display = 'block';
}