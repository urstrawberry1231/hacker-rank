# HackerRank Practice Solutions

This repository contains my solutions to various HackerRank practice problems.  
Each problem is solved in **JavaScript**, with explanations and example outputs.

________________________________________________________________________________________________________
## Problem 1: Solve Me First  

**Description**  
Write a function that takes two integers as input and returns their sum.

**Explanation**  
The function `solveMeFirst(a, b)` simply adds the two numbers and returns the result.  
- **Input:** two integers `a` and `b`  
- **Process:** add `a` and `b`  
- **Output:** the sum of `a` and `b`  

**Flowchart**  
![Flowchart](images/flowchart1.jpeg)

**Solution Code**
```javascript
function solveMeFirst(a, b) {
    return a + b;
}

let a = 2, b = 3;
console.log("The sum of", a, "and", b, "is:", solveMeFirst(a, b))
```
**Output**
The sum of 2 and 3 is: 5
________________________________________________________________________________________________________
## Problem 2: Simple Array Sum  

**Description**  
Given an array of integers, find the sum of its elements.  

**Explanation**  
The function `simpleArraySum(arr)` iterates through the array and adds each element.  
- **Input:** an array of integers, e.g., `[1, 2, 3, 4, 10, 11]`  
- **Process:** sum all the elements  
- **Output:** the total sum  

**Flowchart**  
![Flowchart](images/flowchart2.jpeg)  

**Solution Code**
```javascript
function simpleArraySum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

let arr = [1, 2, 3, 4, 10, 11];
console.log("The sum of the array elements is:", simpleArraySum(arr));
```
**Output**
The sum of the array elements is: 31
________________________________________________________________________________________________________
## Problem 3: Plus Minus  

**Description**  
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.  

**Explanation**  
The function `plusMinus(arr)` counts the number of positive, negative, and zero elements in the array.  
- **Input:** an array of integers, e.g., `[-4, 3, -9, 0, 4, 1]`  
- **Process:**  
  1. Initialize counters for positive, negative, and zero.  
  2. Loop through each element of the array:  
     - If element > 0 → increment positive counter.  
     - Else if element < 0 → increment negative counter.  
     - Else → increment zero counter.  
  3. Divide each counter by the array size to get ratios.  
  4. Print each ratio with 6 decimal places.  
- **Output:** three lines showing the positive ratio, negative ratio, and zero ratio.  

**Flowchart**  
![Flowchart](images/flowchart3.jpeg)  

**Solution Code**
```javascript
function plusMinus(arr){
    let negative = 0;
    let positive = 0;
    let zero = 0;
    let arraySize = arr.length;

    for(let element of arr){
        if(element > 0){
            positive++;
        }
        else if(element < 0){
            negative++;
        }else{
            zero++;
        }
    }
    let plusRatio = positive/arraySize;
    let negativeRatio = negative/arraySize;
    let zeroRatio = zero/arraySize;

    console.log(plusRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
```
**Output**
0.500000
0.333333
0.166667
## Problem 4: Mini-Max Sum  

**Description**  
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Print the respective minimum and maximum values as a single line of two space-separated integers.  

**Explanation**  
The function `miniMaxSum(arr)` works as follows:  
- **Input:** an array of integers, e.g., `[1, 2, 3, 4, 5]`  
- **Process:**  
  1. Initialize `sum = 0`, `max = arr[0]`, `min = arr[0]`.  
  2. Loop through the array:  
     - Add each element to `sum`.  
     - Update `max` if the current number is greater.  
     - Update `min` if the current number is smaller.  
  3. Compute `minSum = sum - max` (sum of 4 smallest numbers).  
  4. Compute `maxSum = sum - min` (sum of 4 largest numbers).  
  5. Print `minSum` and `maxSum`.  
- **Output:** two space-separated integers: the minimum sum and the maximum sum.  

**Flowchart**  
![Flowchart](images/flowchart4.jpeg)  

