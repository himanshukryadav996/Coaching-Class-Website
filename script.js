// Simple admin login using prompt()
// If correct password is entered, redirect to admin page.
function adminLogin() {
  var password = prompt("Enter admin password:");
  if (password === "1234") {
    // On successful login, you could redirect to an admin page:
    // window.location.href = "admin.html";
    alert("Login successful! (Redirect to admin page)");
  } else {
    alert("Incorrect password. Access denied.");
  }
}

// Optionally, attach adminLogin to a link/button
// (This function is called in the HTML <a onclick> above.)
