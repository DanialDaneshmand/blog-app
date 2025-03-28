import { useFormStatus } from "react-dom";
import SvgComponent from "./SvgComponent";
import Button from "./Button";

export default function SubmitButton({ children, className, ...props }) {
  const { pending } = useFormStatus();
  return (
    <Button
      {...props}
      disabled={pending}
      className={`flex items-center justify-center gap-x-4 py-4
        ${className} 
        `}
    >
      {children}
      {pending && <SvgComponent />}
    </Button>
  );
}
