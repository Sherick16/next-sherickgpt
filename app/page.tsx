"use client";
import { useState } from "react";
import ActionButton from "@/components/UI/ActionButton";
import Dropdown from "@/components/UI/Dropdown";
import Search from "@/components/UI/Search";
import Input from "@/components/UI/Input";
import Avatar from "@/components/UI/Avatar";
import Textarea from "@/components/UI/Textarea";
import Tooltip from "@/components/UI/Tooltip";
import Modal from "@/components/UI/Modal";
import Badge from "@/components/UI/Badge";
import { Spinner } from "@/components/UI/Spinner";
import Markdown from "@/components/UI/Markdown";
import { Alert } from "@/components/UI/Alert";
import { Card } from "@/components/UI/Card";
import { Skeleton } from "@/components/UI/Skeleton";
import { Switch } from "@/components/UI/Switch";
import { TabGroup } from "@/components/UI/TabGroup";
import { Table } from "@/components/UI/Table";
import { capitalize } from "@/libs/utils";
import { Settings } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [switchState, setSwitchState] = useState(false);

  const variants = [
    "primary",
    "secondary",
    "danger",
    "warning",
    "success",
  ] as const;

  return (
    <main className="flex flex-col items-center justify-between p-24 gap-4 overflow-y-scroll">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Action Buttons</h2>
        <div className="grid grid-cols-5 gap-4">
          {variants.map((variant) => (
            <Tooltip key={variant} content={`Tooltip content for ${variant}`}>
              <ActionButton
                variant={variant}
                icon={<Settings />}
                onClick={() => setOpen(true)}
              >
                {capitalize(variant)}
              </ActionButton>
            </Tooltip>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Badges</h2>
        <div className="grid grid-cols-5 gap-4">
          {variants.map((variant) => (
            <Badge key={variant} variant={variant}>
              {capitalize(variant)}
            </Badge>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Dropdown</h2>
        <div className="grid grid-cols-3 gap-4">
          {variants.map((variant) => (
            <Dropdown
              key={variant}
              variant={variant}
              options={[
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
                { label: "Option 3", value: "3" },
              ]}
              onSelect={(value) => console.log(value)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Search</h2>
        <div className="grid grid-cols-2 gap-4">
          <Search onSearch={(value) => console.log(value)} />
          <Search onSearch={(value) => console.log(value)} loading />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Inputs</h2>
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
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Avatar</h2>
        <Avatar
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
          alt="Avatar"
          size="md"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Typography</h2>
        <div className="grid grid-cols-3 gap-4">
          <h1>H1: Lorem ipsum</h1>
          <h2>H2: Lorem ipsum</h2>
          <h3>H3: Lorem ipsum</h3>
          <h4>H4: Lorem ipsum</h4>
          <h5>H5: Lorem ipsum</h5>
          <h6>H6: Lorem ipsum</h6>
          <p>
            Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Spinner</h2>
        <Spinner />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Markdown</h2>
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
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
        <div className="space-y-4">
          {variants.map((variant, index) => (
            <Alert key={variant} variant={variant} closeable={index === 0}>
              This is a {variant} alert message.
            </Alert>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {variants.map((variant) => (
            <Card key={variant} variant={variant}>
              <h3 className="text-lg font-semibold mb-2">{variant} Card</h3>
              <p>This is an example of a {variant} card component.</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skeleton</h2>
        <div className="space-y-4">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Switch</h2>
        <div className="flex items-center space-x-4">
          {variants.map((variant) => (
            <Switch
              key={variant}
              variant={variant}
              checked={switchState}
              onChange={setSwitchState}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Tab Group</h2>
        <TabGroup
          tabs={[
            { id: "tab1", label: "Tab 1", content: <p>Content for Tab 1</p> },
            { id: "tab2", label: "Tab 2", content: <p>Content for Tab 2</p> },
            { id: "tab3", label: "Tab 3", content: <p>Content for Tab 3</p> },
          ]}
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Table</h2>
        <Table
          headers={["Name", "Email", "Role"]}
          rows={[
            ["John Doe", "john@example.com", "Admin"],
            ["Jane Smith", "jane@example.com", "User"],
            ["Bob Johnson", "bob@example.com", "Editor"],
          ]}
        />
      </section>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header>Example Modal</Modal.Header>

        <Modal.Content>
          <p>
            This is an example modal that uses a gray color scheme and follows
            the established design language. It includes a backdrop blur effect
            and smooth animations.
          </p>
          <p className="mt-4">
            The modal is fully accessible and can be closed by:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Clicking the close button</li>
            <li>Clicking the backdrop</li>
            <li>Pressing the Escape key</li>
          </ul>
        </Modal.Content>

        <Modal.Footer>
          <ActionButton variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </ActionButton>
          <ActionButton onClick={() => setOpen(false)}>Confirm</ActionButton>
        </Modal.Footer>
      </Modal>
    </main>
  );
}
