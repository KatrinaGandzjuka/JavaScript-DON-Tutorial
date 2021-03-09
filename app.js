var bht = document.querySelectorAll('#book-list ul li');

Array.from(listItems).forEach(function(bht){
  bht.addEventListener('click', (e) => {

    const li = e.target.parentElement;
    li.parentNode.removeChild(li);

  });
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Navigation to', e.target.textContent, 'was prevented');
});