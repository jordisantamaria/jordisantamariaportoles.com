import { Css3, Html5 } from "../icons";

const techList = [
  {name: 'HTML', icon: <Html5 className="w-[48px] h-[48px]"/>},
  {name: 'CSS', icon: <Css3/>},
]
export const TecnologiesStack = () => {
  return (
    <div className="mt-[124px]">
      <h3 className="text-2xl font-bold">My fullstack tecnologies</h3>
      <div className="grid grid-cols-6 gap-2 mt-[48px]">
      {techList.map((item) => (
      <div className="bg-panel p-8 w-[120px] h-[120px] flex justify-center items-center flex-col">
          {item.icon}
          <h4>{item.name}</h4>
      </div>

      ))}
      </div>
    </div>
  )
}
