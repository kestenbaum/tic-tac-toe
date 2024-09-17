import {useState} from "react";

interface EditingName {
  edit: boolean
}

export default function App() {
  const [isEdit, setIsEdit]:EditingName = useState(false)

  return (
    <>
        <span>
          Player
          <span>Name Player 1</span>
          <span>Symbol Player Symbol</span>
        </span>
    </>
  )
}

