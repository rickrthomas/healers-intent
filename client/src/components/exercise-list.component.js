import React, { Component } from 'react';

import axios from 'axios';

const Person = props => (

                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                        <p></p>
                        </div>    
                        <h4 className="col s12 m12">{props.exercise.first} {props.exercise.last}</h4>
                        <hr></hr>
                        <div className="card-content">
                            <div className="row">
                            <div className="col s12 m6">    
                            <p>ADDED BY</p>
                            <hr></hr>
                            <p>{props.exercise.yourname}</p>
                            </div>
                                </div>
                                <h4 className="col s12 m12">ABOUT THE PERSON TO BE HEALED</h4>
                                <div className="row">
                                <div className="col s12 m6">
                                    <p>GENDER</p>
                                    <hr></hr>
                                <p>{props.exercise.gender}</p>
                                </div>
                                <div className="col s12 m6">
                                <p>AGE</p>
                                <hr></hr>
                                <p>{props.exercise.age}</p>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col s12 m6">
                                <p>CITY</p>
                                <hr></hr>
                                <p>{props.exercise.city}</p>
                                </div>
                                <div className="col s12 m6">
                                <p>REGION</p>
                                <hr></hr>
                                <p>{props.exercise.region}</p>
                                </div>
                                <div className="col s12 m6">
                                <p>COUNTRY</p>
                                <hr></hr>
                                <p>{props.exercise.country}</p>
                                </div>
                                </div>
                                <h5 className="col s12 m12">CONDITIONS</h5>
                                <hr></hr>
                                <div className="col s12 m12">
                                <p>{props.exercise.condition}</p>
                                </div>
                              
                                
                        
                        </div>
                     
                    </div>
                </div>
            
)


class ExerciseList extends Component {
    constructor(props) {
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {exercises: []};
    }
        componentDidMount() {
            axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState ({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
        }
    
        deleteExercise(id) {
            axios.delete('http://localhost:5000/exercises/'+id)
            .then(res => console.log(res.data));
            
            window.location ='/';
        }
        
        onSubmit(id){
            axios.post('http://localhost:5000/innercircle/')
            .then(res => console.log(res.data));
        }
        personList() {
            return this.state.exercises.map(currentexercise => {
                return <Person exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
            })
        }
    render() {
        return (
        <div>
            
                <h3>PERSONS TO HEAL</h3>
            <div className="container">
                {this.personList()}
            </div>
         
        </div>    
        )
    };
}

export default ExerciseList;