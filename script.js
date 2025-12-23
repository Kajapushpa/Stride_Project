const menuData = {
  "Icecream Palour": [
    { name: "Vanilla Scoop", price: 40, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVm2huWX74Pnpztoloxm8GGoOwva-RBWXP2w&s", desc: "Classic vanilla ice cream" },
    { name: "Chocolate Scoop", price: 45, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_CXipj7coguE-J25NdIPNSvvImPLFCuGDQ&s", desc: "Rich chocolate ice cream" },
    { name: "Butterscotch", price: 50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpf9bV-eKws1NoqEnpG_XxsHzwV9ewvA5mUg&s", desc: "Crunchy butterscotch delight" },
    { name: "Strawberry", price: 45, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcXnZWvkQwEDW84WnpM-zpb8Cqpi1Osv9Og&s", desc: "Fresh strawberry scoop" },
    { name: "Ice Cream Sundae", price: 70, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_mPW12x1QceitZNExwmqEbCXQ4Cgbq84fw&s", desc: "Layered ice cream dessert" }
  ],
"Pizza Hut": [

{
  name: "Chicken Tandoori Pizza",
  price: 169,
  desc: "Spicy tandoori chicken pizza with cheese",
  img: "https://th.bing.com/th/id/OIP.o_sbCdD0E5yGGH_yJWsbGQHaGK?w=224&h=186&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Pizza base – 1",
    "Boneless chicken – 200 g",
    "Curd – 3 tbsp",
    "Ginger-garlic paste – 1 tbsp",
    "Tandoori masala – 1½ tbsp",
    "Red chilli powder – 1 tsp",
    "Kashmiri chilli powder – 1 tsp",
    "Turmeric powder – ¼ tsp",
    "Garam masala – ½ tsp",
    "Lemon juice – 1 tbsp",
    "Onion – 50 g",
    "Capsicum – 50 g",
    "Mozzarella cheese – 150 g",
    "Butter / oil – 1 tbsp",
    "Salt – as required"
  ],
  nutrition: {
    Calories: "420 kcal",
    Protein: "28 g",
    Carbohydrates: "38 g",
    Fat: "18 g"
  }
},

{
  name: "Chicken Pizza",
  price: 149,
  desc: "Classic chicken pizza with herbs and cheese",
  img: "https://th.bing.com/th/id/OIP.yPb7-_RCj4Ch3tOm5FZSwAHaGv?w=207&h=189&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Pizza base – 1",
    "Boneless chicken – 200 g",
    "Onion – 50 g",
    "Capsicum – 50 g",
    "Ginger-garlic paste – 1 tsp",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp",
    "Oregano – 1 tsp",
    "Chilli flakes – 1 tsp",
    "Pizza sauce – 3 tbsp",
    "Mozzarella cheese – 150 g",
    "Oil – 1 tbsp",
    "Salt – as required"
  ],
  nutrition: {
    Calories: "400 kcal",
    Protein: "26 g",
    Carbohydrates: "36 g",
    Fat: "17 g"
  }
},

{
  name: "Chicken Momos (4pcs)",
  price: 70,
  desc: "Steamed momos stuffed with seasoned chicken",
  img: "https://th.bing.com/th/id/OIP.f3_ZiohzJoAnOBR2XeHi-QHaEK?w=308&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Maida – 2 cups",
    "Minced chicken – 250 g",
    "Onion – 60 g",
    "Cabbage – 80 g",
    "Garlic – 1 tbsp",
    "Ginger – 1 tbsp",
    "Green chilli – 2",
    "Soy sauce – 1 tbsp",
    "Black pepper powder – ½ tsp",
    "Salt – as required",
    "Oil – 1 tbsp"
  ],
  nutrition: {
    Calories: "320 kcal",
    Protein: "22 g",
    Carbohydrates: "34 g",
    Fat: "10 g"
  }
},

{
  name: "Chicken Sandwich",
  price: 99,
  desc: "Grilled chicken sandwich with veggies",
  img: "https://th.bing.com/th/id/OIP.sNF_MKLXfzSvie0_xxBhQAHaDt?w=350&h=175&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Bread slices – 2",
    "Boiled/grilled chicken – 150 g",
    "Onion – 30 g",
    "Tomato – 30 g",
    "Capsicum – 30 g",
    "Green chilli – 1",
    "Red chilli powder – ½ tsp",
    "Black pepper powder – ½ tsp",
    "Butter – 2 tbsp",
    "Mayonnaise – 2 tbsp",
    "Salt – as required"
  ],
  nutrition: {
    Calories: "350 kcal",
    Protein: "20 g",
    Carbohydrates: "28 g",
    Fat: "18 g"
  }
},

{
  name: "Chicken Popcorn",
  price: 139,
  desc: "Crispy bite-sized chicken popcorn",
  img: "https://th.bing.com/th/id/OIP.p9Ww2huDJxNR_GAIxjYEFgHaHa?w=202&h=202&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Boneless chicken – 250 g",
    "Cornflour – 3 tbsp",
    "Maida – 2 tbsp",
    "Ginger-garlic paste – 1 tbsp",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp",
    "Garam masala – ½ tsp",
    "Salt – as required",
    "Oil – for deep frying"
  ],
  nutrition: {
    Calories: "430 kcal",
    Protein: "28 g",
    Carbohydrates: "18 g",
    Fat: "28 g"
  }
},

{
  name: "Paneer Sandwich",
  price: 99,
  desc: "Paneer sandwich with butter & mayo",
  img: "https://th.bing.com/th/id/OIP.NiAKo6y28Xq7Bj4cKFTI-QHaEQ?w=253&h=150&c=6&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Bread slices – 2",
    "Paneer – 150 g",
    "Onion – 30 g",
    "Capsicum – 30 g",
    "Green chilli – 1",
    "Red chilli powder – ½ tsp",
    "Black pepper powder – ½ tsp",
    "Chaat masala – ½ tsp",
    "Butter – 2 tbsp",
    "Mayonnaise – 2 tbsp",
    "Salt – as required"
  ],
  nutrition: {
    Calories: "380 kcal",
    Protein: "16 g",
    Carbohydrates: "26 g",
    Fat: "24 g"
  }
},

{
  name: "Paneer Pizza",
  price: 169,
  desc: "Cheesy paneer pizza with herbs",
  img: "https://th.bing.com/th/id/OIP.8YaoccIY45Kd_Wn6x7afxwHaHG?w=193&h=185&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Pizza base – 1",
    "Paneer – 200 g",
    "Onion – 50 g",
    "Capsicum – 50 g",
    "Ginger-garlic paste – 1 tsp",
    "Red chilli powder – 1 tsp",
    "Garam masala – ½ tsp",
    "Chilli flakes – 1 tsp",
    "Mixed herbs – 1 tsp",
    "Pizza sauce – 3 tbsp",
    "Mozzarella cheese – 150 g",
    "Salt – as required"
  ],
  nutrition: {
    Calories: "440 kcal",
    Protein: "18 g",
    Carbohydrates: "40 g",
    Fat: "22 g"
  }
},

