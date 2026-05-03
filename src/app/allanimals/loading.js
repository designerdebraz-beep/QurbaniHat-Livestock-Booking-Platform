// app/allanimals/loading.js
export default function Loading() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center gap-4">
            {/* Using your DaisyUI loading spinner */}
            <span className="loading loading-spinner loading-xl text-green-600"></span>
            <p className="text-gray-500 font-medium animate-pulse">
                
                Fetching the best livestock for you...
                <span className="loading loading-dots loading-xl"></span>
            </p>
        </div>
    );
}