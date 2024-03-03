// Function to check if the user has scrolled to the bottom of the list
function isAtBottom() {
    // Calculate the distance between the bottom of the list and the bottom of the viewport
    var list = document.getElementById("infi-list");
    return list.scrollTop + list.clientHeight >= list.scrollHeight;
}

// Function to add more list items
function addItems() {
    // Create and append new list items
    for (var i = 0; i < 2; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = "Item " + (itemCount++);
        document.getElementById("infi-list").appendChild(listItem);
    }
}

// Add initial list items
var itemCount = 1;
for (var i = 1; i <= 10; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = "Item " + itemCount++;
    document.getElementById("infi-list").appendChild(listItem);
}

// Add event listener to the scroll event on the list
document.getElementById("infi-list").addEventListener("scroll", function() {
    // Check if the user has scrolled to the bottom of the list
    if (isAtBottom()) {
        // Add more list items
        addItems();
    }
});
