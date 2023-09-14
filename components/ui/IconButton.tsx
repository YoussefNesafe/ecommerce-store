import { cn } from "@/lib/utils"
import { MouseEventHandler, ReactElement } from "react"
type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  icon: ReactElement;
  className?: String
}
const IconButton = ({ icon, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition", className)}>
      {icon}
    </button>
  )
}

export default IconButton