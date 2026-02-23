/* ── Verified Badge ───────────────────────── */

function VerifiedBadge() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Verificado"
    >
      <circle cx="12" cy="12" r="12" fill="#22c55e" />
      <path
        d="M9 12.5L11 14.5L15.5 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Stats ───────────────────────── */

function Stats({ followers, posts }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm">👥 {followers}</span>
      <span className="text-sm">💬 {posts}</span>
    </div>
  );
}

/* ── Follow Button ───────────────────────── */

function FollowButton({ className = "" }) {
  return (
    <button
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors hover:bg-black hover:text-white ${className}`}
    >
      Follow +
    </button>
  );
}

/* ── Classic Variant ───────────────────────── */

function ClassicCard({
  name = "Usuario",
  description,
  followers,
  posts,
  imageSrc,
  verified,
}) {
  return (
    <div className="w-[280px] rounded-3xl bg-white p-4 shadow-md">
      <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-200">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={`Foto de perfil de ${name}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="mb-1 flex items-center gap-1.5">
        <h3 className="text-base font-semibold">{name}</h3>
        {verified && <VerifiedBadge />}
      </div>

      <p className="mb-4 text-sm text-gray-600">{description}</p>

      <div className="flex items-center justify-between">
        <Stats followers={followers} posts={posts} />
        <FollowButton />
      </div>
    </div>
  );
}

/* ── Expanded Variant ───────────────────────── */

function ExpandedCard({
  name,
  description,
  followers,
  posts,
  imageSrc,
  verified,
}) {
  return (
    <div className="w-[280px] rounded-3xl bg-white shadow-md">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-3xl bg-gray-200">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={`Foto de perfil de ${name}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="p-4 pt-3">
        <div className="mb-1 flex items-center gap-1.5">
          <h3 className="text-base font-semibold">{name}</h3>
          {verified && <VerifiedBadge />}
        </div>

        <p className="mb-4 text-sm text-gray-600">{description}</p>

        <div className="flex items-center justify-between">
          <Stats followers={followers} posts={posts} />
          <FollowButton />
        </div>
      </div>
    </div>
  );
}

/* ── Overlay Variant ───────────────────────── */

function OverlayCard({
  name,
  description,
  followers,
  posts,
  imageSrc,
  verified,
}) {
  return (
    <div className="relative w-[280px] overflow-hidden rounded-3xl bg-white shadow-md">
      <div className="relative aspect-[3/5] w-full bg-gray-200">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={`Foto de perfil de ${name}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white from-60% to-transparent px-4 pb-4 pt-12">
        <div className="mb-1 flex items-center gap-1.5">
          <h3 className="text-base font-semibold">{name}</h3>
          {verified && <VerifiedBadge />}
        </div>

        <p className="mb-4 text-sm text-gray-600">{description}</p>

        <div className="flex items-center justify-between">
          <Stats followers={followers} posts={posts} />
          <FollowButton />
        </div>
      </div>
    </div>
  );
}

/* ── Main Export ───────────────────────── */

export default function ProfileCard({ variant = "classic", ...rest }) {
  switch (variant) {
    case "expanded":
      return <ExpandedCard {...rest} />;
    case "overlay":
      return <OverlayCard {...rest} />;
    default:
      return <ClassicCard {...rest} />;
  }
}
