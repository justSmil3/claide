import Link from "next/link";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-40"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
	 
        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/" onClick={toggle}><p>Home</p></Link>
          </li>
          <li>
            <Link href="/Create" onClick={toggle}><p>Create</p></Link>
          </li>
		  <li>
		    <Link href="/Gallery" onClick={toggle}><p>Gallery</p></Link>
		  </li>
			<Link href="/Plans" onClick={toggle}><p>Pricing</p></Link>
		  <li>
		    <Link href="/AboutUs" onClick={toggle}><p>About Us</p></Link>
		  </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
