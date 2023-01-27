import { Button } from "./Button";

export const Nav = () => {
  return (
    <nav className="mt-6 flex justify-between text-link items-center text-lg">
      <div className="flex">
        <div className="mr-10 text-white">Jordi Santamaria Portoles</div>
        <div className="mr-10">Blog</div>
        <div className="mr-10">Portfolio</div>
        <div className="mr-10">Members</div>
      </div>
      <Button>Contact</Button>
    </nav>
  );
};
