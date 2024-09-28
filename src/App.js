import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log('생성됨'); // 마운트 될 때 실행
    return () => console.log('삭제됨'); // return 이후 : 마운트 해제 될 때 실행
  },[])
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);

  return (
    <div>
      <button onClick={onClick}>{showing ?  'Hide' : 'Show'}</button>
      {showing ? <Hello/> : null}
    </div>
  );
}

export default App;