import { useState } from "react";

const Home = () => {
    const handleClick = () => {console.log('sup fellas');}
    const handleClickAgain = (name) => {console.log('sup ' + name);}

    const [name,setName] = useState('Dav');
    const [age,setAge]= useState(25);
    const handle = () => {
        setName('shaz');
        setAge(23);
    }

    return (  
        <div className="Home">
            <h1>Homepage</h1>
            <p>{ name } is { age } old</p>
            <button onClick={handleClick}>Click</button>
            <button onClick={() => {handleClickAgain('jay')}}>ClickMe</button>
            <button onClick={handle}>ClickMeAgain</button>
        </div>
    );
}
 
export default Home;

/*const Home = () => {
    const handleClickAgain = (name) => {console.log('hello ' + name);}
    const handlestick = () => {console.log('hello there')};

    return (  
        <div className="Home">
           <h1>Homepage</h1>
           <button onClick={handlestick}>ClickMe</button>
           <button onClick={() => {handleClickAgain('mario')}}>ClickMeAgain</button>
        </div>
    );
}
 
export default Home;



/*import { useState } from "react";

const Home = () => {
    const [name,setName] = useState('mario');

    const handleClick = () => {setName('luigi')};



    return (  
        <div className="Home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>ClickMe</button>
        </div>
    );
}
 
export default Home;*/