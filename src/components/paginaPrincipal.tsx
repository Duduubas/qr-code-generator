"use client";

import { useQRCodeGenerator } from '@/components/formularioComponents';
import { QRCodeDisplay } from '@/components/qrCodeDisplay';
import Head from 'next/head';
import { ArrowLeft } from 'lucide-react';

export default function Formulario() {
  const {
    inputValue,
    setInputValue,
    url,
    qrGenerated,
    fgColor,
    setFgColor,
    bgColor,
    setBgColor,
    title,
    setTitle,
    descricao,
    setDescricao,
    handleGenerateQR,
    handleDownload
  } = useQRCodeGenerator();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <Head>
        <title>Gerador de QR Code</title>
        <meta name="description" content="Gerador de QR Code simples e rápido" />
      </Head>

      {/* Título e Descrição */}
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Gerador de QR Code</h1>
        <p className='text-sm mb-6 text-gray-600'>Gere QR Codes de forma simples e rápida — em menos de 1 minuto!</p>

        {/* Seção para colar o link */}
        <form onSubmit={handleGenerateQR} className="mb-6">
          <div className="mb-4">
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
              Cole seu link abaixo
            </label>
            <input
              type="text"
              id="url"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="exemplo.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              {inputValue && !inputValue.match(/^https?:\/\//i) &&
                "* https:// será adicionado automaticamente"}
            </p>
          </div>

          {/* Seleção de título e descrição */}
          <div className="mb-4">
            <label className='block text-sm text-gray-700 mb-2 font-medium'>
              Escolha um título para o seu QR Code (opcional)
            </label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Acesse o meu site já!'
              className='w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            />
          </div>

          <div className="mb-4">
            <label className='block text-sm text-gray-700 mb-2 font-medium'>
              Escolha uma descrição para o seu QR Code (opcional)
            </label>
            <input
              type='text'
              id='descricao'
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder='Acesse o meu site e confira os meus serviços.'
              className='w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            />
          </div>

          {/* Seleção de cores (bg e fg) */}
          <div className="mb-4">
            <label htmlFor="colorPicker" className="block text-sm font-medium text-gray-700 mb-2">
              Escolha uma cor para o seu QR Code (opcional)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                id="colorPicker"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="h-10 w-10 rounded-md cursor-pointer border-0 bg-transparent"
              />
              <span className="text-sm text-gray-500">Clique para selecionar uma cor</span>
            </div>
          </div>
          <div className='mb-4'>
            <label htmlFor="colorPickerBg" className="block text-sm font-medium text-gray-700 mb-2">
              Escolha uma cor de fundo para o seu QR Code (opcional)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                id="colorPickerBg"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="h-10 w-10 rounded-md cursor-pointer border-0 bg-transparent"
              />
              <span className="text-sm text-gray-500">Clique para selecionar uma cor</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Gerar QR Code
          </button>
        </form>

        {/* Exibição do QR Code */}
        {qrGenerated && (
          <QRCodeDisplay
            url={url}
            fgColor={fgColor}
            bgColor={bgColor}
            title={title}
            descricao={descricao}
            handleDownload={handleDownload}
          />
        )}
      </div>

      <footer className="mt-8 text-center text-white text-sm">
        <p>© {new Date().getFullYear()} QR Code Generator</p>
        <p>Desenvolvido por <a href='https://eduardobrito.dev' className="underline hover:text-blue-300">Eduardo B.</a></p>
        <p>Este é um projeto Open Source! Contribua no GitHub <a href="https://github.com/Duduubas/qr-code-generator" target="_blank" rel="noopener noreferrer">clicando aqui</a>!</p>
      </footer>
    </div>
  );
}