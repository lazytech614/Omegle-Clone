import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const Room = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const name = searchParams.get('name')

    useEffect(() => {
        // console.log(name)
        //Logic to init user to the room
    }, [name])

  return (
    <div>
        Hi {name}
    </div>
  )
}

export default Room