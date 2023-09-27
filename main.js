// My JS-code
console.log("main.js is loaded...");


// My HTML element variables
const input = document.querySelector("#todoInput");
const list = document.querySelector("ul");
const btnAddTodo = document.querySelector("#addTodo");
const info = document.querySelector("small");
const completedInfo = document.querySelector("p");

// My JS variables
let completedCount = 0;
const todoArray = [];

btnAddTodo.addEventListener("click", function () {

    // fetch value from input
    const text = input.value;

    // check that text is not empty
    if (text.length == 0) {
        info.innerText = "Input must not be empty";        
        return;
    }
    else {
        info.innerText = "";
    }


    // create li-element in ul
    const item = document.createElement("li");
    list.appendChild(item);

    // create a span-element in out new li and add text
    const itemLabel = document.createElement("p");
    itemLabel.innerText = text;
    item.appendChild(itemLabel);

    // add a listener to the span & change completedCount
    itemLabel.addEventListener("click", function () {

        // Toggle completed/uncompleted
        if (item.getAttribute("class") == "completed") {

            item.setAttribute("class", "");
            completedCount--
        }
        else
        {
            item.setAttribute("class", "completed");
            completedCount++
        }

        completedInfo.innerText = `${completedCount} completed`;
    

    })


    //Empty input field
    input.value = "";

})
