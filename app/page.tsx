"use client";
import ActionButton from "@/components/UI/ActionButton";
import Dropdown from "@/components/UI/Dropdown";
import Search from "@/components/UI/Search";
import Input from "@/components/UI/Input";
import { GearIcon } from "@radix-ui/react-icons";
import Avatar from "@/components/UI/Avatar";
import Textarea from "@/components/UI/Textarea";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-4">
      <div className="grid grid-cols-5 gap-4">
        <ActionButton variant="primary" icon={<GearIcon />}>
          Primary
        </ActionButton>
        <ActionButton variant="secondary">Secondary</ActionButton>
        <ActionButton variant="danger">Danger</ActionButton>
        <ActionButton variant="warning">Warning</ActionButton>
        <ActionButton variant="success">Success</ActionButton>
      </div>
      <Dropdown
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
          { label: "Option 3", value: "3" },
        ]}
        onSelect={(value) => console.log(value)}
      />
      <Search onSearch={(value) => console.log(value)} />
      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="Input"
          label="Label"
          onChange={(value) => console.log(value)}
          required
        />
        <Textarea
          placeholder="Textarea"
          label="Label"
          onChange={(value) => console.log(value)}
          required
        />
      </div>
      <Avatar
        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
        alt="Avatar"
        size="md"
        priority={true}
      />
      <div className="grid grid-cols-3 gap-4">
        <h1>H1: Lorem ipsum</h1>
        <h2>H2: Lorem ipsum</h2>
        <h3>H3: Lorem ipsum</h3>
        <h4>H4: Lorem ipsum</h4>
        <h5>H5: Lorem ipsum</h5>
        <h6>H6: Lorem ipsum</h6>
        <p>
          Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </main>
  );
}
