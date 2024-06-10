"use client";
import { useState } from "react";
import ActionButton from "@/components/UI/ActionButton";
import Dropdown from "@/components/UI/Dropdown";
import Search from "@/components/UI/Search";
import Input from "@/components/UI/Input";
import { GearIcon } from "@radix-ui/react-icons";
import Avatar from "@/components/UI/Avatar";
import Textarea from "@/components/UI/Textarea";
import Tooltip from "@/components/UI/Tooltip";
import Modal from "@/components/UI/Modal";
import Badge from "@/components/UI/Badge";
import { Spinner } from "@/components/UI/Spinner";
import Markdown from "@/components/UI/Markdown";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex flex-col items-center justify-between p-24 gap-4">
      <div className="grid grid-cols-5 gap-4">
        <Tooltip content="Tooltip content">
          <ActionButton variant="primary" icon={<GearIcon />}>
            Primary
          </ActionButton>
        </Tooltip>

        <ActionButton loading variant="secondary">Secondary</ActionButton>
        <ActionButton variant="danger">Danger</ActionButton>
        <ActionButton variant="warning">Warning</ActionButton>
        <ActionButton variant="success" onClick={() => setOpen(true)}>Open Modal</ActionButton>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="success">Success</Badge>
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
      <Modal open={open} onClose={() => setOpen(false)}>
        <h1 className="mb-4">Modal</h1>
        <p>
            Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </Modal>
      <Spinner />
      <Markdown>
        {`
          # Markdown

          ## Lorem ipsum

          Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        `}
      </Markdown>
    </main>
  );
}
