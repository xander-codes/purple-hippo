import React, {useState} from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Hei!</p>
            <input type="button" value={count} onClick={() => setCount(count + 1)}/>
            <input type="text"/>

        </div>
    );
};

export default Home;