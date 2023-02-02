import jordi from "~/assets/jordi.jpg";

export const AboutMe = () => {
  return (
    <div className="mt-[124px]">
      <h3 className="text-2xl font-bold">Who is Jordi Santamaria Portoles</h3>
      <div className="flex mt-[48px] gap-[75px]">
        <img src={jordi} className='h-[285px]'/>
        <p className="text-lg">
          I had been working for 6 years as Full stack Software Engineer,  worked in more than 20 projects.
          <br/>
          <br/>
          I had been always working in 2 projects or more at same time, with makes me think constantly on how I could improve my performance, so I could have time to improve my code quality.
          <br/>
          <br/>
          I became frustrated so many times because project development was becoming slower than expected, not being able to offer products with the expected quality, with motivated me to learn all areas of development to give a full service with my own team.
          <br/>
          <br/>
          It includes frontend and backend, but also infrastructure, project management and design.
        </p>
      </div>
    </div>
  )
}
