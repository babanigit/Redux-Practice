

import './App.css'
import { Navbar } from './components/Navbar'

import { useAppDispatch,useAppSelector } from './redux/hook'
import { decrement, increment, incrementByAmount } from './redux/counter/counterSlice'

function App() {

  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />

    </div>
     
     <div>
     <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(4))}
        >
          increase by num
        </button>
     </div>
    </>
  )
}

export default App
