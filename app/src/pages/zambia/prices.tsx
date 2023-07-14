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

import { Calendar } from "../../components/UI/calendar";
import {
  CropSelect,
  PricePicker,
  MarketPicker,
} from "../../components/priceUpdates";
import { ToastAction } from "../../components/UI/Toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/UI/popover";
import { useToast } from "../../hooks/useToast";
import { cn } from "../../lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { trpc } from "../../utils/trpc";
import { inferProcedureInput } from "@trpc/server";
import { AppRouter } from "../../server/trpc/router/_app";
import { Toaster } from "../../components/UI/Toaster";
import { HeadSeo, Nav, Footer } from "../../components/landingPage";

export default function Prices() {
  const [selectedCrop, setSelectedCrop] = React.useState<string>("");
  const [selectedPrice, setSelectedPrice] = React.useState<number>();
  const [selectedDate, setSelectedDate] = React.useState<string>("");
  const [date, setDate] = React.useState<Date>();
  const [selectedMarket, setSelectedMarket] = React.useState<
    "Ndola" | "Kasumbalesa" | "Lusaka" | "Kitwe"
  >("Kasumbalesa");
  const { toast } = useToast();

  const pricesRouter = trpc.farmer.updatePrice.useMutation({
    onSuccess: () => {
      toast({
        title: "Updated",
        description: "Succesfully added the prices",
        duration: 1200,
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 1200,
      });
    },
  });
  const cancelUpdate = () => {
    setSelectedCrop("");
    setSelectedPrice(0);
    setSelectedDate("");
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    type Input = inferProcedureInput<AppRouter["farmer"]["updatePrice"]>;
    const input: Input = {
      crop: selectedCrop,
      price: selectedPrice as unknown as number,
      Date: selectedDate,
      market: selectedMarket,
    };
    if (!input.price || !input.crop || !input.Date) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",

        duration: 1200,
      });
      return;
    }

    try {
      await pricesRouter.mutateAsync(input);
      cancelUpdate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeadSeo title="Price Update" />
      <Nav />
      <main className="mt-[3rem] flex h-screen flex-col items-center justify-center gap-5  bg-gray-100">
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
              {date ? (
                format(date, "PPP")
              ) : (
                <span>{selectedDate ? selectedDate : "Pick a date"}</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(e) => {
                setSelectedDate(e?.toLocaleString().split(",")[0] as string);
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Record Prices</CardTitle>
            <CardDescription>
              Select the Crops and enter the prices in number only.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <MarketPicker setSelectedMarket={setSelectedMarket} />
                <CropSelect setSelectedCrop={setSelectedCrop} />

                <PricePicker
                  selectedPrice={selectedPrice}
                  setSelectedPrice={setSelectedPrice}
                />
                <CardFooter className="flex justify-between ">
                  <Button variant="outline" onClick={cancelUpdate}>
                    Cancel
                  </Button>

                  <Toaster />
                  <Button type="submit" disabled={pricesRouter.isLoading}>
                    {pricesRouter.isLoading ? "Updating..." : "Update Price"}
                  </Button>
                </CardFooter>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}
