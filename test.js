
var scores = [10,20,30,40,50,60]

var totalScore=0;
var averageScore;

// for ( var i in scores){
//     totalScore += scores[i];
// }

// for ( var i = 0; i < scores.length; i++ ) {
//     totalScore += scores[i];
//     }

for(var i=0; i<scores.length; i++){
    totalScore+=scores[i];
    console.log(totalScore/scores.length);
}

console.log("총합 "+totalScore);

averageScore = totalScore / scores.length;

console.log("평균 "+averageScore);