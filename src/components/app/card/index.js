import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

class Cards extends React.Component { 
  constructor(props) {
    super(props);
    this.onViewClick=this.onViewClick.bind(this);

}
onViewClick(event){
    
  console.log("Id of book is"+this.props.id)
  const ID = this.props.id
  this.props.onViewClick(ID)
  
}
render() {
  return (
    
    <div style={{display: 'flex', flexWrap:'wrap', margin: '5px'}}>
      {
        
        this.props.books.map((book) => {
          return (
            <Card style={{width:'400px', margin:'10px', height:'500px'}}>
            <CardImg top width="20%" height="65%" src={book.imageUrls} alt="Card image cap" />
            <CardBody>
              <CardTitle>Title:{book.title}</CardTitle>
              <CardSubtitle>Author:{book.author}</CardSubtitle>
              <CardTitle>Price:  {book.price}</CardTitle>
              {/*<CardSubtitle>{book.category}</CardSubtitle>
              <CardSubtitle>{book.count}</CardSubtitle>
          <CardSubtitle>{book.user.username}</CardSubtitle>{console.log('printing username............'+book.username)}*/}
              <Button onClick={this.onViewClick} href="/viewmore">View More</Button>
            </CardBody>
          </Card>
          )
        })
      }

    </div>
  );
    }
};

export default Cards;
