
//Задание 1

let weather = {
    temperature : -20,
    description : "Солнечно"
}

if(weather.temperature>= 0){
    console.log(`Сегодня ${weather.description}. Температура воздуха ${weather.temperature}`);
}else{
    console.log(`Сегодня ${weather.description}. Температура воздуха ${weather.temperature}, Наденьте куртку!`);
}


//Задание 2

let movie = {
    titel : '4 вид',
    director : 'Олатунде Осунсанми',
    year : 2009 ,
    genre :'ужастик' 
}

console.log(`Мой фильм ${movie.titel} Он был выпущен в ${movie.year} году, режиссер - ${movie.director}. Жанр - ${movie.genre}`);


// Задание 3

let studentMarks ={
    
    subjects: {
        math: 5,
        history:4,
        art: 3
    }
}

for (let key in studentMarks) 
{
    if (typeof studentMarks[key] === 'object') 
    {
        for(let sub in studentMarks[key])
        {
            console.log(`${sub}: ${studentMarks[key][sub]}`);
        }
    }
    
    else
    {
        console.log(`${key}: ${studentMarks}`);
    }
}