const categories = document.querySelectorAll('.item');
console.log('Number of categories: ', categories.length);

const categoriesTitles = categories.forEach(item =>
    console.log("Category:", item.firstElementChild.textContent, 'Elements:', item.lastElementChild.children.length));


