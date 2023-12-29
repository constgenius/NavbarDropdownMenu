import { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function Dropdown({ children, trigger }) {
    const [show, setShow] = useState(false);
    const dropRef = useClickOutside(() => setShow(false))

    return (
        <div className="w-fit relative" ref={dropRef} onClick={() => setShow(curr => !curr)}>
            <div>{trigger}</div>
            {show && <ul className="min-w-max absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow overflow-hidden">{children}</ul>}
        </div>
    )
}

export function DropdownItem({ children }) {
    return (
        <li className="flex gap-3 items-center px-4 py-2 text-gray-800 hover:bg-gray-50 cursor-pointer">{children}</li>
    )
}