import React, { useRef, useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";

// 🔐 Put your key in .env as REACT_APP_GEMINI_API_KEY
const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

// 🗂 Inline copy of your dnadata.json
const dnadata = {
  dnagoa_broadband_plans: [
    { duration: "1 Month", speed: "100 Mbps", benefits: ["Data limit 500 GB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "Normal Plan", price: "₹677*" },{ label: "1 Month Plan + OTT", price: "₹889*" }], plan_name: "Goa Basic" },
    { duration: "3 Months", speed: "100 Mbps", benefits: ["Data limit 1.50 GB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "Normal Plan", price: "₹1948*" },{ label: "3 Months Plan + OTT", price: "₹2584*" }], plan_name: "Goa Basic" },
    { duration: "6 Months", speed: "100 Mbps", benefits: ["Data limit 3.5 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "Normal Plan", price: "₹3219*" },{ label: "6 Months Plan + OTT", price: "₹4364*" }], plan_name: "Goa Basic" },
    { duration: "12 Months", speed: "100 Mbps", benefits: ["Data limit 8 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "Normal Plan", price: "₹6440*" },{ label: "12 Months Plan + OTT", price: "₹8135*" }], plan_name: "Goa Basic" },
    { duration: "1 Month", speed: "150 Mbps", benefits: ["Data limit 1 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "Normal Plan", price: "₹1016*" },{ label: "1 Month Plan + OTT", price: "₹1270*" }], plan_name: "Goa Standard" },
    { duration: "3 Months", speed: "150 Mbps", benefits: ["Data limit 3 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "Normal Plan", price: "₹3008*" },{ label: "3 Months Plan + OTT", price: "₹3643*" }], plan_name: "Goa Standard" },
    { duration: "6 Months", speed: "150 Mbps", benefits: ["Data limit 7 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "Normal Plan", price: "₹4914*" },{ label: "6 Months Plan + OTT", price: "₹6059*" }], plan_name: "Goa Standard" },
    { duration: "12 Months", speed: "150 Mbps", benefits: ["Data limit 18 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "Normal Plan", price: "₹9830*" },{ label: "12 Months Plan + OTT", price: "₹11524*" }], plan_name: "Goa Standard" },
    { duration: "1 Month", speed: "300 Mbps", benefits: ["Data limit 2 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "Normal Plan", price: "₹1482*" },{ label: "1 Month Plan + OTT", price: "₹1694*" }], plan_name: "Goa Premium" },
    { duration: "3 Months", speed: "300 Mbps", benefits: ["Data limit 6 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "Normal Plan", price: "₹4194*" },{ label: "3 Months Plan + OTT", price: "₹4830*" }], plan_name: "Goa Premium" },
    { duration: "6 Months", speed: "300 Mbps", benefits: ["Data limit 18 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "Normal Plan", price: "₹7287*" },{ label: "6 Months Plan + OTT", price: "₹8431*" }], plan_name: "Goa Premium" },
    { duration: "12 Months", speed: "300 Mbps", benefits: ["Data limit 40 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "Normal Plan", price: "₹14575*" },{ label: "12 Months Plan + OTT", price: "₹16270*" }], plan_name: "Goa Premium" },
    { duration: "1 Month", speed: "500 Mbps", benefits: ["Data limit 4 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "Normal Plan", price: "₹2033*" },{ label: "1 Month Plan + OTT", price: "₹2245*" }], plan_name: "Goa Ultra" },
    { duration: "3 Months", speed: "500 Mbps", benefits: ["Data limit 12 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "Normal Plan", price: "₹5084*" },{ label: "3 Months Plan + OTT", price: "₹5720*" }], plan_name: "Goa Ultra" },
    { duration: "6 Months", speed: "500 Mbps", benefits: ["Data limit 40 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "Normal Plan", price: "₹11313*" },{ label: "6 Months Plan + OTT", price: "₹20338*" }], plan_name: "Goa Ultra" },
    { duration: "12 Months", speed: "500 Mbps", benefits: ["Data limit 90 TB","Post FUP Upto 100 MBPS","20 OTT's and 300 + TV channels"], prices: [{ label: "Normal Plan", price: "₹20338*" },{ label: "12 Months Plan + OTT", price: "₹22033*" }], plan_name: "Goa Ultra" },
    { duration: "1 Month", speed: "1 Gbps", benefits: ["Data limit 6 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "1 Month Plan + OTT", price: "₹3982*" }], plan_name: "Goa Prime" },
    { duration: "3 Months", speed: "1 Gbps", benefits: ["Data limit 25 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "3 Month Plan + OTT", price: "₹11864*" }], plan_name: "Goa Prime" },
    { duration: "6 Months", speed: "1 Gbps", benefits: ["Data limit 70 TB","Post FUP Upto 100 MBPS","Free 20 OTT's and 300 + TV channels*only for new subscribers"], prices: [{ label: "6 Month Plan + OTT", price: "₹19491*" }], plan_name: "Goa Prime" },
    { duration: "12 Months", speed: "1 Gbps", benefits: ["Data limit 150 TB","Post FUP Upto 100 MBPS","20 OTT's and 300 + TV channels"], prices: [{ label: "12 Month Plan + OTT", price: "₹39830*" }], plan_name: "Goa Prime" }
  ],
  enterprise_broadband_plans: [
    { plan_name: "20 Mbps", speed: "20 Mbps", duration: "1 Month", prices: [{ label: "Normal Plan", price: "₹599*" }] },
    { plan_name: "20 Mbps", speed: "20 Mbps", duration: "3 Months", prices: [{ label: "Normal Plan", price: "₹1707*" }] },
    { plan_name: "20 Mbps", speed: "20 Mbps", duration: "6 Months", prices: [{ label: "Normal Plan", price: "₹3307*" }] },
    { plan_name: "20 Mbps", speed: "20 Mbps", duration: "12 Months", prices: [{ label: "Normal Plan", price: "₹6614*" }] },
    { plan_name: "30 Mbps", speed: "30 Mbps", duration: "1 Month", prices: [{ label: "Normal Plan", price: "₹636*" },{ label: "1 Month Plan + OTT", price: "₹848*" }] },
    { plan_name: "30 Mbps", speed: "30 Mbps", duration: "3 Months", prices: [{ label: "Normal Plan", price: "₹1811*" },{ label: "3 Months Plan + OTT", price: "₹2449*" }] },
    { plan_name: "30 Mbps", speed: "30 Mbps", duration: "6 Months", prices: [{ label: "Normal Plan", price: "₹3509*" },{ label: "6 Months Plan + OTT", price: "₹4654*" }] },
    { plan_name: "30 Mbps", speed: "30 Mbps", duration: "12 Months", prices: [{ label: "Normal Plan", price: "₹7018*" },{ label: "12 Months Plan + OTT", price: "₹8713*" }] },
    { plan_name: "40 Mbps", speed: "40 Mbps", duration: "1 Month", prices: [{ label: "Normal Plan", price: "₹718*" },{ label: "1 Month Plan + OTT", price: "₹930*" }] },
    { plan_name: "40 Mbps", speed: "40 Mbps", duration: "3 Months", prices: [{ label: "Normal Plan", price: "₹2046*" },{ label: "3 Months Plan + OTT", price: "₹2796*" }] },
    { plan_name: "40 Mbps", speed: "40 Mbps", duration: "6 Months", prices: [{ label: "Normal Plan", price: "₹3963*" },{ label: "6 Months Plan + OTT", price: "₹5108*" }] },
    { plan_name: "40 Mbps", speed: "40 Mbps", duration: "12 Months", prices: [{ label: "Normal Plan", price: "₹7926*" },{ label: "12 Months Plan + OTT", price: "₹9621*" }] },
    { plan_name: "50 Mbps", speed: "50 Mbps", duration: "1 Month", prices: [{ label: "Normal Plan", price: "₹1099*" },{ label: "1 Month Plan + OTT", price: "₹1311*" }] },
    { plan_name: "50 Mbps", speed: "50 Mbps", duration: "3 Months", prices: [{ label: "Normal Plan", price: "₹3132*" },{ label: "3 Months Plan + OTT", price: "₹3770*" }] },
    { plan_name: "50 Mbps", speed: "50 Mbps", duration: "6 Months", prices: [{ label: "Normal Plan", price: "₹6067*" },{ label: "6 Months Plan + OTT", price: "₹7212*" }] },
    { plan_name: "50 Mbps", speed: "50 Mbps", duration: "12 Months", prices: [{ label: "Normal Plan", price: "₹12134*" },{ label: "12 Months Plan + OTT", price: "₹13829*" }] },
    { plan_name: "75 Mbps", speed: "75 Mbps", duration: "1 Month", prices: [{ label: "Normal Plan", price: "₹1599*" },{ label: "1 Month Plan + OTT", price: "₹1811*" }] },
    { plan_name: "75 Mbps", speed: "75 Mbps", duration: "3 Months", prices: [{ label: "Normal Plan", price: "₹4557*" },{ label: "3 Months Plan + OTT", price: "₹5195*" }] },
    { plan_name: "75 Mbps", speed: "75 Mbps", duration: "6 Months", prices: [{ label: "Normal Plan", price: "₹8827*" },{ label: "6 Months Plan + OTT", price: "₹9972*" }] },
    { plan_name: "75 Mbps", speed: "75 Mbps", duration: "12 Months", prices: [{ label: "Normal Plan", price: "₹17654*" },{ label: "12 Months Plan + OTT", price: "₹19349*" }] },
    { plan_name: "100 Mbps", speed: "100 Mbps", duration: "1 Month", prices: [{ label: "Normal Plan", price: "1999*" },{ label: "1 Month Plan + OTT", price: "2211*" }] },
    { plan_name: "100 Mbps", speed: "100 Mbps", duration: "3 Months", prices: [{ label: "Normal Plan", price: "5697*" },{ label: "3 Months Plan + OTT", price: "6335*" }] },
    { plan_name: "100 Mbps", speed: "100 Mbps", duration: "6 Months", prices: [{ label: "Normal Plan", price: "11034*" },{ label: "6 Months Plan + OTT", price: "12179*" }] },
    { plan_name: "100 Mbps", speed: "100 Mbps", duration: "12 Months", prices: [{ label: "Normal Plan", price: "22068*" },{ label: "12 Months Plan + OTT", price: "23763*" }] }
  ],
  faq_data: {
    faqs: [
      { question: "How to apply for a new broadband connection?", answer: "For a new Broadband Connection, you can call us at 0832-6747575 or contact us here: https://dnagoa.com/contact/" },
      { question: "How do I test my internet speed?", answer: "You can test your Internet Speed by clicking here: https://www.google.com/search?q=internet+speed+test" },
      { question: "Is DNA Goa a secured ISP?", answer: "DNA Goa is a 100% secured internet service provider with the vision of connecting every Goan with high-speed internet." },
      { question: "How to make a payment while applying for a DNA Goa?", answer: "You can pay online by logging in with your registered user id and password on the DNA Broadband internet connection site." },
      { question: "My internet connection is not working?", answer: "If you are having network issues, try resetting your WiFi router. If the problem persists, contact us at 0832-6747575." }
    ],
    common_queries: [
      { question: "Why is my internet slow?", answer: "Check for multiple devices using bandwidth, restart your router, and contact support if the issue persists." },
      { question: "How do I change my WiFi password?", answer: "Login to your router admin page (usually 192.168.0.1 or 192.168.1.1), go to Wireless Settings, and update the password." }
    ],
    router_setup_steps: [
      "Connect the router to power and your modem.",
      "Open a browser and go to the router's admin page (e.g., 192.168.0.1).",
      "Login with default credentials (check router label).",
      "Set up your WiFi name (SSID) and password.",
      "Save settings and restart the router."
    ],
    router_types: [
      { type: "Single-band Router", description: "Supports only 2.4GHz frequency, suitable for basic usage." },
      { type: "Dual-band Router", description: "Supports both 2.4GHz and 5GHz frequencies, better for streaming and gaming." },
      { type: "Mesh Router", description: "Multiple units for whole-home coverage, ideal for large spaces." }
    ]
  },
  terms_and_conditions: [
    "All plans are prepaid in nature.",
    "ONU Security Deposit Rs. 1000/- (Refundable). ONT Device (2 Antenna & 4 Antenna) will be provided on a security deposit of Rs. 2,000/- & Rs. 2,500/- respectively (Refundable).",
    "Package amount is not refundable.",
    "Power supply, LAN & internal concealing of wiring will be taken care of by customers (if required).",
    "Cheque return charges of Rs. 350/- will be applicable for any reason whatsoever.",
    "DNA-GOA will not accept any claims for damage of computer, laptops, television or any other equipment connected to DNA-GOA internet connection due to electrical problems, lightning and other calamities.",
    "All equipment connected in your premises (CPE) (e.g. modem, router, switch, Cat5/Cat6 cable, fiber optic cable) will be the sole property of DNA-GOA and shall be handed over to DNA-GOA in working condition at the time of disconnection. If the same is lost/misplaced/damaged, the customer shall pay an amount of up to Rs. 4500/- towards the cost of the same.",
    "Customers shall carry ONU device (in working condition with power adapter) along with them while shifting to the new location or else Rs. 1,000/- (if ONU), Rs. 4,000/- (if 2 Antenna ONT), Rs. 4,500/- (if 4 Antenna ONT) will be charged against the misplaced/damaged device.",
    "Internet connection is for the use of subscriber who has purchased the connection. Sharing of internet connection is a criminal offense. DNA-GOA will not be responsible for usage of internet service by non-paying users violating the law.",
    "DNA-GOA will not be responsible for purchase of any additional materials (such as Wi-Fi router, extender, etc.) from DNA-GOA employees personally.",
    "Post FUP speeds up to 100 Mbps is applicable over associated servers, otherwise post FUP speeds are capped at 10 Mbps, 15 Mbps, 30 Mbps, 60 Mbps and 90 Mbps respectively.",
    "All devices provided on security deposit are to be returned in working condition along with the respective charger to DNA GOA Head Office. If failed to provide in working condition then security deposit will be adjusted or forfeited.",
    "Refundable deposit will be refunded to the customers upon successful submission of devices in working condition within 15–20 working days.",
    "OTT & TV Channels plans once activated, cannot be transferred, upgraded, or refunded.",
    "2 screens shall be available with our OTT & TV Channels plans (e.g., 2 smartphones / 1 smartphone and 1 smart TV). 3rd device once logged in, 1st device will be logged out automatically.",
    "OTT & TV Channels will be logged in through the registered primary contact number attached with the particular user-id of the DNA GOA account only.",
    "OTT & TV Channels content will be available through Playbox TV APP available on the Play Store and App Store, in collaboration with the DNA GOA user account.",
    "Our OTT & TV Channels plan will give access to 350+ TV channels and 19 OTT platforms, and the company reserves the right to add or delete any OTT service or TV channel without any prior intimation."
  ]
};

// ---------- helper functions ----------
const lc = (v) => (typeof v === "string" ? v.toLowerCase() : "");
const trim = (v) => (typeof v === "string" ? v.trim() : "");
const normSpeed = (txt) => {
  const m = lc(txt).match(/(\d+(?:\.\d+)?)\s*(g|m)bps/);
  if (!m) return null;
  const n = parseFloat(m[1]);
  const unit = m[2].toLowerCase() === "g" ? "Gbps" : "Mbps";
  return unit === "Gbps" ? `${n} Gbps` : `${Math.round(n)} Mbps`;
};

const formatPlanBlock = (plans) => {
  if (!plans?.length) return "";
  const byPlan = plans.reduce((acc, p) => {
    const key = p.plan_name || "Plan";
    acc[key] = acc[key] || [];
    acc[key].push(p);
    return acc;
  }, {});

  let out = "";
  Object.entries(byPlan).forEach(([name, items]) => {
    out += `\n**${name}**:\n`;
    items.forEach((p) => {
      const priceStr = (p.prices || [])
        .map((pr) => `${pr.label}: **${pr.price}**`)
        .join(", ");
      out += `• ${p.duration}: ${priceStr}\n`;
    });
  });
  return out.trim();
};

const localAnswer = (q) => {
  const text = lc(q);

  // 1. Greetings
  if (/^(hi|hello|hey)\b/.test(text)) {
    return "Hi! I’m your Cybersecurity Assistant 🤖 for DNA Goa broadband. Ask me about plans, prices, OTT, enterprise packs, FAQs, router setup, or terms.";
  }

  // 2. App component awareness
  if (text.includes("news") || text.includes("articles") || text.includes("updates")) {
    return "Our website's **NewsSection** provides the latest updates and articles on cybersecurity and industry trends. I recommend checking it out for more information.";
  }
  if (text.includes("threats") || text.includes("cybersecurity") || text.includes("attacks") || text.includes("map") || text.includes("incidents")) {
    return "The **ThreatMap** component on our site shows real-time cyberattack data, helping you visualize global cybersecurity threats.";
  }
  if (text.includes("products") || text.includes("services") || text.includes("features") || text.includes("bento")) {
    return "The **BentoGrid** section showcases our key services and products, presented in a visually appealing grid format.";
  }

  // 3. ENHANCED NLP-LIKE FAQ MATCHING
  const allFaqs = [
    ...(dnadata.faq_data?.faqs || []),
    ...(dnadata.faq_data?.common_queries || [])
  ];
  
  const userWords = text.split(/\s+/).filter(word => word.length > 2);
  
  for (const f of allFaqs) {
    const qstr = lc(f.question || "");
    if (!qstr) continue;

    const faqWords = qstr.split(/\s+/).filter(word => word.length > 2);
    const matchCount = faqWords.filter(word => userWords.includes(word)).length;
    
    const threshold = Math.max(2, Math.floor(faqWords.length / 2));

    if (matchCount >= threshold) {
      return f.answer || "";
    }
  }

  // 4. Specific plan list buttons
  if (text === "home plans") {
      const allHomePlans = dnadata.dnagoa_broadband_plans || [];
      return `Here are all our home broadband plans:\n` + formatPlanBlock(allHomePlans);
  }
  
  if (text === "enterprise plans") {
      const allEnterprisePlans = dnadata.enterprise_broadband_plans || [];
      return `Here are all our enterprise broadband plans:\n` + formatPlanBlock(allEnterprisePlans);
  }

  // 5. Specific keywords
  if (text.includes("terms") || text.includes("conditions")) {
    return "**Terms & Conditions (summary)**:\n" + dnadata.terms_and_conditions.map((t, i) => `${i + 1}. ${t}`).join("\n");
  }

  if (text.includes("router")) {
    const steps = dnadata.faq_data.router_setup_steps || [];
    const types = dnadata.faq_data.router_types || [];
    return (
      "**Router Setup & Info**\n\n**Setup Steps**:\n" +
      steps.map((s, i) => `${i + 1}. ${s}`).join("\n") +
      "\n\n**Router Types**:\n" +
      types.map((t) => `• **${t.type}**: ${t.description}`).join("\n")
    );
  }

  // 6. Plan-specific queries (speed or name)
  const isEnterprise = text.includes("enterprise") || text.includes("business") || text.includes("office");
  const speedWanted = normSpeed(text);
  const planKey = ["basic", "standard", "premium", "ultra", "prime"].find((k) => text.includes(k));

  if (speedWanted) {
    let plans = [];

    if (isEnterprise || ['20 mbps', '30 mbps', '40 mbps', '50 mbps', '75 mbps'].includes(lc(speedWanted))) {
        plans = (dnadata.enterprise_broadband_plans || []).filter((p) => lc(p.speed) === lc(speedWanted));
        if (plans.length > 0) {
            return `Enterprise **${speedWanted}** plans:\n` + formatPlanBlock(plans);
        }
    }
    
    plans = (dnadata.dnagoa_broadband_plans || []).filter((p) => lc(p.speed) === lc(speedWanted));
    if (plans.length > 0) {
        return `Home **${speedWanted}** plans:\n` + formatPlanBlock(plans);
    }
  }

  if (planKey) {
    const nameMap = {
      basic: "Goa Basic",
      standard: "Goa Standard",
      premium: "Goa Premium",
      ultra: "Goa Ultra",
      prime: "Goa Prime"
    };
    const target = nameMap[planKey];
    const plans = (dnadata.dnagoa_broadband_plans || []).filter((p) => lc(p.plan_name) === lc(target));
    if (plans.length) {
      const spds = [...new Set(plans.map((p) => p.speed))].join(", ");
      return `Here are the **${target}** plans (${spds}):\n` + formatPlanBlock(plans);
    }
  }

  // 7. Generic "plans" or "OTT" query (this is now the lowest priority)
  if (text.includes("plan") || text.includes("ott")) {
    const allSpeeds = [
        ...new Set([
            ...(dnadata.dnagoa_broadband_plans || []).map(p => p.speed),
            ...(dnadata.enterprise_broadband_plans || []).map(p => p.speed)
        ])
    ].sort((a, b) => parseFloat(a) - parseFloat(b));

    const quick = allSpeeds
        .map((s) => {
            const items = [
                ...(dnadata.dnagoa_broadband_plans || []),
                ...(dnadata.enterprise_broadband_plans || [])
            ].filter((p) => lc(p.speed) === lc(s));

            if (!items.length) return null;

            const first = items[0];
            const priceExample = first?.prices?.[0]?.price ? ` (from ${first.prices[0].price})` : "";
            return `• ${s}${priceExample}`;
        })
        .filter(Boolean)
        .join("\n");

    return "Popular broadband speeds:\n" + quick + "\n\nAsk me, e.g., '100 mbps plans' or 'Goa Premium'.";
  }

  // No local match
  return null;
};

// ---------- Gemini fallback with context ----------
async function askGemini(userText) {
  const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    return "I couldn’t find a local answer and no Gemini API key is set.";
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;
  
  const prompt = `
    You are a helpful cybersecurity assistant for DNA Goa broadband. Your purpose is to provide accurate and helpful information based on the provided data.

    Here is the complete data about the company's plans, FAQs, and terms:
    \`\`\`json
    ${JSON.stringify(dnadata, null, 2)}
    \`\`\`

    In addition to this data, you are aware of the following components on our website:
    - **BentoGrid**: This section showcases our key services and products.
    - **NewsSection**: This component provides the latest news and articles on cybersecurity.
    - **ThreatMap**: This section visualizes real-time global cybersecurity threats.

    Based on the provided data and your knowledge of the app components, answer the user question. If the answer is not in the data, try to be as helpful as possible without inventing information. For example, if the user asks about general cybersecurity, you can provide a high-level, helpful answer.

    User question: "${userText}"
  `;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      })
    });

    const data = await res.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "Sorry, I couldn't find an answer. Please try rephrasing your question.";

    return reply;
  } catch (err) {
    console.error("Gemini API error:", err);
    return "I’m sorry, but I’m having trouble connecting right now. Please try again later.";
  }
}

// ---------- UI Components (with width change) ----------
function Message({ sender, text }) {
  const isUser = sender === "user";
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 1
      }}
    >
      <Box
        sx={{
          maxWidth: "75%",
          px: 1.5,
          py: 1,
          borderRadius: 2,
          bgcolor: isUser ? "primary.main" : "#333",
          color: isUser ? "primary.contrastText" : "text.primary",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          fontSize: 14,
        }}
      >
        {text}
      </Box>
    </Box>
  );
}

// --- Chatbot component with quick tools and width set to 500 ---
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Cyber Chatbot\nHi! I’m your Cybersecurity Assistant 🤖 for DNA Goa broadband. Ask me anything about our plans, or about the news, threats, and services on our site." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  const quickAsk = (q) => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => send(q), 50);
  };

  const send = async (forced) => {
    const query = trim(forced || input);
    if (!query) return;
    setMessages((m) => [...m, { sender: "user", text: query }]);
    setInput("");
    setLoading(true);

    const local = localAnswer(query);
    if (local) {
      setMessages((m) => [...m, { sender: "bot", text: local }]);
      setLoading(false);
      return;
    }

    const reply = await askGemini(query);
    setMessages((m) => [...m, { sender: "bot", text: reply }]);
    setLoading(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open, loading]);

  return (
    <>
      {!open && (
        <Tooltip title="Chatbot">
          <Fab
            color="secondary"
            sx={{ position: "fixed", bottom: 24, right: 24, zIndex: 1500 }}
            onClick={() => setOpen(true)}
          >
            <SmartToyIcon />
          </Fab>
        </Tooltip>
      )}

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 500, height: "100%", display: "flex", flexDirection: "column", bgcolor: "background.default" }}>
          <Box sx={{ p: 2, bgcolor: "grey.900", color: "white" }}>
            <Typography variant="h6" sx={{ color: "cyan" }}>Cyber Chatbot {GEMINI_API_KEY ? "ON" : "OFF"}</Typography>
          </Box>
          <Divider />
          {/* Quick tools */}
          <Box sx={{ p: 1.5, display: "flex", gap: 1, justifyContent: "center" }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <button
                onClick={() => quickAsk("home plans")}
                style={{
                  padding: "6px 12px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#1976d2",
                  color: "white",
                  fontSize: "0.85rem",
                  cursor: "pointer"
                }}
              >
                Home Plans
              </button>
              <button
                onClick={() => quickAsk("enterprise plans")}
                style={{
                  padding: "6px 12px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#1976d2",
                  color: "white",
                  fontSize: "0.85rem",
                  cursor: "pointer"
                }}
              >
                Enterprise Plans
              </button>
            </Box>
          </Box>
          <Divider />

          {/* Chat messages */}
          <Box
            ref={listRef}
            sx={{
              flex: 1,
              overflowY: "auto",
              p: 2,
              bgcolor: "background.default"
            }}
          >
            {messages.map((m, i) => (
              <Message key={i} sender={m.sender} text={m.text} />
            ))}
            {loading && (
              <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 1 }}>
                <CircularProgress size={20} />
              </Box>
            )}
          </Box>

          <Divider />
          <Box sx={{ p: 1.5, display: "flex", gap: 1 }}>
            <TextField
              size="small"
              fullWidth
              placeholder="Type your message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
            />
            <IconButton color="primary" onClick={() => send()} aria-label="send">
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}