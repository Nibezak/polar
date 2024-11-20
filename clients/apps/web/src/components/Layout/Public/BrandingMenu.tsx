'use client'

import LogoIcon from '@/components/Brand/LogoIcon'
import {
  ArrowDownwardOutlined,
  ContentPasteOutlined,
} from '@mui/icons-material'
import Link from 'next/link'

import LogoType from '@/components/Brand/LogoType'
import { useOutsideClick } from '@/utils/useOutsideClick'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from 'polarkit/components/ui/dropdown-menu'
import { MouseEventHandler, useCallback, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const BrandingMenu = ({
  logoVariant = 'icon',
  size,
  className,
  logoClassName,
}: {
  logoVariant?: 'icon' | 'logotype'
  size?: number
  className?: string
  logoClassName?: string
}) => {
  const brandingMenuRef = useRef<HTMLDivElement>(null)

  useOutsideClick([brandingMenuRef], () => setBrandingMenuOpen(false))

  const [brandingMenuOpen, setBrandingMenuOpen] = useState(false)

  const handleTriggerClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault()
      e.stopPropagation()
      setBrandingMenuOpen(true)
    },
    [],
  )

  const handleCopyLogoToClipboard = useCallback(() => {
    navigator.clipboard.writeText(
      logoVariant === 'icon' ? PolarIconSVGString : PolarLogoSVGString,
    )
    setBrandingMenuOpen(false)
  }, [logoVariant])

  return (
    <div className={twMerge('relative flex flex-row items-center', className)}>
      <DropdownMenu open={brandingMenuOpen}>
        <DropdownMenuTrigger onContextMenu={handleTriggerClick}>
          <Link href="/">
            {logoVariant === 'logotype' ? (
              <LogoType
                className={twMerge(
                  '-ml-2 text-black md:ml-0 dark:text-white',
                  logoClassName,
                )}
                width="10%" // Use 100% to allow full width scaling based on parent container size
                height="10%" // Set height to 100% for consistent scaling
              />
            ) : (
              <LogoIcon
                className={twMerge('text-black dark:text-white', logoClassName)}
                size={size ?? 42}
              />
            )}
          </Link>
        </DropdownMenuTrigger>
        <DropdownMenuContent ref={brandingMenuRef} align="start">
          <DropdownMenuLabel>Platform</DropdownMenuLabel>
          <DropdownMenuItem
            className="flex flex-row gap-x-3"
            onClick={handleCopyLogoToClipboard}
          >
            <ContentPasteOutlined fontSize="inherit" />
            <span>Copy Logo as SVG</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex flex-row gap-x-3"
            onClick={() => setBrandingMenuOpen(false)}
          >
            <ArrowDownwardOutlined fontSize="inherit" />
            <Link href="/assets/brand/polar_brand.zip">
              Download Branding Assets
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

const PolarIconSVGString = `<svg version="1.1" id="Layer_1" xmlns:x="ns_extend;" xmlns:i="ns_ai;" xmlns:graph="ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 57.6 65" style="enable-background:new 0 0 57.6 65;" xml:space="preserve">
 <style type="text/css">
  .st0{fill:#FFFFFF; fill-opacity:0.8;}
  .st1{fill:#FFFFFF; fill-opacity:0.5;}
  .st2{fill:#FFFFFF; fill-opacity:0.2;}
 </style>
 <g transform="rotate(-15, 28.8, 32.5)">
  <!-- Rotate around the center (28.8, 32.5) -->
  
  <!-- Layer 1 (Opacity 0.2) -->
  <path class="st2" d="M57.5,27.5c-0.6,8.7-7.6,16.6-16.4,16.9v-6.6c0-6-4.3-11.2-10.2-12.4l-22-4.3V6.4c0-4,3.6-7,7.6-6.2l22.7,4.4
		C51.6,7.3,58.3,16.9,57.5,27.5L57.5,27.5z"/>
  
  <!-- Layer 2 (Opacity 0.5) -->
  <path class="st1" d="M16.7,48.3l-13-2.5c-1.9-0.4-3.6,1.1-3.6,3v9C0,60,1.6,62,3.8,62.4l13,2.5
		c1.9,0.4,3.6-1.1,3.6-3v-9C20.5,50.7,18.9,48.8,16.7,48.3z"/>
  
  <!-- Layer 3 (Opacity 0.8) -->
  <path class="st0" d="M29.8,30.4L9.9,26.5c-2.9-0.6-5.5,1.6-5.5,4.6v9.8c0,0,0.1,0,0.1,0
		l13,2.5c4.5,0.9,7.8,4.9,7.8,9.5v2l5,1c2.9,0.6,5.5-1.6,5.5-4.6V37.9C36,34.2,33.4,31.1,29.8,30.4L29.8,30.4z"/>
 </g>
</svg>
`

const PolarLogoSVGString = `<svg version="1.1" id="Layer_1" xmlns:x="ns_extend;" xmlns:i="ns_ai;" xmlns:graph="ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 57.6 65" style="enable-background:new 0 0 57.6 65;" xml:space="preserve">
 <style type="text/css">
  .st0{fill:#FFFFFF; fill-opacity:0.8;}
  .st1{fill:#FFFFFF; fill-opacity:0.5;}
  .st2{fill:#FFFFFF; fill-opacity:0.2;}
 </style>
 <g transform="rotate(-15, 28.8, 32.5)">
  <!-- Rotate around the center (28.8, 32.5) -->
  
  <!-- Layer 1 (Opacity 0.2) -->
  <path class="st2" d="M57.5,27.5c-0.6,8.7-7.6,16.6-16.4,16.9v-6.6c0-6-4.3-11.2-10.2-12.4l-22-4.3V6.4c0-4,3.6-7,7.6-6.2l22.7,4.4
		C51.6,7.3,58.3,16.9,57.5,27.5L57.5,27.5z"/>
  
  <!-- Layer 2 (Opacity 0.5) -->
  <path class="st1" d="M16.7,48.3l-13-2.5c-1.9-0.4-3.6,1.1-3.6,3v9C0,60,1.6,62,3.8,62.4l13,2.5
		c1.9,0.4,3.6-1.1,3.6-3v-9C20.5,50.7,18.9,48.8,16.7,48.3z"/>
  
  <!-- Layer 3 (Opacity 0.8) -->
  <path class="st0" d="M29.8,30.4L9.9,26.5c-2.9-0.6-5.5,1.6-5.5,4.6v9.8c0,0,0.1,0,0.1,0
		l13,2.5c4.5,0.9,7.8,4.9,7.8,9.5v2l5,1c2.9,0.6,5.5-1.6,5.5-4.6V37.9C36,34.2,33.4,31.1,29.8,30.4L29.8,30.4z"/>
 </g>
</svg>
`
