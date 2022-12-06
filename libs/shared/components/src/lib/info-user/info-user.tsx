import Image from 'next/image'
/* eslint-disable-next-line */
interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}
export interface InfoUserProps {
  user?: User;
  className?: string;
}

export const InfoUser: React.FC<InfoUserProps> = ({ user, className }: InfoUserProps) => {
  const avtUser = user?.image || '/assets/avatar/default.png'
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <div className={`w-8 h-8 rounded-full overflow-hidden relative mr-2`}>
        <Image
          src={avtUser}
          fill
          alt={user?.name || 'avatar user'}
        />
      </div>
      <span>{user?.name || user?.email}</span>
    </div>
  );
}

export default InfoUser;
