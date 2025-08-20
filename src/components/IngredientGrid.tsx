import React from 'react';
import { Wheat, Cherry, Leaf, Flame, Milk, Package, Check } from 'lucide-react';

interface Ingredient {
  id: string;
  name: string;
  category: string;
  icon: string;
}

interface SelectedState {
  id: string;
  name: string;
}

interface IngredientGridProps {
  state: SelectedState;
  selectedIngredients: string[];
  onIngredientsChange: (ingredients: string[]) => void;
}

const INGREDIENT_CATEGORIES = {
  grains: { name: 'Grains', icon: Wheat, color: 'bg-warm-orange' },
  pulses: { name: 'Pulses', icon: Cherry, color: 'bg-emerald' },
  vegetables: { name: 'Vegetables', icon: Leaf, color: 'bg-secondary' },
  spices: { name: 'Spices', icon: Flame, color: 'bg-destructive' },
  dairy: { name: 'Dairy', icon: Milk, color: 'bg-accent' },
  others: { name: 'Others', icon: Package, color: 'bg-navy' }
};

const STATE_INGREDIENTS: Record<string, Ingredient[]> = {
  karnataka: [
    { id: 'rice', name: 'Rice', category: 'grains', icon: '🌾' },
    { id: 'ragi', name: 'Ragi', category: 'grains', icon: '🌾' },
    { id: 'wheat', name: 'Wheat', category: 'grains', icon: '🌾' },
    { id: 'toor_dal', name: 'Toor Dal', category: 'pulses', icon: '🟡' },
    { id: 'urad_dal', name: 'Urad Dal', category: 'pulses', icon: '⚫' },
    { id: 'chana_dal', name: 'Chana Dal', category: 'pulses', icon: '🟨' },
    { id: 'coconut', name: 'Coconut', category: 'others', icon: '🥥' },
    { id: 'curry_leaves', name: 'Curry Leaves', category: 'spices', icon: '🍃' },
    { id: 'tamarind', name: 'Tamarind', category: 'spices', icon: '🤎' },
    { id: 'jaggery', name: 'Jaggery', category: 'others', icon: '🍯' },
    { id: 'tomatoes', name: 'Tomatoes', category: 'vegetables', icon: '🍅' },
    { id: 'onions', name: 'Onions', category: 'vegetables', icon: '🧅' },
    { id: 'drumsticks', name: 'Drumsticks', category: 'vegetables', icon: '🥒' },
    { id: 'bottle_gourd', name: 'Bottle Gourd', category: 'vegetables', icon: '🥒' },
    { id: 'ridge_gourd', name: 'Ridge Gourd', category: 'vegetables', icon: '🥒' },
    { id: 'okra', name: 'Okra', category: 'vegetables', icon: '🌶️' },
    { id: 'milk', name: 'Milk', category: 'dairy', icon: '🥛' },
    { id: 'yogurt', name: 'Yogurt', category: 'dairy', icon: '🥣' },
  ],
  // Add more states here...
  tamil_nadu: [
    { id: 'rice', name: 'Rice', category: 'grains', icon: '🌾' },
    { id: 'toor_dal', name: 'Toor Dal', category: 'pulses', icon: '🟡' },
    { id: 'coconut', name: 'Coconut', category: 'others', icon: '🥥' },
    { id: 'curry_leaves', name: 'Curry Leaves', category: 'spices', icon: '🍃' },
    { id: 'tomatoes', name: 'Tomatoes', category: 'vegetables', icon: '🍅' },
    { id: 'onions', name: 'Onions', category: 'vegetables', icon: '🧅' },
    { id: 'drumsticks', name: 'Drumsticks', category: 'vegetables', icon: '🥒' },
    { id: 'tamarind', name: 'Tamarind', category: 'spices', icon: '🤎' },
    { id: 'sambar_powder', name: 'Sambar Powder', category: 'spices', icon: '🌶️' },
    { id: 'sesame_oil', name: 'Sesame Oil', category: 'others', icon: '🛢️' },
  ]
};

const IngredientGrid: React.FC<IngredientGridProps> = ({ 
  state, 
  selectedIngredients, 
  onIngredientsChange 
}) => {
  const ingredients = STATE_INGREDIENTS[state.id] || STATE_INGREDIENTS.karnataka;
  
  const groupedIngredients = ingredients.reduce((acc, ingredient) => {
    if (!acc[ingredient.category]) {
      acc[ingredient.category] = [];
    }
    acc[ingredient.category].push(ingredient);
    return acc;
  }, {} as Record<string, Ingredient[]>);

  const toggleIngredient = (ingredientId: string) => {
    if (selectedIngredients.includes(ingredientId)) {
      onIngredientsChange(selectedIngredients.filter(id => id !== ingredientId));
    } else {
      onIngredientsChange([...selectedIngredients, ingredientId]);
    }
  };

  const selectAllInCategory = (category: string) => {
    const categoryIngredients = groupedIngredients[category].map(i => i.id);
    const newSelected = [...new Set([...selectedIngredients, ...categoryIngredients])];
    onIngredientsChange(newSelected);
  };

  return (
    <div className="space-y-8">
      
      {/* Selection Summary */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">
            Ingredients Selected: <span className="font-semibold text-foreground">{selectedIngredients.length}</span>
          </p>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min((selectedIngredients.length / 5) * 100, 100)}%` }}
            />
          </div>
        </div>
        {selectedIngredients.length >= 5 && (
          <div className="flex items-center gap-2 text-secondary">
            <Check className="w-4 h-4" />
            <span className="text-sm font-medium">Ready to generate!</span>
          </div>
        )}
      </div>

      {/* Ingredients by Category */}
      {Object.entries(groupedIngredients).map(([categoryKey, categoryIngredients]) => {
        const category = INGREDIENT_CATEGORIES[categoryKey as keyof typeof INGREDIENT_CATEGORIES];
        const CategoryIcon = category.icon;
        const selectedInCategory = categoryIngredients.filter(i => selectedIngredients.includes(i.id)).length;
        
        return (
          <div key={categoryKey} className="space-y-4">
            
            {/* Category Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center`}>
                  <CategoryIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedInCategory} of {categoryIngredients.length} selected
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => selectAllInCategory(categoryKey)}
                className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Select All
              </button>
            </div>

            {/* Ingredients Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {categoryIngredients.map((ingredient) => {
                const isSelected = selectedIngredients.includes(ingredient.id);
                
                return (
                  <button
                    key={ingredient.id}
                    onClick={() => toggleIngredient(ingredient.id)}
                    className={`relative p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                      isSelected
                        ? 'border-primary bg-primary/10 shadow-card'
                        : 'border-border bg-background hover:border-primary/30 hover:shadow-card'
                    }`}
                  >
                    {/* Selection Check */}
                    {isSelected && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-bounce-in">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    {/* Ingredient Content */}
                    <div className="text-center">
                      <div className="text-3xl mb-2">{ingredient.icon}</div>
                      <p className={`font-medium text-sm ${
                        isSelected ? 'text-primary' : 'text-foreground'
                      }`}>
                        {ingredient.name}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        );
      })}

      {/* Selection Instructions */}
      {selectedIngredients.length < 5 && (
        <div className="text-center p-6 bg-muted/30 rounded-xl border border-dashed border-muted-foreground/30">
          <p className="text-muted-foreground">
            Select at least <span className="font-semibold text-primary">5 ingredients</span> to generate your meal plan.
            <br />
            <span className="text-sm">Choose ingredients that are commonly available in your school kitchen.</span>
          </p>
        </div>
      )}

    </div>
  );
};

export default IngredientGrid;