

interface Iprops {
    count:number;
}

export const Navbar = ({count}:Iprops) => {
  return (
    <>
    <div>
        <h3>the state is {count}</h3>
    </div>
    </>
  )
}

