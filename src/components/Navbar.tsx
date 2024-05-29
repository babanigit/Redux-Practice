import { useAppSelector } from "../redux/hook"



export const Navbar = () => {
    const count = useAppSelector((state) => state.counter.value)


  return (
    <>
    <div>
        <h3>the state is {count}</h3>
    </div>
    </>
  )
}

