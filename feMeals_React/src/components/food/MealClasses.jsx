import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MealClasses = () => {
  const { meal_type_id } = useParams();
  const [mealClasses, setMealClasses] = useState([]);

  useEffect(() => {
    const fetchMealClasses = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/dalia/meal-classes/${meal_type_id}`
        );
        setMealClasses(response.data);
      } catch (error) {
        console.error("Error fetching meal classes:", error);
      }
    };

    fetchMealClasses();
  }, [meal_type_id]);

  return (
    <div>
      <h1>Meal Classes</h1>
      <div className="meal-classes-container">
        {mealClasses.length > 0 ? (
          mealClasses.map((mealClass) => (
            <div key={mealClass.id} className="meal-class-item">
              <img src={mealClass.image} alt={mealClass.name} />
              <h2>{mealClass.name}</h2>
              <p>Price: ${mealClass.price}</p>
              <p>{mealClass.description}</p>
              <p>Number of meals: {mealClass.meal_num}</p>
            </div>
          ))
        ) : (
          <p>No meal classes available for this diet type.</p>
        )}
      </div>
    </div>
  );
};

export default MealClasses;
