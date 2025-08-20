import React, { useState } from 'react';
import { ArrowLeft, ChefHat, MapPin, Utensils, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import StateSelector from '../components/StateSelector';
import IngredientGrid from '../components/IngredientGrid';
import MealPlanDisplay from '../components/MealPlanDisplay';
import Footer from '../components/Footer';

interface SelectedState {
  id: string;
  name: string;
}

const Generate = () => {
  const [selectedState, setSelectedState] = useState<SelectedState | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [mealPlan, setMealPlan] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateMealPlan = async () => {
    if (!selectedState || selectedIngredients.length < 5) {
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setMealPlan({
        state: selectedState.name,
        meals: [
          {
            day: 'Monday',
            meal: 'Sambar Rice',
            ingredients: ['Rice', 'Toor Dal', 'Vegetables', 'Curry Leaves'],
            nutrition: { calories: 320, protein: 12, iron: 3.2, fiber: 4.5 },
            prepTime: 45,
            servings: 100
          },
          {
            day: 'Tuesday', 
            meal: 'Pulao with Dal',
            ingredients: ['Basmati Rice', 'Mixed Vegetables', 'Moong Dal'],
            nutrition: { calories: 310, protein: 11, iron: 2.8, fiber: 4.2 },
            prepTime: 40,
            servings: 100
          },
          {
            day: 'Wednesday',
            meal: 'Rajma Rice',
            ingredients: ['Rice', 'Kidney Beans', 'Onions', 'Tomatoes'],
            nutrition: { calories: 330, protein: 14, iron: 3.5, fiber: 5.1 },
            prepTime: 50,
            servings: 100
          },
          {
            day: 'Thursday',
            meal: 'Vegetable Biryani',
            ingredients: ['Basmati Rice', 'Mixed Vegetables', 'Yogurt', 'Spices'],
            nutrition: { calories: 340, protein: 10, iron: 2.9, fiber: 4.8 },
            prepTime: 60,
            servings: 100
          },
          {
            day: 'Friday',
            meal: 'Khichdi with Vegetables',
            ingredients: ['Rice', 'Moong Dal', 'Vegetables', 'Ghee'],
            nutrition: { calories: 290, protein: 13, iron: 3.1, fiber: 4.6 },
            prepTime: 35,
            servings: 100
          }
        ]
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ChefHat className="w-10 h-10" />
              <h1 className="text-4xl md:text-5xl font-display font-bold text-shadow-lg">
                Meal Plan Generator
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Create nutritionally balanced weekly meal plans tailored to your state's regional preferences
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Step 1: State Selection */}
          <section className="animate-fade-in">
            <div className="card-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-display font-semibold text-foreground">
                    Select Your State
                  </h2>
                  <p className="text-muted-foreground">
                    Choose your state to get region-specific ingredients and recipes
                  </p>
                </div>
              </div>
              
              <StateSelector 
                selectedState={selectedState}
                onStateSelect={setSelectedState}
              />
            </div>
          </section>

          {/* Step 2: Ingredient Selection */}
          {selectedState && (
            <section className="animate-slide-up">
              <div className="card-elegant">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-semibold text-foreground">
                      Available Ingredients
                    </h2>
                    <p className="text-muted-foreground">
                      Select ingredients available in your kitchen (minimum 5 required)
                    </p>
                  </div>
                </div>

                <IngredientGrid
                  state={selectedState}
                  selectedIngredients={selectedIngredients}
                  onIngredientsChange={setSelectedIngredients}
                />

                <div className="mt-8 text-center">
                  <button
                    onClick={handleGenerateMealPlan}
                    disabled={selectedIngredients.length < 5 || isGenerating}
                    className="btn-hero disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isGenerating ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Generating Meal Plan...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Utensils className="w-5 h-5" />
                        Generate Weekly Meal Plan
                      </div>
                    )}
                  </button>
                  
                  {selectedIngredients.length < 5 && (
                    <p className="text-sm text-destructive mt-2">
                      Please select at least 5 ingredients to generate a meal plan
                    </p>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Step 3: Generated Meal Plan */}
          {mealPlan && (
            <section className="animate-bounce-in">
              <MealPlanDisplay mealPlan={mealPlan} />
            </section>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Generate;