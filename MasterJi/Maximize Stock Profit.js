Maximize Stock Profit
medium

Tags

Companies

Hints
You are given an array prices where prices[i] represents the price of a given stock on the ith day.

Your objective is to maximize your profit by selecting a single day to buy one stock and another day after it to sell that stock.

Return the maximum profit one can make from these transactions. If no profit can be made, return 0.

Imagine that you have a unique opportunity to buy certain items and resell them later at an increased price. You have a record of the daily prices of this item, and your task is to decide the most suitable day to make your purchase so you can sell it later for the maximum possible price.

To achieve this goal, consider the following steps:

Identify the optimal day to purchase the stock at the lowest possible price.

Determine a future day to sell that stock at a price higher than the purchase price.

As you analyze the list of daily prices, search for the day with the minimum purchase price. After pinpointing this price, examine the subsequent prices to find the day with the optimal selling price.

If there isn’t any profitable scenario where the selling price exceeds the buying price, then the best decision is to achieve zero profit. Otherwise, the maximum profit is the difference between the highest selling price and the lowest purchase price.

Examples
Example:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Example:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
Constraints
1 <= prices.length <= 10^5

0 <= prices[i] <= 10^4class Solution {
    maximizeStockProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            } else if (prices[i] - minPrice > maxProfit) {
                maxProfit = prices[i] - minPrice;
            }
        }

        return maxProfit;
    }
}
