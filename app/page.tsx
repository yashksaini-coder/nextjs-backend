import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <h1 className="text-5xl font-extrabold mb-12">Todo Application</h1>
      <div className="space-y-6">
        <Link className="text-lg text-white bg-blue-500 hover:bg-blue-700 py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105" href="/signin">
          Sign in to Todo App
        </Link>
        <div className="text-lg"></div>
        <Link className="text-lg text-white bg-green-500 hover:bg-green-700 py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105" href="/signup">
          Sign up for Todo App
        </Link>
      </div>
    </div>
  );
}
