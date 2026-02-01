console.log('connected')
const categoryContainer= document.getElementById('category-container')


const loadCategory = ()=>{
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res => res.json())
    .then((data) => {
       
    // const categories = data.categories;
    // displayCategory(categories)
    displayCategory(data.categories)
    })
}

const displayCategory =()=>{
    for(cat of data.categories){
        console.log(cat)
    }
    // categories.forEach(cat => {
    //  console.log(cat.category_name)
    // });
}




loadCategory()