**Solution Code**
```javascript
function miniMaxSum(arr){
    let sum = 0;
    let max = arr[0];
    let min = arr[0];

    for (let num of arr){
        sum += num;
        if(num > max){
            max = num;
        }
        if(num < min){
            min = num;
        }
    }
    let minSum = sum - max;
    let maxSum = sum - min;

    console.log(minSum, maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);
```
**Output**
10 14
## Problem 5: A Very Big Sum

**Description** 
Given in array of integers, return the sum of its elements. This problem is similar to simple array sum, but the input values can be very large.

**Explanation**
The function aVeryBigSum(arr) goes through each number in the array adds it to a running total.
- **Input**: an array of integers
- **Process**: sum all the elements
- **Output**: total sum

**Flowchart**  
![Flowchart](images/flowchart5.jpeg)  

**Solution Code**
```javascript
function aVeryBigSum(arr){
    let sum = 0;
    for(let element of arr){
        sum += element;
    }
    return sum;
}
```
**Output**
The sum of the array elements is: 5000000015
## Problem 6: Divisible Sum Pairs

**Description** 
This program finds the number of pairs in an array whose sum is evenly divisible by a given integer k

**Explanation**
1. The function takes three inputs:
    - n → the number of elements in the array.
    - k → the divisor.
    - ar → the array of integers.
2. It loops through all possible pairs (i, j) where i < j.
3. For each pair, it checks if (ar[i] + ar[j]) % k === 0.
4. If true, it increases the divisible counter.
5. Finally, it returns the total count.

**Flowchart**  
![Flowchart](images/flowchart6.jpeg)  

**Solution Code**
```javascript
function divisibleSumPairs(n, k, ar) {
    let divisible = 0;

    for (let i = 0; i < n; i++) {       
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {   
                divisible++;
            }
        }
    }
    return divisible;
}
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
```
**Output**
5
## Problem 7: Grading Students

**Description** 
Given an array of student grades, return the final grades after applying rounding rules. If the grade is less than 38, it remains the same. If the grade is 38 or higher, round it up to the next multiple of 5 if the difference is less than 3. Otherwise, keep the grade unchanged.

**Explanation**
The function gradingStudents(grades) goes through each grade and applies the rounding rules.
    - **Input**: an array of student grades
    - **Process**: round grades according to the conditions
    - **Output**: a new array of final grades


**Flowchart**  
![Flowchart](images/flowchart7.jpeg)  

**Solution Code**
```javascript
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
```
**Output**
[75, 67, 40, 33]
## Problem 8: Bon Appetit
**Description** 
Anna and Brian are splitting a bill. If Brian overcharged Anna for an item she didn’t eat, determine if he was fair or how much he owes back.

**Explanation**
The function bonAppetit(bill, k, b) calculates Anna’s share excluding item k.
    - **Input**: array bill, index k, charged amount b
    - **Process**: compute correct share, compare with charged
    - **Output**: "Bon Appetit" or refund amount


**Flowchart**  
![Flowchart](images/flowchart8.jpeg)  

**Solution Code**
```javascript
function bonAppetit(bill, k, b) {
    let total = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            total += bill[i];
        }
    }
    const annaShare = total / 2;

    if (b === annaShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare);
    }
}
```
**Output**
bill = [3, 10, 2, 9], k = 1, b = 12, the result is: 5
## Problem 9: Compare Triplets

**Description**  
Given two arrays representing scores of Alice and Bob, compare their scores element by element. Alice gets a point if her score is higher, Bob gets a point if his score is higher, and no points if they are equal. Return their points as an array.

**Explanation**  
The function `compareTriplets(a, b)` loops through both arrays and compares each score.  
- **Input**: two arrays of equal length  
- **Process**: compare each element, increment Alice’s or Bob’s score  
- **Output**: array with `[Alice’s score, Bob’s score]`  

**Flowchart**  
![Flowchart](images/flowchart9.jpeg)

**Solution Code**
```javascript
function compareTriplets(a, b) {
    let aCount = 0;
    let bCount = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aCount++;
        } else if (a[i] < b[i]) {
            bCount++;
        }
    }

    console.log(aCount, bCount);
    return [aCount, bCount];
}
```
**Output**
input [5, 6, 7] and [3, 6, 10], the result is: [1, 1]
## Problem 10: Diagonal Different  

