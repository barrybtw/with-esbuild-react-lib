import { Button } from "./components/ui/button";

export const YourFirstComponent = () => {
  return (
    <div className="">
      <h1>Hello world! Look at this cool button</h1>
      <Button variant={"default"} size={"lg"}>
        Cool, right?
      </Button>
    </div>
  );
};
