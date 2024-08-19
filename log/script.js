function validateForm() {
    const fname = document.forms["subscribeForm"]["fname"].value;
    const lname = document.forms["subscribeForm"]["lname"].value;
    const email = document.forms["subscribeForm"]["email"].value;

    if (fname === "" || lname === "" || email === "") {
        alert("All fields are required.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Email must contain '@' and end with '.com'.");
        return false;
    }

    alert("Subscription successful!");
    return true;
}
