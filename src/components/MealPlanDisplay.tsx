import React, { useState } from 'react';
import { Clock, Users, Utensils, TrendingUp, Info, ChefHat, Star } from 'lucide-react';

interface Nutrition {
  calories: number;
  protein: number;
  iron: number;
  fiber: number;
}

interface Meal {
  day: string;
  meal: string;
  ingredients: string[];
  nutrition: Nutrition;
  prepTime: number;
  servings: number;
}

interface MealPlan {
  state: string;
  meals: Meal[];
}

interface MealPlanDisplayProps {
  mealPlan: MealPlan;
}

const MealPlanDisplay: React.FC<MealPlanDisplayProps> = ({ mealPlan }) => {
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const calculateWeeklyNutrition = () => {
    const totals = mealPlan.meals.reduce(
      (acc, meal) => ({
        calories: acc.calories + meal.nutrition.calories,
        protein: acc.protein + meal.nutrition.protein,
        iron: acc.iron + meal.nutrition.iron,
        fiber: acc.fiber + meal.nutrition.fiber,
      }),
      { calories: 0, protein: 0, iron: 0, fiber: 0 }
    );

    return {
      calories: Math.round(totals.calories / 5), // Daily average
      protein: Math.round(totals.protein / 5 * 10) / 10,
      iron: Math.round(totals.iron / 5 * 10) / 10,
      fiber: Math.round(totals.fiber / 5 * 10) / 10,
    };
  };

  const weeklyNutrition = calculateWeeklyNutrition();

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground">
              Weekly Meal Plan
            </h2>
            <p className="text-muted-foreground">
              Customized for {mealPlan.state}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <Star className="w-5 h-5 text-golden fill-golden" />
          <span className="text-sm font-medium text-muted-foreground">
            Nutritionally Balanced • Culturally Appropriate • Government Compliant
          </span>
          <Star className="w-5 h-5 text-golden fill-golden" />
        </div>
      </div>

      {/* Weekly Nutrition Summary */}
      <div className="card-elegant">
        <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Daily Average Nutrition
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">Cal</span>
            </div>
            <div className="text-2xl font-bold text-primary mb-1">{weeklyNutrition.calories}</div>
            <div className="text-sm text-muted-foreground">Calories</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">Pro</span>
            </div>
            <div className="text-2xl font-bold text-secondary mb-1">{weeklyNutrition.protein}g</div>
            <div className="text-sm text-muted-foreground">Protein</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">Fe</span>
            </div>
            <div className="text-2xl font-bold text-emerald mb-1">{weeklyNutrition.iron}mg</div>
            <div className="text-sm text-muted-foreground">Iron</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">Fib</span>
            </div>
            <div className="text-2xl font-bold text-navy mb-1">{weeklyNutrition.fiber}g</div>
            <div className="text-sm text-muted-foreground">Fiber</div>
          </div>
        </div>
      </div>

      {/* Meals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mealPlan.meals.map((meal, index) => (
          <div 
            key={index}
            className="card-elegant hover:scale-105 cursor-pointer group"
            onClick={() => setSelectedMeal(meal)}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-sm text-primary font-medium mb-1">{meal.day}</div>
                <h4 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {meal.meal}
                </h4>
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Utensils className="w-4 h-4 text-primary" />
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{meal.prepTime} mins</span>
                <Users className="w-4 h-4 ml-2" />
                <span>{meal.servings} servings</span>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {meal.ingredients.slice(0, 3).map((ingredient, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                  >
                    {ingredient}
                  </span>
                ))}
                {meal.ingredients.length > 3 && (
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                    +{meal.ingredients.length - 3} more
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{meal.nutrition.calories}</div>
                <div className="text-xs text-muted-foreground">Calories</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-secondary">{meal.nutrition.protein}g</div>
                <div className="text-xs text-muted-foreground">Protein</div>
              </div>
            </div>

            <div className="mt-3 text-center">
              <button className="text-sm text-primary hover:text-primary/80 font-medium">
                View Recipe Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button className="btn-hero">
          <span className="mr-2">📧</span>
          Email Meal Plan
        </button>
        <button className="btn-outline">
          <span className="mr-2">🖨️</span>
          Print Plan
        </button>
      </div>

      {/* Recipe Modal */}
      {selectedMeal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {selectedMeal.meal}
                  </h3>
                  <p className="text-muted-foreground">{selectedMeal.day}</p>
                </div>
                <button 
                  onClick={() => setSelectedMeal(null)}
                  className="text-muted-foreground hover:text-foreground text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="text-center">
                    <Clock className="w-5 h-5 mx-auto mb-1 text-primary" />
                    <div className="font-semibold">{selectedMeal.prepTime} mins</div>
                    <div className="text-sm text-muted-foreground">Prep Time</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 mx-auto mb-1 text-secondary" />
                    <div className="font-semibold">{selectedMeal.servings}</div>
                    <div className="text-sm text-muted-foreground">Servings</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-5 h-5 mx-auto mb-1 text-emerald" />
                    <div className="font-semibold">{selectedMeal.nutrition.calories}</div>
                    <div className="text-sm text-muted-foreground">Calories</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-semibold mb-3">Ingredients Required:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedMeal.ingredients.map((ingredient, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-muted/20 rounded">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-semibold mb-3">Nutritional Information:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <div className="text-lg font-bold text-primary">{selectedMeal.nutrition.calories}</div>
                      <div className="text-sm text-muted-foreground">Calories</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/10 rounded-lg">
                      <div className="text-lg font-bold text-secondary">{selectedMeal.nutrition.protein}g</div>
                      <div className="text-sm text-muted-foreground">Protein</div>
                    </div>
                    <div className="text-center p-3 bg-emerald/10 rounded-lg">
                      <div className="text-lg font-bold text-emerald">{selectedMeal.nutrition.iron}mg</div>
                      <div className="text-sm text-muted-foreground">Iron</div>
                    </div>
                    <div className="text-center p-3 bg-navy/10 rounded-lg">
                      <div className="text-lg font-bold text-navy">{selectedMeal.nutrition.fiber}g</div>
                      <div className="text-sm text-muted-foreground">Fiber</div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/20 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h5 className="font-medium text-foreground mb-1">Cooking Instructions</h5>
                      <p className="text-sm text-muted-foreground">
                        Detailed cooking instructions with measurements and step-by-step preparation 
                        would be provided here for school kitchen staff.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default MealPlanDisplay;