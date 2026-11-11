import './Logo.scss';

// width = largura visível do logo (círculo + texto), como no layout
interface Props { width?: number; }

export function Logo({ width = 140 }: Props) {
  const scale = width / 89; // conteúdo ocupa ~89 das 106 unidades do viewBox
  return (
    <a href="/" className="logo" aria-label="Econverse - página inicial">
      <svg width={106 * scale} height={38 * scale} viewBox="0 0 106 38" style={{ marginLeft: -8.3 * scale }} aria-hidden="true">
        <circle cx="21.2" cy="21" r="13" fill="#F7CA11" />
        <text x="13" y="26.8" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="17" textLength="83.7" lengthAdjust="spacingAndGlyphs">
          <tspan fill="#FFFFFF">ec</tspan>
          <tspan fill="#271C47">onverse</tspan>
        </text>
      </svg>
    </a>
  );
}
