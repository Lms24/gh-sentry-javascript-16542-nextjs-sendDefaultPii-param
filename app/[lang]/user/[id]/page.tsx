import Link from "next/link";

interface UserPageProps {
  params: Promise<{
    lang: string;
    id: string;
  }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { lang, id } = await params;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">
            User Profile
          </h1>
          <div className="space-y-4">
            <div className="bg-black/[.05] dark:bg-white/[.06] px-6 py-4 rounded-lg">
              <p className="text-lg mb-2 font-medium">Language Parameter:</p>
              <code className="text-2xl font-[family-name:var(--font-geist-mono)] font-semibold text-green-600 dark:text-green-400">
                {lang}
              </code>
            </div>
            <div className="bg-black/[.05] dark:bg-white/[.06] px-6 py-4 rounded-lg">
              <p className="text-lg mb-2 font-medium">User ID Parameter:</p>
              <code className="text-2xl font-[family-name:var(--font-geist-mono)] font-semibold text-blue-600 dark:text-blue-400">
                {id}
              </code>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <p className="tracking-[-.01em]">
            🎉 This page demonstrates nested dynamic routes with multiple
            parameters in Next.js App Router.
          </p>
          <p className="tracking-[-.01em]">
            Try changing the URL to{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded">
              /en/user/123
            </code>{" "}
            or{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded">
              /fr/user/jane
            </code>
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="/"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm">
        <p className="text-gray-600 dark:text-gray-400">
          Dynamic route:{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded">
            /[lang]/user/[id]
          </code>
        </p>
      </footer>
    </div>
  );
}
