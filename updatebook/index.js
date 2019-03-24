import React from 'react';
import { createBrowserHistory as createHistory } from "history";
import CondNav from '../condnav';
var body;

export default class UpdateBook extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            price : "",
            count: "",
            category : "",
            description: "",
          }
      this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleCountChange = this.handleCountChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

      };
      onUpdateClick(event) {

        console.log(this.state.username);
          
          let body = {
            price : this.state.price,
            count: this.state.count,
            category:this.state.category,
            description:this.state.description,
           
          }
          console.log(body)
          console.log(body.price)
          console.log(body.count)
          console.log(category);
          console.log(description)
        
          const url = "http://10.10.200.19:9000/books/update";
          console.log("url:"+url)
          let headers = new Headers();
       
          headers.append('Content-Type','application/json');
          headers.append('Accept','application/json');
       
          headers.append('Access-Control-Allow-origin',url);
          headers.append('Access-Control-Allow-Credentials','true');
       
          headers.append('PUT','POST');
       
          fetch(url, {
             headers:headers,
             method: 'PUT',
             body: JSON.stringify(body)
          })
          .then(response => response.json())
          .then(contents => {console.log(contents);
          this.setState({ show: false }); 
          this.props.history.push('/profile') 
                         
       })
       .catch(()=> console.log("can't access" + url + " response. "))
      
       
        }
       
      
      history = createHistory(this.props);

      componentDidMount(e) {
        let id= this.props.location.state.id;

        //.e.preventDefault();
        const url = "http://10.10.200.19:9000/books/id"; 
        let token = localStorage.getItem("AccessToken");
        let headers = new Headers();
        const AuthStr = 'Bearer '.concat(token);
         console.log(token);
         headers.append('Content-Type', 'application/json');
         headers.append('Accept', 'application/json');
         headers.append('Authorization', AuthStr);
         console.log(AuthStr);
         headers.append('Access-Control-Allow-Origin', url);
         headers.append('Access-Control-Allow-Credentials', 'true');
         headers.append( 'PUT','POST');
    
    //e.preventDefault();
    fetch(url, {
        headers: headers,
        method: 'PUT',
        body: JSON.stringify(body),
        'Authorization': 'Bearer ' + this.state.token, 
    })
    .then(response=>response.json())
    .then(contents=>{console.log("in fetch: "+contents);
    this.setState({ price : contents.price,
    count : contents.count,
    category:contents.category,
    description:contents.description,
    
})
console.log('view details'+this.state)
})

 
  .catch(() => console.log("Can’t access " + url + " response. "))
  
    }
    handlePriceChange(event) {
        this.setState({ price: event.target.value})
        console.log("Price: " + this.state.price)
       
      }
     
      handleCategoryChange(event) {
        this.setState({ category: event.target.value})
      }
    
      handleDescriptionChange(event) {
        this.setState({ description: event.target.value})
      }
    
      handleCountChange(event) {
        this.setState({ count: event.target.count})
        console.log("count: " + this.state.count)
      }
     
      
      
    
      
  render() {
    return (
        <div>
            <CondNav/><br/><br/>
            <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h3 text-center mb-4">Update Book</p>
            <div className="grey-text">

            
              <MDBInput
                label="Price"
                placeholder="Enter the price"
                icon="map-marker"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                disabled
                value = {this.state.price}
                onChange = {this.handlePriceChange}
              />

              <select className="browser-default custom-select"
              value = {this.state.category}
              onChange = {this.handleCategoryChange}>
          <option>Choose Attraction Category</option>
          <option value="art">Art</option>
          <option value="mystery">mystery</option>
          <option value="fantacy">Fantacy</option>
          <option value="friction">friction</option>
          <option value="technical">Technical</option>
          <option value="others">Others</option>
         </select>
        <br/>
        <br/>
              
              <MDBInput
                type="textarea"
                rows="2"
                label="Description"
                icon="edit"
                value = {this.state.description}
                onChange = {this.handleDescriptionChange}
              />

              <MDBInput
                label="count"
                icon="globe"
                type="textarea"
                rows="1"
                value = {this.state.count}
                onChange = {this.handleCountChange}
                />
            
      </div>
      <br/> <br/>
      <Button onClick={this.onUpdateClick} style={{background : "#339CFF"}}>  Update Book</Button>
    </form>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
            </div>
          
    )
}
}