{
  name: "Veg Pizza",
  price: 99,
  desc: "Loaded vegetable pizza with cheese",
  img: "https://th.bing.com/th/id/OIP.UCXm9y2MpxfcgrtR81mlawHaEJ?w=305&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Pizza base – 1",
    "Onion – 50 g",
    "Capsicum – 50 g",
    "Tomato – 50 g",
    "Sweet corn – 50 g",
    "Red chilli powder – ½ tsp",
    "Mixed herbs – 1 tsp",
    "Chilli flakes – 1 tsp",
    "Pizza sauce – 3 tbsp",
    "Mozzarella cheese – 150 g",
    "Salt – as required"
  ],
  nutrition: {
    Calories: "380 kcal",
    Protein: "14 g",
    Carbohydrates: "44 g",
    Fat: "15 g"
  }
},

{
  name: "French Fries",
  price: 59,
  desc: "Crispy golden french fries",
  img: "https://th.bing.com/th/id/OIP.j32l7foigLeer5Sh4tvgCgHaE8?w=270&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Potatoes – 500 g",
    "Cornflour – 1 tbsp",
    "Red chilli powder – ½ tsp",
    "Black pepper powder – ½ tsp",
    "Chaat masala – ½ tsp",
    "Salt – as required",
    "Oil – for deep frying"
  ],
  nutrition: {
    Calories: "350 kcal",
    Protein: "4 g",
    Carbohydrates: "42 g",
    Fat: "18 g"
  }
},

{
  name: "Chicken Lollipop (3pcs)",
  price: 100,
  desc: "Spicy deep fried chicken lollipops",
  img: "https://th.bing.com/th/id/OIP.5mfiRk2EBspN2Ad54Hmy0AHaEK?w=333&h=187&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Chicken wings – 500 g",
    "Cornflour – 3 tbsp",
    "Maida – 2 tbsp",
    "Ginger-garlic paste – 1½ tbsp",
    "Red chilli powder – 1½ tsp",
    "Black pepper powder – ½ tsp",
    "Soy sauce – 1 tbsp",
    "Vinegar – 1 tsp",
    "Salt – as required",
    "Oil – for deep frying"
  ],
  nutrition: {
    Calories: "450 kcal",
    Protein: "32 g",
    Fat: "30 g",
    Carbohydrates: "14 g"
  }
},
{
  name: "Sweet Corn Pizza",
  price: 119,
  desc: "Cheesy sweet corn pizza with herbs",
  img: "https://th.bing.com/th/id/OIP.swjFCKfjwwg0sC5sYS4cAgHaEK?w=329&h=185&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Pizza base – 1",
    "Sweet corn – 150 g",
    "Onion – 40 g",
    "Capsicum – 40 g",
    "Black pepper powder – ½ tsp",
    "Chilli flakes – 1 tsp",
    "Mixed herbs – 1 tsp",
    "Pizza sauce – 3 tbsp",
    "Mozzarella cheese – 150 g",
    "Salt – as required"
  ],
  nutrition: {
    Calories: "390 kcal",
    Protein: "12 g",
    Carbohydrates: "46 g",
    Fat: "16 g"
  }
},

