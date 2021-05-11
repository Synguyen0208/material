import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


class Add extends Component {
    bangDiem=[];
    constructor(props){
        super(props);
        this.state={
          HK1:null,
          name:null,
          HK2:null,
          kq: null,
          xl:null,
          tb:null
        };
        
        this.handleChange = this.watch.bind(this);
        this.handleSubmit = this.mySubmitHandler.bind(this);
        this.handleSubmit = this.myChangeHandler.bind(this);
      }
      mySubmitHandler =(event) => {
        event.preventDefault();
            this.bangDiem.push(this.state);
            localStorage.setItem("bangdiem", JSON.stringify(this.bangDiem));
            
      }
      watch =() => {
       
        let HK1=this.state.HK1;
        let HK2=this.state.HK2;
        
        let tb1=(parseInt(HK2*2)+parseInt(HK1))/3;
        this.setState({tb: "8"});
        alert(this.state.tb);
        if(tb1>=5)
        this.setState({kq:"Lên lớp"});
        else
        this.setState({kq:"Ở lại"});

        if(tb1>=9)
        this.setState({xl:"Học sinh xuất sắc"});

        else if(tb1>=8)
        this.setState({xl:"Học sinh giỏi"});

        else if(tb1>=6.5)
        this.setState({xl:"Học sinh khá"});
        
        else if(tb1>=5)
        this.setState({xl:"Học sinh trung bình"});
        else
        this.setState({xl:"Học sinh yếu"});
        alert(this.state.xl);
        
    }
    
      myChangeHandler=(event)=>{
        let nam=event.target.name;
        let val=event.target.value;
        // alert(nam.indexOf("hobbie"));
        // if(nam.indexOf("hobbie")!=-1){
        //     if(document.getElementById(nam).checked==true){
        //         let hop=this.state.hobbies;
        //         hop.push(val);
        //         this.setState({hobbies:hop});
        //     }
        // }
        this.setState({[nam]:val})
      }
    render() {
        return (
            <div>
                Hello {this.state.userName}
                <form onSubmit={this.mySubmitHandler}>
                    <table>
                        <tbody>
                        <tr>
                                <td>Ten hoc sinh</td>
                                <td><input type="text" id="name" min="0" max="10" name="name" onChange={this.myChangeHandler}></input></td>
                            </tr>
                            <tr>
                                <td>Điểm HK1</td>
                                <td><input type="number" id="HK1" min="0" max="10" name="HK1" onChange={this.myChangeHandler}></input></td>
                            </tr>
                            <tr>
                                <td>Điểm HK2</td>
                                <td><input type="number" id="HK2" min="0" max="10" name="HK2" onChange={this.myChangeHandler}></input></td>
                            </tr>
                            <tr>
                                <td>Điểm trung bình</td>
                                <td>
                                    <input type="number" readOnly="true" value={this.state.tb} name="TB" id="TB" ></input><br></br>
                                </td>
                            </tr>
                            <tr>
                                <td>Kết quả</td>
                                <td><input type="text" name="kq" readOnly="true" value={this.state.kq} id="kq"></input></td>
                            </tr>
                            <tr>
                                <td>Xếp loại</td>
                                <td>
                                    <td><input type="text" name="xl" readOnly="true" value={this.state.xl} id="xl"></input></td>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2"><input type="submit" onClick={this.watch} value="Xem kết quả"></input></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default Add;