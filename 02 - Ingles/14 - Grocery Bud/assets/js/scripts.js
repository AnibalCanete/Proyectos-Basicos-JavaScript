
// Select Items
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// Edit Option
let editElement;
let editFlag = false;
let editID = "";

// Event Listeners

// Submit Form
form.addEventListener("submit", addItem);
// Clear List
clearBtn.addEventListener("click", clearItems);
// Display Items Onload
window.addEventListener("DOMContentLoaded", setupItems);

// Functions

// Add Item
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    
    if (value !== "" && !editFlag) {
        const element = document.createElement("article");
        let attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.classList.add("grocery-item");
        element.innerHTML = `
            <p class="title">${value}</p>
            <div class="btn-container">
                <!-- Boton Editar - Edit btn -->
                <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <!-- Boton Eliminar - Delete btn -->
                <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        // Add Event Listeners to Both Buttons
        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteItem);
        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click", editItem);

        // Append Child
        list.appendChild(element);
        // Display Alert
        displayAlert("Item Added to The List", "Success");
        // Show Container
        container.classList.add("show-container");
        // Set Local Storage
        addToLocalStorage(id, value);
        // Set Back to Default
        setBackToDefault();
    } else if (value !== "" && editFlag) {
        editElement.innerHTML = value;
        displayAlert("Value Changed", "Success");

        // Edit Local Storage
        editLocalStorage(editID, value);
        setBackToDefault();
    } else {
        displayAlert("Please Enter Value", "Danger");
    }
}

// Display Alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // Remove Alert
    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

// Clear Items
function clearItems() {
    const items = document.querySelectorAll(".grocery-item");
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("Empty List", "Danger");
    setBackToDefault();
    localStorage.removeItem("list");
}

// Delete Item 
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;

    list.removeChild(element);

    if (list.children.length === 0) {
        container.classList.remove("show-container");
    }
    displayAlert("Item Removed", "Danger");
    setBackToDefault();
    // Remove From Local Storage
    removeFromLocalStorage(id);
}

// Edit Item
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // Set Edit Item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // Set Form Value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}

// Set Back to Defaults
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}

// Local Storage

// Add To Local Storage
function addToLocalStorage(id, value) {
    const grocery = { id, value };
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    });

    localStorage.setItem("list", JSON.stringify(items));

}

function editLocalStorage(id, value) {
    let items = getLocalStorage();

    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}

// Setup Items
function setupItems() {
    let items = getLocalStorage();

    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value);
        });
        container.classList.add("show-container");
    }
}

function createListItem(id, value) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
            <!-- Boton Editar - Edit btn -->
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <!-- Boton Eliminar - Delete btn -->
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;

    // Add Event Listeners to Both Buttons
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);
    // Append Child
    list.appendChild(element);
}
