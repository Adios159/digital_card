import profile from './assets/profile.jpg'
import SocialLink from './components/SocialLink'

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-sm w-full">
        <img
          src={profile}
          alt="정도균 프로필"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.7)]"
        />
        <h1 className="text-3xl font-bold text-white">정도균</h1>
        <p className="text-indigo-400 text-lg">Backend Developer</p>
        <p className="text-gray-400 mt-4">"감정을 이해하는 코드를 짭니다."</p>

        <div className="mt-6 flex flex-col gap-4">
          <SocialLink href="https://github.com/your_id" label="Github" />
          <SocialLink href="https://notion.site/..." label="Notion" />
          <SocialLink href="mailto:your@email.com" label="Email" />
        </div>
      </div>
    </div>
  )
}

export default App

