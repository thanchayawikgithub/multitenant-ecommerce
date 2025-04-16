import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <Button variant="eleveted">Hello World</Button>
      <Input placeholder="I am an input" />
      <Progress value={50} />
      <Textarea placeholder="I am a textarea" />
    </div>
  );
}
