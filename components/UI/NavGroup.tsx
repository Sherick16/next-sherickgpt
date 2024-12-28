import NavItem from "./NavItem";

type NavItem = {
  label: string;
  href: string;
};

const NavGroup = ({ title, items }: { title: string; items: NavItem[] }) => (
  <div className="space-y-2 px-4 py-6 pb-0 rounded-2xl">
    <h3 className="text-sm text-white font-semibold">{title}</h3>
    {items.map((e, i) => (
      <NavItem key={i} to={e?.href}>
        {e?.label}
      </NavItem>
    ))}
  </div>
);

export default NavGroup;
