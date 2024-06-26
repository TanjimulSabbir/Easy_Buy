export default function Error({ message }) {
    return (
        <div className="">
            <p className="relative bg-red-200 max-w-xl px-4 py-2 text-red-800 rounded shadow w-full">
                <span className="block text-sm text-center">{message}</span>
            </p>
        </div>
    );
}