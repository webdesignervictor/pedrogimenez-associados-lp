import Cookies from 'js-cookie';

export const trackLeadCapture = async (leadData) => {
  if (typeof window !== 'undefined') {
    const eventID = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    const fbp = Cookies.get('_fbp');
    const fbc = Cookies.get('_fbc');

    // Disparo GTM Frontend
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'lead_captured',
      event_id: eventID,
      lead_data: { ...leadData, page: window.location.href }
    });

    // Disparo API Conversão Serverless (CAPI)
    try {
        await fetch('/api/conversoes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                ...leadData, event_id: eventID, fbp, fbc, 
                user_agent: navigator.userAgent, url: window.location.href 
            })
        });
    } catch (err) {
        console.error('CAPI Rastreio Erro:', err);
    }
  }
};
