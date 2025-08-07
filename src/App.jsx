import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // 다크모드 클래스 토글
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-4 px-4 py-2 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
      >
        {darkMode ? '☀️ 라이트 모드' : '🌙 다크 모드'}
      </button>

      <h1 className="text-3xl font-bold">디지털 명함</h1>
      <p className="text-lg">React + Tailwind + Vercel 배포</p>
    </div>
  );
}

export default App;

