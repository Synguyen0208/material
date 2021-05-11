import React, { Component } from "react";
import room from "./data";
import '../index.css';
class Home extends Component {
    rooms = [];
    i = 0;
    getLocal() {
        if (localStorage.getItem("product")) {
            if (this.i == 0) {
                this.rooms = [JSON.parse(localStorage.getItem("product"))][0];
                this.i++;
            }
        }
    }
    saveLocal() {
        localStorage.setItem("product", JSON.stringify(room));
    }
    showContent = (rooms) => {
        let result = null;
        if (rooms.length > 0) {
            result = rooms.map((rooms, index) => {
                return (

                    <div >
                        <div className="card" style={{ width: '300px', marginLeft: '20px' }}>
                            <img src={rooms.image} alt="Avatar" style={{ width: '100%' }} />
                            <div className="container">
                                <h4><b>{room.name}</b></h4>
                                <b>  Price: {rooms.price}$</b>
                                <div class="spacing">
                                    <p>Type</p>
                                    <p>{rooms.type}</p>
                                </div>
                                <div class="spacing">
                                    <p>Area</p>
                                    <p>{rooms.area}</p>
                                </div>
                                <div class="spacing">
                                    <p>Number</p>
                                    <p>{rooms.number}</p>
                                </div>
                                <div style={{ display: 'flex' }}> <button style={{ width: '300px' }} type="button" class="btn btn-primary" onClick={() => this.handleBuy()}>ADD</button>
                                </div>

                            </div>
                        </div>
                    </div>
                );
            });
        }
        return result;
    }
    render() {
        return (

            <div class="md-container p-md-3">
                {this.saveLocal()}
                {this.getLocal()}
                <style dangerouslySetInnerHTML={{ __html: "\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  width: 40%;\n}\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n.container {\n  padding: 2px 16px;\n}\n" }} />
                <h2 class="font-weight-light">Welcome</h2>
                <p>

                </p>
                <div class="containers">{this.showContent(this.rooms)}</div>


            </div>
        );
    }

    handleBuy = () => {
        alert("Thank you for your order!");
    };

}
export default Home;
