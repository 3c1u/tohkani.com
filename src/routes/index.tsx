import type { JSX } from 'solid-js/jsx-runtime'

const Home = (): JSX.Element => {
  return (
    <main class="p-10">
      <div>
        <h1 class="text-slate-500 font-700 text-4xl text-center">
          tohkani.com
        </h1>
        <ul class="flex items-center justify-center mt-6">
          <li>
            <a
              href="https://twitter.com/tohkani"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 underline hover:no-underline"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div class="mt-6 text-sm text-slate-600 text-center">
        Nothing here (yet).
      </div>
      <div class="text-xs text-center mt-10">
        <small>Copyright &copy; 2023 tohkani.com. All rights reserved.</small>
      </div>
    </main>
  )
}

export default Home