{
  name: "Sweet Corn Sandwich",
  price: 79,
  desc: "Creamy sweet corn sandwich",
  img: "https://th.bing.com/th/id/OIP.qolOTHMh57cIuZvip456KQHaEQ?w=295&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Bread slices – 2",
    "Sweet corn – 150 g",
    "Onion – 30 g",
    "Capsicum – 30 g",
    "Black pepper powder – ½ tsp",
    "Chaat masala – ½ tsp",
    "Butter – 2 tbsp",
    "Mayonnaise – 2 tbsp",
    "Salt – as required"
  ],
  nutrition: {
    Calories: "330 kcal",
    Protein: "9 g",
    Carbohydrates: "32 g",
    Fat: "18 g"
  }
},

{
  name: "Veg Sandwich",
  price: 69,
  desc: "Fresh vegetable sandwich with butter",
  img: "https://th.bing.com/th/id/OIP.xdjJXiIAuEOY2n530xv0JwHaFj?w=269&h=202&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Bread slices – 2",
    "Onion – 30 g",
    "Tomato – 30 g",
    "Cucumber – 30 g",
    "Capsicum – 30 g",
    "Green chilli – 1",
    "Chaat masala – ½ tsp",
    "Black pepper powder – ½ tsp",
    "Butter – 2 tbsp",
    "Salt – as required"
  ],
  nutrition: {
    Calories: "260 kcal",
    Protein: "7 g",
    Carbohydrates: "30 g",
    Fat: "12 g"
  }
}


],

 "Chopsticks": [
  {
  name: "Veg Manchurian",
  price: 79,
  desc: "Crispy vegetable balls tossed in spicy manchurian sauce",
  img: "https://th.bing.com/th/id/OIP.X6_YFPADhx_rmr5jcc3C6AHaE7?w=265&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Cabbage – 100 g",
    "Carrot – 50 g",
    "Capsicum – 30 g",
    "Spring onion – 30 g",
    "Garlic – 10 g",
    "Ginger – 10 g",
    "Green chilli – 2",
    "Maida – 2 tbsp",
    "Cornflour – 2 tbsp",
    "Soy sauce – 1 tbsp",
    "Green chilli sauce – 1 tbsp",
    "Tomato ketchup – 1 tbsp",
    "Vinegar – 1 tsp",
    "Oil – for deep frying",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "280 kcal",
    Carbohydrates: "32 g",
    Protein: "6 g",
    Fat: "14 g",
    Fiber: "4 g"
  }
},

{
  name: "Chicken Manchurian",
  price: 119,
  desc: "Fried chicken tossed in spicy Indo-Chinese sauce",
  img: "https://th.bing.com/th/id/OIP.9Q4CN5fcR26GsiWftzhongHaEK?w=309&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Boneless chicken – 200 g",
    "Onion – 40 g",
    "Capsicum – 30 g",
    "Spring onion – 30 g",
    "Garlic – 10 g",
    "Ginger – 10 g",
    "Green chilli – 2",
    "Cornflour – 2 tbsp",
    "Maida – 1 tbsp",
    "Soy sauce – 1 tbsp",
    "Green chilli sauce – 1 tbsp",
    "Tomato ketchup – 1 tbsp",
    "Vinegar – 1 tsp",
    "Oil – for frying",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "320 kcal",
    Protein: "24 g",
    Fat: "18 g",
    Carbohydrates: "15 g"
  }
},

{
  name: "Mushroom 65",
  price: 149,
  desc: "Deep fried spicy mushroom starter",
  img: "https://th.bing.com/th/id/OIP.j1S_tVLqjKIbUTw7QWAsEQHaE7?w=236&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Mushroom – 200 g",
    "Curd – 2 tbsp",
    "Cornflour – 2 tbsp",
    "Maida – 1 tbsp",
    "Ginger-garlic paste – 1 tbsp",
    "Green chilli paste – 1 tsp",
    "Curry leaves – few",
    "Oil – for deep frying",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "260 kcal",
    Protein: "9 g",
    Fat: "15 g",
    Carbohydrates: "22 g"
  }
},

{
  name: "Paneer 65",
  price: 149,
  desc: "Crispy paneer tossed with spices",
  img: "https://th.bing.com/th/id/OIP.QUTtEZNFAotueihl50Q-dAHaFj?w=211&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Paneer – 200 g",
    "Curd – 2 tbsp",
    "Cornflour – 2 tbsp",
    "Maida – 1 tbsp",
    "Ginger-garlic paste – 1 tbsp",
    "Green chilli paste – 1 tsp",
    "Curry leaves – few",
    "Oil – for deep frying",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "380 kcal",
    Protein: "16 g",
    Fat: "28 g",
    Carbohydrates: "14 g"
  }
},

