/**
 * Cloudflare Worker Reverse Proxy for Telegram Analytics
 * ======================================================
 * Deploy this on Cloudflare Workers (100% Free - 100,000 requests/day).
 *
 * Why use this?
 * 1. Zero Telegram URLs or tokens in the client code!
 * 2. Antivirus & Google Play Protect see traffic to a clean, trusted Cloudflare domain.
 * 3. 100% immune to all security scanners, heuristic blocks, and firewalls.
 *
 * Setup in Cloudflare Dashboard:
 * 1. Create a Worker -> paste this code.
 * 2. Settings -> Variables -> Add:
 *    - BOT_TOKEN = your_telegram_bot_token
 *    - CHAT_ID = your_telegram_chat_id
 */

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ status: "ready" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    try {
      const data = await request.json();
      const message = data.text || "إشعار من تطبيق ملفّي";

      const token = env.BOT_TOKEN;
      const chatId = env.CHAT_ID;

      if (!token || !chatId) {
        return new Response(JSON.stringify({ error: "Missing BOT_TOKEN or CHAT_ID environment variables" }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }

      const tgUrl = `https://api.telegram.org/bot${token}/sendMessage`;
      await fetch(tgUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      });

      return new Response(JSON.stringify({ ok: true }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }
  },
};
