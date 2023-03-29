# DB Brainstorm

## Objects to have

User
    email
    first
    last
    password
    calorie_goal (kcal)
    starting_weight (lbs, kg)

Foods
    name (coffee, oats, milk)
    brand (also like subtitle)
    quantity (g/oz/cup)
    calories (kcal)
    carbs (g)
    protein (g)
    fat (g)
    is_official (is a food we've centrally added)
    is_custom (is a food added by a user)

Recipes
    name (smoothie)
    foods (fruit, peanut butter, spinach)
    quantities (1 cup, 30g, 1 cup)

Weight
    weight (lbs, kg)

Meal
    user
    meal_type (breakfast, lunch, dinner, snack)

MealType
    type

Workout
    date
    type

