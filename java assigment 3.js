//Inventory
let inventory = [
    {id: 1, name: "Apple", price: 5, quantity: 20 },
    {id: 2, name: "Fish", price: 15, quantity: 30 },
    {id: 3, name: "Water", price: 3, quantity: 40 }
];

//add Product Function
function addProduct(){
    let id = Number(prompt("Enter item ID:"));
    let name = prompt("Enter item name");
    let price = Number(prompt("Enter item price"));
    let quantity = Number(prompt("Enter item quantity"));
    inventory.push({id: id, name: name, price: price, quantity: quantity});
    console.log("Product added successfully.");
}

//Remove Product Function
// Remove Product Function
// Remove Product Function
function removeProduct(){
    let idToRemove = Number(prompt("Enter item id to remove"));
    let indexToRemove = inventory.findIndex(product => product.id === idToRemove);

    if (indexToRemove !== -1) {
        let quantityToRemove = Number(prompt("Enter quantity to remove"));
        if (quantityToRemove <= inventory[indexToRemove].quantity && quantityToRemove > 0) {
            inventory[indexToRemove].quantity -= quantityToRemove;
            console.log(quantityToRemove + " " + inventory[indexToRemove].name + "(s) removed");
        } else {
            console.log("Invalid quantity to remove");
        }
    } else {
        console.log("Product not found");
    }
}



//Display Inventory Function
function displayInventory(){
    console.log("inventory");
    if (inventory === 0) {
        console.log("Inventory is empty");
    } else {
    inventory.forEach(product => {
        console.log(product.id + " " + product.name + " " + product.price + " " + product.quantity);
    });
}
}
//calculate Total value
function calculateTotalValue(){
    let totalValue = 0;
    inventory.forEach(product => {
        totalValue += product.price * product.quantity;
    });
    console.log("Total value of inventory: $" + totalValue.toFixed(2));
}

// Main program loop
while (true){
    let choice = Number(prompt("coose an option:/n1. add product/n2. Remove Product/n3. Display inventory/n4. Calculate total value/n5. exit"));
    switch (choice) {
        case 1:
            addProduct();
            break;
            case 2:
                removeProduct();
                break;
                case 3:
                    displayInventory();
                        break;
                        case 4:
                            calculateTotalValue();
                            break;
                            case 5:
                                console.log("Exiting Program");
                                procces.exit();
                                default:
                                    console.log("Invalid choice. Please choose a valid option.");

    }
}

