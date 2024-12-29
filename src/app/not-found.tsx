import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-slate-900">
            <div className="text-center">
                <h1 className="text-7xl font-extrabold text-gray-800 dark:text-white">404</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Oops! The page you are looking for does not exist.
                </p>
                <div className="mt-6">
                    <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all">
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
