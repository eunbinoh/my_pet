import './style/App.css'
import { useLoadState } from './hooks/useLoadState';


const App = () => {
  useLoadState();

  return (
    <>

      <div className="card">
        <button> Button </button>

      </div>
    </>
  )
}
export default App
