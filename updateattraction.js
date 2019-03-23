import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from "mdbreact";
import {Button} from "react-bootstrap";
import { Glyphicon } from 'react-bootstrap';

var body;

class UpdateAttractions extends React.Component{

  constructor(props) {
    super(props);

    this.state =
    {
      attr_Name : "",
      city : "",
      category : "",
      description: "",
      location : "",
      from_Timings : "",
      upto_Timings : "",
      fare : "",
      star : 0,

    }

    this.handleAttractionChange = this.handleAttractionChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleUptoChange = this.handleUptoChange.bind(this);
    this.handleFareChange = this.handleFareChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);    
  }

  onUpdateClick(event) {

    let aid= this.props.location.state.aid;

    body = {
      aid: aid,
      attr_Name: this.state.attr_Name,
      city: this.state.city,
      category: this.state.category,
      description : this.state.description,
      location: this.state.location,
      from_Timings: this.state.from_Timings,
      upto_Timings: this.state.upto_Timings,
      fare: this.state.fare,
      rating: this.state.star,

    }
    console.log(body)
    
    const url = "http://localhost:9000/attractions/edit";
    console.log(url)
    let headers = new Headers();
 
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
 
    headers.append('Access-Control-Allow-origin',url);
    headers.append('Access-Control-Allow-Credentials','true');
 
    headers.append('PUT','POST');
 
    fetch(url, {
       headers:headers,
       method: 'POST',
       body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(contents => {console.log(contents);
      this.props.history.push('/profile')
                      
 })
 .catch(()=> console.log("can't access" + url + "response. "))

 
  }

  componentDidMount(event) {

    let aid= this.props.location.state.aid;

    body = { aid : aid}
    console.log(body.aid)
   
      const url = "http://localhost:9000/attractions/id"; 
      let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      headers.append('Access-Control-Allow-Origin', url);
      headers.append('Access-Control-Allow-Credentials', 'true');

      headers.append('PUT','POST');

      fetch(url, {
         headers:headers,
         method: 'PUT',
         body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(contents => { console.log("In fetch: "+ JSON.stringify(contents));
                          this.setState({
                            attr_Name : contents.attr_Name,
                            city : contents.city,
                            category : contents.category,
                            description: contents.description,
                            location : contents.location,
                            from_Timings : contents.from_Timings,
                            upto_Timings : contents.upto_Timings,
                            fare : contents.fare,
                            star : contents.rating,
                            imgurls: contents.imgurls,
                          })
                          console.log("response:"+ contents.username)
                          console.log('test1 '+this.state)
                          
                              
   })
   .catch(()=> console.log("can't access" + url + "response. "))
   
    }


  handleAttractionChange (event) {
    this.setState({attr_Name: event.target.value});
  }

  handleCityChange (event) {
    this.setState({city: event.target.value});
  }

  handleCategoryChange(event) {
    this.setState({ category: event.target.value})
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value})
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value})
  }

  handleFromChange(event) {
    this.setState({ from_Timings: event.target.value})
  }

  handleUptoChange(event) {
    this.setState({ upto_Timings: event.target.value})
  }

  handleFareChange(event) {
    this.setState({ fare: event.target.value})
  }

  handleClick(starValue){    
    this.setState({star:starValue});
    
  } 

    getPickerValue = value => {
        console.log(value);
      };
      
    
    render(){
        return (
            <div>
       <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h3 text-center mb-4">CREATE EVENT</p>
            <div className="grey-text">

            <MDBInput
                label="Attraction Name"
                icon="adn"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                disabled
                value = {this.state.attr_Name}
                onChange = {this.handleAttractionChange}
              />

              <MDBInput
                label="City"
                placeholder="Enter the city"
                icon="map-marker"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                disabled
                value = {this.state.city}
                onChange = {this.handleCityChange}
              />

              <select className="browser-default custom-select"
              value = {this.state.category}
              onChange = {this.handleCategoryChange}>
          <option>Choose Attraction Category</option>
          <option value="amusement parks">Amusement Parks</option>
          <option value="adventures">Adventures and Sports</option>
          <option value="workshops">Workshops and Classes</option>
          <option value="concerts">Concerts and Shows</option>
          <option value="food">Food</option>
          <option value="parties">Parties and Nightlife</option>
          <option value="religious sites">Religious Sites</option>
          <option value="historic places">Historic Places</option>
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
                label="Location"
                icon="globe"
                type="textarea"
                rows="2"
                value = {this.state.location}
                onChange = {this.handleLocationChange}
                />

              <MDBInput
                label="From-Timings"
                group
                type="time"
                validate
                error="wrong"
                success="right"
                value = {this.state.from_Timings}
                onChange = {this.handleFromChange}
              />

              <MDBInput
                label="Upto-Timing"
                group
                type="time"
                validate
                error="wrong"
                success="right"
                value = {this.state.upto_Timings}
                onChange = {this.handleUptoChange}
              />

            <MDBInput
                label="Fare"
                icon="money"
                group
                type="number"
                validate
                error="wrong"
                success="right"
                value = {this.state.fare}
                onChange = {this.handleFareChange}
              />

              <div>
                        <div ><b>Rating:</b> {this.state.star}</div>    

                        <Glyphicon   
                                  
                          glyph={this.state.star >= 1 ? "star" : "star-empty" } id="container"           
                          onClick={this.handleClick.bind(this,1)} 
                        />
                        <Glyphicon 
                          glyph={this.state.star >= 2 ? "star" : "star-empty" } 
                          onClick={this.handleClick.bind(this,2)} 
                        />          
                        <Glyphicon 
                          glyph={this.state.star >= 3 ? "star" : "star-empty" } 
                          onClick={this.handleClick.bind(this,3)} 
                        />
                        <Glyphicon           
                          glyph={this.state.star >= 4 ? "star" : "star-empty" } 
                          onClick={this.handleClick.bind(this,4)} 
                        />         
                        <Glyphicon 
                          glyph={this.state.star >= 5 ? "star" : "star-empty" } 
                          onClick={this.handleClick.bind(this,5)}
                        />

                </div>

            <div className="fa fa-upload">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01"><b>
                      Upload Image <br></br></b>

                  </span>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                  />
                </div>
            </div>
      </div>             
      </div>
      <br/> <br/>
      <Button onClick={this.onUpdateClick} style={{background : "#339CFF"}}>  Update Attraction</Button>
    </form>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
      </div>
          );
    }
    
    
}
 

export default UpdateAttractions;