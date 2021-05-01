import React from "react";

function Card(props) {
    return (
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <a href="#!"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt="..." /></a>
                <div class="card-body">
                    <h4 class="card-title"><a href="#!">{props.ProductData.name}</a></h4>
                    <h5>${props.ProductData.price}</h5>
                    <p class="card-text">{props.ProductData.description}</p>
                </div>
                <div class="card-footer"><small class="text-muted">★ ★ ★ ★ ☆</small>
                    <span><button className="btn btn-xs btn-primary" onClick={() =>{
                        props.handlecart(props.ProductData)
                    }}>Add cart</button></span>
                </div>
            </div>
        </div>
    );
}

export default Card;