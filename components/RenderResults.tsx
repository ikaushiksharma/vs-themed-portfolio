import {
  // ...
  KBarResults,
  useMatches,
  NO_GROUP,
} from 'kbar';

export default function RenderResults() {
  const { results } = useMatches();

  return (
    <div className="rounded-lg rounded-t-none border border-t-0 border-gray-theme">
      <KBarResults
        items={results}
        // @ts-ignore
        onRender={({ item, active }) =>
          typeof item === 'string' ? (
            <div className="text-white">{item}</div>
          ) : (
            <div
              className={`text-white px-4 py-6 my-1 ${
                active
                  ? ' bg-gray-theme/80'
                  : 'bg-gradient-to-r from-dark-background/60 to-blue-background/60'
              }`}
            >
              {item.name}
            </div>
          )
        }
      />
    </div>
  );
}
