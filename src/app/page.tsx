import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-900">
      <Image
        src="/corevance-logo.png"
        alt="CoreVance — Built from the Core. Engineered to Advance."
        width={600}
        height={300}
        priority
      />
    </div>
  );
}
