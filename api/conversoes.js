import bizSdk from 'facebook-nodejs-business-sdk';
const { EventRequest, UserData, ServerEvent } = bizSdk;

const access_token = process.env.FB_ACCESS_TOKEN;
const pixel_id = process.env.FB_PIXEL_ID;
bizSdk.FacebookAdsApi.init(access_token);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    const { email, event_id, fbp, fbc, user_agent, url } = req.body;
    const client_ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress;

    const userData = (new UserData())
      .setEmail(email)
      .setClientIpAddress(client_ip)
      .setClientUserAgent(user_agent);

    if (fbp) userData.setFbp(fbp);
    if (fbc) userData.setFbc(fbc);

    const serverEvent = (new ServerEvent())
      .setEventName('Lead')
      .setEventTime(Math.floor(Date.now() / 1000))
      .setUserData(userData)
      .setEventId(event_id)
      .setEventSourceUrl(url)
      .setActionSource('website');

    const eventRequest = (new EventRequest(access_token, pixel_id)).setEvents([serverEvent]);
    const response = await eventRequest.execute();
    return res.status(200).json({ success: true, response });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
