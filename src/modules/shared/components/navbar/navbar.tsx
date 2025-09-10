import type { Media, Setting } from '@/payload-types'
import ActionButtons from './action-buttons'
import Logo from './logo'
import Navigation from './navigation'
import MobileMenu from './mobile-menu'

interface Props {
  settings: Setting
}

export default function Navbar({ settings }: Props) {
  return (
    <div className="bg-background ">
      <header className="container mx-auto px-4 flex items-center justify-between">
        <Logo logo={settings.logo as Media} />
        {/* lg screen and above */}
        <div className="hidden lg:block">
          <Navigation />
        </div>
        <ActionButtons />
        {/* mobile screen */}
        <MobileMenu />
      </header>
    </div>
  )
}
