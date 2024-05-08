import sql from "better-sqlite3"
import fs from

const db = sql('meals.db')

export async function getMeals(){
    await new Promise((resolve) => setTimeout (resolve, 5000));

    // throw new Error("Loading meals failed...");
    return db.prepare("SELECT * FROM meals").all();
}
export function getMeal(slug){
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
}

export function saveMeal(meal){
    const extension = meal.image.split('.').pop();
    const fileName = `${meal.title}.${extension}`
}


