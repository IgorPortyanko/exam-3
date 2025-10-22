

const ResponsiveMenuButton = ({toggleMenu}) => {

    return (
        <button
        onClick={toggleMenu}
        className="group block relative w-[40px] h-5 sm:hidden">
        <span className="top-0 absolute bg-black w-full h-[1px] group-[.active]:rotate-45 group-[.active]:translate-y-2"></span>
        <span className="top-1/2 absolute bg-black w-full h-[1px] group-[.active]:opacity-0"></span>
        <span className="bottom-0 absolute bg-black w-full h-[1px] group-[.active]:-translate-y-[10px] group-[.active]:-rotate-45"></span>
      </button>
    )
}

export default ResponsiveMenuButton