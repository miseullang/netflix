import Button from './Button';
import styled from './App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log('I run all the time'); // 모든 업데이트가 있을 때마다 리렌더링

  useEffect(() => {
    console.log('call the API')
  }, []); // 처음 렌더링 이후 조건부 (조건이 없으므로 1회성)

  useEffect(() => {
    if (keyword !== '') { // 키워드가 있을 때만 렌더링 시작
      console.log('SEARCH FOR', keyword);
    }
  }, [keyword]); // 처음 렌더링 이후 keyword가 업데이트 될 때마다 리렌더링

  return (
    <div>
      <input value={keyword}
       onChange={onChange} type='text' placeholder='Search hear' />
      <h1>{counter}</h1>
      <Button onClick={onClick}>click me</Button>
    </div>
  );
}

export default App;
