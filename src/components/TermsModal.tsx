import { useTranslation } from 'react-i18next';

interface Props {
    onAccept: () => void;
    onReject: () => void;
}

export const TermsModal = ({ onAccept, onReject }: Props) => {
    const { t } = useTranslation();

    return (
        <div style={{
            position: "fixed",
            top: 0, left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px"
        }}>
            <div style={{
                backgroundColor: "#FFF",
                color: "#1D3620",
                maxWidth: "600px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                fontFamily: "sans-serif",
                fontSize: "14px",
                lineHeight: "1.6"
            }}>
                <b>
                    <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>
                        {t('termsModal.title')}
                    </h2>
                </b>
                <p>
                    {t('termsModal.content')}
                </p>

                <p>
                    <strong>1. Website Use:</strong><br />
                    The content provided on <strong>Muusmart.com</strong> is for informational purposes only.
                    You may not copy, reuse, or redistribute any part of this website without permission.
                </p>

                <p>
                    <strong>2. Intellectual Property:</strong><br />
                    All text, logos, visuals, and design elements on the website are owned by <strong>Muusmart</strong> or its licensors.
                    Unauthorized use is strictly prohibited.
                </p>

                <p>
                    <strong>3. Accuracy of Information:</strong><br />
                    We strive to keep the website content accurate and updated.
                    However, we do not guarantee the completeness or reliability of any information presented.
                </p>

                <p>
                    <strong>4. Third-party Links:</strong><br />
                    Our website may contain links to third-party websites.
                    We are not responsible for the content or practices of these external sites.
                </p>

                <p>
                    <strong>5. Changes to the Site:</strong><br />
                    We reserve the right to modify or discontinue any part of this website at any time without notice.
                </p>

                <p>
                    <strong>6. Contact:</strong><br />
                    If you have any questions about the website or these terms, please contact us at:<br />
                    <strong>support@muusmart.com</strong>
                </p>

                <div style={{
                    marginTop: "24px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <button
                        onClick={onAccept}
                        style={{
                            backgroundColor: "#1D3620",
                            color: "#fff",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            width: "100%",
                            maxWidth: "240px"
                        }}
                    >
                        {t('termsModal.accept')}
                    </button>

                    <button
                        onClick={onReject}
                        style={{
                            backgroundColor: "transparent",
                            color: "#1D3620",
                            border: "2px solid #1D3620",
                            padding: "10px 20px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            width: "100%",
                            maxWidth: "240px"
                        }}
                    >
                        {t('consent.reject', { defaultValue: 'Rechazar' })}
                    </button>
                </div>
            </div>
        </div>
    );
};
