document.getElementById("payBtn").onclick = function(e){
  var options = {
    "key": "rzp_test_yourKeyHere",  // replace with your Razorpay key
    "amount": 9900, // ₹99 in paise
    "currency": "INR",
    "name": "HSSC Group-D Study Material",
    "description": "Complete PDF Kit",
    "handler": function (response){
        alert("Payment Successful! ID: " + response.razorpay_payment_id);
        window.location.href = "assets/pdfs/sample.pdf"; 
        // ⚠ Replace with secure backend later
    },
    "theme": { "color": "#0077cc" }
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
  e.preventDefault();
}

// Example: Auto scroll to video when preview section loads
document.addEventListener("DOMContentLoaded", () => {
  const previewSection = document.querySelector("#preview");
  previewSection.classList.add("loaded");
});

// For future interactive features (currently empty)

// Example: Show alert when user clicks email
document.addEventListener("DOMContentLoaded", () => {
  const emailItem = document.querySelector(".contact-item:nth-child(2)");
  emailItem.addEventListener("click", () => {
    alert("Email us at: info@hsscgroupd.com");
  });
});

// Optional: Show message when someone clicks Instagram link
document.addEventListener("DOMContentLoaded", () => {
  const instaLink = document.querySelector(".footer a");
  instaLink.addEventListener("click", () => {
    alert("Redirecting to AUM Tech Solution Instagram page...");
  });
});



