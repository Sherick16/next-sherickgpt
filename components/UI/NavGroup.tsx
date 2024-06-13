import NavItem from "./NavItem"

const NavGroup = ({ title, items }: { title: string, items: string[] }) => (
  <div className="space-y-2 px-4 py-6 pb-0 rounded-2xl">
    <h3 className="text-sm text-white font-semibold">{title}</h3>
    {[...Array(Math.floor(Math.random() * 4) + 1)].map((_, i) => (
      <NavItem key={i} to="/">Styling first & last Elements</NavItem>
    ))}
  </div>
);

export default NavGroup;