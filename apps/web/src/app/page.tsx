import { Button } from '@repo/ui/components/button';
import { HelloWorld } from '@/components/hello-world/hello-world';

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <HelloWorld />
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