{
  name: "Chicken 65",
  price: 149,
  desc: "South Indian style spicy fried chicken",
  img: "https://th.bing.com/th/id/OIP._pR1AUC4ZwL3nmKTlskMWAHaEK?w=309&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Boneless chicken – 250 g",
    "Curd – 3 tbsp",
    "Cornflour – 2 tbsp",
    "Maida – 1 tbsp",
    "Ginger-garlic paste – 1 tbsp",
    "Green chilli paste – 1 tsp",
    "Curry leaves – few",
    "Oil – for deep frying",
    "Salt – as required",
    "Red chilli powder – 1½ tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "410 kcal",
    Protein: "32 g",
    Fat: "26 g",
    Carbohydrates: "12 g"
  }
},

{
  name: "Chilli Chicken",
  price: 149,
  desc: "Spicy chilli chicken with capsicum & onion",
  img: "https://th.bing.com/th/id/OIP.aU0_eFrmWThf3fxA_q64SQHaE8?w=270&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Boneless chicken – 250 g",
    "Onion – 50 g",
    "Capsicum – 50 g",
    "Spring onion – 30 g",
    "Garlic – 10 g",
    "Ginger – 10 g",
    "Green chilli – 2",
    "Cornflour – 2 tbsp",
    "Soy sauce – 1½ tbsp",
    "Green chilli sauce – 1 tbsp",
    "Vinegar – 1 tsp",
    "Oil – for frying",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "360 kcal",
    Protein: "30 g",
    Fat: "20 g",
    Carbohydrates: "14 g"
  }
},

{
  name: "Chicken Pakodi",
  price: 149,
  desc: "Crispy deep fried chicken pakodi",
  img: "https://th.bing.com/th/id/OIP.Os_02hVV_iYuAWJqJCNm6QHaEK?w=278&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Boneless chicken – 250 g",
    "Gram flour (besan) – 3 tbsp",
    "Rice flour – 1 tbsp",
    "Ginger-garlic paste – 1 tbsp",
    "Green chilli – 2",
    "Curry leaves – few",
    "Oil – for deep frying",
    "Salt – as required",
    "Red chilli powder – 1½ tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "430 kcal",
    Protein: "28 g",
    Fat: "30 g",
    Carbohydrates: "18 g"
  }
},

{
  name: "Pepper Chicken",
  price: 149,
  desc: "Spicy black pepper flavoured chicken",
  img: "https://th.bing.com/th/id/OIP.0-ggSbCwH543hSk6WZQ8bQHaEc?w=286&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Chicken – 500 g",
    "Onion – 100 g",
    "Garlic – 10 g",
    "Ginger – 10 g",
    "Green chilli – 2",
    "Curry leaves – few",
    "Oil – 2 tbsp",
    "Salt – as required",
    "Black pepper powder – 1½ tsp",
    "Red chilli powder – ½ tsp"
  ],
  nutrition: {
    Calories: "450 kcal",
    Protein: "38 g",
    Fat: "30 g",
    Carbohydrates: "6 g"
  }
},

{
  name: "Veg Fried Rice",
  price: 59,
  desc: "Fried rice with veggies",
  img: "https://th.bing.com/th/id/OIP.2f1mIrhZcCkCCMV215zjtgHaEK?w=288&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Cooked rice – 200 g",
    "Carrot – 25 g",
    "Cabbage – 25 g",
    "Capsicum – 25 g",
    "Spring onion (white & green) – 20 g",
    "Garlic – 5 g",
    "Ginger – 5 g",
    "Green chilli – 1",
    "Soy sauce – 10 ml",
    "Green chilli sauce – 5 ml",
    "Vinegar – 3 ml",
    "Cooking oil – 15 ml",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "420 kcal",
    Fat: "10 g",
    Carbohydrates: "70 g",
    Protein: "8 g",
    Fiber: "3 g",
    Calcium: "35 mg",
    Iron: "2 mg",
    Potassium: "180 mg"
  }
},

{
  name: "Egg Fried Rice",
  price: 79,
  desc: "Rice with scrambled eggs",
  img: "https://th.bing.com/th/id/OIP.x9hH6nx0KQqtMujZ4zDH6wHaHa?w=228&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Cooked rice – 200 g",
    "Eggs – 2",
    "Carrot – 25 g",
    "Cabbage – 25 g",
    "Capsicum – 25 g",
    "Spring onion – 20 g",
    "Garlic – 5 g",
    "Ginger – 5 g",
    "Green chilli – 1",
    "Soy sauce – 10 ml",
    "Vinegar – 3 ml",
    "Cooking oil – 15 ml",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "520 kcal",
    Fat: "16 g",
    Carbohydrates: "70 g",
    Protein: "14 g",
    Fiber: "2 g",
    Calcium: "60 mg",
    Iron: "2.5 mg",
    Potassium: "190 mg"
  }
},

