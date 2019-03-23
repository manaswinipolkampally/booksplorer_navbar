import React from "react";
import Search from "../search"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {CardColumns} from "reactstrap";

import "./Book.css";
import CondNav from "../condnav";

let name;
class SearchDetails extends React.Component {

    constructor(props){
        super(props);
        //name=(this.props.location.state.name)
        console.log(name)
        this.state = {
          data : []
        }
      }
    
      onViewClick(id){
        {console.log("book id"+id)}
        let path=`/viewmore/${id}`;
        this.props.history.push({
            pathname: path,
            state: {
               id:id
            }
           });
    }
    componentDidMount() {
       const url = "http://10.10.200.19:9000/books/search"; 
     //const url = "http://localhost:9000/books/search?title="+name;
        console.log(url) 
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('GET', 'POST');

        fetch(url, {
            headers: headers,
            method: 'GET'
        })
        .then(response => response.json())
        .then(contents => {console.log("in fetch: "+ contents);
                            this.setState ({
                            data : contents}
                            )
            })
            //console.log(this.state.data)
        .catch(() => console.log("Can’t access " + url + " response. "))
      }


    render() {
       
        return (
            <div> {
               <CondNav/>
              }
                <br></br>
                <div style={{position:'relative'}}>
                
                <Search/> 
                <br></br>
                <label><strong><h3>Search Results:</h3></strong></label>
                <br></br>
                <br/>
                <div style={{display: 'inline-block'}}>
                <div>{this.state.data.map((Booksplorer,index) =>{
                    
                return(
                   
                    <Card style={{width:'350px', margin:'10px'}}>
                    <CardImg top width="30%" src={Booksplorer.imageUrls} alt="Card image cap" />
                       <CardBody> 
                           <div key={index}>
                               <CardTitle>{Booksplorer.title}</CardTitle>
                               <CardSubtitle>{Booksplorer.author}</CardSubtitle>
                               <CardText>{Booksplorer.price}</CardText>
                               <CardText>{Booksplorer.username}</CardText>
                               <Button onClick={this.onViewClick(id)}>view more</Button> 
                               </div>
                           
                       </CardBody>
                   </Card>

                       
                    
                    
                    )
                })}
                </div>
                </div>
                <br></br>
                </div>
                </div>
            
                
            
        );
    }
} 

export default SearchDetails;