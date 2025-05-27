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
      setScrolled(window.scrollY > 20)
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
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled ? "bg-white/95 backdrop-blur-lg shadow-glow border-b border-primary/10" : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Yol Arkadaşları Psikoloji Vakfı"
              width={160}
              height={48}
              className="h-auto w-auto max-h-12"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              {item.dropdown ? (
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className={cn(
                    "flex items-center text-sm font-medium transition-all duration-300 hover:text-primary relative py-2 px-4 rounded-full group/button",
                    pathname.startsWith(item.href)
                      ? "text-primary bg-primary/10 shadow-soft"
                      : scrolled
                        ? "text-foreground/80 hover:bg-primary/5"
                        : "text-foreground/90 hover:bg-white/10",
                  )}
                >
                  <span className="font-lora italic">{item.name}</span>
                  <ChevronDown
                    className={cn(
                      "ml-2 h-4 w-4 transition-transform duration-300",
                      activeDropdown === item.name ? "rotate-180" : "group-hover/button:rotate-180",
                    )}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-primary relative py-2 px-4 rounded-full font-lora italic",
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-primary bg-primary/10 shadow-soft"
                      : scrolled
                        ? "text-foreground/80 hover:bg-primary/5"
                        : "text-foreground/90 hover:bg-white/10",
                  )}
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div
                  className={cn(
                    "absolute left-0 mt-2 w-72 rounded-2xl bg-white/95 backdrop-blur-lg shadow-glow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-primary/10 overflow-hidden",
                    activeDropdown === item.name && "opacity-100 visible",
                  )}
                >
                  <div className="py-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-6 py-3 text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary transition-all duration-200 font-lora italic border-l-2 border-transparent hover:border-primary/30"
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

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full h-12 w-12 hover:bg-primary/10 transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-primary/10 shadow-glow">
          <nav className="container py-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.href} className="flex flex-col">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={cn(
                          "flex items-center justify-between text-base font-medium transition-all hover:text-primary py-3 px-4 rounded-xl font-lora italic",
                          pathname.startsWith(item.href)
                            ? "text-primary bg-primary/10"
                            : "text-foreground/80 hover:bg-primary/5",
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
                        <div className="ml-6 mt-2 flex flex-col space-y-2 border-l-2 border-primary/20 pl-4">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="text-sm text-foreground/70 hover:text-primary py-2 transition-all duration-200 font-lora italic hover:translate-x-1"
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
                        "text-base font-medium transition-all hover:text-primary py-3 px-4 rounded-xl font-lora italic",
                        pathname === item.href ? "text-primary bg-primary/10" : "text-foreground/80 hover:bg-primary/5",
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
