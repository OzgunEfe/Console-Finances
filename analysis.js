console.log("Financial Analysis")
console.log("----------------------------")

// 1. The total number of months included in the dataset.
var totalMonths = finances.length;
console.log("Total Months: " + totalMonths);


// 2. The net total amount of Profit/Losses over the entire period.
// I created a new Array called monthlyProfits and I pushed the only profits objects to the new Array.
var monthlyProfits = []
for (i=0; i<finances.length; i++){
    monthlyProfits.push(finances[i][1]);
}

var SumOfProfit = 0;

for (var value of monthlyProfits) {
    SumOfProfit += value;
}

console.log("Total: $" + SumOfProfit);


// 3. The average of the changes in Profit/Losses over the entire period. You will need to track what the total change in profits are from month to month and then find the average. (Total/Number of months).

// I already found the Sum of Profit and total Months above. I used the Total Profit / Number of months formula here.
var averageChange = SumOfProfit / totalMonths;

// I used this formula to reduce the decimal extension to 2 digits.
averageChange = Number(averageChange.toFixed(2));

console.log("Average Change: $" + averageChange);


// 4. The greatest increase in profits (date and amount) over the entire period.

// I used the function below to sort the profits from higher to lower.
var higherToLower = monthlyProfits.sort(function(a, b){return b - a});
// I took the index 0 because it will be the highest Profit.
var higherProfit = higherToLower[0];
// I also used a find feature because the month was also requested. Therefore, I used the highest Profit to find the month.
var findHigherProfitMonth = finances.find(month => month[1] == higherProfit);

var HigherProfitMonth = findHigherProfitMonth[0];

console.log("Greatest Increase in Profits: "+ HigherProfitMonth + ": $" + higherProfit);


// 5. The greatest decrease in losses (date and amount) over the entire period.
// I did the same operations above again here, Only, I changed the function from lower to higher.
var lowerToHigher = monthlyProfits.sort(function(a, b){return a - b});

var lowerProfit = lowerToHigher[0];

var findLowerProfitMonth = finances.find(month => month[1] == lowerProfit);

var lowerProfitMonth = findLowerProfitMonth[0];

console.log("Greatest Decrease in Profits: " + lowerProfitMonth + ": $" + lowerProfit);