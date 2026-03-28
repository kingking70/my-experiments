import Link from "next/link"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <h1 className="font-medium">Experiments</h1>
        <Link href="/particle-demo" className="underline underline-offset-4">
          Particle text demo
        </Link>
      </div>
    </div>
  )
}
