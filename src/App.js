//여기서 여러개의 컴포넌트 만들기
/*
function Food(props) {
  console.log(props);
  return <h1>I like {props.fav}</h1>; //fav라는 프롭스 .는 속성 접근 연산자 / 객체명.속성명
}
*/
import PropTypes from "prop-types";

function A({name, picture}) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={picture} alt={name}></img>
   </div>
  );
}

const lIke = [
  {
    id: 1,
    name: '축구',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qU0limgB2807QuHGxe85awHaEK%26pid%3DApi&f=1',
  },
  {
    id: 2,
    name: '야구',
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yVEwyNYTokiINm1gdBB2bQHaEK%26pid%3DApi&f=1',
  },
  {
    id: 3,
    name: '농구',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gkYDUa-Rat0JT3bOeWJBeQHaKW%26pid%3DApi&f=1',
  },
  {
    id: 4,
    name: '배구',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.9KPuSFZM8AVn7UszCaydlQHaIa%26pid%3DApi&f=1',
  }
]; //const 상수 변수

function App() { //App 컴포넌트 정의 (function or class)
  return ( //여러개 리턴 시 소괄호
  <div>
    {lIke.map(D => <A key={D.id} name={D.name} picture={D.image} />)}
  </div>
  );
} // D라는 것으로 A함수의 key name picture안에 Map 함수의 id와 name과 image를 넣어라

A.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App; //import 하려면 export 컴포넌트 이름과 동일하게