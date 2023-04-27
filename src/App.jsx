import './App.css'
import LikeButton from './apps/LikeButton/LikeButton'
import Stopwatch from './apps/Stopwatch/Stopwatch'
import Counter from './apps/counter/Counter'
import FetchQuotes from './apps/fetchQuotes/FetchQuotes'
import RandomQuotesGen from './apps/randomQuotesGen/RandomQuotesGen'

function App() {
  return (
    <>
      <div className='container'>
      <div className="main">
        <h1>References</h1>
            <section className='app-section'><Counter/></section>
            <section className='app-section'><Stopwatch timeIn={1000}/></section>
            <section className='app-section'><Stopwatch timeIn={100}/></section>
            <section className='app-section'><Stopwatch timeIn={1}/></section>
            <section className='app-section'><Stopwatch timeIn={0.1}/></section>
            <section className='app-section'><LikeButton/></section>
            <section className='app-section'><RandomQuotesGen/></section>
            <section className='app-section'><FetchQuotes/></section>
        </div>
      </div>
    </>
  )
}

export default App
