import React from 'react'

function Payment() {
    return (
       <body>
    {/* <div class="container"> */}
        <div class="header">
            <h1>Shopping Cart</h1>
        </div>

        <div class="cart-container">
            <div class="cart-sidebar">
                <h2>Your Cart</h2>
                <p>Items will be displayed here</p>
                <div class="form-container">
                    <form id="order-form">
                        <div class="form-group">
                            <label for="name" class="form-label">Name:</label>
                            <div type="text" id="name" class="form-input" required/>
                        </div>
                        <div class="form-group">
                            <label for="email" class="form-label">Email:</label>
                            <div type="email" id="email" class="form-input" required/>
                        </div>
                        <div class="form-group">
                            <label for="address" class="form-label">Address:</label>
                            <textarea id="address" class="form-input" required></textarea>
                        </div>

                        <div class="payment-method">
                            <h3>Payment Method:</h3>
                            <div class="payment-option">
                                <div type="radio" id="credit-card" name="payment" value="credit card" required/>
                                <label for="credit-card">Credit Card</label>
                            </div>
                            <div class="payment-option">
                                <div type="radio" id="banktransfer" name="payment" value="banktransfer"/>
                                <label for="banktransfer">Bank Transfer</label>
                            </div>
                            <div class="payment-option">
                                <div type="radio" id="cash-on-delivery" name="payment" value="cash on delivery"/>
                                <label for="cash-on-delivery">Cash on Delivery</label>
                            </div>
                        </div>

                        <div class="button-container">
                            <button type="submit" class="checkout-button">Check Out</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="popup" id="order-popup">
            <span class="close-button" onclick="closePopup()">&times;</span>
            <div class="popup-message">Order placed successfully!</div>
        </div>

    <script src="payment.js"></script>
</body>
    )
}

export default Payment