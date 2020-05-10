/*Calculate the Profit
You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar. Assume all of the inventory has been sold.
Notes:
Profit = Total Sales - Total Cost
--------------------------------------------------------------------------------------------------------------------*/
/*var info = {
  costPerUnit: 225.89,
  sellPerUnit: 550.00,
  inventory  : 100
  }; */
  
  //input from object info: costPerUnit:225.89, sellPerUnit:550.00, inventory:100
  function profit(info) {
   let result = Math.round(info.inventory * (info.sellPerUnit - info.costPerUnit));
   //return result;
  //console.log(result); 
  }
  //profit(info); // output: 32411 

//input from object info: costPerUnit:32.67, sellPerUnit:45.00, inventory:1200
  var info = {
    costPerUnit: 32.67,
    sellPerUnit: 45.00,
    inventory  : 1200
    };
    
    //input from object info: costPerUnit:, sellPerUnit:, inventory:
    function profit(info) {
     let result = Math.round(info.inventory * (info.sellPerUnit - info.costPerUnit));
     //return result;
    console.log(result); 
    }
    profit(info); // output:  14796 
  