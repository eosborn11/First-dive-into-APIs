const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = getElementById("meal-details-content");
const recipeCloseBtn = getElementById("recipe-close-btn");


// event listeners
searchBtn.addEventListener("click", getMealList);


// get meal list that matches with the ingredients 
function getMealList(){
    let searchInputTxt = document.getElementById("search-input").value.trim();
    fetch('www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
    then(Response => Response.json ())
    then(data => {
        let html = "";
        if(data.meals){
            data.meals.foreach(meal => {
                html +=
                <div class = "meal-item" data-id = "${meal.idMeal}">
                    <div class = "meal-img">
                        <img src = "${meal.strMealThumb}" alt = "food"></img>
                    </div>
                    <div class ="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href ="#" class = "recipe-btn"> Get Recipe</a>
                    </div>
                </div>
            });
            mealList.classList.remove("notFound");
        } else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }

        meal.List.innerHTML = html;
    });
}
// get recipe of the meal
function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains("recipe-btn")){
        let mealItem = e.target.parentElement.parentElement;

    }
}
