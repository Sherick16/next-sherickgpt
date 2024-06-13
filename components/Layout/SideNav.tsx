'use client';
import ActionButton from "../UI/ActionButton";
import IconButton from "../UI/IconButton";
import Tooltip from "../UI/Tooltip";
import Divider from "../UI/Divider";
import NavGroup from "../UI/NavGroup";
import { SquarePen, PanelLeftClose, Download } from "lucide-react";

const SideNav = ({ open, setOpen}: { open: boolean; setOpen: (open: boolean) => void }) => {
  return (
    <>
      {/* Top */}
      <div className="flex justify-between mb-4">
        <Tooltip content="Close sidebar" position="right">
          <IconButton icon={<PanelLeftClose className="w-6 h-6" />} variant="secondary" onClick={() => setOpen(false)} />
        </Tooltip>
        <Tooltip content="Download all chats" position="right">
          <IconButton icon={<Download className="w-6 h-6" />} variant="secondary" />
        </Tooltip>
      </div>
      <ActionButton icon={<SquarePen className="w-4 h-4" />} className="w-full mb-4" variant="primary">Create chat</ActionButton>
      <Divider className="mb-4 mt-8" />
      {/* Middle */}
      <div className="overflow-y-auto">
        <NavGroup title="Today" items={["Chat 1", "Chat 2", "Chat 3"]} />
        <NavGroup title="Yesterday" items={["Chat 1", "Chat 2", "Chat 3"]} />
      </div>
      {/* Bottom */}
      <Divider className="my-8" />
    </>
  )
};

export default SideNav;