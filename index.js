console.log('connected')
const categoryContainer = document.getElementById('category-container')
const cardContainer = document.getElementById('card-container')
const alltrees = document.getElementById('all-trees')


//load every trees
const loadAllTrees = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json())
        .then(data => {
            const allPlants = data.plants
            displayAllTrees(allPlants)
        })
}
loadAllTrees()

const displayAllTrees = (allPlants) => {
    allPlants.forEach(plant => {
        // console.log(plant.id)
        cardContainer.innerHTML += `
        <div class="card bg-base-100 w-80 shadow-sm mb-10 mx-auto">
                    <figure>
                        <img class="h-[250px] w-[300px]" src="${plant.image}"
                            alt="Shoes" />
                    </figure>
                    <div class="space-y-2 p-3">
                        <h2 onclick="my_modal_1.showModal() class="card-title mt-3">${plant.name}</h2>
                        <p>${plant.description}
                        </p>
                        <div class="flex justify-between">
                        <p class="bg-[#DCFCE7] px-2 rounded-xl">Fruit Tree</p>
                        <p class="plant-price">৳ ${plant.price}</p>
                        </div>
                        
                        <button id=${plant.id} class="btn add-cart-btn bg-[#15803D] text-white w-full">Add To Cart</button>
                        
                    </div>
        `
    })
}
//load in categories---------------

const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then((data) => {

            const categories = data.categories;
            displayCategory(categories)
            // displayCategory(data.categories)
        })
}
loadCategory()
const displayCategory = (categories) => {

    categories.forEach(cat => {
        // console.log(cat)
        categoryContainer.innerHTML += `
        <p id="${cat.id}" class="hover:border-2 border-green-400 cursor-pointer">${cat.category_name}</p>
        `
    });


    categoryContainer.addEventListener('click', (e) => {
        const allP = document.querySelectorAll('p')

        allP.forEach(p => {
            p.classList.remove('bg-[#CFF0DC]')
        })

        if (e.target.localName === "p") {
            // console.log(e.target.id)
            e.target.classList.add('bg-[#CFF0DC]')
            loadTreesByCategory(e.target.id)
        }
    })
}

//load trees by category
const loadTreesByCategory = (categoryId) => {
    // console.log(categoryId)
    fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
        .then(res => res.json())
        .then(data => {
            displayTreeByCategory(data.plants)
        })
        .catch(err => {
            console.log(err)
        })
}


const displayTreeByCategory = (plants) => {
    cardContainer.innerHTML = ''
    plants.forEach(plant => {
        console.log(plant)
        cardContainer.innerHTML += `
                        <div class="card bg-base-100 w-80 shadow-sm mb-10 mx-auto">
                    <figure>
                        <img class="h-[250px] w-[300px]" src="${plant.image}"
                            alt="Shoes" />
                    </figure>
                    <div class="space-y-2 p-3">
                        <h2 onclick="my_modal_1.showModal()  class="card-title mt-3">${plant.name}</h2>
                        <p>${plant.description}
                        </p>
                        <div class="flex justify-between">
                        <p class="bg-[#DCFCE7] px-2 rounded-xl">Fruit Tree</p>
                        <p class="plant-price">৳ ${plant.price}</p>
                        </div>
                        
                        <button id=${plant.id}  class="btn add-cart-btn bg-[#15803D] text-white w-full">Add To Cart</button>
                        
                    </div>
        `
    // const allTreeId =document.getElementById(`${plant.id}`)
    // console.log(allTreeId)
    cardContainer.addEventListener('click', (e) => {
        console.log(e)
    if (e.target.classList.contains('add-cart-btn')) {
        // getContainer.innerHTML=''
        const getContainer = document.getElementById('cart-container')
        getContainer.innerHTML += `
         <div class="bg-[#F0FDF4] mb-2 p-2">
                        <h1>${plant.name}</h1>
                        <p>${plant.price} x 1</p>
                    </div>
        `
    }
})
    })

}








