"use client"

import { useRouter, usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

export default function Navbar() {
    const router = useRouter()
    const pathname = usePathname()
    const [locale, setLocale] = useState("en") // Default locale

    useEffect(() => {
        // Extract the current locale from the pathname
        const currentLocale = pathname.split("/")[1]
        setLocale(currentLocale || "en")
    }, [pathname])

    const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value

        // Navigate to the new locale, preserving the path after the locale
        router.push(
            `/${newLocale}${pathname.replace(/^\/[a-z]{2}/, "") || "/"}`
        )
    }

    return (
        <nav>
            <select value={locale} onChange={handleLocaleChange}>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
            </select>
        </nav>
    )
}
