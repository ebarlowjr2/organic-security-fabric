export function GoodFitAvoidGrid() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
        <h3 className="text-sm font-semibold text-white">Good Fits</h3>
        <ul className="mt-4 space-y-2 text-sm text-white/75">
          <li>Tamper-evident audit trails</li>
          <li>Hashed evidence records</li>
          <li>Signed control attestations</li>
          <li>Verifiable credentials</li>
          <li>Chain-of-custody records</li>
          <li>Training and certification proof</li>
        </ul>
      </div>
      <div className="rounded-2xl bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
        <h3 className="text-sm font-semibold text-white">Avoid</h3>
        <ul className="mt-4 space-y-2 text-sm text-white/75">
          <li>Storing customer logs directly on-chain</li>
          <li>Storing sensitive data on public chains</li>
          <li>Making blockchain required for basic security</li>
          <li>Using Web3 where a normal database is better</li>
        </ul>
      </div>
    </div>
  );
}

