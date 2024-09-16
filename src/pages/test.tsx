import { useStore } from "../stores";

export default function Page() {
  
  return (
    <div class="flex justify-center min-h-screen items-center">
      <div class="text-center">
        <h1 class="font-bold text-4xl">Vite + Solid</h1>
        <div>
          <button
            class="bg-blue-600 py-2 px-4 rounded-xl my-2"
            onClick={useStore((e) => e.increase)}
          >
            bears is {useStore((e) => e.bears)()}
          </button>
          <div class="block">
            <a href="/">home</a>
          </div>
        </div>
      </div>
    </div>
  );
}
