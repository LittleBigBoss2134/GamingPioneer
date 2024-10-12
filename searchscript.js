document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    let query = document.getElementById("searchInput").value.toLowerCase();
    let divs = document.querySelectorAll(".bluebg"); // Get all divs with the class "bluebg"
    let found = false; // Track if we find any match

    divs.forEach(div => {
        if (div.textContent.toLowerCase().includes(query)) {
            div.style.display = "block"; // Show the div if it matches the search
            found = true;
        } else {
            div.style.display = "none"; // Hide the div if it doesn't match
        }
    });

    // If no divs are found, show a "No results found" message
    if (!found) {
        document.getElementById("noResults").style.display = "block";
    } else {
        document.getElementById("noResults").style.display = "none";
    }
});