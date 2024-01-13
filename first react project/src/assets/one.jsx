export default function Add() {
    let cards = [];
    for (let i= 0; i < 10; i++){

        cards.push( 
        <div className="card text-center mt-5 " style={{width: "18rem"}}>
  <img src="/IMG_20220503_095437.jpg" class="card-img-top img-thumbnail" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
 
  )}
    
return(
    <>    
 {cards}

    </>
 )
}
//let x = [5, 7, 33, 55,55, 77,101];

{/* <ul>
{x.map(a => a > 33 ? <li>"Pass"</li>: <li>"Fail"</li>)}
</ul>

<hr/>
<div className="container"> 
<ul className="list-group">
{x.map( val => <li style ={{color : val <= 33 ? "red" : "green"  }} >
{val> 33? "pass": "Fail"}
</li>)}

</ul>
</div> */}
