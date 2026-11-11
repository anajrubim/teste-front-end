import { useState, type FormEvent } from 'react';
import './Newsletter.scss';

export function Newsletter() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__inner container">
        <div className="newsletter__text">
          <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <form className="newsletter__form" onSubmit={onSubmit}>
          <label><span className="visually-hidden">Nome</span><input type="text" name="name" placeholder="Digite seu nome" required /></label>
          <label><span className="visually-hidden">E-mail</span><input type="email" name="email" placeholder="Digite seu e-mail" required /></label>
          <button type="submit">INSCREVER</button>
          <label className="newsletter__terms"><input type="checkbox" required /> Aceito os termos e condições</label>
          {sent && <p className="newsletter__ok" role="status">Obrigado por se inscrever!</p>}
        </form>
      </div>
    </section>
  );
}
