import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/UI/select";
import { Label } from "../../components/UI";

const Index = ({ setSelectedMarket }: any) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="framework">Market</Label>
      <Select
        onValueChange={(value) => {
          setSelectedMarket(value);
        }}
      >
        <SelectTrigger id="markets">
          <SelectValue placeholder="market type" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="Ndola">Ndola</SelectItem>
          <SelectItem value="Kasumbalesa">Kasumbalesa</SelectItem>
          <SelectItem value="Lusaka">Lusaka</SelectItem>
          <SelectItem value="Kitwe">Kitwe</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Index;
