import './App.css'
import LikeButton from './apps/LikeButton/LikeButton'
import Counter from './apps/counter/Counter'

function App() {
  return (
    <>
      <div className='container'>
      <div className="main">
        <h1>References</h1>
            <section className='app-section'><Counter/></section>
            <section className='app-section centered-section'><LikeButton/></section>
        </div>
      </div>
    </>
  )
}

export default App
