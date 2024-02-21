import React, {Component} from "react";
import StudentComponent from "./StudentComponent.jsx";

export default class AllStudentComponent extends Component{
    state={
        student:{
            Name:"Jennifer",
            Age:25,
            Email:'jennifer@gmail.com'
        }
    }
    render(){
        return(
            <>
                <StudentComponent student={this.state.student} />
            </>
        )
    }
}
