let bmr = document.getElementById('bmr');
let req = document.getElementById('req');
let cutbulk = document.getElementById('cutbulk');
let final = document.getElementById('final');
cutbulk.innerHTML = document.getElementById('goals').value;

let foods = [{name: 'salmon', category: 'protein', calories: 208, serving:100, protein: 20, carbs: 0, fat: 13, clicked: false, quantity: 1},
{name: 'chicken breast', category: 'protein', calories: 165, serving:172, protein: 31, carbs: 3.6, fat: 0,  clicked: false, quantity: 1},
{name: 'egg', category: 'protein', calories: 78, serving:50, protein: 6, carbs: 0.6, fat: 5,  clicked: false, quantity: 1},
{name: 'steak', category: 'protein', calories: 271, serving:100, protein: 25, carbs: 0, fat: 19,  clicked: false, quantity: 1},
{name: 'tofu', category: 'protein', calories: 76, serving:100, protein: 8, carbs: 1.9, fat: 4.8,  clicked: false, quantity: 1},
{name: 'milk', category: 'protein', calories: 103, serving:244, protein: 8, carbs: 12, fat: 2.4,  clicked: false, quantity: 1},
{name: 'protein powder', category: 'protein', calories: 120, serving:30.4, protein: 24, carbs: 3, fat: 1,  clicked: false, quantity: 1},
{name: 'cottage cheese', category: 'protein', calories: 98, serving:100, protein: 11, carbs: 3.4, fat: 4.3,  clicked: false, quantity: 1},
{name: 'shrimp', category: 'protein', calories: 99, serving:100, protein: 24, carbs: 0.2, fat: 0.3,  clicked: false, quantity: 1},
{name: 'chicken thigh', category: 'protein', calories: 177, serving:100, protein: 24, carbs: 0, fat: 8,  clicked: false, quantity: 1},
{name: 'greek yogurt', category: 'protein', calories: 42, serving:30, protein: 2.5, carbs: 1.1, fat: 3,  clicked: false, quantity: 1},
{name: 'mince', category: 'protein', calories: 215, serving:100, protein: 19, carbs: 0, fat: 15,  clicked: false, quantity: 1},
{name: 'turkey', category: 'protein', calories: 189, serving:100, protein: 29, carbs: 0.1, fat: 7, clicked: false, quantity: 1},
{name: 'edamame', category: 'protein', calories: 122, serving:100, protein: 11, carbs: 10, fat: 5, clicked: false, quantity: 1},
{name: 'chocolate milk', category: 'protein', calories: 140, serving:30.5, protein: 13, carbs: 13, fat: 4.5, clicked: false, quantity: 1},


{name: 'rice', category: 'carbs', calories: 130, serving:100, protein: 2.7, carbs: 28, fat: 0.3, clicked: false, quantity: 1},
{name: 'sweet potato', category: 'carbs', calories: 86, serving:100, protein: 1.6, carbs: 20, fat: 0.1,  clicked: false, quantity: 1},
{name: 'oats', category: 'carbs', calories: 389, serving:100, protein: 16.9, carbs: 66.3, fat: 6.9,  clicked: false, quantity: 1},
{name: 'pasta', category: 'carbs', calories: 131, serving:100, protein: 5, carbs: 25, fat: 1.1,  clicked: false, quantity: 1},
{name: 'bread', category: 'carbs', calories: 82, serving:32, protein: 4, carbs: 13.8, fat: 1.1,  clicked: false, quantity: 1},
{name: 'burger bun', category: 'carbs', calories: 165, serving:58, protein: 5.9, carbs: 26.7, fat: 3.3,  clicked: false, quantity: 1},
{name: 'lentils', category: 'carbs', calories: 116, serving:100, protein: 9, carbs: 20, fat: 0.4,  clicked: false, quantity: 1},
{name: 'beans', category: 'carbs', calories: 347, serving:100, protein: 21, carbs: 63, fat: 1.2,  clicked: false, quantity: 1},
{name: 'quinoa', category: 'carbs', calories: 120, serving:100, protein: 4.4, carbs: 21.3, fat: 1.9,  clicked: false, quantity: 1},
{name: 'paratha', category: 'carbs', calories: 248, serving:80, protein: 4, carbs: 34, fat: 8,  clicked: false, quantity: 1},
{name: 'apple', category: 'carbs', calories: 95, serving:100, protein: 0.5, carbs: 25, fat: 0.3,  clicked: false, quantity: 1},
{name: 'banana', category: 'carbs', calories: 89, serving:100, protein: 1.1, carbs: 23, fat: 0.3,  clicked: false, quantity: 1},
{name: 'orange', category: 'carbs', calories: 62, serving:100, protein: 1.2, carbs: 15, fat: 0.2,  clicked: false, quantity: 1},
{name: 'french fries', category: 'carbs', calories: 312, serving:100, protein: 3.4, carbs: 41, fat: 15,  clicked: false, quantity: 1},
{name: 'mushrooms', category: 'carbs', calories: 22, serving:100, protein: 3.3, carbs: 3.1, fat: 0.3,  clicked: false, quantity: 1},
{name: 'spinach', category: 'carbs', calories: 23, serving:100, protein: 2.9, carbs: 3.8, fat: 0.3,  clicked: false, quantity: 1},
{name: 'berries', category: 'carbs', calories: 40, serving:100, protein: 0.7, carbs: 8, fat: 0.3,  clicked: false, quantity: 1},
{name: 'tomato', category: 'carbs', calories: 18, serving:100, protein: 0.9, carbs: 3.9, fat: 0.2,  clicked: false, quantity: 1},
{name: 'oreo', category: 'carbs', calories: 160, serving:34, protein: 2, carbs: 25, fat: 7,  clicked: false, quantity: 1},
{name: 'dairy milk', category: 'carbs', calories: 240, serving:45, protein: 7.3, carbs: 57, fat: 30,  clicked: false, quantity: 1},
{name: 'sugar', category: 'carbs', calories: 16, serving:4, protein: 0, carbs: 4.2, fat: 0,  clicked: false, quantity: 1},
{name: 'coke', category: 'carbs', calories: 150, serving:368, protein: 0, carbs: 39, fat: 0,  clicked: false, quantity: 1},
{name: 'gluco biscuit', category: 'carbs', calories: 80, serving:16.3, protein: 1, carbs: 12.1, fat: 3,  clicked: false, quantity: 1}



{name: 'olive oil', category: 'fat', calories: 119, serving:13.5, protein: 0, carbs: 0, fat: 14,  clicked: false, quantity: 1},
{name: 'butter', category: 'fat', calories: 72, serving:10, protein: 0, carbs: 0, fat: 8.1,  clicked: false, quantity: 1},
{name: 'almond', category: 'fat', calories: 80, serving:13, protein: 2.7, carbs: 2.7, fat: 6.8,  clicked: false, quantity: 1},
{name: 'peanut butter', category: 'fat', calories: 188, serving:32, protein: 8, carbs: 6, fat: 16,  clicked: false, quantity: 1},
{name: 'avocado', category: 'fat', calories: 322, serving:201, protein: 4, carbs: 17, fat: 29,  clicked: false, quantity: 1},
{name: 'cheddar', category: 'fat', calories: 402, serving:100, protein: 25, carbs: 1.3, fat: 33,  clicked: false, quantity: 1},
{name: 'canola oil', category: 'fat', calories: 120, serving:13.6, protein: 0, carbs: 0, fat: 14,  clicked: false, quantity: 1},


]

