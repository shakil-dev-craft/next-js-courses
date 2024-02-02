"use client"

export default function Home() {

  const fun = () => {
    alert('Welcome Paglu Programmer');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome, Next JS - App</h1>

      <button onClick={fun}>Our App</button>
    </main>
  );
}
