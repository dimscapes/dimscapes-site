import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <img
        src="https://cdn.discordapp.com/attachments/938769562206367766/1285458616907731036/Logo21.png?ex=66ea5820&is=66e906a0&hm=48166b530f08042b117201452cc759c5bcc0c89e7a52f89bc6e11cf2f7336a8c&"
        alt="Dim's Capes"
        className="block w-12 h-12 mx-auto mb-4 rounded-full"
      />
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">
          {name}
        </Link>
      </p>
    </header>
  );
}
