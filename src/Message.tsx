//PascalCasting- Used mainly for components and in most
function Message(){
    //JSX: JavaScript XML
    //The code below will get compiled down to JavaScript Code
      //JSX allows us to change things dynamically
    let name = "Jeremiah"
    if (name)
        return  <h1>Hello {name}</h1>
    return <h1>Hello World</h1>  
    
}

export default Message;