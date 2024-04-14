import Counter from "./Counter"

function CounterList() {
  return (
    <div className="flex flex-col">
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default CounterList