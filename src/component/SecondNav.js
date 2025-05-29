import Link from "next/link"


export const SecondNavbar = () => {
    return (
        <>
            {/* Header */}
            <header className="border-b border-white/20 py-6">
                <div className="container mx-auto px-4">
                    <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        MEM INSPECT
                    </Link>
                </div>
            </header>
        </>
    )
}
