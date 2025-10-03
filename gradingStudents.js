function gradingStudents(grades){
    let finalGrade = [];

    for(let num of grades){
        if(num < 38){
            finalGrade.push(num);
        }else{
            let nextMultiple = Math.ceil(num/5)*5;
            if(nextMultiple - num < 3){
                finalGrade.push(nextMultiple);
            }else{
                finalGrade.push(num);
            }
        }
    }
    return finalGrade;
}