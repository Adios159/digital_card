import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-4 px-4 py-2 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
      >
        {darkMode ? '☀️ 라이트 모드' : '🌙 다크 모드'}
      </button>

      {/* 명함 UI */}
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-lg">
        {/* ...기존 명함 내용 */}
      </div>
    </div>
  );
}

export default App;

