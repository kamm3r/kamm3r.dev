import { trpc } from '../utils/trpc';

export default function LoginPage() {
  const { data, isLoading } = trpc.proxy.auth.me.useQuery();

  if (isLoading) return null;

  if (data !== 'ADMIN')
    return (
      <h1>
        you ain&apos;t getting in bitch...you are a beta pussyhole bitch!!
      </h1>
    );

  return <div>Admin only view</div>;
}
