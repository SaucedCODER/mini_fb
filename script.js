document.addEventListener("DOMContentLoaded", function () {

    // Switch to Register Form
    document.getElementById("showRegisterForm").addEventListener("click", function () {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("registerForm").style.display = "block";
    });
  
    // Switch to Login Form
    document.getElementById("showLoginForm").addEventListener("click", function () {
      document.getElementById("loginForm").style.display = "block";
      document.getElementById("registerForm").style.display = "none";
    });
  
    // Handle Registration
    document.getElementById("register").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("registerName").value;
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;
      const gender = document.getElementById("registerGender").value;
     
      if (!name || !email || !password || !gender) {
        alert("All fields are required!");
        return;
      }
  
      // Check if the user already exists in LocalStorage
      let users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some(user => user.email === email);
  
      if (userExists) {
        alert("This email is already registered!");
        return;
      }
  
      // Store user data in LocalStorage
      users.push({ name, gender, email, password });
      localStorage.setItem("users", JSON.stringify(users));
  
      alert("Account created successfully!");
      document.getElementById("showLoginForm").click();
    });
  
    // Handle Login
    document.getElementById("login").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
  
      if (!email || !password) {
        alert("Both fields are required!");
        return;
      }
  
      // Check if user exists in LocalStorage
      let users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(user => user.email === email && user.password === password);
  
      if (user) {
        // Store user data in LocalStorage and redirect
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Login successful!");
        
        // Redirect to the welcome page
        window.location.href = "welcome.html"; // You can replace this URL with the actual path of your welcome page
      } else {
        alert("Invalid email or password!");
      }
    });
  
  });
  