import profile from './assets/profile.jpg'
import SocialLink from './components/SocialLink'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center">
        <img
          src={profile}
          alt="정도균 프로필"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">정도균</h1>
        <p className="text-sm text-gray-500">Backend Developer</p>
        <p className="text-gray-700 mt-4">"감정을 이해하는 코드를 짜는 사람입니다"</p>

        <div className="mt-6 flex justify-center gap-4">
          <SocialLink href="https://github.com/your_id" label="GitHub" />
          <SocialLink href="mailto:your@email.com" label="Email" />
          <SocialLink href="https://your-notion-site" label="Notion" />
        </div>
      </div>
    </div>
  )
}

export default App
