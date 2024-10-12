function searchBlog() {
    // Get the search query from the search bar
    let query = document.getElementById("search-bar").value.toLowerCase();

    // Get all blog posts
    let posts = document.querySelectorAll('.post');

    // Loop through all posts and hide those that don't match the query
    posts.forEach(function(post) {
        // Get the content from elements with the 'subject' class (title or body)
        let subjects = post.querySelectorAll('.subject');
        let postContainsQuery = false;

        // Check if any 'subject' elements contain the search query
        subjects.forEach(function(subject) {
            if (subject.textContent.toLowerCase().includes(query)) {
                postContainsQuery = true;
            }
        });

        // Show or hide the post based on whether it contains the search query
        if (postContainsQuery) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}