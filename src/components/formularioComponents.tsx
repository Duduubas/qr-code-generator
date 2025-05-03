// formularioComponents.tsx
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export const useQRCodeGenerator = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [qrGenerated, setQrGenerated] = useState<boolean>(false);
    const [fgColor, setFgColor] = useState<string>('#000');
    const [bgColor, setBgColor] = useState<string>('#fff');
    const [title, setTitle] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');

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

    return {
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
    };
};