**Description**  
Given a square matrix, calculate the absolute difference between the sums of its primary diagonal and secondary diagonal.

**Explanation**  
The function diagonalDifference(arr) adds numbers in both diagonals and finds their absolute difference.
- **Input:** a square 2D array  
- **Process:** sum primary diagonal, sum secondary diagonal, subtract
- **Output:** absolute difference

**Flowchart**  
![Flowchart](images/flowchart10.jpeg)

**Solution Code**
```javascript
function diagonalDifference(arr) {
    let n = arr.length;
    let primarySum = 0;
    let secondarySum = 0;

    for (let i = 0; i < n; i++) {
        primarySum += arr[i][i];
        secondarySum += arr[i][n - 1 - i];
    }

    return Math.abs(primarySum - secondarySum);
}
```
**Output**
[ [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12] ]
The result is: 15
## Problem 11: Staircase

**Description**  
Given a number n, print a staircase of # symbols that is right-aligned.

**Explanation**  
The function staircase(n) builds each row using spaces and #.
- **Input:** integer n 
- **Process:** for each row, add spaces then add # 
- **Output:** print staircase  

**Flowchart**  
![Flowchart](images/flowchart11.jpeg)

**Solution Code**
```javascript
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let k = 0; k < n - i; k++) {
            row += " ";
        }

        for (let h = 0; h < i; h++) {
            row += "#";
        }

        console.log(row);
    }
}
```
**Output**
   #
  ##
 ###
####

## Problem 12: Time Conversion

**Description**  
Convert a 12-hour AM/PM formatted time into 24-hour military time.

**Explanation**  
The function timeConversion(s) extracts hours, minutes, seconds, and adjusts hours depending on AM/PM.
- **Input:** string in hh:mm:ssAM or hh:mm:ssPM
- **Process:** convert 12-hour to 24-hour format
- **Output:** 24-hour time string  

**Flowchart**  
![Flowchart](images/flowchart12.png)

**Solution Code**
```javascript
function timeConversion(s) {
    let hour = parseInt(s.slice(0, 2));
    let mins = s.slice(3, 5);
    let secs = s.slice(6, 8);
    let period = s.slice(8, 10);

    if (period === "AM") {
        if (hour === 12) {
            hour = 0;
        }
    } else {
        if (hour !== 12) {
            hour += 12;
        }
    }

    let hourStr = String(hour).padStart(2, '0');
    return `${hourStr}:${mins}:${secs}`;
}
```
**Output**
input 07:05:45PM, the result is: 19:05:45
## Problem 13: Cat and Mouse

**Description**  
Two cats and a mouse are on a line. Given their positions, determine which cat will reach the mouse first, or if the mouse escapes.

**Explanation**  
The function catAndMouse(x, y, z) compares the distances of each cat from the mouse.
- **Input:** positions of Cat A, Cat B, and Mouse C
- **Process:** compute absolute distances, compare
- **Output:** "Cat A", "Cat B", or "Mouse C"  

**Flowchart**  
![Flowchart](images/flowchart13.png)

**Solution Code**
```javascript
function catAndMouse(x, y, z) {
    let distA = Math.abs(x - z);
    let distB = Math.abs(y - z);

    if (distA > distB) {
        return "Cat B";
    } else if (distA < distB) {
        return "Cat A";
    } else {
        return "Mouse C";
    }
}
```
**Output**
input (1, 2, 3), the result is: Cat B
## Problem 14: Birthday Cake Candles

**Description**  
You are given an array of integers representing the heights of birthday cake candles. Your task is to determine how many of the tallest candles can be blown out.

**Explanation**  
The function birthdayCakeCandles(candles) finds the maximum height in the array and counts how many candles have that height.
- **Input:** an array of integers, e.g., [3, 2, 1, 3]
- **Process:** 
    1. Initialize max with the first element and tallest = 0.
    2. Loop through each candle height:
        - If the height is greater than max, update max and reset tallest = 1.
        - If the height is equal to max, increment tallest.
    3. Return the value of tallest.
