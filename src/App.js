import Random from './components/Random'
import Tag from './components/Tag'
import './App.css';
import background from "./assets/background.jpg"

function App() {
  return (
    <div  className='bg-cover bg-repeat h-full w-full flex flex-col items-center' style={{ backgroundImage: `url(${background})`}}>
      {/* <img src={background} alt="" /> */}
      <h1 className='w-11/12 bg-white text-center rounded-lg mt-[40px] px-10 py-2 text-4xl font-bold '>RANDOM GIFS</h1>
      <div className='w-full flex flex-col items-center'>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
