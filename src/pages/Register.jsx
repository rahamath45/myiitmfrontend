import api from "../services/api";

export default function Register() {
  const submit = async e => {
    e.preventDefault();
    const f = e.target;

    await api.post("/register", {
      name: f.name.value,
      email: f.email.value,
      password: f.password.value
    });

    alert("Registration Successful 🎉");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl
        border border-white/20 rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Create Account
        </h1>

        <p className="text-gray-300 text-center mb-6">
          Register to access your profile
        </p>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <input
              name="name"
              placeholder="John Doe"
              className="input mt-1"
              required
            />
          </div>

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
            Register
          </button>
        </form>

        <p className="text-center text-gray-300 text-sm mt-6">
          Already have an account?
          <a href="/login" className="text-indigo-400 hover:underline ml-1">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
