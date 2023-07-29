import { User } from '@prisma/client'
import { AvatarProps } from '@radix-ui/react-avatar'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Icons } from './icons'

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'image' | 'name'>
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage alt="Profile Picture" referrerPolicy="no-referrer" src={user.image} />
      ) : (
        <AvatarFallback>
          <span className='sr-only'>{user?.name}</span>
          <Icons.user className='h-4 w-4' />
        </AvatarFallback>
      )}
    </Avatar>
  )
}