import BadComponent from './BadComponent';
import SomeBlock from './SomeBlock';
import ParrentBlock from './ParrentBlock';

function App(props) {
  const isDay = props.hours < 18;
  return(
    <h1>
      {isDay ? "сейчас день": "сейчас вечер"}
      <BadComponent something={'первый текст'}/>
      <SomeBlock/>
      <ParrentBlock/>
    </h1>
    )
}

export default App;
