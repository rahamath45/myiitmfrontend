import api from "../services/api";

export default function Login() {
  const submit = async e => {
    e.preventDefault();

    const res = await api.post("/login", {
      email: e.target.email.value,
      password: e.target.password.value
    });

    localStorage.setItem("token", res.data.token);
    window.location.href = "/profile";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl
        border border-white/20 rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-300 text-center mb-6">
          Login to continue
        </p>

        <form onSubmit={submit} className="space-y-4">

          <div>
            <label className="text-sm text-gray-300">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              className="input mt-1"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="input mt-1"
              required
            />
          </div>

          <button className="btn mt-4">
            Login
          </button>

        </form>

        <p className="text-center text-gray-300 text-sm mt-6">
          Don’t have an account?
          <a href="/" className="text-indigo-400 hover:underline ml-1">
            Register
          </a>
        </p>

      </div>
    </div>
  );
}