{
  name: "Chicken Fried Rice",
  price: 99,
  desc: "Spiced rice with chicken",
  img: "https://th.bing.com/th/id/OIP.TSrNTZsMCfDNBj0OIW-DKwHaFc?w=202&h=149&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Cooked rice – 200 g",
    "Boneless chicken – 80 g",
    "Egg – 1",
    "Carrot – 25 g",
    "Cabbage – 25 g",
    "Capsicum – 25 g",
    "Spring onion – 20 g",
    "Garlic – 5 g",
    "Ginger – 5 g",
    "Green chilli – 1",
    "Soy sauce – 10 ml",
    "Green chilli sauce – 5 ml",
    "Vinegar – 3 ml",
    "Cooking oil – 15 ml",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "560 kcal",
    Fat: "18 g",
    Carbohydrates: "68 g",
    Protein: "22 g",
    Fiber: "2 g",
    Calcium: "55 mg",
    Iron: "2.8 mg",
    Potassium: "210 mg"
  }
},

{
  name: "Mushroom Fried Rice",
  price: 99,
  desc: "Rice with mushrooms( Available only on specific days)",
  img: "https://th.bing.com/th/id/OIP.MYePJ4P1V-f4G6U72mQ4AQHaE7?w=276&h=184&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Cooked rice – 200 g",
    "Mushroom – 70 g",
    "Carrot – 25 g",
    "Cabbage – 25 g",
    "Capsicum – 25 g",
    "Spring onion – 20 g",
    "Garlic – 5 g",
    "Ginger – 5 g",
    "Green chilli – 1",
    "Soy sauce – 10 ml",
    "Vinegar – 3 ml",
    "Cooking oil – 15 ml",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "500 kcal",
    Fat: "15 g",
    Carbohydrates: "70 g",
    Protein: "12 g",
    Fiber: "3 g",
    Calcium: "40 mg",
    Iron: "2.5 mg",
    Potassium: "220 mg"
  }
},

{
  name: "Paneer Fried Rice",
  price: 129,
  desc: "Rice with paneer cubes",
  img: "https://th.bing.com/th?q=Paneer+Fried+Rice+in+White+Bowl&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.1&pid=InlineBlock&rm=3&ucfimg=1&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
  ingredients: [
    "Cooked rice – 200 g",
    "Paneer – 80 g",
    "Carrot – 25 g",
    "Cabbage – 25 g",
    "Capsicum – 25 g",
    "Spring onion – 20 g",
    "Garlic – 5 g",
    "Ginger – 5 g",
    "Green chilli – 1",
    "Soy sauce – 10 ml",
    "Green chilli sauce – 5 ml",
    "Cooking oil – 15 ml",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "580 kcal",
    Fat: "22 g",
    Carbohydrates: "68 g",
    Protein: "18 g",
    Fiber: "2 g",
    Calcium: "120 mg",
    Iron: "2.8 mg",
    Potassium: "230 mg"
  }
},

{
  name: "Prawn Fried Rice",
  price: 139,
  desc: "Rice with prawns",
  img: "https://th.bing.com/th/id/OIP.3Z3Eh_UvPfyHrsuoyJdoDwHaE8?w=285&h=190&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Cooked rice – 200 g",
    "Prawns – 80 g",
    "Carrot – 25 g",
    "Cabbage – 25 g",
    "Capsicum – 25 g",
    "Spring onion – 20 g",
    "Garlic – 5 g",
    "Ginger – 5 g",
    "Green chilli – 1",
    "Soy sauce – 10 ml",
    "Vinegar – 3 ml",
    "Cooking oil – 15 ml",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "540 kcal",
    Fat: "14 g",
    Carbohydrates: "66 g",
    Protein: "24 g",
    Fiber: "2 g",
    Calcium: "80 mg",
    Iron: "3.2 mg",
    Potassium: "260 mg"
  }
},

{
  name: "Veg Noodles",
  price: 69,
  desc: "Stir-fried noodles with veggies",
  img: "https://th.bing.com/th/id/OIP.RdG-PzzKIv5KtwsemBUUGAHaHa?w=198&h=198&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Boiled noodles – 180 g",
    "Carrot – 25 g",
    "Cabbage – 25 g",
    "Capsicum – 25 g",
    "Spring onion – 20 g",
    "Garlic – 5 g",
    "Ginger – 5 g",
    "Green chilli – 1",
    "Soy sauce – 10 ml",
    "Green chilli sauce – 5 ml",
    "Vinegar – 3 ml",
    "Cooking oil – 15 ml",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "450 kcal",
    Fat: "12 g",
    Carbohydrates: "75 g",
    Protein: "9 g",
    Fiber: "3 g",
    Calcium: "30 mg",
    Iron: "2 mg",
    Potassium: "160 mg"
  }
},

{
  name: "Egg Noodles",
  price: 79,
  desc: "Noodles with scrambled eggs",
  img: "https://th.bing.com/th/id/OIP.AfmprtH44SVE-3TsnOe3VwHaEK?w=295&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Boiled noodles – 200 g",
    "Eggs – 2",
    "Carrot – 25 g",
    "Cabbage – 25 g",
    "Capsicum – 25 g",
    "Spring onion – 20 g",
    "Garlic – 5 g",
    "Ginger – 5 g",
    "Green chilli – 1",
    "Soy sauce – 10 ml",
    "Vinegar – 3 ml",
    "Cooking oil – 15 ml",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "520 kcal",
    Fat: "16 g",
    Carbohydrates: "70 g",
    Protein: "14 g",
    Fiber: "2 g",
    Calcium: "60 mg",
    Iron: "2.5 mg",
    Potassium: "190 mg"
  }
},

