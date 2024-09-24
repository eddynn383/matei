'use client'

import { Button } from "@/components/Button"

export default function GlobalError({
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>
                <Button onClick={() => reset()}>Try again</Button>
            </body>
        </html>
    )
}