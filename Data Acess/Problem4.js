/*
TODO: Problem-4: Suppose there is an object; const shop = {items:[{name:'pen',stock:100},{name:'notebook',stock:50}]} if you want to retrieve the stock of 'notebooks' from an array of items, how would you write the program?
*/

const shop = {
    items: [
        {name: 'pen', stock: 100},
        {name: 'notebook', stock: 50}
    ]
};
console.log(shop.items[1].stock);