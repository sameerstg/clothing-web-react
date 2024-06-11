import React, { useEffect } from 'react'
import './DesignTool.css'
import './Cart.js'
import p1 from '../Assets/DesignTool/1.png'
import p1T from '../Assets/DesignTool/1T.png'
import p1DD from '../Assets/DesignTool/1DD.png'
import pSweater from '../Assets/DesignTool/sweater.jpg'
import pJeans from '../Assets/DesignTool/jeans.png'
import pHoodie from '../Assets/DesignTool/hood.jpg'
import { FaCartShopping, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

// import p1 from '../Assets/DesignTool/1.png'
// import p1 from '../Assets/DesignTool/1.png'
// import p1 from '../Assets/DesignTool/1.png'
// import p1 from '../Assets/DesignTool/1.png'
// import p1 from '../Assets/DesignTool/1.png'
// import p1 from '../Assets/DesignTool/1.png'
export function DesignTool() {

    useEffect(() => {
        class CartItem {
            constructor(name, desc, img, price) {
                this.name = name
                this.desc = desc
                this.img = img
                this.price = price
                this.quantity = 1
            }
        }

        class LocalCart {
            static key = "cartItems"

            static getLocalCartItems() {
                let cartMap = new Map()
                const cart = localStorage.getItem(LocalCart.key)
                if (cart === null || cart.length === 0) return cartMap
                return new Map(Object.entries(JSON.parse(cart)))
            }

            static addItemToLocalCart(id, item) {
                let cart = LocalCart.getLocalCartItems()
                if (cart.has(id)) {
                    let mapItem = cart.get(id)
                    mapItem.quantity += 1
                    cart.set(id, mapItem)
                }
                else
                    cart.set(id, item)
                localStorage.setItem(LocalCart.key, JSON.stringify(Object.fromEntries(cart)))
                updateCartUI()

            }

            static removeItemFromCart(id) {
                let cart = LocalCart.getLocalCartItems()
                if (cart.has(id)) {
                    let mapItem = cart.get(id)
                    if (mapItem.quantity > 1) {
                        mapItem.quantity -= 1
                        cart.set(id, mapItem)
                    }
                    else
                        cart.delete(id)
                }
                if (cart.length === 0)
                    localStorage.clear()
                else
                    localStorage.setItem(LocalCart.key, JSON.stringify(Object.fromEntries(cart)))
                updateCartUI()
            }
        }


        const cartIcon = document.querySelector('.fa-cart-arrow-down')
        const wholeCartWindow = document.querySelector('.whole-cart-window')
        wholeCartWindow.inWindow = 0
        const addToCartBtns = document.querySelectorAll('.add-to-cart-btn')
        addToCartBtns.forEach((btn) => {
            btn.addEventListener('click', addItemFunction)
        })

        function addItemFunction(e) {
            const id = e.target.parentElement.parentElement.parentElement.getAttribute("data-id")
            const img = e.target.parentElement.parentElement.previousElementSibling.src
            const name = e.target.parentElement.previousElementSibling.textContent
            const desc = e.target.parentElement.children[0].textContent
            let price = e.target.parentElement.children[1].textContent
            price = price.replace("Price: $", '')
            const item = new CartItem(name, desc, img, price)
            LocalCart.addItemToLocalCart(id, item)
            console.log(price)
        }


        cartIcon.addEventListener('mouseover', () => {
            if (wholeCartWindow.classList.contains('hide'))
                wholeCartWindow.classList.remove('hide')
        })

        cartIcon.addEventListener('mouseleave', () => {
            // if(wholeCartWindow.classList.contains('hide'))
            setTimeout(() => {
                if (wholeCartWindow.inWindow === 0) {
                    wholeCartWindow.classList.add('hide')
                }
            }, 500)

        })

        wholeCartWindow.addEventListener('mouseover', () => {
            wholeCartWindow.inWindow = 1
        })

        wholeCartWindow.addEventListener('mouseleave', () => {
            wholeCartWindow.inWindow = 0
            wholeCartWindow.classList.add('hide')
        })


        function updateCartUI() {
            const cartWrapper = document.querySelector('.cart-wrapper')
            cartWrapper.innerHTML = ""
            const items = LocalCart.getLocalCartItems()
            if (items === null) return
            let count = 0
            let total = 0
            for (const [key, value] of items.entries()) {
                const cartItem = document.createElement('div')
                cartItem.classList.add('cart-item')
                let price = value.price * value.quantity
                price = Math.round(price * 100) / 100
                count += 1
                total += price
                total = Math.round(total * 100) / 100
                cartItem.innerHTML =
                    `
                <img src="${value.img}"> 
                               <div class="details">
                                   <h3>${value.name}</h3>
                                   <p>${value.desc}
                                    <span class="quantity">Quantity: ${value.quantity}</span>
                                       <span class="price">Price: $ ${price}</span>
                                   </p>
                               </div>
                               <div class="cancel"><i class="fas fa-window-close"></i></div>
                `
                cartItem.lastElementChild.addEventListener('click', () => {
                    LocalCart.removeItemFromCart(key)
                })
                cartWrapper.append(cartItem)
            }

            if (count > 0) {
                cartIcon.classList.add('non-empty')
                let root = document.querySelector(':root')
                root.style.setProperty('--after-content', `"${count}"`)
                const subtotal = document.querySelector('.subtotal')
                subtotal.innerHTML = `SubTotal: $${total}`
            }
            else
                cartIcon.classList.remove('non-empty')
        }
        document.addEventListener('DOMContentLoaded', () => { updateCartUI() })



        //


        function changeShirt(image) {
            console.log('Changing shirt image to:', image);
            document.getElementById('shirt-pic').src = "../Assets/DesignTool/ image";
        }

        function changeTrouser(image) {
            console.log('Changing trouser image to:', image);
            document.getElementById('trouser-pic').src = "../Assets/DesignTool/image";
        }

        function changeDress(image) {
            console.log('Changing dress image to:', image);
            document.getElementById('dress-pic').src = "../Assets/DesignTool/image";
        }
        // // Ensure the DOM is fully loaded before running the script
        document.addEventListener('DOMContentLoaded', function () {
            // Select the button using the class name
            var checkoutButton = document.querySelector('.checkout');

            // Check if the button exists to avoid errors
            if (checkoutButton) {
                // Add a click event listener to the button
                checkoutButton.addEventListener('click', function () {
                    // Redirect to the desired page
                    window.location.href = 'payment.html'; // Replace with your target URL
                });
            }
        });




        document.getElementById('message-form').addEventListener('submit', function (e) {
            e.preventDefault();
            document.querySelector('.success-message').style.display = 'block';
        });


        // document.getElementById("designtool.html").addEventListener("view cart", function (event) {
        //     event.preventDefault();
        //     window.location.href = "payment.html";
        // });





    }, []);




    return (
        <div>


            <header>
                <h1>FASHION FUSHION DESIGN TOOL! WE PROVIDED YOU CHOICES! </h1>
                <div class="cart-box">
                    <div class="cart-icon">
                        {/* <i class="fas fa-cart-arrow-down fa-2x"></i> */}
                        <FaCartShopping class="fas fa-cart-arrow-down fa-2x" />
                    </div>
                    <div class="whole-cart-window hide">
                        <h2>Shopping Bag</h2>
                        <div class="cart-wrapper"></div>
                        <div class="subtotal">Subtotal: $0.00</div>
                        <Link to="/payment">
                            <button type="button" class="checkout">Checkout</button>
                            <div class="view-cart">View Cart</div>
                        </Link>
                    </div>
                </div>
            </header>
            <section class="shop-section">
                <div class="card-wrapper">
                    {/* <!-- Item 1 --> */}
                    <div data-id="1" class="card-item">
                        <img id="shirt-pic" src={p1} />
                        <div class="details">
                            <h3>T-SHIRTS</h3>
                            <p>
                                <span>CHOOSE YOUR FAVORIYE COLOR !.</span>
                                <span class="price">Price: $19.99</span>
                                <span class="add-to-cart-btn">Add To Cart</span>
                            </p>
                        </div>
                    </div>
                    <div>

                        <button id="btn1" class="color-btn" onclick="changeShirt('2.png')"></button>
                        <button id="btn2" class="color-btn" onclick="changeShirt('3.png')"></button>
                        <button id="btn3" class="color-btn" onclick="changeShirt('4.png')"></button>
                        <button id="btn4" class="color-btn" onclick="changeShirt('5.png')"></button>

                    </div>

                    {/* <!-- Item 2 --> */}
                    <div data-id="2" class="card-item">
                        <img id="trouser-pic" src={p1T} alt="Trouser" width="400px" />
                        <div class="details">
                            <h3>TROUSERS</h3>
                            <p>
                                <span>HERE ARE TROUSERS!</span>
                                <span class="price">Price: $49.99</span>
                                <span class="add-to-cart-btn">Add To Cart</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <button id="t-btn1" class="color-btn" onclick="changeTrouser('1T.png')"></button>
                        <button id="t-btn2" class="color-btn" onclick="changeTrouser('2T.png')"></button>
                    </div>

                    {/* <!-- Item 3 --> */}
                    <div data-id="3" class="card-item">
                        <img id="dress-pic" src={p1DD} />
                        <div class="details">
                            <h3>DRESSES</h3>
                            <p>
                                <span>YOUR FAVORITE COLOR DRESSES!</span>
                                <span class="price">Price: $99.99</span>
                                <span class="add-to-cart-btn">Add To Cart</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <button id="d-btn1" class="color-btn" onclick="changeDress('1DD.png')"></button>
                        <button id="d-btn2" class="color-btn" onclick="changeDress('2D.png')"></button>
                        <button id="d-btn3" class="color-btn" onclick="changeDress('3D.png')"></button>
                    </div>
                </div>
                {/* <!-- item 4 --> */}
                <div data-id="4" class="card-item">
                    <img src={pSweater} alt="sale item sweater" width="100px" />
                    <div class="details">
                        <h3>FOR SALE ITEMS </h3>
                        <p>
                            <span>
                                JUST ONE COLOR AVAIBLE! DISCOUNT ..
                            </span>

                            <span class="price">Price: $23</span>
                            <span class="add-to-cart-btn">Add To Cart</span>
                        </p>
                    </div>
                </div>

                {/* <!-- item 5 --> */}
                <div data-id="5" class="card-item">
                    <img src={pJeans} alt="sale sale !!!!!" width="100px" />
                    <div class="details">
                        <h3>FOR SALE ITEMS </h3>
                        <p>
                            <span>
                                *****CHOOSE YOUR FAVORITE JEANS SHOP MANY JEANS IN LESS PRICE*****
                            </span>

                            <span class="price">Price: $18</span>
                            <span class="add-to-cart-btn">Add To Cart</span>
                        </p>
                    </div>
                </div>



                {/* <!-- item 6 --> */}
                <div data-id="6" class="card-item">
                    <img src={pHoodie} alt="sale " width="100px" />
                    <div class="details">
                        <h3> SALE ITEMS </h3>
                        <p>
                            <span>
                                *****FOR YOU *****
                            </span>

                            <span class="price">Price: $18</span>
                            <span class="add-to-cart-btn">Add To Cart</span>
                        </p>
                    </div>
                </div>

            </section>
            <div class="message-us-box">
                <h2>*GIVE DETAILS ABOUT MEASUREMENT&SIZES*</h2>
                <form id="message-form">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label for="Location">location:</label>
                    <input type="location" id="location" name="location" required />
                    <label for="details"><details></details>:</label>
                    <textarea id="details" name="details" rows="5" required></textarea>
                    <button type="submit">Submit</button>
                    <p class="success-message">Successfully submitted! &#128512;  </p>

                </form>
            </div>
            <footer>
                <div class="order-now">Order Now!!!!!!</div>
            </footer>


            {/* <script>
    function changeShirt(image) {
      console.log('Changing shirt image to:', image);
      document.getElementById('shirt-pic').src =../Assets/DesignTool/ image;
    }

    function changeTrouser(image) {
      console.log('Changing trouser image to:', image);
      document.getElementById('trouser-pic').src =../Assets/DesignTool/ image;
    }

    function changeDress(image) {
      console.log('Changing dress image to:', image);
      document.getElementById('dress-pic').src =../Assets/DesignTool/ image;
    }
// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the button using the class name
    var checkoutButton = document.querySelector('.checkout');

    // Check if the button exists to avoid errors
    if (checkoutButton) {
        // Add a click event listener to the button
        checkoutButton.addEventListener('click', function() {
            // Redirect to the desired page
            window.location.href = 'payment.html'; // Replace with your target URL
        });
    }
});




    document.getElementById('message-form').addEventListener('submit', function(e) {
          e.preventDefault();
          document.querySelector('.success-message').style.display = 'block';
      });


document.getElementById(" designtool.html ").addEventListener("view cart", function(event) {
            event.preventDefault(); 
            window.location.href = "payment.html";
        });
  </script> */}

            <script src="../Assets/DesignTool/script.js"></script>
        </div>
    )
}
