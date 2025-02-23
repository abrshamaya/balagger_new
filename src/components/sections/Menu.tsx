import { Card } from "@/components/ui/card";

export const Menu = () => {
  return (
    <section id="menu-section" className="py-24 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16 text-green-900">
          Menu
        </h2>
        
        {/* Breakfast */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-green-800 mb-8 border-b border-green-200 pb-2">
            Breakfast
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Chechebsa</h4>
              <p className="text-green-600 mt-2">Flat bread mixed with spices and homemade clarified Butter</p>
              <p className="text-green-800 mt-2">$7.99</p>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Ful</h4>
              <p className="text-green-600 mt-2">Fava Bean garnished with fresh tomato, onion, jalapeno pepper and sour cream served with bread</p>
              <p className="text-green-800 mt-2">$7.99</p>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Kinche</h4>
              <p className="text-green-600 mt-2">Cracked bulgur cooked tender and seasoned with homemade spices & Ethiopian butter</p>
              <p className="text-green-800 mt-2">$7.99</p>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Scrambled Egg</h4>
              <p className="text-green-600 mt-2">Eggs, tomato, onion, jalapeno with bread or Injera</p>
              <p className="text-green-800 mt-2">$6.99</p>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Enkulal Besega</h4>
              <p className="text-green-600 mt-2">Scrambled eggs with minced meat, tomato, onion, jalapeno with bread or injera</p>
              <p className="text-green-800 mt-2">$7.99</p>
            </Card>
          </div>
        </div>

        {/* Vegetarian Entrees */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-green-800 mb-8 border-b border-green-200 pb-2">
            Vegetarian Entrees
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Veggie Combo</h4>
              <p className="text-green-600 mt-2">Shiro, keek alecha, misir wot, collard greens, cabbage and salad (well cooked)</p>
              <p className="text-green-800 mt-2">$18.99</p>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Special Veggie Combo</h4>
              <p className="text-green-600 mt-2">Shiro, keek alcha, Misir Wott, Collard green, cabbage, stuff and timaatim fitfit, shibra assa, butecha, hot sauce and salad (Seasonal)</p>
              <p className="text-green-800 mt-2">$27.99</p>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Ye-tsom firfir</h4>
              <p className="text-green-600 mt-2">Injera Mixed in a stew made from fresh tomato, onion, garlic, and red-hot pepper powder</p>
              <p className="text-green-800 mt-2">$17.99</p>
            </Card>
          </div>
        </div>

        {/* House Special */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-green-800 mb-8 border-b border-green-200 pb-2">
            House Special
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Balagger Combo</h4>
              <p className="text-green-600 mt-2">Combination of vegetable and meat dish</p>
              <p className="text-green-800 mt-2">$27.99</p>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Kornis</h4>
              <p className="text-green-600 mt-2">Ye tsome firfir topped with thick stripe of ribeye cooked to perfection</p>
              <p className="text-green-800 mt-2">$29.99</p>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Yaa'ger Combo</h4>
              <p className="text-green-600 mt-2">Combination of Kitfo, dulet, tibs, scrambled egg, cabbage, collared green and homemade cheese, served with Injera and bread</p>
              <p className="text-green-800 mt-2">$53.99</p>
            </Card>
          </div>
        </div>

        {/* Fish */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-green-800 mb-8 border-b border-green-200 pb-2">
            Fish
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Fish Gulash</h4>
              <p className="text-green-600 mt-2">Fried chunk of whiting fish and lightly cooked with onion and jalapeno</p>
              <p className="text-green-800 mt-2">$19.99</p>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Fish Dulet</h4>
              <p className="text-green-600 mt-2">Round fish cooked with onion, tomato, garlic, green pepper or jalapeno and olive oil</p>
              <p className="text-green-800 mt-2">$19.99</p>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Balagger Salad</h4>
              <p className="text-green-600 mt-2">Spring Salad, tomato, onion, green pepper, jalapeno, italian dressing (olive oil and lemon)</p>
              <p className="text-green-800 mt-2">$9.99</p>
            </Card>
          </div>
        </div>

        {/* Sides */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-green-800 mb-8 border-b border-green-200 pb-2">
            Sides
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Shiro</h4>
              <p className="text-green-800 mt-2">$4.99</p>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Keek Alecha</h4>
              <p className="text-green-800 mt-2">$4.99</p>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Miser wot</h4>
              <p className="text-green-800 mt-2">$4.99</p>
            </Card>
          </div>
        </div>

        {/* Late Snacks */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-green-800 mb-8 border-b border-green-200 pb-2">
            Late Snacks
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Kitfo Sandwich</h4>
              <p className="text-green-600 mt-2">Lean beef Mixed with Mitmita, butter, homemade cheese (served: Raw, Medium, well) with bread</p>
              <p className="text-green-800 mt-2">$11.99</p>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Tibs Sandwich</h4>
              <p className="text-green-600 mt-2">Ribeye beef cooked with onion, jalapeno with bread</p>
              <p className="text-green-800 mt-2">$11.99</p>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Chicken Wings</h4>
              <p className="text-green-600 mt-2">Choice of: 6 pieces or 10 pieces</p>
              <div className="flex gap-4 mt-2">
                <p className="text-green-800">6 pc - $6.99</p>
                <p className="text-green-800">10 pc - $12.99</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Kids Menu */}
        <div className="mb-8">
          <h3 className="text-2xl font-light text-green-800 mb-8 border-b border-green-200 pb-2">
            Kids Menu
          </h3>
          <p className="text-green-700 italic mb-6">(Kids menu always 50% off)</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">Chicken Nuggets w/Fries</h4>
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-green-600">6 pieces - $7.99</p>
                <p className="text-green-600">10 pieces - $12.99</p>
              </div>
            </Card>
            <Card className="p-6">
              <h4 className="text-xl font-medium text-green-900">French Fries</h4>
              <p className="text-green-800 mt-2">$2.99</p>
            </Card>
          </div>
        </div>

        {/* Warning Message */}
        <p className="text-red-600 text-sm italic text-center mt-8">
          * May be cooked to order, consuming undercooked meat may increase your risk of foodborne illness
        </p>
      </div>
    </section>
  );
};
