import manage1 from "../../../Assets/svg/manage1.svg";
import manage2 from "../../../Assets/svg/manage2.svg";
import manage3 from "../../../Assets/svg/manage3.svg";
import manage4 from "../../../Assets/svg/manage4.svg";
import manage5 from "../../../Assets/svg/manage5.svg";
import manage6 from "../../../Assets/svg/manage6.svg";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import manageThirdImg from "../../../Assets/manageThirdImg.webp";
import manageFourthImg from "../../../Assets/manageFourthImg.webp";
import manageImg4 from "../../../Assets/manageImg4.webp";
import manageImg5 from "../../../Assets/manageImg5.webp";
import icon1 from "../../../Assets/svg/icon1.svg";
import icon2 from "../../../Assets/svg/icon2.svg";

export const list1 = [
  {
    img: manage1,
    title: "Integration",
    paragraf: "",
    displayColor: "none",
    pbold: "bold",
    color: "black",
  },
  {
    img: manage2,
    title: "Subscription",
    paragraf: "Management",
    displayColor: "none",
    pbold: "bold",
    color: "black",
  },
  {
    img: manage3,
    title: "Customer",
    paragraf: "Data Management",
    displayColor: "none",
    pbold: "bold",
    color: "black",
  },
];
export const list2 = [
  {
    img: manage4,
    title: "Customer",
    paragraf: "Self-Service",
    displayColor: "none",
    pbold: "bold",
    color: "black",
  },

  {
    img: manage5,
    title: "Customer",
    paragraf: "Lifecycle Marketing",
    displayColor: "none",
    pbold: "bold",
    color: "black",
  },
  {
    img: manage6,
    title: "Global",
    paragraf: "Compliance",
    displayColor: "none",
    pbold: "bold",
    color: "black",
  },
];

export const cardList1 = [
  {
    title: "Integration",
    paragraf:
      "You can accomplish full integration in a matter of minutes with our ready-to-use connector.",
    p1: "Plug-and-play connector compatible with your existing processes.",
    p2: "Connect customer data to provide a good experience 24/7 on any device.",
    p3: "Increase efficiency, lower costs to custom development and increase renewals.",
    icon1: <CheckCircleIcon />,
    icon2: <CheckCircleIcon />,
    icon3: <CheckCircleIcon />,
    img: manageThirdImg,
  },
];

export const cardList2 = [
  {
    title: "Subscription Management",
    paragraf:
      "Our solutions give you supreme flexibility in configuring and managing your subscription business.",
    p1: "Configure fixed, term, tiered or usage-based pricing or any custom combination.",
    p2: "Manage upgrades/downgrades, cross-sells and promotions.",
    p3: "Offer the most relevant languages, currencies and payment methods.",
    p4: "Leverage automated or manual renewal options.",
    icon1: <CheckCircleIcon />,
    icon2: <CheckCircleIcon />,
    icon3: <CheckCircleIcon />,
    icon4: <CheckCircleIcon />,
    img: manageFourthImg,
  },
];

export const bannerList = [
  {
    leftTitle: "Global Compliance",
    rightTitle: "Customer Lifecycle Marketing",
    leftParagraf:
      "With decades of experience in mitigating risk and maintaining global compliance.",
    rightParagraf:
      "The key to earning customer loyalty is to present them the most relevant content exactly when they need it.",
    leftImg: icon1,
    rightImg: icon2,
    color: "white",
    leftP1:
      "Monitor the changes of regulatory landscape and update the platform.",
    leftP2:
      "Stay compliant with international data protection regulations (like GDPR).",
    leftP3: "Maintain certification with important industry standards.",
    rightP1:
      "Use business logic to define criteria to target customer-specific messaging.",
    rightP2:
      "Deliver a variety of targeted communications via email, banner ads or SMS messages.",
    rightP3: "Connect with customers during subscription events.",
    displayIcon: "none",
  },
];

export const cardList3 = [
  {
    img: manageImg4,
    title: "Customer Data Management",
    paragraf:
      "Every customer interacts with you differently, and you use many different tools to follow their experience.",
    icon1: <CheckCircleIcon />,
    icon2: <CheckCircleIcon />,
    icon3: <CheckCircleIcon />,
    icon4: <CheckCircleIcon />,
    p1: "Identify how and when your customers subscribe.",
    p2: "Track customers as they respond through various marketing channels.",
    p3: "Use customer data to drive your sales and marketing strategies.",
    p4: "Integrate your existing system or rely on our expertise to create a custom solution.",
  },
];
export const cardList4 = [
  {
    img: manageImg5,
    title: "Customer Self-Service",
    paragraf:
      "Allow your customers update their personal, payment and plan information through self-service function.",
    icon1: <CheckCircleIcon />,
    icon2: <CheckCircleIcon />,
    icon3: <CheckCircleIcon />,
    icon4: <CheckCircleIcon />,
    icon5: <CheckCircleIcon />,
    p1: "Update or change personal data",
    p2: "Upgrade or downgrade licenses",
    p3: "Manage renewals",
    p4: "Locate technical support resources",
    p5: "Access purchase history",
  },
];
