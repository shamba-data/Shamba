import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/UI/select";
import { Label } from "../../components/UI";

const Index = ({ setSelectedCrop }: any) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="framework">Crop</Label>
      <Select
        onValueChange={(value) => {
          setSelectedCrop(value);
        }}
      >
        <SelectTrigger id="crops">
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
          <SelectItem value="broilerChicken">broilerChicken</SelectItem>
          <SelectItem value="villageChicken">villageChicken</SelectItem>
          <SelectItem value="irishPotato">irish Potato</SelectItem>
          <SelectItem value="oranges">oranges</SelectItem>
          <SelectItem value="cabbage">Cabbage</SelectItem>
          <SelectItem value="goat">goat</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Index;
