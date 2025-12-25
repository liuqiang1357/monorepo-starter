import { Button } from '@repo/ui/components/button';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <Button asChild size="sm">
        <Link href="/hello-world">Hello World</Link>
      </Button>
    </div>
  );
}