let goal;
let protDiv = 4;
let carbDiv = 2;
let fatDiv = 4;


let change = () =>{
    cutbulk.innerHTML = document.getElementById('goals').value;
}

let energy = () =>{
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let age = document.getElementById('age').value;
    let male = document.getElementById('male').checked;
    let calories 
    let adjustment = parseFloat(document.getElementById('goals').value,10);
    if(male){
    calories = Math.floor(66.473+(13.75*parseFloat(weight,10))+(5.003*parseFloat(height,10))-(6.775*parseFloat(age,10)));
    }else{
    calories = Math.floor(655.0955+(9.5634*parseFloat(weight,10))+(1.8496*parseFloat(height,10))-(4.6756*parseFloat(age,10)));
    }
    bmr.innerHTML = `BMR: ` + calories + ` kCal`;
    let multiplier = document.getElementById('activity').value
    let maintenance = Math.floor(calories*parseFloat(multiplier,10));
    req.innerHTML = `Maintenance Calories: ` + maintenance + ` kCal`;
    goal = maintenance + adjustment;
    final.innerHTML = `<strong>Daily Caloric Requirements: `+ goal + ` kCal</strong>`;
    let info = document.getElementsByClassName('info');
    for(let i=0;i<info.length;i++){
        info[i].style.visibility = 'visible';
        info[i].classList.add('animation');
    }
}


