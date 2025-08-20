import React, { useState, useRef, useEffect } from "react";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

// --- Hardcoded dnadata.json ---
const dnadata = { 
  // ⬅️ your full pasted dnadata object here
  
  "dnagoa_broadband_plans": [
    {
      "duration": "1 Month",
      "speed": "100 Mbps",
      "benefits": [
        "Data limit 500 GB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b9677*"
        },
        {
          "label": "1 Month Plan + OTT",
          "price": "\u20b9889*"
        }
      ],
      "plan_name": "Goa Basic"
    },
    {
      "duration": "3 Months",
      "speed": "100 Mbps",
      "benefits": [
        "Data limit 1.50 GB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b91948*"
        },
        {
          "label": "3 Months Plan + OTT",
          "price": "\u20b92584*"
        }
      ],
      "plan_name": "Goa Basic"
    },
    {
      "duration": "6 Months",
      "speed": "100 Mbps",
      "benefits": [
        "Data limit 3.5 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b93219*"
        },
        {
          "label": "6 Months Plan + OTT",
          "price": "\u20b94364*"
        }
      ],
      "plan_name": "Goa Basic"
    },
    {
      "duration": "12 Months",
      "speed": "100 Mbps",
      "benefits": [
        "Data limit 8 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b96440*"
        },
        {
          "label": "12 Months Plan + OTT",
          "price": "\u20b98135*"
        }
      ],
      "plan_name": "Goa Basic"
    },
    {
      "duration": "1 Month",
      "speed": "150 Mbps",
      "benefits": [
        "Data limit 1 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b91016*"
        },
        {
          "label": "1 Month Plan + OTT",
          "price": "\u20b91270*"
        }
      ],
      "plan_name": "Goa Standard"
    },
    {
      "duration": "3 Months",
      "speed": "150 Mbps",
      "benefits": [
        "Data limit 3 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b93008*"
        },
        {
          "label": "3 Months Plan + OTT",
          "price": "\u20b93643*"
        }
      ],
      "plan_name": "Goa Standard"
    },
    {
      "duration": "6 Months",
      "speed": "150 Mbps",
      "benefits": [
        "Data limit 7 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b94914*"
        },
        {
          "label": "6 Months Plan + OTT",
          "price": "\u20b96059*"
        }
      ],
      "plan_name": "Goa Standard"
    },
    {
      "duration": "12 Months",
      "speed": "150 Mbps",
      "benefits": [
        "Data limit 18 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b99830*"
        },
        {
          "label": "12 Months Plan + OTT",
          "price": "\u20b911524*"
        }
      ],
      "plan_name": "Goa Standard"
    },
    {
      "duration": "1 Month",
      "speed": "300 Mbps",
      "benefits": [
        "Data limit 2 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b91482*"
        },
        {
          "label": "1 Month Plan + OTT",
          "price": "\u20b91694*"
        }
      ],
      "plan_name": "Goa Premium"
    },
    {
      "duration": "3 Months",
      "speed": "300 Mbps",
      "benefits": [
        "Data limit 6 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b94194*"
        },
        {
          "label": "3 Months Plan + OTT",
          "price": "\u20b94830*"
        }
      ],
      "plan_name": "Goa Premium"
    },
    {
      "duration": "6 Months",
      "speed": "300 Mbps",
      "benefits": [
        "Data limit 18 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b97287*"
        },
        {
          "label": "6 Months Plan + OTT",
          "price": "\u20b98431*"
        }
      ],
      "plan_name": "Goa Premium"
    },
    {
      "duration": "12 Months",
      "speed": "300 Mbps",
      "benefits": [
        "Data limit 40 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b914575*"
        },
        {
          "label": "12 Months Plan + OTT",
          "price": "\u20b916270*"
        }
      ],
      "plan_name": "Goa Premium"
    },
    {
      "duration": "1 Month",
      "speed": "500 Mbps",
      "benefits": [
        "Data limit 4 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b92033*"
        },
        {
          "label": "1 Month Plan + OTT",
          "price": "\u20b92245*"
        }
      ],
      "plan_name": "Goa Ultra"
    },
    {
      "duration": "3 Months",
      "speed": "500 Mbps",
      "benefits": [
        "Data limit 12 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b95084*"
        },
        {
          "label": "3 Months Plan + OTT",
          "price": "\u20b95720*"
        }
      ],
      "plan_name": "Goa Ultra"
    },
    {
      "duration": "6 Months",
      "speed": "500 Mbps",
      "benefits": [
        "Data limit 40 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b911313*"
        },
        {
          "label": "6 Months Plan + OTT",
          "price": "\u20b920338*"
        }
      ],
      "plan_name": "Goa Ultra"
    },
    {
      "duration": "12 Months",
      "speed": "500 Mbps",
      "benefits": [
        "Data limit 90 TB",
        "Post FUP Upto 100 MBPS",
        "20 OTT's and 300 + TV channels"
      ],
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b920338*"
        },
        {
          "label": "12 Months Plan + OTT",
          "price": "\u20b922033*"
        }
      ],
      "plan_name": "Goa Ultra"
    },
    {
      "duration": "1 Month",
      "speed": "1 Gbps",
      "benefits": [
        "Data limit 6 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "1 Month Plan + OTT",
          "price": "\u20b93982*"
        }
      ],
      "plan_name": "Goa Prime"
    },
    {
      "duration": "3 Months",
      "speed": "1 Gbps",
      "benefits": [
        "Data limit 25 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "3 Month Plan + OTT",
          "price": "\u20b911864*"
        }
      ],
      "plan_name": "Goa Prime"
    },
    {
      "duration": "6 Months",
      "speed": "1 Gbps",
      "benefits": [
        "Data limit 70 TB",
        "Post FUP Upto 100 MBPS",
        "Free 20 OTT's and 300 + TV channels*only for new subscribers"
      ],
      "prices": [
        {
          "label": "6 Month Plan + OTT",
          "price": "\u20b919491*"
        }
      ],
      "plan_name": "Goa Prime"
    },
    {
      "duration": "12 Months",
      "speed": "1 Gbps",
      "benefits": [
        "Data limit 150 TB",
        "Post FUP Upto 100 MBPS",
        "20 OTT's and 300 + TV channels"
      ],
      "prices": [
        {
          "label": "12 Month Plan + OTT",
          "price": "\u20b939830*"
        }
      ],
      "plan_name": "Goa Prime"
    }
  ],
  "enterprise_broadband_plans": [
    {
      "plan_name": "20 Mbps",
      "speed": "20 Mbps",
      "duration": "1 Month",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b9599*"
        }
      ]
    },
    {
      "plan_name": "20 Mbps",
      "speed": "20 Mbps",
      "duration": "3 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b91707*"
        }
      ]
    },
    {
      "plan_name": "20 Mbps",
      "speed": "20 Mbps",
      "duration": "6 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b93307*"
        }
      ]
    },
    {
      "plan_name": "20 Mbps",
      "speed": "20 Mbps",
      "duration": "12 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b96614*"
        }
      ]
    },
    {
      "plan_name": "30 Mbps",
      "speed": "30 Mbps",
      "duration": "1 Month",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b9636*"
        },
        {
          "label": "1 Month Plan + OTT",
          "price": "\u20b9848*"
        }
      ]
    },
    {
      "plan_name": "30 Mbps",
      "speed": "30 Mbps",
      "duration": "3 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b91811*"
        },
        {
          "label": "3 Months Plan + OTT",
          "price": "\u20b92449*"
        }
      ]
    },
    {
      "plan_name": "30 Mbps",
      "speed": "30 Mbps",
      "duration": "6 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b93509*"
        },
        {
          "label": "6 Months Plan + OTT",
          "price": "\u20b94654*"
        }
      ]
    },
    {
      "plan_name": "30 Mbps",
      "speed": "30 Mbps",
      "duration": "12 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b97018*"
        },
        {
          "label": "12 Months Plan + OTT",
          "price": "\u20b98713*"
        }
      ]
    },
    {
      "plan_name": "40 Mbps",
      "speed": "40 Mbps",
      "duration": "1 Month",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b9718*"
        },
        {
          "label": "1 Month Plan + OTT",
          "price": "\u20b9930*"
        }
      ]
    },
    {
      "plan_name": "40 Mbps",
      "speed": "40 Mbps",
      "duration": "3 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b92046*"
        },
        {
          "label": "3 Months Plan + OTT",
          "price": "\u20b92796*"
        }
      ]
    },
    {
      "plan_name": "40 Mbps",
      "speed": "40 Mbps",
      "duration": "6 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b93963*"
        },
        {
          "label": "6 Months Plan + OTT",
          "price": "\u20b95108*"
        }
      ]
    },
    {
      "plan_name": "40 Mbps",
      "speed": "40 Mbps",
      "duration": "12 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b97926*"
        },
        {
          "label": "12 Months Plan + OTT",
          "price": "\u20b99621*"
        }
      ]
    },
    {
      "plan_name": "50 Mbps",
      "speed": "50 Mbps",
      "duration": "1 Month",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b91099*"
        },
        {
          "label": "1 Month Plan + OTT",
          "price": "\u20b91311*"
        }
      ]
    },
    {
      "plan_name": "50 Mbps",
      "speed": "50 Mbps",
      "duration": "3 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b93132*"
        },
        {
          "label": "3 Months Plan + OTT",
          "price": "\u20b93770*"
        }
      ]
    },
    {
      "plan_name": "50 Mbps",
      "speed": "50 Mbps",
      "duration": "6 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b96067*"
        },
        {
          "label": "6 Months Plan + OTT",
          "price": "\u20b97212*"
        }
      ]
    },
    {
      "plan_name": "50 Mbps",
      "speed": "50 Mbps",
      "duration": "12 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b912134*"
        },
        {
          "label": "12 Months Plan + OTT",
          "price": "\u20b913829*"
        }
      ]
    },
    {
      "plan_name": "75 Mbps",
      "speed": "75 Mbps",
      "duration": "1 Month",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b91599*"
        },
        {
          "label": "1 Month Plan + OTT",
          "price": "\u20b91811*"
        }
      ]
    },
    {
      "plan_name": "75 Mbps",
      "speed": "75 Mbps",
      "duration": "3 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b94557*"
        },
        {
          "label": "3 Months Plan + OTT",
          "price": "\u20b95195*"
        }
      ]
    },
    {
      "plan_name": "75 Mbps",
      "speed": "75 Mbps",
      "duration": "6 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b98827*"
        },
        {
          "label": "6 Months Plan + OTT",
          "price": "\u20b99972*"
        }
      ]
    },
    {
      "plan_name": "75 Mbps",
      "speed": "75 Mbps",
      "duration": "12 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "\u20b917654*"
        },
        {
          "label": "12 Months Plan + OTT",
          "price": "\u20b919349*"
        }
      ]
    },
    {
      "plan_name": "100 Mbps",
      "speed": "100 Mbps",
      "duration": "1 Month",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "1999*"
        },
        {
          "label": "1 Month Plan + OTT",
          "price": "2211*"
        }
      ]
    },
    {
      "plan_name": "100 Mbps",
      "speed": "100 Mbps",
      "duration": "3 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "5697*"
        },
        {
          "label": "3 Months Plan + OTT",
          "price": "6335*"
        }
      ]
    },
    {
      "plan_name": "100 Mbps",
      "speed": "100 Mbps",
      "duration": "6 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "11034*"
        },
        {
          "label": "6 Months Plan + OTT",
          "price": "12179*"
        }
      ]
    },
    {
      "plan_name": "100 Mbps",
      "speed": "100 Mbps",
      "duration": "12 Months",
      "prices": [
        {
          "label": "Normal Plan",
          "price": "22068*"
        },
        {
          "label": "12 Months Plan + OTT",
          "price": "23763*"
        }
      ]
    }
  ],
  "faq_data": {
    "faqs": [
      {
        "question": "How to apply for a new broadband connection?",
        "answer": "For a new Broadband Connection, you can call us at 0832-6747575 or contact us here: https://dnagoa.com/contact/"
      },
      {
        "question": "How do I test my internet speed?",
        "answer": "You can test your Internet Speed by clicking here: https://www.google.com/search?q=internet+speed+test"
      },
      {
        "question": "Is DNA Goa a secured ISP?",
        "answer": "DNA Goa is a 100% secured internet service provider with the vision of connecting every Goan with high-speed internet."
      },
      {
        "question": "How to make a payment while applying for a DNA Goa?",
        "answer": "You can pay online by logging in with your registered user id and password on the DNA Broadband internet connection site."
      },
      {
        "question": "My internet connection is not working?",
        "answer": "If you are having network issues, try resetting your WiFi router. If the problem persists, contact us at 0832-6747575."
      }
    ],
    "common_queries": [
      {
        "question": "Why is my internet slow?",
        "answer": "Check for multiple devices using bandwidth, restart your router, and contact support if the issue persists."
      },
      {
        "question": "How do I change my WiFi password?",
        "answer": "Login to your router admin page (usually 192.168.0.1 or 192.168.1.1), go to Wireless Settings, and update the password."
      }
    ],
    "router_setup_steps": [
      "Connect the router to power and your modem.",
      "Open a browser and go to the router's admin page (e.g., 192.168.0.1).",
      "Login with default credentials (check router label).",
      "Set up your WiFi name (SSID) and password.",
      "Save settings and restart the router."
    ],
    "router_types": [
      {
        "type": "Single-band Router",
        "description": "Supports only 2.4GHz frequency, suitable for basic usage."
      },
      {
        "type": "Dual-band Router",
        "description": "Supports both 2.4GHz and 5GHz frequencies, better for streaming and gaming."
      },
      {
        "type": "Mesh Router",
        "description": "Multiple units for whole-home coverage, ideal for large spaces."
      }
    ]
  },
  "terms_and_conditions": [
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
    "Refundable deposit will be refunded to the customers upon successful submission of devices in working condition within 15\u201320 working days.",
    "OTT & TV Channels plans once activated, cannot be transferred, upgraded, or refunded.",
    "2 screens shall be available with our OTT & TV Channels plans (e.g., 2 smartphones / 1 smartphone and 1 smart TV). 3rd device once logged in, 1st device will be logged out automatically.",
    "OTT & TV Channels will be logged in through the registered primary contact number attached with the particular user-id of the DNA GOA account only.",
    "OTT & TV Channels content will be available through Playbox TV APP available on the Play Store and App Store, in collaboration with the DNA GOA user account.",
    "Our OTT & TV Channels plan will give access to 350+ TV channels and 19 OTT platforms, and the company reserves the right to add or delete any OTT service or TV channel without any prior intimation."
  ]

};

