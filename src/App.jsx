import Footer from './Components/Footer'
import Header from './Components/Header'
import InstaHome from './Components/InstaHome'

function App() {

  return (
    <main className='flex justify-center overflow-hidden w-full h-screen min-h-screen  '>
      <section className='max-w-sm w-full relative h-full'>
        <div className='sticky top-0 left-0 w-full max-w-sm mx-auto block'>
          <Header />
        </div>
        <InstaHome />
        <div className='fixed bottom-0 left-0 w-full flex justify-center items-center'>
          <Footer />
        </div>
      </section>
    </main>
  )
}

export default App