{
  name: "Chicken Noodles",
  price: 99,
  desc: "Noodles with chicken",
  img: "https://th.bing.com/th/id/OIP.jBNJEfOpDhLUTtqX6N6iqwHaEL?w=305&h=184&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Boiled noodles – 200 g",
    "Boneless chicken – 80 g",
    "Egg – 1",
    "Carrot – 25 g",
    "Cabbage – 25 g",
    "Capsicum – 25 g",
    "Spring onion – 20 g",
    "Garlic – 5 g",
    "Ginger – 5 g",
    "Green chilli – 1",
    "Soy sauce – 10 ml",
    "Green chilli sauce – 5 ml",
    "Vinegar – 3 ml",
    "Cooking oil – 15 ml",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "560 kcal",
    Fat: "18 g",
    Carbohydrates: "68 g",
    Protein: "22 g",
    Fiber: "2 g",
    Calcium: "55 mg",
    Iron: "2.8 mg",
    Potassium: "210 mg"
  }
},

{
  name: "Paneer Noodles",
  price: 129,
  desc: "Noodles with paneer cubes",
  img: "https://th.bing.com/th/id/OIP.H9w3rydioGa4hJWsf5plywHaFj?w=228&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Boiled noodles – 200 g",
    "Paneer – 80 g",
    "Carrot – 25 g",
    "Cabbage – 25 g",
    "Capsicum – 25 g",
    "Spring onion – 20 g",
    "Garlic – 5 g",
    "Ginger – 5 g",
    "Green chilli – 1",
    "Soy sauce – 10 ml",
    "Green chilli sauce – 5 ml",
    "Cooking oil – 15 ml",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "580 kcal",
    Fat: "22 g",
    Carbohydrates: "68 g",
    Protein: "18 g",
    Fiber: "2 g",
    Calcium: "120 mg",
    Iron: "2.8 mg",
    Potassium: "230 mg"
  }
},

{
  name: "Prawn Noodles",
  price: 139,
  desc: "Noodles with prawns",
  img: "https://th.bing.com/th/id/OIP.qZmY7EeWdKB6zzxYKy8fYQHaEo?w=300&h=186&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Boiled noodles – 200 g",
    "Prawns – 80 g",
    "Carrot – 25 g",
    "Cabbage – 25 g",
    "Capsicum – 25 g",
    "Spring onion – 20 g",
    "Garlic – 5 g",
    "Ginger – 5 g",
    "Green chilli – 1",
    "Soy sauce – 10 ml",
    "Vinegar – 3 ml",
    "Cooking oil – 15 ml",
    "Salt – as required",
    "Red chilli powder – 1 tsp",
    "Black pepper powder – ½ tsp"
  ],
  nutrition: {
    Calories: "540 kcal",
    Fat: "14 g",
    Carbohydrates: "66 g",
    Protein: "24 g",
    Fiber: "2 g",
    Calcium: "80 mg",
    Iron: "3.2 mg",
    Potassium: "260 mg"
  }
},

