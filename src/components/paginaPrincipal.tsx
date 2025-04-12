// app/page.tsx (Next.js 13+)
"use client";

import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Head from 'next/head';
import { ArrowLeft } from 'lucide-react'

export default function Formulario() {
  const [inputValue, setInputValue] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [qrGenerated, setQrGenerated] = useState<boolean>(false);
  const [fgColor, setFgColor] = useState<string>('#000')
  const [bgColor, setBgColor] = useState<string>('#fff')
  const [title, setTitle] = useState<string>('')
  const [descricao, setDescricao] = useState<string>('')

  // Função para formatar a URL
  const formatURL = (input: string): string => {
    let formattedUrl = input.trim();

    // Se não tiver nenhum protocolo (http:// ou https://)
    if (!formattedUrl.match(/^https?:\/\//i)) {
      // Adiciona https:// por padrão
      formattedUrl = `https://${formattedUrl}`;
    }

    return formattedUrl;
  };

  const handleGenerateQR = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue) {
      // Formata a URL antes de gerar o QR code
      const formattedUrl = formatURL(inputValue);
      setUrl(formattedUrl);
      setQrGenerated(true);
    }
  };

  const handleDownload = () => {
    // Buscar o elemento SVG
    const svgElement = document.getElementById('qr-code');
    if (!svgElement) return;

    // Criar um canvas temporário
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return;

    // Calcular a altura adicional necessária para o título e descrição
    const titleHeight = title ? 30 : 0;
    const descriptionHeight = descricao ? 30 : 0;
    const extraHeight = titleHeight + descriptionHeight;

    // Definir tamanho do canvas (incluindo espaço para título e descrição)
    canvas.width = 200;
    canvas.height = 200 + extraHeight;

    // Converter SVG para uma imagem
    const img = new Image();
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);

    img.onload = () => {
      // Preenchendo o fundo
      context.fillStyle = 'white';
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Desenhar imagem no canvas (QR code)
      context.drawImage(img, 0, 0);

      // Adicionar o título se existir
      if (title) {
        context.font = 'bold 16px Arial';
        context.textAlign = 'center';
        context.fillStyle = 'black';
        context.fillText(title, canvas.width / 2, 200 + 20); // Posição abaixo da imagem
      }

      // Adicionar a descrição se existir
      if (descricao) {
        context.font = '14px Arial';
        context.textAlign = 'center';
        context.fillStyle = 'black';
        context.fillText(descricao, canvas.width / 2, 200 + titleHeight + 15); // Posição abaixo do título
      }

      // Converter para PNG e baixar
      const pngUrl = canvas.toDataURL('image/png');

      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'qrcode.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      URL.revokeObjectURL(svgUrl);
    };

    img.src = svgUrl;
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">

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


        {/* Geração do QR Code*/}
        {qrGenerated && (
          <div className="text-center">
            <div className='bg-gray-100 p-4 rounded-lg my-5'>
            <div className="flex items-center justify-center">
              <QRCodeSVG
                id="qr-code"
                value={url}
                size={200}
                level="H"
                includeMargin={true}
                fgColor={fgColor}
                bgColor={bgColor}
              />
            </div>
            {title && (
              <h2 className="text-xl font-semibold text-gray-800">
                {title}
              </h2>
            )}

            {descricao && (
              <h2 className="text-xl font-xl mb-3 text-gray-white">
                {descricao}
              </h2>
            )}
            </div>

            <div className="mb-4 text-sm text-gray-600">
              <p>URL: {url}</p>
            </div>

            <button
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              Baixar QR Code
            </button>
          </div>
        )}
      </div>

      <footer className="mt-8 text-center text-white text-sm">
        <p>© {new Date().getFullYear()} QR Code Generator</p>
        <p>Desenvolvido por <a href='https://eduardobrito.dev' className="underline hover:text-blue-300">Eduardo B.</a></p>
        <p>Encontrou um problema? Envie em <a href="mailto:report@eduardobrito.dev">report@eduardobrito.dev</a>.</p>
      </footer>
    </div>
  );
}