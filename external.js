function quize_eval(){

    let score = 0;
    const correctAnswers = ['1op2', '2op1', '3op2', '4op3', '5op1', '6op1', '7op2', '8op3', '9op1', '10op1'];

    for (let i = 0; i < correctAnswers.length; i++) {
        const answerId = correctAnswers[i];
        if (document.getElementById(answerId).checked) {
            console.log(`Answer ${i + 1} is correct.`);
            score++;
        } else {
            console.log(`Answer ${i + 1} is incorrect.`);
        }
    }

alert('Obtained Score: ' + score);
}
/*
    var score = 0;
//Q1    
    if (document.getElementById('1op2').checked) {
        console.log("Answer 1 is correct.")
        score = score+1;
        }
    else{
        console.log("Answer 1 is incorrect.")
        score = score+0;
    }
//Q2    
    if (document.getElementById('2op1').checked) {
        console.log("Answer 2 is correct.")
        score = score+1;
        }
    else{
        console.log("Answer 2 is incorrect.")
        score = score+0;
    }
//Q3
    if (document.getElementById('3op2').checked) {
        console.log("Answer 3 is correct.")
        score = score+1;
        }
    else{
        console.log("Answer 3 is incorrect.")
        score = score+0;
    }
//Q4
    if (document.getElementById('4op3').checked) {
        console.log("Answer 4 is correct.")
        score = score+1;
        }
    else{
        console.log("Answer 4 is incorrect.")
        score = score+0;
    }
//Q5
    if (document.getElementById('5op1').checked) {
        console.log("Answer 5 is correct.")
        score = score+1;
        }
    else{
        console.log("Answer 5 is incorrect.")
        score = score+0;
    }
//Q6   
    if (document.getElementById('6op1').checked) {
        console.log("Answer 6 is correct.")
        score = score+1;
        }
    else{
        console.log("Answer 6 is incorrect.")
        score = score+0;
    }
//Q7
    if (document.getElementById('7op2').checked) {
        console.log("Answer 7 is correct.")
        score = score+1;
        }
    else{
        console.log("Answer 7 is incorrect.")
        score = score+0;
    }
//Q8
    if (document.getElementById('8op3').checked) {
        console.log("Answer 8 is correct.")
        score = score+1;
        }
    else{
        console.log("Answer 8 is incorrect.")
        score = score+0;
    }
//Q9
    if (document.getElementById('9op1').checked) {
        console.log("Answer 9 is correct.")
        score = score+1;
        }
    else{
        console.log("Answer 9 is incorrect.")
        score = score+0;
    }
//Q10
    if (document.getElementById('10op1').checked) {
        console.log("Answer 10 is correct.")
        score = score+1;
        }
    else{
        console.log("Answer 10 is incorrect.")
        score = score+0;
    }

    alert('Obtained Score:'+score);
    

    
}
*/