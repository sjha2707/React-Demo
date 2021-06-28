import React from 'react'
function Home(props) {

    console.warn("Home Props", props)

    return (
        <div >
            <h1>Home Componenet using Redux </h1>


            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.freeiconspng.com/uploads/white-iphone-6-png-image-22.png">

                    </img>
                </div>
                <div className="text-wrapper item">
                    <span> I-phone </span>
                    <span> Price : $1000.00 </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => props.addToCartHandler({ price: 1000, name: 'I Phone 11' })}> Add to cart </button>
                    <button className="remove-to-cart" onClick={() => props.removeToCartHandler()} > Remove to cart </button>
                </div>

            </div>
        </div>
    )
}
export default Home;

