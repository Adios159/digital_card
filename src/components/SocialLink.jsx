export default function SocialLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center bg-black border border-indigo-500 text-white py-2 rounded-full hover:shadow-[0_0_15px_rgba(99,102,241,0.7)] transition-all duration-300"
    >
      {label}
    </a>
  )
}

