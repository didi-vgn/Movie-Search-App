import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserListButton from "./UserListButton";

export default function Header() {
  return (
    <div className='bg-slate-950 flex justify-between items-center px-3'>
      <Logo />
      <div className='flex gap-2 divide-x'>
        <SearchBar />
        <UserListButton />
      </div>
    </div>
  );
}
