import solidLogo from "../assets/solid.svg";
import viteLogo from "../assets/vite.svg";
import { useStore } from "../stores";

export default function Page() {
  return (
    <div class="flex justify-center min-h-screen items-center">
      <div class="text-center">
        <div class="flex gap-x-4 items-center justify-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} class="w-32" alt="Vite logo" />
          </a>
          <a href="https://solidjs.com" target="_blank">
            <img src={solidLogo} class="w-32" alt="Solid logo" />
          </a>
        </div>

        <div class="mt-4">
          <h1 class="font-bold text-4xl">Vite + Solid</h1>
          <div>
            <button
              class="bg-blue-600 py-2 px-4 rounded-xl my-2"
              onClick={useStore((e) => e.increase)}
            >
              bears is {useStore((e) => e.bears)()}
            </button>
          </div>

          <div class="">
            <a href="/test">test</a>
          </div>
        </div>
      </div>
    </div>
  );
}
