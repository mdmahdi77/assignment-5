const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", ()=>{
    let searchInputTxt = document.getElementById("searchInput").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))

    const displayMeal = meals => {
        let mealsDiv = document.getElementById("meals");
    meals.forEach(meal => {
        let mealDiv = document.createElement("div");
        mealDiv.className = "meal";
        
        let mealInfo = `
        <img class="rounded" src="${meal.strMealThumb}">
        <h3 class="mealName">${meal.strMeal}</h3>
        <button class="btn btn-info" onclick="displayMealDetails('${meal.strMeal}')">Details</button>
        `;
        mealDiv.innerHTML = mealInfo;
         mealsDiv.appendChild(mealDiv);
    });

    };
    document.getElementById("searchInput").value = '';
})


const displayMealDetails = meal =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then(res => res.json())
    .then(data => renderMealDetails(data.meals[0]))
}


const renderMealDetails = meal =>{
    let mealDetailDiv = document.getElementById("mealDetails");
    mealDetailDiv.innerHTML = `
    <img class="rounded" src="${meal.strMealThumb}">
    <h3 class="mealDetails">${meal.strMeal}</h3>
    <h4 class="ingredients"> Ingredients </h4>
    <h6 class="ingredientItem"><span>Meal Category:</span> ${meal.strCategory}</h6>
    <h6 class="ingredientItem"><span>Meal Area:</span> ${meal.strArea}</h6>
    <h6 class="ingredientItem"><span>IngredientItem-One: </span> ${meal.strIngredient1}</h6>
    <h6 class="ingredientItem"><span>IngredientItem-Two: </span> ${meal.strIngredient2}</h6>
    <h6 class="ingredientItem"><span>IngredientItem-Three: </span> ${meal.strIngredient3}</h6>
    <h6 class="ingredientItem"><span>IngredientItem-Four: </span> ${meal.strIngredient4}</h6>
    <h6 class="ingredientItem"><span>IngredientItem-Five: </span> ${meal.strIngredient5}</h6>
    <h6 class="ingredientItem"><span>IngredientItem-Seven: </span> ${meal.strIngredient6}</h6>
    <h6 class="ingredientItem"><span>IngredientItem-Eight: </span> ${meal.strIngredient7}</h6>
    `
}



{/* <button onclick="displayMealDetails('${meal.strMeal}')">Details</button> */}