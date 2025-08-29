import React, { useState } from 'react';
import {
  ScrollReveal

} from '../hooks/ScrollReveal';
export default function Footer() {
  const bank = {

    banco: 'Scotiabank',
    beneficiario: 'Quesos de los Campos',       
    cuenta: '00000000000',                      
    clabe: '000000000000000000',                
    referencia: 'Nombre + Fecha o #Pedido',     
  };

  const [copied, setCopied] = useState('');

  const copy = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(''), 1500);
    } catch {
      setCopied('');
    }
  };

  return (
    <footer className="bg-black/60 text-neutro py-10 px-6 rounded-t-2xl">
      <div className="container mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* Columna: Información del negocio */}
        <ScrollReveal once offset={40}>
          {(active) => (
            <div
              className={`transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <h5 className="text-primario font-semibold mb-4">Quesos de los Campos</h5>
              <p className="text-secundario">
                Av Fedor Dostoyevzki 303-E Col, Quintas Quijote II Etapa, Chihuahua 2000, 31136 Chihuahua, Chih.
              </p>
              <p className="text-secundario">Contacto: +52 614-123-4567</p>
            </div>
          )}
        </ScrollReveal>

        {/* Columna: Mapa */}
        <ScrollReveal once offset={40}>
          {(active) => (
            <div
              className={`transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="w-full">
                <iframe
                  className="w-full h-48 sm:h-64 rounded-2xl"
                  loading="lazy"
                  src="https://maps.google.com/maps?q=Av+Fedor+Dostoyevzki+303-E+Col,+Quintas+Quijote+II+Etapa,+Chihuahua+2000,+31136+Chihuahua,+Chih.&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
                  title="Ubicación"
                  aria-label="Ubicación Quesos de los Campos"
                ></iframe>
              </div>
            </div>
          )}
        </ScrollReveal>

        {/* Columna: Pago por transferencia (Scotiabank) */}
        <ScrollReveal once offset={40}>
          {(active) => (
            <div
              className={`rounded-2xl bg-white/5  shadow-sm ring-1 ring-white/10 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'

                }`}
            >
              <h6 className="text-primario font-semibold mb-3">Pago por transferencia</h6>
              <p className="text-secundario mb-4">
                Banco: <span className="font-medium text-neutro">{bank.banco}</span>
              </p>

              <dl className="space-y-3 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-secundario">Beneficiario</dt>
                  <dd className="text-neutro font-medium">{bank.beneficiario}</dd>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <dt className="text-secundario">Cuenta</dt>
                  <dd className="flex items-center gap-2">
                    <span className="text-neutro font-mono">{bank.cuenta}</span>
                    <button
                      onClick={() => copy('cuenta', bank.cuenta)}
                      className="text-xs rounded-md px-2 py-1 bg-white/10 hover:bg-white/20 transition"
                      aria-label="Copiar número de cuenta"
                    >
                      Copiar
                    </button>
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <dt className="text-secundario">CLABE</dt>
                  <dd className="flex items-center gap-2">
                    <span className="text-neutro font-mono">{bank.clabe}</span>
                    <button
                      onClick={() => copy('clabe', bank.clabe)}
                      className="text-xs rounded-md px-2 py-1 bg-white/10 hover:bg-white/20 transition"
                      aria-label="Copiar CLABE"
                    >
                      Copiar
                    </button>
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <dt className="text-secundario">Referencia</dt>
                  <dd className="text-neutro">{bank.referencia}</dd>
                </div>
              </dl>

              <div
                className="mt-3 h-5 text-xs text-primario"
                aria-live="polite"
              >
                {copied === 'cuenta' && 'Cuenta copiada ✅'}
                {copied === 'clabe' && 'CLABE copiada ✅'}
              </div>

              <p className="mt-4 text-xs text-secundario">
                * Envía tu comprobante por WhatsApp para confirmar tu pedido.
              </p>
            </div>
          )}
        </ScrollReveal>
      </div>


      <div className="container mx-auto mt-8 text-[11px] text-secundario/80 text-center">
        © {new Date().getFullYear()} Quesos de los Campos. Todos los derechos reservados.
      </div>
    </footer>
  );
}