- **Output:** the number of tallest candles.

**Flowchart**  
![Flowchart](images/flowchart14.png)

**Solution Code**
```javascript
function birthdayCakeCandles(candles) {
    let tallest = 0;
    let max = candles[0];
    for (let i of candles) {
        if (i > max) {
            max = i;
            tallest = 1;
        } else if (i === max) {
            tallest++;
        }
    }
    return tallest;
}

// Example
console.log(birthdayCakeCandles([3, 2, 1, 3])); 
```
**Output**
2
## Problem 15: Angry Professor

**Explanation**
The code angryProfessor is used to decide if the class will be canceled or not. It checks the arrival times of students, and if their time is less than or equal to zero, they are counted as on time. After counting, the program compares it with the required number k. If the number of students on time is less than k, it means the class is canceled, so it returns "YES". If not, the class will still continue, so it returns "NO".

**Flowchart**  
![Flowchart](images/flowchart15.png)
## Problem 16: Beautiful Days

**Explanation**
The beautifulDays function checks how many “beautiful days” exist between two numbers i and j. A day is considered beautiful if the difference between the day and its reversed version is evenly divisible by k. The program loops through each day in the range, reverses the number, finds the difference, and checks if it is divisible by k. If yes, it adds to the count. Finally, it returns the total number of beautiful days.

**Flowchart**  
![Flowchart](images/flowchart16.png)
## Problem 17: Between Two Sets

**Explanation**
The getTotalX function solves the “Between Two Sets” problem. The goal is to count how many numbers are multiples of all elements in array a and at the same time factors of all elements in array b. To do this, the code first finds the least common multiple (LCM) of array a, then finds the greatest common divisor (GCD) of array b. After that, it checks all multiples of the LCM up to the GCD. If one of these multiples divides the GCD evenly, it is counted as valid. In the end, the function returns the total count of such numbers.

**Flowchart**  
![Flowchart](images/flowchart17.png)
## Problem 18: Breaking Records 

**Explanation**
The breakingRecords function tracks how many times a player breaks their record for the highest and lowest scores during a season. It starts by setting the first score as both the initial minimum and maximum. Then it loops through the rest of the scores. If a score is higher than the current maximum, the maximum is updated and the count for breaking the highest record increases. If a score is lower than the current minimum, the minimum is updated and the count for breaking the lowest record increases. At the end, the function returns the two counts as an array.

**Flowchart**  
![Flowchart](images/flowchart18.png)
## Problem 19: Count Apple and Oranges

**Explanation**
This program is about counting how many apples and oranges land on a house. The house is between points s and t on a number line. The apple tree is at position a and the orange tree is at position b. Each fruit falls at a certain distance from its tree, which can be positive (falling to the right) or negative (falling to the left).

The code uses two loops. The first loop checks every apple. It calculates where the apple lands by adding its distance to the apple tree position. If the landing spot is inside the house range (between s and t), then the apple count increases. The same process is done for oranges in the second loop.

In the end, the program prints two numbers: the total apples that fall on the house and the total oranges that fall on the house. This way, we can know exactly how many fruits land on the house.

**Flowchart**  
![Flowchart](images/flowchart19.png)
## Problem 20: Counting Valleys

**Explanation**
This program counts how many valleys a hiker goes through during a hike. The function takes in the number of steps and the path, where each step is either "U" for uphill or "D" for downhill. The variable level keeps track of the hiker’s altitude, starting from sea level (0). Every time the hiker goes up, the level increases, and every time they go down, the level decreases. A valley is counted whenever the hiker comes back up to sea level after being below it. The variable valleys is used to count these occurrences. In the end, the function returns the total number of valleys crossed.

**Flowchart**  
![Flowchart](images/flowchart20.png)
## Problem 21: Flat Land Space Station

**Explanation**
The flatlandSpaceStations function is used to find the farthest distance a city can be from a space station. First, the function sorts the array of space stations to make it easier to calculate distances. Then, it checks the distances at the edges, which are from the first city to the first station and from the last city to the last station. After that, it loops through all the space stations to find the maximum distance between any two stations. This is done by dividing the gap between stations by two because a city in the middle will be closest to either station. Finally, the function returns the largest distance among the edges and the middle. This way, we can know the city that is farthest from a space station.

