export default function NoScript() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-50 p-5 z-[9999] text-center font-sans">
            <div className="max-w-md bg-white rounded-xl p-8 shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ff5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <h1 className="text-2xl font-bold mb-4 text-slate-800">
                    JavaScript Desativado
                </h1>
                <p className="text-base leading-relaxed text-slate-600 mb-6">
                    Hmm... Para a utilização desse website é necessário estar com o JavaScript ativo. Por favor, ative o JavaScript no seu navegador e recarregue a página.
                </p>
                <div className="text-sm text-slate-500">
                    <p>Gerador de QR Code | Gratuito</p>
                </div>
            </div>
        </div>
    );
}
