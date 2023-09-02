import Left from "./sections/left"
import Center from "./sections/center"
import Right from "./sections/right"

export default function Home() {
  return (
    <div className="grid lg:grid-cols-[20%_60%_20%] lg:h-[85vh] mx-auto max-w-full gap-y-4 px-4" >
      <Left />
      <Center />
      <Right />
    </div>
  )
}