// --- Simple NLP helper ---
function textSimilarity(a, b) {
  const wordsA = a.toLowerCase().split(/\W+/).filter(Boolean);
  const wordsB = b.toLowerCase().split(/\W+/).filter(Boolean);
  if (!wordsA.length || !wordsB.length) return 0;
  const setA = new Set(wordsA);
  const setB = new Set(wordsB);
  const intersection = [...setA].filter((w) => setB.has(w));
  return intersection.length / Math.max(setA.size, setB.size);
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I'm your DNA Goa Assistant.\nChoose a quick option below or type your question.",
    },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (textOverride) => {
    const query = textOverride || input;
    if (!query.trim()) return;

    const userMessage = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // 🔎 Step 1: Search locally
    const localAnswer = searchLocalData(query);
    if (localAnswer) {
      setMessages((prev) => [...prev, { sender: "bot", text: localAnswer }]);
      return;
    }

    // 🌐 Step 2: Fallback Gemini
    const geminiAnswer = await callGeminiAPI(query);
    setMessages((prev) => [...prev, { sender: "bot", text: geminiAnswer }]);
  };

  // --- Search local data ---
  // --- smart search for dnadata ---
const searchLocalData = (query) => {
  if (!dnadata) return null;
  const lowerQ = query.toLowerCase();

  // 🎯 Shortcut matching
  if (lowerQ.includes("home") || lowerQ.includes("broadband") || lowerQ.includes("goa plan")) {
    return dnadata.dnagoa_broadband_plans
      .map((p) =>
        `📶 ${p.plan_name} (${p.duration}) - ${p.speed}\n💡 ${p.benefits.join(
          ", "
        )}\n💰 ${p.prices.map((pr) => `${pr.label}: ${pr.price}`).join(" | ")}`
      )
      .join("\n\n");
  }

  if (lowerQ.includes("enterprise")) {
    return dnadata.enterprise_broadband_plans
      .map(
        (p) =>
          `🏢 ${p.plan_name} (${p.duration}) - ${p.speed}\n💰 ${p.prices
            .map((pr) => `${pr.label}: ${pr.price}`)
            .join(" | ")}`
      )
      .join("\n\n");
  }

  if (lowerQ.includes("faq") || lowerQ.includes("question")) {
    return dnadata.faq_data.faqs
      .map((f) => `❓ ${f.question}\n➡️ ${f.answer}`)
      .join("\n\n");
  }

  if (lowerQ.includes("router setup")) {
    return dnadata.faq_data.router_setup_steps
      .map((s, i) => `${i + 1}. ${s}`)
      .join("\n");
  }

  if (lowerQ.includes("router type")) {
    return dnadata.faq_data.router_types
      .map((r) => `📡 ${r.type}: ${r.description}`)
      .join("\n\n");
  }

  if (lowerQ.includes("terms")) {
    return dnadata.terms_and_conditions.map((t, i) => `${i + 1}. ${t}`).join("\n\n");
  }

  // 🔍 Fuzzy NLP search across FAQs + common queries
  const sections = [];
  dnadata.faq_data.faqs.forEach((f) =>
    sections.push({ title: f.question, desc: f.answer })
  );
  dnadata.faq_data.common_queries.forEach((f) =>
    sections.push({ title: f.question, desc: f.answer })
  );

  let bestMatch = null;
  let bestScore = 0;
  sections.forEach((item) => {
    const score =
      textSimilarity(query, item.title) + textSimilarity(query, item.desc);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  });

  if (bestScore > 0.2 && bestMatch) {
    return `❓ ${bestMatch.title}\n➡️ ${bestMatch.desc}`;
  }

  return null; // nothing found → Gemini fallback
};


  // --- Gemini API ---
  const callGeminiAPI = async (query) => {
    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": process.env.REACT_APP_GEMINI_API_KEY,
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: query }] }],
          }),
        }
      );
      const data = await res.json();
      return (
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn’t find an answer."
      );
    } catch (err) {
      return "⚠️ Error connecting to Gemini API.";
    }
  };

  // --- Quick Replies ---
  const quickReplies = [
    { label: "🏠 Home Plans", query: "Show me home broadband plans" },
    { label: "🏢 Enterprise Plans", query: "Show me enterprise plans" },
    { label: "❓ FAQs", query: "Show me FAQs" },
    { label: "📶 Router Setup", query: "How to setup my router?" },
    { label: "📜 Terms", query: "Show me terms and conditions" },
  ];

  return (
    <>
      <Tooltip title="Chatbot">
        <Fab
          color="secondary"
          sx={{ position: "fixed", bottom: 24, right: 24, zIndex: 1500 }}
          onClick={() => setOpen(true)}
        >
          <SmartToyIcon />
        </Fab>
      </Tooltip>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 380,
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            bgcolor: "background.default",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, color: "" }}>
            DNABOT
          </Typography>

          {/* Chat window */}
          <Paper
            ref={chatRef}
            elevation={3}
            sx={{
              flex: 1,
              overflowY: "auto",
              bgcolor: "background.deafult",
              borderRadius: 2,
              p: 2,
              mb: 1.5,
            }}
          >
            {messages.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    px: 1.5,
                    py: 1,
                    borderRadius: 2,
                    maxWidth: "75%",
                    color: "#fff",
                    bgcolor: msg.sender === "user" ? "#45a29e" : "#66fcf1",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ whiteSpace: "pre-line", color: "#000" }}
                  >
                    {msg.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Paper>

          {/* Quick Replies */}
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
            {quickReplies.map((qr, idx) => (
              <Chip
                key={idx}
                label={qr.label}
                onClick={() => handleSend(qr.query)}
                sx={{
                  bgcolor: "#45a29e",
                  color: "#fff",
                  "&:hover": { bgcolor: "#66fcf1", color: "#000" },
                }}
              />
            ))}
          </Box>

          {/* Input */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your question..."
              sx={{
                input: { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#45a29e" },
                  "&:hover fieldset": { borderColor: "#66fcf1" },
                },
              }}
            />
            <Button
              variant="contained"
              onClick={() => handleSend()}
              sx={{ bgcolor: "#45a29e", "&:hover": { bgcolor: "#66fcf1" } }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Chatbot;
