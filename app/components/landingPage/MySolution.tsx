const content = [
  {title: 'Low size team with especialized members', description: 'Improve fast development with high quality by better communication and the right skills.'},
  {title: 'Don’t repeat yourself', description: 'Reuse high quality and tested code developed in other projects'},
  {title: 'High performance full stack', description: 'Improve development speed and website speed with the right tecnologies'}
]

export const MySolution = () => {
  return (
  <div className="mt-[124px]">
      <h3 className="text-center text-[32px] font-bold mb-[48px]">My Solution</h3>
      <div className="grid grid-cols-3 gap-8 text-lg font-bold">
        {content.map((item) => (
          <div className="bg-panel p-6">
            <h3 className="mb-6">
            {item.title}
            </h3>
            <p>
              {item.description}
            </p>
          </div>
        ))}

      </div>
  </div>
  )
}
