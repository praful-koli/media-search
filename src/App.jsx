
import SearchBar from './components/SearchBar'
import Tab from './components/Tab'
import ResultGrid from './components/ResultGrid'
function App() {
  return (
    <div className=' w-full  min-h-screen bg-gray-800 text-white'>
         <SearchBar />
          <Tab />
          <ResultGrid />
    </div>
  )
}

export default App
