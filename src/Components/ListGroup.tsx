function ListGroup() {
  let cities = ["New York", "Tokyo", "Denver", "Madrid", "London"];

 const message = cities.length === 0 ? <p>No Item Found</p>:null

 const getMessage = () =>{
    return cities.length === 0 ? <p>No Item Found</p>:null
    


 }
    
  //Class is a reserved key word in TypeScript
  //Command + D to do a multi cursor select
  // A component can not display more than one element
  //Wrap with Abbreviation
  //To use multiple elements within a component we can use
  //other elements to wrap around the element or we can use
  //a fragment

  //in JSX there is no for loop
  // to account for this we can map the each country to the element

  return (
    <>
      <h1>LIST</h1>
      {getMessage()}
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