**Flowchart**  
![Flowchart](images/flowchart21.png)
## Problem 22: Migratory Birds

**Explanation**
The migratoryBirds function finds the most common type of bird in an array of bird sightings. First, it counts how many times each bird type appears using an object. Then, it checks which bird type has the highest frequency. If two types have the same frequency, it chooses the smaller ID. Finally, it returns the ID of the most frequent bird type. This function helps determine which bird is seen the most.

**Flowchart**  
![Flowchart](images/flowchart22.png)
## Problem 23: Money Spent

**Explanation**
The getMoneySpent function calculates the most money you can spend to buy one keyboard and one USB drive without going over a budget b. It goes through all possible combinations of keyboards and drives using two loops. For each combination, it checks if the total cost is within the budget and higher than the current maximum spent. If it is, it updates the maximum spent. Finally, the function returns the highest amount possible that stays under the budget, or -1 if no combination fits the budget.

**Flowchart**  
![Flowchart](images/flowchart23.png)
## Problem 24: Permutation Equation

**Explanation**
The permutationEquation function finds a new sequence based on a given permutation array p. For each number x from 1 to n, it first finds the position of x in the array. Then it finds the position of that position in the array. This second position is added to a result array. Finally, the function returns the array of all these positions. Essentially, it solves the problem of finding y such that p[p[y]] = x for each x.

**Flowchart**  
![Flowchart](images/flowchart24.png)
## Problem 25: Picking Numbers

**Explanation**
The pickingNumbers function finds the longest subarray where the difference between any two numbers is at most 1. It uses two loops: the outer loop goes through each element, and the inner loop counts how many elements are equal to the current element or one more than it. After counting, it checks if this count is greater than the current maximum length and updates it if needed. Finally, the function returns the length of the largest valid subarray. This helps determine the largest group of numbers that are close in value.

**Flowchart**  
![Flowchart](images/flowchart25.png)
## Problem 26: Sock Merchant

**Explanation**
The sockMerchant function counts how many pairs of socks are in an array. It uses a set to keep track of socks we have seen. For each sock in the array, it checks if the sock is already in the set. If it is, it forms a pair, increases the pair count, and removes the sock from the set. If it isn’t, the sock is added to the set. Finally, the function returns the total number of pairs. This helps quickly find matching socks without using nested loops.

**Flowchart**  
![Flowchart](images/flowchart26.png)
## Problem 27: Utopian Tree

**Explanation**
The utopianTree function calculates the height of a tree after n growth cycles. The tree grows in two different ways depending on the season: during spring (odd cycles), the height doubles, and during summer (even cycles), the height increases by one. The function uses a loop to apply these rules for each cycle and finally returns the tree’s height after all cycles. This helps model the tree’s alternating seasonal growth.

**Flowchart**  
![Flowchart](images/flowchart27.png)
## Problem 28: Viral Advertising

**Explanation**
The viralAdvertising function calculates the total number of likes an advertisement receives after n days. Each day, half of the people who receive the ad like it (rounded down), and each person who likes it shares it with three friends. The function uses a loop to repeat this process for each day, keeps a running total of likes, and finally returns the total count. This models how the ad spreads virally over time.

**Flowchart**  
![Flowchart](images/flowchart28.png)
## Problem 29: Cut the Stick

**Explanation**
The function cutTheSticks works by simulating the process of cutting sticks until none are left. At the beginning, it records how many sticks are still available. Then it finds the smallest stick in the array and cuts that length from all sticks. After cutting, any stick that becomes zero is removed, since it can no longer be used. This process repeats again and again: count the sticks, cut them by the smallest length, and remove the finished ones. The function keeps storing the number of sticks left before each cut into a result array. In the end, it returns that array, which shows how many sticks were present in each round of cutting. This way, the program clearly tracks the progress of reducing all sticks until they are gone.

**Flowchart**  
![Flowchart](images/flowchart29.png)