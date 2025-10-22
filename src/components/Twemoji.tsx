'use client'

import Twemoji from 'react-twemoji'

interface TwemojiWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function TwemojiWrapper({ children, className }: TwemojiWrapperProps) {
  return (
    <Twemoji options={{ className: 'emoji' }}>
      <span className={className}>{children}</span>
    </Twemoji>
  )
}
