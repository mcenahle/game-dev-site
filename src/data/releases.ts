interface ReleaseModule {
  title: string;
  date: string;
}

const modules = import.meta.glob<ReleaseModule>(
  "../pages/releases/*.astro",
  {
    eager: true,
  }
);

export const releases = Object.entries(modules)
  .filter(([path]) => !path.endsWith("/index.astro"))
  .map(([path, release]) => {
    const filename = path.split("/").pop()!.replace(".astro", "");

    return {
      title: release.title,
      date: release.date,
      url: `/releases/${filename}/`,
    };
  })
  .sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );