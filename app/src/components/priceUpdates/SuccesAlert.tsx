import { Popover, PopoverContent, PopoverTrigger } from "../UI/popover";

export default function Index() {
  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
}
