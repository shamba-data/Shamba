import * as React from "react";

import { Button } from "../../components/UI/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/UI/Card";
import { Input } from "../../components/UI/Input";
import { Label } from "../../components/UI/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/UI/select";
import { Calendar } from "../../components/UI/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/UI/popover";
import { cn } from "../../lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

export default function Prices() {
  const [selectedCrop, setSelectedCrop] = React.useState<string>("");
  const [selectedPrice, setSelectedPrice] = React.useState<string>("");
  const [date, setDate] = React.useState<Date>();
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-5 bg-gray-100">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[350px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(e) => {
              setDate;
              console.log(e, "how are you");
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {/* <h3>Some date {date}</h3> */}
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Record Prices</CardTitle>
          <CardDescription>
            Select the Crops and enter the prices in number only.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Crop</Label>
                <Select
                  onValueChange={(value) => {
                    setSelectedCrop(value);
                  }}
                >
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Crop Type" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="tomatoes">Tomatoes</SelectItem>
                    <SelectItem value="beans">beans</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="g/nuts">G/nuts</SelectItem>
                    <SelectItem value="onions">Onions</SelectItem>
                    <SelectItem value="watermelon">Watermelon</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                    <SelectItem value="garlic">garlic</SelectItem>
                    <SelectItem value="avocado">avocado</SelectItem>
                    <SelectItem value="cucumber">cucumber</SelectItem>
                    <SelectItem value="lemon">lemon</SelectItem>
                    <SelectItem value="broilerChicken">
                      broilerChicken
                    </SelectItem>
                    <SelectItem value="villageChicken">
                      villageChicken
                    </SelectItem>
                    <SelectItem value="irishPotato">irish Potato</SelectItem>
                    <SelectItem value="oranges">oranges</SelectItem>
                    <SelectItem value="cabbage">Cabbage</SelectItem>
                    <SelectItem value="goat">goat</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Prices</Label>
                <Input id="name" placeholder="Crop" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Update Price</Button>
        </CardFooter>
      </Card>
    </section>
  );
}
