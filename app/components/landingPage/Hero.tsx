import { Button } from "../Button"

export const Hero = () => {
  return (

      <div className="flex flex-col items-center">
        <h1 className="mt-[80px] text-center text-lg font-bold text-primary-light">
          Fast website development
        </h1>
        <h2 className="mt-2 w-[642px] text-center text-[53px] font-bold text-white">
          I help startups get their website done faster so they can focus in
          sell
        </h2>
        <div className="mt-[48px] flex h-[320px] w-[640px] items-center justify-center bg-primary text-[52px] text-white">
          VSL
        </div>
        <Button className="mt-8">Contact</Button>
      </div>
  )
}
