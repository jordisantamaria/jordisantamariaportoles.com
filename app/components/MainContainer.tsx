// responsive layout following material specs
export const MainContainer = (props: any) => {
  return (
  <main className="m-4 sm:m-8 lg:m-auto xl:m-[200px] 2xl:m-auto lg:w-[840px] 2xl:w-[1040]">
      {props.children}
  </main>
  )
}
