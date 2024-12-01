const Students = [
    {name: "Maciek", score: 80},
    {name: "Mateusz", score: 66},
    {name: "Tomasz", score: 93},
    {name: "Adam", score: 76},
    {name: "Szymon", score: 88}
];

function getAverage(results){
    const suma = results.reduce((acc, {score}) => acc + score, 0);
    return(suma / results.length).toFixed(2);
}

function HighestScore(results) {
    return results.reduce((max, result) => {
        if (result.score > max.score) {
            return result; 
        } else {
            return max; 
        }
    });
}

function LowestScore(results) {
    return results.reduce((min, result) => {
        if (result.score < min.score) {
            return result;
        } else {
            return min
        }
    });
}

function display(results) {

    const names = results.map(result => result.name); 
    const scores = results.map(result => result.score); 

    names.forEach((name, index) => {
        console.log(`${name}: ${scores[index]} pkt`); 
    });

    const average = getAverage(results)
    const highest = HighestScore(results)
    const lowest = LowestScore(results)
    

    console.log(`Średnia ocen: ${average} pkt`);
    console.log(`Najwyższy wynik: ${highest.name} - ${highest.score} pkt`);
    console.log(`Najniższy wynik: ${lowest.name} - ${lowest.score} pkt`);
    
}
display(Students);