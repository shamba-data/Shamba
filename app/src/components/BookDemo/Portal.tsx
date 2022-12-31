import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  selector: string;
}
export default function ClientOnlyPortal({ children, selector }: Props) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>(selector);
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}

// .overlay {
//     display: block;
//     position: fixed;
//     padding-top: 100px;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     overflow: auto;
//     background-color: rgba(0,0,0,0.4);
//     z-index: 2;
// }
