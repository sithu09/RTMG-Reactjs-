import React, { Component } from 'react'
import * as firebase from 'firebase'
import './App.css'

export class COmponentToPrint extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         words:[]
      }
    }
    componentDidMount(){
        const wordRef=firebase.database().ref("PoliceInsert");
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
            <div className="background">
               
               {this.state.words.map((word)=>{
                   return(
                    <div >
                                     <div> 
                                         <p className="title">{word.title}</p>
                                         <p className="report"><b>အကြောင်းအရာ - </b>{word.proposal}</p>
                                         <p  className="report"><b>သက်သေ link - </b>{word.provide}</p>
                                         <p  className="report"><b>နေ့စွဲ - </b>{word.date}</p>
                                         </div> 
                                    </div>
                   )
               })}
        
            </div>
        )
    }
}

export default COmponentToPrint
