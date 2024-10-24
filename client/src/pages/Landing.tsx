import { useState } from "react"
import { Link } from "react-router-dom"

const Landing = () => {
    const [name, setName] = useState('')

  return (
    <div className="p-4 flex flex-col gap-4 items-start">
        <input 
            onChange={e => setName(e.target.value)} 
            type="text" 
            placeholder="Name"
            className="border border-black rounded-md px-2 py-1"
        />
        <Link to={`/room/?name=${name}`} className="shadow bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-md">Submit</Link>
    </div>
  )
}

export default Landing