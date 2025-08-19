import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-md">
        <div className="mb-8">
          <h1 className="mb-2 text-6xl font-bold text-blue-600">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Page Not Found</h2>
          <p className="text-gray-600">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you entered
            the wrong URL.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/tools">
              <Search className="mr-2 h-4 w-4" />
              Browse Tools
            </Link>
          </Button>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
