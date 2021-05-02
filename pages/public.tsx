import { supabase } from '../lib/initSupabase'
import { Auth } from '@supabase/ui'
import Projects from '../components/Projects'

export default function IndexPage() {
  const { user } = Auth.useUser()

  return (
    <div className="w-full h-full bg-gray-300">
    
          <Projects user={user} />
          <button
            className="btn-black w-full mt-12"
            onClick={async () => {
              const { error } = await supabase.auth.signOut()
              if (error) console.log('Error logging out:', error.message)
            }}
          >
            Logout
          </button>
    </div>
    
  )
}
