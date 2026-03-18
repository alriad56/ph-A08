import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  // Check if it's an app-not-found error (404 from loader)
  const isAppNotFound = error?.status === 404 || error?.statusText === "App not found";

  if (isAppNotFound) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
          <div className="text-8xl mb-6">🐱</div>
          <h1 className="text-2xl font-bold text-slate-800 uppercase tracking-wider mb-3">
            OPPS!! APP NOT FOUND
          </h1>
          <p className="text-slate-500 text-center mb-8">
            The App you are looking for is not found in our system, please try another apps.
          </p>
          <button
            onClick={() => navigate("/apps")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl font-medium transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        {/* 404 illustration placeholder */}
        <div className="w-48 h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl flex items-center justify-center mb-8 shadow-inner">
          <span className="text-6xl font-black text-purple-500">404</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          Oops, page not found!
        </h1>
        <p className="text-slate-500 text-center mb-8">
          The page you are looking for is less available.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl font-medium transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;