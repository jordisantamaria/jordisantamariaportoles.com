
export const Button = ({children, onClick, className = ''}: React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button onClick={onClick} className={`bg-primary py-2 px-6 font-bold text-white text-lg ${className}`}>
      {children}
    </button>
  )
}
