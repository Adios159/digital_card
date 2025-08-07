export default function SocialLink({ href, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
        >
            {label}
        </a>
    )
}
