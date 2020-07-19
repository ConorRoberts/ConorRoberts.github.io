class Question{
    constructor(question,answers,correct){
        this.question=question;
        this.answers=answers;
        this.correct=correct;
    }

    check(str){
        return this.correct===str;
    }
}

var score,userInput,q;
var questions=[
    new Question("What's my name?",["Jeff","Jeff","Conor"],"Conor"),
    new Question("What month is it?",["July","August","September","October"],"July"),
    new Question("Who not ape?",["Caesar","Koba","Maurice","Caesar 2"],"Koba"),
    new Question("Who is Jonas?",["Large cock","Idiot","Stupid stinky","No IQ small man"],"Large cock")
];

init();

document.getElementById("btn-submit").addEventListener("click",function(){
    userInput=document.getElementById("choice").value;
    if(q.check(userInput)) document.getElementById("score").textContent=++score;
    newQuestion();
});

function random_question(){
    return Math.floor(Math.random()*questions.length);
}

function init(){
    q = questions[random_question()];
    score=0;
    document.getElementById("question").textContent=q.question;
    document.getElementById("answer").textContent=q.answers;
}

function newQuestion(){
    q = questions[random_question()];
    document.getElementById("question").textContent=q.question;
    document.getElementById("answer").textContent=q.answers;
    document.getElementById("choice").value="";
}
