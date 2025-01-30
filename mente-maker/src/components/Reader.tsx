import React, { useEffect, useState } from "react";

const Reader = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const contentElement = document.querySelector("main");
    if (!contentElement) return;

    // Função para coletar texto recursivamente ignorando elementos com a classe ignore-reader
    const getTextContent = (node: Node): string => {
      let text = "";
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent ?? "";
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (!(node as HTMLElement).classList.contains("ignore-reader")) {
          node.childNodes.forEach((child) => {
            text += getTextContent(child);
          });
        }
      }
      return text;
    };

    const contentText = getTextContent(contentElement).trim();

    // Configuração do SpeechSynthesisUtterance
    const newUtterance = new SpeechSynthesisUtterance(contentText);
    newUtterance.lang = "pt-BR";
    newUtterance.rate = 1.0;

    // Atualiza o progresso da leitura
    newUtterance.onboundary = (event) => {
      if (contentText) {
        const spokenWords = event.charIndex;
        const totalWords = contentText.length;
        setProgress((spokenWords / totalWords) * 100);
      }
    };

    newUtterance.onend = () => {
      setIsSpeaking(false);
      setProgress(100);
    };

    setUtterance(newUtterance);
  }, []);

  const startReading = () => {
    if (utterance) {
      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const pauseReading = () => {
    speechSynthesis.pause();
    setIsSpeaking(false);
  };

  const resumeReading = () => {
    speechSynthesis.resume();
    setIsSpeaking(true);
  };

  const stopReading = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
    setProgress(0);
  };

  const containerStyle: React.CSSProperties = {
    margin: "1rem auto",
    padding: "1rem",
    backgroundColor: "#f0f0f0",
    borderRadius: "0.5rem",
    boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)",
    width: "90%",
    maxWidth: "400px",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "1.2rem",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "1rem",
    color: "#333",
  };

  const buttonsContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.75rem",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "0.3rem 0.5rem",
    fontSize: "0.8rem",
    color: "white",
    border: "none",
    borderRadius: "0.3rem",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    flex: "1",
    margin: "0 0.2rem",
  };

  const firstButtonStyle = { ...buttonStyle, marginLeft: 0 };
  const lastButtonStyle = { ...buttonStyle, marginRight: 0 };

  const startButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#3498db",
  };
  const startButtonHoverStyle = { ...startButtonStyle, backgroundColor: "#2980b9" };

  const pauseButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f39c12",
  };
  const pauseButtonHoverStyle = { ...pauseButtonStyle, backgroundColor: "#e67e22" };

  const resumeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#2ecc71",
  };
  const resumeButtonHoverStyle = { ...resumeButtonStyle, backgroundColor: "#27ae60" };

  const stopButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#e74c3c",
  };
  const stopButtonHoverStyle = { ...stopButtonStyle, backgroundColor: "#c0392b" };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#bdc3c7",
    cursor: "not-allowed",
  };

  const progressBarContainerStyle: React.CSSProperties = {
    width: "100%",
    height: "0.4rem",
    backgroundColor: "#ddd",
    borderRadius: "0.5rem",
    overflow: "hidden",
    position: "relative",
  };

  const progressBarFillStyle: React.CSSProperties = {
    height: "100%",
    backgroundColor: "#3498db",
    transition: "width 0.3s ease",
  };

  const progressTextStyle: React.CSSProperties = {
    color: "#777",
    fontSize: "0.75rem",
    textAlign: "center",
    marginTop: "0.25rem",
  };

  return (
    <div id="reader-component" style={containerStyle} className="ignore-reader">
      <h2 style={titleStyle}>Leitor de Texto</h2>
      <div style={buttonsContainerStyle}>
        <button
          onClick={startReading}
          disabled={isSpeaking}
          style={isSpeaking ? disabledButtonStyle : startButtonStyle}
          onMouseEnter={(e) => {
            if (!isSpeaking) {
              (e.target as HTMLButtonElement).style.backgroundColor = startButtonHoverStyle.backgroundColor;
            }
          }}
          onMouseLeave={(e) => {
            if (!isSpeaking) {
              (e.target as HTMLButtonElement).style.backgroundColor = startButtonStyle.backgroundColor;
            }
          }}
        >
          Iniciar
        </button>
        <button
          onClick={pauseReading}
          disabled={!isSpeaking}
          style={!isSpeaking ? disabledButtonStyle : pauseButtonStyle}
          onMouseEnter={(e) => {
            if (isSpeaking) {
              (e.target as HTMLButtonElement).style.backgroundColor = pauseButtonHoverStyle.backgroundColor;
            }
          }}
          onMouseLeave={(e) => {
            if (isSpeaking) {
              (e.target as HTMLButtonElement).style.backgroundColor = pauseButtonStyle.backgroundColor;
            }
          }}
        >
          Pausar
        </button>
        <button
          onClick={resumeReading}
          disabled={isSpeaking}
          style={isSpeaking ? disabledButtonStyle : resumeButtonStyle}
          onMouseEnter={(e) => {
            if (!isSpeaking) {
              (e.target as HTMLButtonElement).style.backgroundColor = resumeButtonHoverStyle.backgroundColor;
            }
          }}
          onMouseLeave={(e) => {
            if (!isSpeaking) {
              (e.target as HTMLButtonElement).style.backgroundColor = resumeButtonStyle.backgroundColor;
            }
          }}
        >
          Retomar
        </button>
        <button
          onClick={stopReading}
          style={stopButtonStyle}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = stopButtonHoverStyle.backgroundColor;
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = stopButtonStyle.backgroundColor;
          }}
        >
          Parar
        </button>
      </div>
      <div style={progressBarContainerStyle}>
        <div
          style={{
            ...progressBarFillStyle,
            width: `${progress}%`,
          }}
        ></div>
      </div>
      <p style={progressTextStyle}>{progress.toFixed(1)}% lido</p>
    </div>
  );
};

export default Reader;
