import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../UI/Card";
import { Input, Label, Button } from "../UI";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../UI/Tabs";
import { trpc as api } from "../../utils/trpc";
import { Toaster } from "../UI/Toaster";
import { useToast } from "../../hooks/useToast";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastAction } from "../UI/Toast";

function DeleteAccount() {
  const { toast } = useToast();
  const deleteAccount = api.farmer.deleteFarmer.useMutation({
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

  const deleteSchema = z.object({
    phoneNumber: z.string().regex(/^260\d{9}$/),
  });
  type DeleteSchema = z.infer<typeof deleteSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeleteSchema>({ resolver: zodResolver(deleteSchema) });

  function submitHandler(data: DeleteSchema) {
    try {
      deleteAccount.mutate(data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 1200,
      });
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Delete Account</CardTitle>
        <CardDescription>
          Enter the phone number you used to subscribe and click on delete
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form className="space-y-1" onSubmit={handleSubmit(submitHandler)}>
          <Label htmlFor="current">Enter Phone number</Label>
          <Input
            type="string"
            placeholder="260780321731"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber?.message && (
            <span className="text-red-500">
              Please enter a phone number used in a 260xxxxxxxxx format
            </span>
          )}
          <CardFooter>
            <Button
              variant="destructive"
              size="lg"
              type="submit"
              className=" mt-3 "
            >
              Delete
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
export default function EditAccount() {
  const { toast } = useToast();

  return (
    <Tabs defaultValue="account" className="mt-10 w-[400px]">
      <Toaster />
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Renew Subscription</TabsTrigger>
        <TabsTrigger value="password">Delete Account</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Renewing Subscription</CardTitle>
            <CardDescription>
              Enter your phone number used to register and click on renew
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form className="space-y-1">
              <Label htmlFor="name">Phone Number</Label>
              <Input id="name" defaultValue="260XXXXXXX" />
            </form>
          </CardContent>
          <CardFooter>
            <Button>Renew Payment</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <DeleteAccount />
      </TabsContent>
    </Tabs>
  );
}
