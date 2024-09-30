export async function loadGoogleFont(font: string, weight: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&display=swap`;

  const css = await (await fetch(url)).text();

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const res = await fetch(resource[1]);
    if (res.status == 200) {
      return await res.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}
