import Footer from './Components/Footer'
import Header from './Components/Header'
import InstaHome from './Components/InstaHome'

function App() {

  return (
    <main className='flex justify-center overflow-hidden w-full '>
      <section className='max-w-sm w-full relative'>
        <div className='sticky top-0 left-0 w-full max-w-sm mx-auto block'>
          <Header />
        </div>
        <InstaHome />
        <Footer/>
      </section>
    </main>
  )
}

export default App
