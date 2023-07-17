import { Button } from "../UI/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../UI/Card";
import { Input } from "../UI/Input";
import { Label } from "../UI/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../UI/Tabs";

export default function EditAccount() {
  return (
    <Tabs defaultValue="account" className="mt-10 w-[400px]">
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
            <div className="space-y-1">
              <Label htmlFor="name">Phone Number</Label>
              <Input id="name" defaultValue="260XXXXXXX" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Renew Payment</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Delete Account</CardTitle>
            <CardDescription>
              Enter the phone number you used to subscribe and click on delete
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Enter Phone number</Label>
              <Input id="current" type="number" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="destructive">Delete</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
