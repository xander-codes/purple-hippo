import React, {useState} from 'react';

const Home = () => {
  const [count, setCount] = useState(0);
    return (
        <div>
          <p>Hei!</p>
          <input type="button" value={count} onClick={()=>setCount(count+1)}/>
        </div>
    );
};

export default Home;