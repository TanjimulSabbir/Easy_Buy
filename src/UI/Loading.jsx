import "../style/Loading.css"

function Loading() {
    return (
        <div className="absolute inset-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-85 z-50">
            <p className="loader"></p>
        </div>
    )
}

export default Loading;