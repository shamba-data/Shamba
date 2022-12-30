import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactElement;
  selector: string;
}
export default function ClientOnlyPortal({ children, selector }) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
}
