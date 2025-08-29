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

// Open modal
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

// Close modal
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
}
