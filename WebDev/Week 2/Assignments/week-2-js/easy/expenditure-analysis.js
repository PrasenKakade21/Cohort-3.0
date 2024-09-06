/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  const ht = {};
  const res = [];
  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];
    if(category in ht){
      ht[category] += price;
    }
    else{
      ht[category] = price;
    }
  }
  for (const category in ht) {
    res.push({ category, totalSpent: ht[category] });
  }
  // console.log(ht)
  return res;
}


 module.exports = calculateTotalSpentByCategory;

