import React, { Component } from 'react'
import * as firebase from 'firebase'
import './App.css'

export class MUnicipal extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           words:[]
        }
      }
      componentDidMount(){
          const wordRef=firebase.database().ref("MunicipalInsert");
          wordRef.on('value',(snapshot)=>{
              let words=snapshot.val();
              let newstate=[];
              for(let word in words){
                  newstate.push({
                      date:words[word].date,
                      proposal:words[word].proposal,
                      provide:words[word].provide,
                      title:words[word].title
                  });
              }
              this.setState({
                  words:newstate
              });
          });
      }
      render() {
          return (
              <div>
                 
                 {this.state.words.map((word)=>{
                     return(
                                       <div className="To"> 
                                           <p className="name" >{word.title}</p>
                                           <p className="name" >{word.proposal}</p>
                                           <p className="name" >{word.provide}</p>
                                           <p className="name" >{word.date}</p>
                                      </div> 
                     )
                 })}
          
              </div>
          )
      }
  }

export default MUnicipal
