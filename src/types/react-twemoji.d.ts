declare module 'react-twemoji' {
  import { ReactNode } from 'react'

  interface TwemojiOptions {
    className?: string
    folder?: string
    ext?: string
    base?: string
  }

  interface TwemojiProps {
    children?: ReactNode
    options?: TwemojiOptions
    noWrapper?: boolean
    tag?: string
  }

  export default function Twemoji(props: TwemojiProps): JSX.Element
}