{
  name: "Chicken Biryani",
  price: 149,
  desc: "Aromatic basmati rice cooked with spiced chicken",
  img: "https://th.bing.com/th/id/OIP.Vmgj53lEFqJuRwX5B6s-cAHaE8?w=278&h=185&c=7&r=0&o=7&cb=ucfimg2&dpr=1.1&pid=1.7&rm=3&ucfimg=1",
  ingredients: [
    "Basmati rice – 250 g",
    "Chicken (with bone / boneless) – 500 g",
    "Bay leaf – 1",
    "Cinnamon – 1 inch",
    "Green cardamom – 3",
    "Cloves – 4",
    "Star anise – 1",
    "Mace – 1 small piece",
    "Shah jeera – 1 tsp",
    "Biryani masala – 1½ tbsp",
    "Red chilli powder – 1½ tsp",
    "Turmeric powder – ½ tsp",
    "Coriander powder – 1 tsp",
    "Garam masala – ½ tsp",
    "Black pepper powder – ½ tsp",
    "Ginger-garlic paste – 2 tbsp",
    "Green chillies – 3 (slit)",
    "Onion – 250 g (sliced)",
    "Tomato – 150 g (chopped)",
    "Mint leaves – ½ cup",
    "Coriander leaves – ½ cup",
    "Curd – 150 ml",
    "Oil – 3 tbsp",
    "Ghee – 1½ tbsp",
    "Salt – as required",
    "Lemon juice – 1½ tbsp",
    "Water – as required"
  ],
  nutrition: {
    Calories: "520 kcal",
    Protein: "32 g",
    Carbohydrates: "55 g",
    Fat: "20 g",
    Fiber: "3 g"
  }
}


],

  "Mess": [
    { name: "Veg Thali", price: 120, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXe0R-xsqQKhtS-fSJzeeUuqzvLwXAk2cGIw&s", desc: "Complete traditional meal" },
    { name: "Rice & Dal", price: 70, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtPwGXgMgKzgNfNQJruucd8rdEPW2aq8EB0g&s", desc: "Steamed rice with dal" },
    { name: "Curd Rice", price: 55, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-CQ4XbI998vI5a1UdGgooA-gWGvRay4Oxg&s", desc: "Rice mixed with fresh curd" },
    { name: "Sambar Rice", price: 60, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1z2Gvkknys7EDuQ77cBRUGLx38_IUS5Yug&s", desc: "Rice cooked with sambar" },
    { name: "Chapati Curry", price: 65, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tBGtWNAcTKTas-tkKYJ0_3dzgce30gyZzA&s", desc: "Chapati served with veg curry" }
  ],

  "Canteen": [
   
/* 🍪 BISCUITS */
{
  name: "Good Day Biscuit",
  price: 10,
  desc: "Classic butter biscuit",
  img: "https://th.bing.com/th/id/OIP.6hE7X5ZYGQLPZy-9QhKniwHaHa?w=217&h=180&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},
{
  name: "Bourbon Biscuit",
  price: 10,
  desc: "Chocolate cream biscuit",
  img: "https://th.bing.com/th?q=Bourbon+Biscuits+India&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.1&pid=InlineBlock&rm=3&ucfimg=1&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
},
{
  name: "Marie Gold Biscuit",
  price: 10,
  desc: "Light tea-time biscuit",
  img: "https://th.bing.com/th/id/OIP.n0FsrFT4bJem8NKRLu3o-wAAAA?w=257&h=171&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},
{
  name: "Jim Jam Biscuit",
  price: 10,
  desc: "Cream biscuit with jam center",
  img: "https://th.bing.com/th/id/OIP.JjP1vK33XSxw34bqQwnJmQHaEK?w=300&h=180&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},
{
  name: "Unibic Cookies (Choco chip filled)",
  price: 10,
  desc: "Premium crunchy cookies",
  img: "https://th.bing.com/th/id/OIP.27JX9zY887cSifOCJaFz4wHaE7?w=280&h=187&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},
{
  name: "Hide and Seek",
  price: 35,
  desc: "Premium crunchy cookies",
  img: "https://th.bing.com/th/id/OIP.Um3GrvZd48kt1wR61lS1LAHaE8?w=251&h=180&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},

/* 🍫 CHOCOLATES */
{
  name: "Dairy Milk",
  price: 40,
  desc: "Milk chocolate bar",
  img: "https://th.bing.com/th/id/OIP.ScQ47nAEIWTwP-rCk1D7IgHaHa?w=186&h=186&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},
{
  name: "KitKat",
  price: 35,
  desc: "Crispy wafer chocolate",
  img: "https://th.bing.com/th/id/OIP.ozWpT_2iCrThrNhxSnLUpgHaFj?w=210&h=180&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},
{
  name: "5 Star",
  price: 30,
  desc: "Caramel chocolate bar",
  img: "https://th.bing.com/th/id/OIP.r2rfl_KOo5mO_r0mIYkpwQHaE8?w=156&h=150&c=6&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},

/* 🥤 DRINKS */
{
  name: "Coca Cola",
  price: 40,
  desc: "Chilled soft drink",
  img: "https://th.bing.com/th/id/OIP.ZM3OOBxyQWjiXRrWU8sW8wHaE8?w=284&h=190&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},
{
  name: "Sprite",
  price: 20-40,
  desc: "Lemon flavored soft drink",
  img: "https://th.bing.com/th/id/OIP.iPriIA_NtXGAzHSDCli5UwHaEo?w=247&h=180&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},
{
  name: "Maaza",
  price: 10-50,
  desc: "Mango drink",
  img: "https://th.bing.com/th/id/OIP.OWcgQxJWDJCnAW_SIDGizgHaHa?w=199&h=199&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},

/* 🍟 CHIPS */
{
  name: "Lays Chips",
  price: 20,
  desc: "Classic salted chips",
  img: "https://th.bing.com/th/id/OIP.3HLtHN68AQmZEZ8HrRagnAHaHa?w=201&h=200&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},
{
  name: "Bingo Chips",
  price: 10,
  desc: "Spicy masala chips",
  img: "https://th.bing.com/th/id/OIP.l-anxLJkJ8DD5pPof72JVwHaHa?w=195&h=195&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},
{
  name: "Kurkure",
  price: 25,
  desc: "Crunchy masala snack",
  img: "https://th.bing.com/th/id/OIP.JXdHxZrfDD0v-jL7FJH7lwHaHa?w=175&h=180&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},

/* 🥐 PUFFS */
{
  name: "Veg Puff",
  price: 20,
  desc: "Bakery style vegetable puff",
  img: "https://th.bing.com/th/id/OIP.YrHB6MgjPEvr5Wzv1m6WBAEsDF?w=289&h=190&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},
{
  name: "Egg Puff",
  price: 25,
  desc: "Spicy egg puff",
  img: "https://th.bing.com/th/id/OIP.Tvv5sweqo-HpRzVSx49SzwHaE8?w=223&h=180&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},

/* 🍰 CAKES */
{
  name: "Chocolate Cake",
  price: 45,
  desc: "Soft chocolate cake slice",
  img: "https://th.bing.com/th/id/OIP.KKBJFVWcHZNQns_6ZV9osgHaHa?w=187&h=186&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
},
{
  name: "Vanilla Cake",
  price: 45,
  desc: "Classic vanilla cake slice",
  img: "https://th.bing.com/th/id/OIP.w03SHTq0B65pBAgFVsKnFQHaE7?w=282&h=187&c=7&r=0&o=5&cb=ucfimg2&dpr=1.1&pid=1.7&ucfimg=1"
}

  ]
};
let cart = [];
let selectedItem = null;



menuData.All = Object.values(menuData).flat();


menuData.All = Object.values(menuData).flat();

const tabsContainer = document.getElementById("categoryTabs");
const menuContainer = document.getElementById("menuContainer");
const searchInput = document.getElementById("searchInput");
let currentCategory = "All";

function renderTabs() {
  Object.keys(menuData).forEach(category => {
    const btn = document.createElement("button");
    btn.textContent = category;
    btn.onclick = () => {
      currentCategory = category;
      setActiveTab(category);
      displayMenu(menuData[category]);
    };
    tabsContainer.appendChild(btn);
  });
}

function setActiveTab(cat) {
  [...tabsContainer.children].forEach(btn =>
    btn.classList.toggle("active", btn.textContent === cat)
  );
}


function displayMenu(items) {
  const keyword = searchInput.value.toLowerCase();

  const filtered = items.filter(item => {
    const name = item.name?.toLowerCase() || "";
    const desc = item.desc?.toLowerCase() || "";

    const ingredients = item.ingredients
      ? item.ingredients.join(" ").toLowerCase()
      : "";

    return (
      name.includes(keyword) ||
      desc.includes(keyword) ||
      ingredients.includes(keyword)
    );
  });

  menuContainer.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "menu-grid";

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button class="view-btn">View</button>
    `;

    card.querySelector(".view-btn").onclick = (e) => {
      e.stopPropagation();
      showModal(item);
    };

    grid.appendChild(card);
  });

  menuContainer.appendChild(grid);
}
searchInput.addEventListener("input", () => {
  displayMenu(menuData[currentCategory]);
});


function showModal(item) {
  const modal = document.getElementById("itemModal");

  document.getElementById("modalImage").src = item.img;
  document.getElementById("modalName").textContent = item.name;
  document.getElementById("modalDesc").textContent = item.desc;
  document.getElementById("modalPrice").textContent = `Price: ₹${item.price}`;

  const ingredientsBox = document.getElementById("ingredientsBox");
  const nutritionBox = document.getElementById("nutritionBox");

  /* INGREDIENTS */
  if (item.ingredients) {
    ingredientsBox.style.display = "block";
    const ingList = document.getElementById("modalIngredients");
    ingList.innerHTML = "";
    item.ingredients.forEach(i => {
      const li = document.createElement("li");
      li.textContent = i;
      ingList.appendChild(li);
    });
  } else {
    ingredientsBox.style.display = "none";
  }

  /* NUTRITION */
  if (item.nutrition) {
    nutritionBox.style.display = "block";
    const nutList = document.getElementById("modalNutrition");
    nutList.innerHTML = "";
    for (let key in item.nutrition) {
      const li = document.createElement("li");
      li.textContent = `${key}: ${item.nutrition[key]}`;
      nutList.appendChild(li);
    }
  } else {
    nutritionBox.style.display = "none";
  }
  selectedItem = item;

const addBtn = document.getElementById("addToCartBtn");
addBtn.onclick = () => {
  cart.push(item);
  alert(item.name + " added to cart");
};


  modal.style.display = "flex";
  document.body.classList.add("modal-open");
}



renderTabs();
setActiveTab("All");
displayMenu(menuData["All"]);
function closeModal() {
  document.getElementById("itemModal").style.display = "none";
  document.body.classList.remove("modal-open");
}

function openFeedback() {
  document.getElementById("feedbackModal").style.display = "flex";
  document.body.classList.add("modal-open");
}

function closeFeedback() {
  document.getElementById("feedbackModal").style.display = "none";
  document.body.classList.remove("modal-open");
}



document.getElementById("submitFeedback").addEventListener("click", function() {
  const name = document.getElementById("fbName").value;
  const rating = document.getElementById("fbRating").value;
  const message = document.getElementById("fbMessage").value;
  
  if (name && rating && message) {
    // You can add your logic here to handle the feedback data
    console.log("Feedback submitted:", { name, rating, message });
    alert("Thank you for your feedback!");
    closeFeedback();
  } else {
    alert("Please fill in all fields.");
  }
});
