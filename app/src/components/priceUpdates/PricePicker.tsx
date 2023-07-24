import React from "react";
import { Input, Label } from "../../components/UI";

const Index = ({ selectedPrice, setSelectedPrice }: any) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="name">Prices</Label>
      <Input
        id="name"
        type="number"
        onChange={(e) => {
          setSelectedPrice(Number(e.target.value));
        }}
        value={selectedPrice}
      />
    </div>
  );
};

export default Index;
