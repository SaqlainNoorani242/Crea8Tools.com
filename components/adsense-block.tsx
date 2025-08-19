"use client"

export function AdSenseBlock() {
  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {/* AdSense Placeholder */}
            <div className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                AdSense Advertisement Block
                <br />
                <span className="text-xs">728x90 Leaderboard or 320x50 Mobile Banner</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
