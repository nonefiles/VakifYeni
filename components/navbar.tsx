"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navItems = [
  { name: "Ana Sayfa", href: "/" },
  {
    name: "Kurumsal",
    href: "/kurumsal",
    dropdown: [
      { name: "Hakkımızda", href: "/hakkimizda" },
      { name: "Vakfın Hikayesi", href: "/hakkimizda/vakfin-hikayesi" },
      { name: "Kurucular ve Ekip", href: "/hakkimizda/kurucular-ve-ekip" },
      { name: "Değerler ve Vizyon", href: "/hakkimizda/degerler-ve-vizyon" },
      { name: "Vakıf Tüzüğü", href: "/hakkimizda/vakif-tuzugu" },
    ],
  },
  {
    name: "Hizmetlerimiz",
    href: "/hizmetlerimiz",
    dropdown: [
      { name: "Hizmetlerimiz", href: "/hizmetlerimiz/hizmetlerimiz" },
      { name: "Faaliyetlerimiz", href: "/hizmetlerimiz/faaliyetlerimiz" },
    ],
  },
  { name: "Blog/Kaynaklar", href: "/blog" },
  { name: "Gönüllü Ol/Bağış Yap", href: "/gonullu-bagis" },
  { name: "İletişim", href: "/iletisim" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-transparent backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Yol Arkadaşları Psikoloji Vakfı"
            width={150}
            height={45}
            className="h-auto w-auto max-h-14"
          />
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              {item.dropdown ? (
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className={cn(
                    "flex items-center text-sm font-lora italic font-medium transition-all duration-300 hover:text-primary relative py-2 group",
                    pathname.startsWith(item.href)
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:content-['']"
                      : "text-foreground/70",
                  )}
                >
                  {item.name}
                  <ChevronDown
                    className={cn(
                      "ml-1 h-4 w-4 transition-transform duration-300",
                      activeDropdown === item.name ? "rotate-180" : "group-hover:rotate-180",
                    )}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-lora italic font-medium transition-all duration-300 hover:text-primary relative py-2",
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:content-['']"
                      : "text-foreground/70",
                  )}
                >
                  {item.name}
                </Link>
              )}

              {item.dropdown && (
                <div
                  className={cn(
                    "absolute left-0 mt-2 w-64 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-primary/10 overflow-hidden",
                    activeDropdown === item.name && "opacity-100 visible",
                  )}
                >
                  <div className="py-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent hover:text-primary transition-all duration-200 border-l-2 border-transparent hover:border-primary"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full h-10 w-10"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="container pb-6 md:hidden bg-white/80 backdrop-blur-sm">
          <nav className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <div key={item.href} className="flex flex-col">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={cn(
                        "flex items-center justify-between text-base font-lora italic font-medium transition-all hover:text-primary py-2",
                        pathname.startsWith(item.href) ? "text-primary" : "text-foreground/70",
                      )}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          activeDropdown === item.name && "transform rotate-180",
                        )}
                      />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 flex flex-col space-y-1 border-l-2 border-primary/30 pl-4">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="text-sm text-foreground/70 hover:text-primary py-2 transition-all duration-200 hover:translate-x-1"
                            onClick={() => {
                              setIsMenuOpen(false)
                              setActiveDropdown(null)
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-base font-lora italic font-medium transition-all hover:text-primary py-2",
                      pathname === item.href ? "text-primary" : "text-foreground/70",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
