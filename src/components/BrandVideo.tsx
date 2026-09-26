export default function BrandVideo() {
  return (
    <div className="brand-video">
      <div className="aspect-video w-full bg-text-main">
        <iframe
          className="h-full w-full border-0"
          src="https://www.youtube.com/embed/q6ovwLu0o7A?rel=0"
          title="海士の本氣米 プロモーションムービー"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="mt-4 text-right text-sm text-deep-green">
        <a href="https://youtu.be/q6ovwLu0o7A" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">YouTubeで見る ↗</a>
      </p>
    </div>
  );
}
