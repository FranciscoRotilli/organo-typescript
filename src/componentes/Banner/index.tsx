import './Banner.css'

interface BannerProps {
    enderecoImagem: string
    textoAlt?: string
}

export const Banner = ({ enderecoImagem, textoAlt } :BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={enderecoImagem} alt={textoAlt} />
        </header>
    )
}

export default Banner