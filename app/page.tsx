'use client';
import ActionButton from "@/components/UI/ActionButton";
import Dropdown from "@/components/UI/Dropdown";
import Search from "@/components/UI/Search";
import { GearIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-4">
      <div className="grid grid-cols-5 gap-4">
        <ActionButton variant="primary" icon={<GearIcon />}>Primary</ActionButton>
        <ActionButton variant="secondary">Secondary</ActionButton>
        <ActionButton variant="danger">Danger</ActionButton>
        <ActionButton variant="warning">Warning</ActionButton>
        <ActionButton variant="success">Success</ActionButton>
      </div>
      <Dropdown options={[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }]} onSelect={(value) => console.log(value)} />
      <Search onSearch={(value) => console.log(value)} />
    </main>
  );
}
