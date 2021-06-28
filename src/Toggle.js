import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            on: false,
            PostData: [
                { id: 1, name: "foo", frequency: "1" },
                { id: 2, name: "bar", frequency: "1" },
                { id: 3, name: "baz", frequency: "1" }
            ],
        }
        console.warn("PostData " +this.state.PostData);
    }
    toggle = () => {
        this.setState({
            on: !this.state.on
        })
        //alert(this.state.on)
    }
    render() {
        return (
            <ul>
                <div className="cart-wrapper">
                   
                    {this.state.PostData.map((postDetail, index) => {
                        return <div >
                            <li className="cart-wrapper" onClick={this.toggle()}>
                                <div> {postDetail.name} </div>
                                <div> {postDetail.frequency} </div>
                                {this.state.on ? <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" /> : null }
                            </li>

                        </div>
                    })}
                </div>
            </ul>
        )
    }
}
export default Toggle;