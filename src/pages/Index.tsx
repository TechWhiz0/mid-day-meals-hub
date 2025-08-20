import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, MapPin, Utensils, Clock, Users, Shield, Award, Heart } from 'lucide-react';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Government Badge */}
            <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
              <Shield className="w-6 h-6" />
              <span className="text-white/90 font-medium">
                Ministry of Education, Government of India
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow-lg animate-slide-up">
              <span className="flex items-center justify-center gap-4 mb-4">
                <ChefHat className="w-16 h-16 md:w-20 md:h-20" />
              </span>
              Mid Day Meal Planner
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Nourishing minds, building futures
            </p>
            
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-slide-up">
              Generate nutritionally balanced weekly meal plans tailored to regional preferences across Indian states. 
              Designed for school staff to ensure cultural relevance and nutritional adequacy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in">
              <Link to="/generate" className="btn-hero text-lg">
                <Utensils className="w-6 h-6 mr-2" />
                Start Planning Meals
              </Link>
              
              <button className="btn-outline text-lg">
                <Award className="w-5 h-5 mr-2" />
                Learn About Program
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">8+</div>
                <div className="text-white/80">Indian States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-white/80">Regional Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-white/80">Nutritional Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Why Choose Our Meal Planner?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Designed specifically for India's Mid Day Meal Scheme with cultural sensitivity and nutritional expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="card-elegant hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">Regional Adaptation</h3>
                  <p className="text-muted-foreground">
                    Culturally appropriate meal suggestions based on state-specific ingredients and traditional recipes
                  </p>
                </div>
              </div>

              <div className="card-elegant hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">Nutritional Balance</h3>
                  <p className="text-muted-foreground">
                    Ensures compliance with government nutritional guidelines for growing children
                  </p>
                </div>
              </div>

              <div className="card-elegant hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">Time Efficient</h3>
                  <p className="text-muted-foreground">
                    Reduce meal planning time from hours to minutes with our intelligent algorithm
                  </p>
                </div>
              </div>

              <div className="card-elegant hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">School Focused</h3>
                  <p className="text-muted-foreground">
                    Built specifically for school administrators with easy-to-use interface
                  </p>
                </div>
              </div>

              <div className="card-elegant hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">Government Compliant</h3>
                  <p className="text-muted-foreground">
                    Adheres to Mid Day Meal Scheme guidelines and nutritional standards
                  </p>
                </div>
              </div>

              <div className="card-elegant hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">Quality Assured</h3>
                  <p className="text-muted-foreground">
                    Recipes tested and approved by nutrition experts and culinary professionals
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple 3-step process to generate your weekly meal plans
              </p>
            </div>

            <div className="space-y-12">
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="card-gradient text-center h-full flex flex-col justify-center">
                    <div className="text-6xl font-bold mb-4">1</div>
                    <h3 className="text-2xl font-display font-semibold mb-4">Select State</h3>
                    <p className="text-white/90">
                      Choose your state to load regional ingredients and preferences
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h4 className="text-2xl font-display font-semibold mb-4">Regional Customization</h4>
                  <p className="text-muted-foreground text-lg">
                    Our system automatically loads ingredients commonly available in your state, 
                    along with traditional recipes that children are familiar with. This ensures 
                    cultural acceptance and reduces food waste.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="card-gradient text-center h-full flex flex-col justify-center">
                    <div className="text-6xl font-bold mb-4">2</div>
                    <h3 className="text-2xl font-display font-semibold mb-4">Pick Ingredients</h3>
                    <p className="text-white/90">
                      Select ingredients available in your school kitchen
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h4 className="text-2xl font-display font-semibold mb-4">Smart Selection</h4>
                  <p className="text-muted-foreground text-lg">
                    Choose from categorized ingredients including grains, pulses, vegetables, 
                    and spices. Our system ensures you select enough variety to create 
                    nutritionally balanced meals throughout the week.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="card-gradient text-center h-full flex flex-col justify-center">
                    <div className="text-6xl font-bold mb-4">3</div>
                    <h3 className="text-2xl font-display font-semibold mb-4">Get Meal Plan</h3>
                    <p className="text-white/90">
                      Receive a complete weekly menu with nutrition details
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h4 className="text-2xl font-display font-semibold mb-4">Complete Solution</h4>
                  <p className="text-muted-foreground text-lg">
                    Get detailed meal plans with preparation instructions, nutritional 
                    information, and serving sizes for your student population. Each recipe 
                    includes cooking tips and cultural context.
                  </p>
                </div>
              </div>

            </div>

            <div className="text-center mt-16">
              <Link to="/generate" className="btn-hero text-lg">
                <ChefHat className="w-6 h-6 mr-2" />
                Try It Now - It's Free!
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
