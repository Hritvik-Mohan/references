import './App.css'
import LikeButton from './apps/LikeButton/LikeButton'
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
            <section className='app-section'><LikeButton/></section>
            <section className='app-section'><RandomQuotesGen/></section>
            <section className='app-section'><FetchQuotes/></section>
        </div>
      </div>
    </>
  )
}

export default App