let figures = document.getElementsByTagName('figure')
let xs = document.getElementsByClassName('x');

for(let i = 0; i<figures.length; i++){
    figures[i].addEventListener('click', ()=>{
        figures[i].classList.add('orange');
        figures[i].style.fontWeight = 'bold'
        foods[i].clicked = true;
        xs[i].style.visibility = "visible"
        figures[i].classList.add('shake')
        setTimeout(()=>{
            figures[i].classList.remove('shake')
        },600)
})
}

let quantity = document.getElementsByClassName('quantity')

    for(let i=0; i<quantity.length; i++){
    quantity[i].addEventListener('input',()=>{
        foods[i].quantity = quantity[i].value
    })
}

let calculate = () =>{
    let clickedFoods = foods.filter(food=> food.clicked === true);
    let protein = 0
    let carbs = 0
    let fat = 0
    let calories = 0
    for(let i=0; i<clickedFoods.length; i++){
        calories = clickedFoods[i].calories*clickedFoods[i].quantity + calories;
        protein = clickedFoods[i].protein*clickedFoods[i].quantity  + protein;
        carbs = clickedFoods[i].carbs*clickedFoods[i].quantity  + carbs;
        fat = clickedFoods[i].fat*clickedFoods[i].quantity  + fat;
    }
        
    let result1 = Math.round((calories/goal)*100);
    let cals = document.getElementById('cal');
    cals.innerHTML =  `Calories: ` + Math.round(calories) + ` | ` + result1+`%`;
    cals.style.width = result1 + `%`

    let divisor2 = goal/protDiv;
    let result2 = ((protein*4)/divisor2)*100;
    let prots = document.getElementById('prot');
    let num2 = Math.round(result2);
    if(result2>120){result2=120}
    else if(result2<25){result2=25}
    prots.innerHTML =  `Protein: `+Math.round(protein) + ` g | `+ num2 +`%`;
    prots.style.width = result2 + `%`

    let divisor3 = goal/carbDiv;
    let result3 = ((carbs*4)/divisor3)*100;
    let carbo= document.getElementById('carbo');
    let num3 = Math.round(result3);
    if(result3>120){result3=120}
    else if(result3<25){result3=25}
    carbo.innerHTML =  `Carbs: `+Math.round(carbs) + ` g | `+ num3 +`%`;
    carbo.style.width = result3 + `%`

    let divisor4 = goal/fatDiv;
    let result4 = ((fat*9)/divisor4)*100;
    let fato= document.getElementById('fato');
    let num4 = Math.round(result4);
    if(result4>120){
        result4=120
    } else if(result4<25){result4=25}
    fato.innerHTML =  `Fats: `+ Math.round(fat) + ` g | `+ num4 +`%`;
    fato.style.width = result4 + `%`;

    let progress = document.getElementsByClassName('progress');
    let bottom = document.getElementById('bottom');
    bottom.style.visibility='visible'
    for(let i=0;i<progress.length;i++){
    progress[i].style.visibility = 'visible'
    }
}



for(let i = 0; i<xs.length; i++){
    xs[i].addEventListener('click', (e)=>{
        e.stopPropagation();
        figures[i].classList.remove('orange');
        figures[i].style.fontWeight = 'normal'
        foods[i].clicked = false;
        xs[i].style.visibility = 'hidden'
})
}

let diets = document.getElementsByClassName('diets');
for(let i=0;i<diets.length;i++){
    diets[i].addEventListener('click', (e)=>{
        e.stopPropagation();
        if(i===0){
            diets[0].classList.add('green');
            diets[1].classList.remove('green');
            diets[2].classList.remove('green');
            protDiv = 4;
            carbDiv = 2;
            fatDiv = 4;
            calculate()
        }else if(i===1){
            diets[0].classList.remove('green');
            diets[1].classList.add('green');
            diets[2].classList.remove('green');
            protDiv = 5;
            carbDiv = 20;
            fatDiv = 1.33;
            calculate()
        }else{
            diets[0].classList.remove('green');
            diets[1].classList.remove('green');
            diets[2].classList.add('green');
            protDiv = 4;
            carbDiv = 4;
            fatDiv = 2;
            calculate();
        }
    })
}
