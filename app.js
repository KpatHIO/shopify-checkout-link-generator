function generateLink() {
    const variantId = document.getElementById("variantId").value;
    const quantity = document.getElementById("quantity").value;
    const discountCode = document.getElementById("discountCode").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const zip = document.getElementById("zip").value;
    const country = document.getElementById("country").value;

    // Construct base checkout URL
    let checkoutUrl = `https://yourstore.myshopify.com/cart/${variantId}:${quantity}`;

    // Add discount code if provided
    if (discountCode) {
        checkoutUrl += `?discount=${discountCode}`;
    }

    // Add customer information if provided
    if (email) {
        checkoutUrl += `&checkout[email]=${encodeURIComponent(email)}`;
    }
    if (address && city && zip && country) {
        checkoutUrl += `&checkout[shipping_address][address1]=${encodeURIComponent(address)}`;
        checkoutUrl += `&checkout[shipping_address][city]=${encodeURIComponent(city)}`;
        checkoutUrl += `&checkout[shipping_address][zip]=${encodeURIComponent(zip)}`;
        checkoutUrl += `&checkout[shipping_address][country]=${encodeURIComponent(country)}`;
    }

    // Display the generated link
    document.getElementById("generatedLink").innerHTML = `<a href="${checkoutUrl}" target="_blank">Checkout Link</a>`;
}
