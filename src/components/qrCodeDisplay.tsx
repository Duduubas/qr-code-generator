import { QRCodeSVG } from 'qrcode.react';

export const QRCodeDisplay = ({
    url,
    fgColor,
    bgColor,
    title,
    descricao,
    handleDownload
}: {
    url: string;
    fgColor: string;
    bgColor: string;
    title: string;
    descricao: string;
    handleDownload: () => void;
}) => {
    return (
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
    );
};