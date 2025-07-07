import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className='bg-slate-950 flex justify-between items-center px-3'>
      <Logo />
      <SearchBar />
    </div>
  );
}
