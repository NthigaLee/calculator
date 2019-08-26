var beverage=prompt("Would you like tea, coffee or fruit juice?");
if (beverage=="tea"){
    alert("Your tea is on the way.");
}
else if(beverage=="coffee"){
    alert("Enjoy your dose of caffeine!");
}
else{
    var juice=prompt("Pineapple or apple juice?");
    juice;
}

if (juice =="pineapple"){
    alert("I love pineapple too.");
}
else if(juice=="apple"){
    alert("Enjoy your apple a day!");
}
else{
    alert("Too bad you didn't want juice..");
}

var score =prompt("What's your score?");
if(score===0&&score<=20){
    alert("E!!! You failed bruh..");
}
else if (score<=39){
    alert("D!! Pull up them socks bruh..");
}
else if(score<=59){
    alert("C. You'll get there one day..");
}
else if(score<=79){
    alert("B! Eeeeyyy.. Sasa pata A.");
}
else if(score<=100){
    alert("A!!! Acha shule sasa.")
}