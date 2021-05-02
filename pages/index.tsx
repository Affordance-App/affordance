import { supabase } from '../lib/initSupabase'
import { Auth } from '@supabase/ui'
import PublicList from '../components/PublicList'
import Link from 'next/link'


export default function IndexPage() {
  const { user } = Auth.useUser()

  return (
    <div className="w-full h-full bg-gray-300">
   
      {!user ? (
        <div className="w-full h-full flex justify-center items-center p-4">
          
          <Auth
            supabaseClient={supabase}
            providers={['google', 'github']}
            socialLayout="horizontal"
            socialButtonSize="xlarge"
          />
        </div>
      ) : (
        <div
          className="w-full  h-full flex flex-col justify-center items-center p-4"
          style={{ minWidth: 100, maxWidth: 1200, margin: 'auto' }}
        >
          <PublicList user={supabase.auth.user()} />
          <button
            className="btn-black w-full mt-12"
            onClick={async () => {
              const { error } = await supabase.auth.signOut()
              if (error) console.log('Error logging out:', error.message)
            }}
          >
            Logout
          </button>

          <Link href="/public">
             <p className="bg-orange-300 w-full justify-center text-center p-2 mx-auto text-orange-600 mt-12" >Next</p>
          </Link> 
        </div>
      )}
    </div>
  )
}
