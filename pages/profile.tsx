import Link from 'next/link'
import { supabase } from '../lib/supabase'
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";

export default function Profile({ user }) {
  return (
    <>
      <Layout className="h-screen">
      <Link href="/">
        <Button>Home</Button>
      </Link>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: '/', permanent: false } }
  }

  // If there is a user, return it.
  return { props: { user } }
}
