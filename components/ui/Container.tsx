import { ReactNode } from "react"


type Container = {
  children: ReactNode
}
const Container = ({ children }: Container) => {
  return (
    <div className='mx-auto max-w-7xl'>
      {children}
    </div>
  )
}

export default Container